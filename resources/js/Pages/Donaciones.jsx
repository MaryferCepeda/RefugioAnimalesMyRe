import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/react";
import "../../css/Donaciones.css";

const MERCADO_PAGO_PUBLIC_KEY = "TEST-bfbe314b-07dd-46da-80aa-2af56f5511e3";

function Donaciones() {
    const [indiceHistoria, setIndiceHistoria] = useState(0);
    const [mostrarAdvertencia, setMostrarAdvertencia] = useState(true);
    const [amount, setAmount] = useState("");

    const historias = [
        "Historia 1: Un cachorro encontró un hogar amoroso.",
        "Historia 2: Rescatamos a un gato herido y ahora está sano.",
        "Historia 3: Una familia adoptó dos perritos hermanos.",
        "Historia 4: Logramos reunir a una mascota perdida con su dueño.",
    ];

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceHistoria((prevIndice) => (prevIndice + 1) % historias.length);
        }, 4000);

        return () => clearInterval(intervalo);
    }, [historias.length]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.mp = new window.MercadoPago(MERCADO_PAGO_PUBLIC_KEY, {
                locale: "es-MX",
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleDonate = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/create-preference", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                },
                body: JSON.stringify({
                    title: "Donación",
                    description: "Ayuda para el refugio de mascotas",
                    unit_price: parseFloat(amount),
                }),
            });

            if (!response.ok) {
                throw new Error("Error al crear la preferencia de pago");
            }

            const data = await response.json();
            window.location.href = data.init_point; // Redirige al checkout de Mercado Pago
        } catch (error) {
            console.error("Error al crear la preferencia de pago:", error);
        }
    };

    return (
        <div>
            {mostrarAdvertencia && (
                <div className="advertencia">
                    <p>PÁGINA PARA FINES PRÁCTICOS.</p>
                    <button onClick={() => setMostrarAdvertencia(false)}>Aceptar</button>
                </div>
            )}

            <Head title={"Peluditos | Gracias por apoyar"} />
            <header>
                <div className="header-Izquierda">
                    <a href="/">
                        <img
                            className="logo"
                            src="/Imagenes/logo.png"
                            alt="Logo de la página"
                        />
                    </a>
                    <h1>Peluditos</h1>
                </div>
                <div className="header-Derecha">
                    <a
                        href="https://github.com/MaryferCepeda/RefugioAnimalesMyRe.git"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/Imagenes/Githud.png"
                            alt="GitHub"
                            title={"GitHub"}
                        />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/Imagenes/facebook.png"
                            alt="Facebook"
                            title={"Facebook"}
                        />
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/Imagenes/youtube.png"
                            alt="YouTube"
                            title={"YouTube"}
                        />
                    </a>
                </div>
                <nav>
                    <Link href="/" title="Este es el menú principal">
                        Inicio
                    </Link>
                    <Link href="/Nosotros" title="Conócenos">
                        Nosotros
                    </Link>
                    <div className="dropdown">
                        <Link href="#" className="dropbtn">
                            Formas de Apoyo
                        </Link>
                        <div className="dropdown-content">
                            <Link href="/Donar">Donativos</Link>
                            <Link href="/Productos">Productos</Link>
                        </div>
                    </div>
                    <Link href="/Contactanos" title="Contáctanos para cualquier aclaración">
                        Contáctanos
                    </Link>
                    <Link href="register" title="Iniciar Sesión">
                        Inicio de Sesión
                    </Link>
                </nav>
            </header>

            <main>
                <h2>Historias de Éxito</h2>
                <div className="carrusel">
                    <p>{historias[indiceHistoria]}</p>
                </div>

                <div className="donation-container">
                    <h1>Donar Dinero</h1>
                    <form onSubmit={handleDonate}>
                        <label htmlFor="donation-amount">Monto de la donación</label>
                        <input
                            type="number"
                            id="donation-amount"
                            name="donation_amount"
                            placeholder="Ingresa el monto"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                        <button type="submit">Donar</button>
                    </form>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Refugio de Mascotas. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Donaciones;

