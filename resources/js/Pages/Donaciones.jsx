import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Head } from "@inertiajs/react";
import '../../css/Donaciones.css';

function Donaciones() {
    const [indiceHistoria, setIndiceHistoria] = useState(0);
    const [mostrarAdvertencia, setMostrarAdvertencia] = useState(true); // Estado para controlar la advertencia

    const historias = [
        'Historia 1: Un cachorro encontró un hogar amoroso.',
        'Historia 2: Rescatamos a un gato herido y ahora está sano.',
        'Historia 3: Una familia adoptó dos perritos hermanos.',
        'Historia 4: Logramos reunir a una mascota perdida con su dueño.',
    ];

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceHistoria((prevIndice) => (prevIndice + 1) % historias.length);
        }, 4000); // Cambia de historia cada 4 segundos

        return () => clearInterval(intervalo); // Limpia el intervalo al desmontar el componente
    }, [historias.length]);

    return (
        <div>
            {/* Mensaje de advertencia */}
            {mostrarAdvertencia && (
                <div className="advertencia">
                    <p>PAGINA PARA FINES PRACTICOS.</p>
                    <button onClick={() => setMostrarAdvertencia(false)}>Aceptar</button>
                </div>
            )}

            <Head title={"Peluditos| Gracias por apoyar"}/>
            <header>
                <div className="header-Izquierda">
                    <a href="/">
                        <img className="logo" src="/Imagenes/logo.png" alt="Logo de la página"/>
                    </a>
                    <h1>Peluditos</h1>
                </div>
                <div className="header-Derecha">
                    <a href="https://github.com/MaryferCepeda/RefugioAnimalesMyRe.git" target="_blank" rel="noopener noreferrer">
                        <img src="/Imagenes/Githud.png" alt="GitHub" title={"GitHub"} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/Imagenes/facebook.png" alt="Facebook" title={"Facebook"} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="/Imagenes/youtube.png" alt="YouTube" title={"YouTube"} />
                    </a>
                </div>
                <nav>
                    <Link href="/" title="Este es el menu principal">Inicio</Link>
                    <Link href="/Nosotros" title="Conócenos">Nosotros</Link>
                    <div className="dropdown">
                        <Link href="#" className="dropbtn">Formas de Apoyo</Link>
                        <div className="dropdown-content">
                            <Link href="/Donar">Donativos</Link>
                            <Link href="/Productos">Productos</Link>
                        </div>
                    </div>
                    <Link href="/Contactanos" title="Contáctanos para cualquier aclaración">Contáctanos</Link>
                    <Link href="register" title="Iniciar Sesión">Inicio de Sesión</Link>
                </nav>
            </header>

            <main>
                <h2>Historias de Éxito</h2>
                <div className="carrusel">
                    <p>{historias[indiceHistoria]}</p>
                </div>

                <div className="donation-container">
                    <h1>Donar Dinero</h1>
                    <form action="{{ route('donations.store') }}" method="POST">
                        <label htmlFor="donation-amount">Monto de la donación</label>
                        <input
                            type="number"
                            id="donation-amount"
                            name="donation_amount"
                            placeholder="Ingresa el monto"
                            required
                        />
                        <label htmlFor="payment-method">Método de pago</label>
                        <select id="payment-method" name="payment_method" required>
                            <option value="" disabled selected>
                                Selecciona un método
                            </option>
                            <option value="credit-card">Tarjeta de crédito</option>
                            <option value="paypal">PayPal</option>
                            <option value="bank-transfer">Transferencia bancaria</option>
                        </select>
                        <button type="submit">Donar</button>
                    </form>
                </div>
            </main>

            <footer>
                <p>
                    &copy; 2024 Refugio de Mascotas. Todos los derechos reservados.
                </p>
            </footer>
        </div>
    );
}

export default Donaciones;
