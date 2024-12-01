import { Link } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import "../../css/Donaciones.css";

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
        // Cargar el SDK de PayPal
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=A&components=buttons&locale=es_ES"; 
        script.async = true;
        script.onload = () => {
            console.log("PayPal SDK cargado");

            // Verificar si PayPal está disponible
            if (window.paypal) {
                window.paypal.Buttons({
                    createOrder: function (data, actions) {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: amount || "10.00", 
                                    },
                                },
                            ],
                        });
                    },
                    onApprove: function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            alert("Pago completado por " + details.payer.name.given_name);
                        });
                    },
                }).render("#paypal-button"); 
            }
        };

        // Agregar el script al body
        document.body.appendChild(script);

        // Limpiar cuando el componente se desmonte
        return () => {
            document.body.removeChild(script);
        };
    }, [amount]); // Re-renderiza cada vez que el monto cambia

    const handleDonate = (e) => {
        e.preventDefault();
        alert(`Donación de ${amount} recibida. ¡Gracias por tu apoyo!`);
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

                    {/* Renderizar el botón de PayPal */}
                    <div id="paypal-button"></div>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Refugio de Mascotas. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Donaciones;
