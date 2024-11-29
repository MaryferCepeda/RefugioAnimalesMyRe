import React from 'react';
import '../../css/Contactanos.css';
import { Link } from '@inertiajs/inertia-react';

function Contactanos() {
    return (
        <div>
            <header>
                <div className="header-Izquierda">
                    <a href="/">
                        <img
                            className="logo"
                            src="https://cdn-icons-png.flaticon.com/512/5904/5904059.png"
                            alt="Logo de la página"
                        />
                    </a>
                    <h1>Refugio de Animales</h1>
                </div>
                <div className="header-Derecha">
                    <a href="https://github.com/MaryferCepeda/RefugioAnimalesMyRe.git" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                            alt="GitHub"
                            title="GitHub"
                        />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.icons8.com/m_rounded/512/FFFFFF/facebook-new.png"
                            alt="Facebook"
                            title="Facebook"
                        />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/733/733646.png"
                            alt="YouTube"
                            title="YouTube"
                        />
                    </a>
                </div>
                <nav>
                    <Link href="/" title="Este es el menu principal">Inicio</Link>
                    <Link href="/Nosotros" title="Conócenos">Nosotros</Link>
                    <div className="dropdown">
                        <Link href="#" className="dropbtn">Formas de Apoyo</Link>
                        <div className="dropdown-content">
                            <Link href="#">Donativos</Link>
                            <Link href="/Productos">Productos</Link>
                        </div>
                    </div>
                    <Link href="/Contactanos" title="Contáctanos para cualquier aclaración">Contáctanos</Link>
                    <Link href="register" title="Iniciar Sesión">Inicio de Sesión</Link>
                </nav>
            </header>
            <main className="FondoNegro">
                <div className="caja">
                    <div className="texto-izquierda">
                        <strong className="titulo-fundacion">TE INVITAMOS A NUESTRA FUNDACIÓN</strong><br />
                        <span className="llamada-accion">Ven a visitarnos</span><br />
                        <strong className="ubicacion-resaltada">Instituto Tecnológico de Iztapalapa</strong><br />
                        <em className="horario-visitas">Horario de visitas: 10:30am a 3:30pm</em><br /><br />
                        <p className="texto-limpio">Te invitamos todos los fines de semana a visitarnos y darle amor a nuestros peluditos.
                            Ven a pasearlos, bañarlos y jugar con ellos.
                        </p>
                        <br />
                        <span className="redes-sociales">Síguenos en nuestras redes sociales para conocer sobre los eventos y noticias relacionados con la fundación.</span>
                        <br />
                        <strong className="correo-contacto">refugiopatasparriba@gmail.com</strong><br />
                    </div>
                    <div className="instagram-container">
                        <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DC0NAKtvVu2/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14">
                            <div>...</div>
                        </blockquote>
                        <script async src="//www.instagram.com/embed.js"></script>
                    </div>
                </div>
                <div className="caja mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1881.8710706207798!2d-99.0529122!3d19.3803148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd0614558e4b%3A0x3760847a107a0b9f!2sInstituto%20Tecnol%C3%B3gico%20de%20Iztapalapa!5e0!3m2!1sen!2smx!4v1732593902123!5m2!1sen!2smx"
                            width="900" height="300" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </main>
            <footer>
                <p>&copy; <span>2024 Peluditos Refugio de Mascotas.</span> Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default Contactanos;
