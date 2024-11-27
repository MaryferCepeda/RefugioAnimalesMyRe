import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Head } from "@inertiajs/react";
import '../../css/PaginaInicial.css';

// Componente de ventana flotante
const FloatingWindow = ({ message, onClose }) => {
    return (
        <div style={styles.overlay}>
            <div style={styles.window}>
                <div style={styles.header}>
                    <span>Mensaje</span>
                    <button onClick={onClose} style={styles.closeButton}>X</button>
                </div>
                <div style={styles.body}>
                    {message}
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Fondo oscuro semitransparente
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    window: {
        backgroundColor: 'white',
        border: '1px solid #ccc',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        padding: '20px',
        width: '300px',
        borderRadius: '8px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    closeButton: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
    body: {
        marginTop: '10px',
        color: 'black',                // Cambia el color del texto a negro
        fontFamily: "'Arial', sans-serif", // Aplica la fuente 'Arial'
        lineHeight: '1.6',               // Aplica el line-height de 1.6
    }
};

function PaginaInicial() {
    const [showWindow, setShowWindow] = useState(true);

    const closeWindow = () => setShowWindow(false);

    return (
        <div>
            <Head title={'Peluditos'} />
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
                    <a href="https://github.com/MaryferCepeda/RefugioAnimalesMyRe.git" target="_blank"
                       rel="noopener noreferrer">
                        <img
                            src="/Imagenes/Githud.png"
                            alt="GitHub"
                            title={"GitHub"}
                        />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/Imagenes/facebook.png"
                            alt="Facebook"
                            title={"Facebook"}
                        />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/Imagenes/youtube.png"
                            alt="YouTube"
                            title={"YouTube"}
                        />
                    </a>
                </div>
                <nav>
                    <Link href="/" title="Este es el menu principal">Inicio</Link>
                    <Link href="/Nosotros" title="Conócenos">Nosotros</Link>
                    <div className="dropdown">
                        <Link href="#" className="dropbtn">
                            Formas de Apoyo
                        </Link>
                        <div className="dropdown-content">
                            <Link href="#">Donativos</Link>
                            <Link href="/Productos">Productos</Link>
                        </div>
                    </div>
                    <Link href="/Contactanos" title="Contáctanos para cualquier aclaración">
                        Contáctanos
                    </Link>
                    <Link href="register" title="Iniciar Sesión">Inicio de Sesión</Link>
                </nav>
            </header>

            <main className="fondo-negro">
                <section className="historia">
                    <div className="imagen-container">
                        <img
                            className="mascota-imagen"
                            src="/Imagenes/Gato_inicio.webp"
                            alt="Imagen del gato Miau"
                        />
                    </div>
                    <div className="descripcion-container">
                        <h2>La Historia de Miau</h2>
                        <p>
                            Miau era un pequeño gatito encontrado en las calles, solo y asustado. Un buen samaritano lo
                            llevó al refugio, donde recibió atención médica y mucha dedicación. Aunque estaba tímido al
                            principio, pronto comenzó a jugar y a confiar en las personas.
                        </p>
                        <p>
                            Un día, una familia lo vio y supo que Miau era el gatito perfecto para ellos. Ahora, Miau
                            vive feliz en su nuevo hogar, rodeado de amor y cuidado.
                        </p>
                        <p>
                            ¿Estás listo para darle una oportunidad?
                        </p>
                        <button className="btn-conocer">
                            <a href="#">CONOCER MÁS</a>
                        </button>
                    </div>
                </section>
            </main>

            <div className="Body2">
                <section className="intro">
                    <p className="Parrafos">
                        En <strong>Refugio Esperanza</strong>, nuestra misión es brindar una segunda oportunidad a los
                        animales
                        que necesitan un hogar lleno de amor.
                    </p>
                    <ul>
                        <li> Rescatar a perros y gatos abandonados.</li>
                        <li> Cuidar de su salud y bienestar.</li>
                        <li> Encontrar familias amorosas que les ofrezcan un futuro lleno de felicidad.</li>
                    </ul>
                    <p className="Parrafos">
                        <strong>¡Adopta y transforma una vida para siempre!</strong> Aquí encontrarás a muchos amigos
                        peludos
                        esperando ser parte de una familia. Ven a conocernos y únete a nuestra misión de amor.
                    </p>
                </section>

                <section className="impact">
                    <h2> Nuestro Impacto en Números </h2>
                    <p className="Parrafos"><strong>+950 vidas rescatadas.</strong></p>
                    <p className="Parrafos">
                        Muchos de ellos ya tienen un hogar lleno de amor. Otros nos enseñan diariamente la importancia
                        de la
                        perseverancia y la gratitud. Algunos, aunque ya no están con nosotros, nos dejaron la
                        satisfacción de
                        haberles mostrado la bondad humana.
                    </p>
                    <p className="Parrafos">Hacemos la diferencia en la vida de aquellos que el destino pone en nuestro
                        camino.</p>
                </section>

                <section className="problem">
                    <h2> El Problema que Enfrentamos</h2>
                    <p className="Parrafos">Miles de perros y gatos:</p>
                    <ul>
                        <li>Vagan solos por las calles de México, abandonados y en peligro.</li>
                        <li>Sufren de maltrato incluso en sus propios hogares.</li>
                    </ul>
                    <h3>¿Por qué ocurre esto?</h3>
                    <p className="Parrafos">
                        La falta de responsabilidad y educación de algunos dueños ha generado una crisis nacional que
                        afecta el
                        bienestar animal, la salud pública y la sociedad en general.
                    </p>
                </section>

                <section className="solution">
                    <h2> Nuestra Solución y Compromiso</h2>
                    <p className="Parrafos">
                        En <strong>Refugio Esperanza</strong>, nos comprometemos a ser la voz de los que no pueden
                        hablar:
                    </p>
                    <ul>
                        <li>Rescatamos y rehabilitamos animales en situación vulnerable.</li>
                        <li>Promovemos la adopción responsable y educamos sobre el cuidado animal.</li>
                        <li>Abogamos por leyes más estrictas contra el abandono y maltrato.</li>
                        <li>Fomentamos un mundo donde cada animal viva con dignidad y respeto.</li>
                    </ul>
                </section>

                <section className="cta">
                    <h2> ¿Cómo Puedes Ayudar?</h2>
                    <ul>
                        <li><strong>Adopta:</strong> Dale un hogar a un peludo que lo necesita.</li>
                        <li><strong>Dona:</strong> Cada contribución nos permite salvar más vidas.</li>
                        <li><strong>Sé voluntario:</strong> Ayúdanos con tu tiempo y habilidades.</li>
                        <li><strong>Comparte:</strong> Difunde nuestra misión y llega a más corazones.</li>
                    </ul>
                    <p className="Parrafos"><strong>¡Únete a nuestra familia!</strong> Juntos podemos cambiar vidas y
                        crear
                        un mundo más
                        amable para
                        nuestros amigos peludos.</p>
                </section>
            </div>
            <footer>
                <p>&copy; 2024 Peluditos Refugio de Mascotas. Todos los derechos reservados.</p>
            </footer>

            {showWindow && <FloatingWindow message="¡Bienvenido a Refugio Esperanza! Estamos felices de que nos visites. Pero recuerda que esta pagina fue creada con fines educativos. No nos deposites ni un peso ;)" onClose={closeWindow} />}
        </div>
    );
}

export default PaginaInicial;
