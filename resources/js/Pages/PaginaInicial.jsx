import React from 'react';
import '../../css/PaginaInicial.css';
import { Link } from '@inertiajs/inertia-react';
import {Head} from "@inertiajs/react";

function PaginaInicial() {
    return (
        <div>
            <Head title={'Peluditos'}/>
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
                            title={"GitHub"}
                        />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.icons8.com/m_rounded/512/FFFFFF/facebook-new.png"
                            alt="Facebook"
                            title={"Facebook"}
                        />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/733/733646.png"
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

            <main className="FondoNegro">
                <section className="Historia1">
                    <img className="MacotaUno"
                         src="https://static.vecteezy.com/system/resources/thumbnails/034/928/042/small_2x/ai-generated-cat-clip-art-free-png.png"/>
                    <p className="Descripcion">
                        Miau era un pequeño gatito encontrado en las calles, solo y asustado. Un buen samaritano lo
                        llevó al refugio, donde recibió atención médica y mucha dedicación. Aunque estaba tímido al
                        principio, pronto comenzó a jugar y a confiar en las personas. Miau se hizo amigo de los demás
                        gatos, hasta de los perros que llegaban al refugio. Un día, una familia lo vio y supo que Miau
                        era el gatito perfecto para ellos. Ahora, Miau vive feliz en su nuevo hogar, rodeado de amor y
                        cuidado. ¿Estás listo para darle una oportunidad?
                        <button className="Conocer">
                            <a href="#"> CONOCER MAS</a>
                        </button>
                    </p>
                </section>
            </main>
            <article className="Introduccion">
                <p>
                    Bienvenidos al Refugio Esperanza En el Refugio Esperanza, nuestro compromiso es brindar una segunda
                    oportunidad a los animales que necesitan un hogar. Somos un equipo apasionado de voluntarios que
                    trabaja incansablemente para rescatar, cuidar y encontrar familias amorosas para perros y gatos
                    abandonados. Creemos que cada animal merece una vida llena de amor, seguridad y bienestar. Aquí
                    encontrarás a muchos amigos peludos esperando su oportunidad para ser parte de una familia. ¡Ven a
                    conocernos y descubre cómo puedes cambiar una vida para siempre! Adopta, transforma una vida y únete
                    a nuestra misión de amor.
                </p>
                <img
                    src="https://png.pngtree.com/png-clipart/20230623/original/pngtree-an-illustration-of-dog-in-circle-shape-sky-png-image_9205321.png"
                    className="IntroduccionCanina"/>
            </article>
            <footer>
                <p>&copy; 2024 Peluditos Refugio de Mascotas. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
export default PaginaInicial;
