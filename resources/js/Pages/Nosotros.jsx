import React, { useEffect } from 'react';
import { Link } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/react";
import "../../css/Diseño Movil/Nosotros_Movil.css";
import "../../css/Nosotros.css";

const Nosotros = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        const elements = document.querySelectorAll('.animate');
        elements.forEach(element => observer.observe(element));
        return () => {
            elements.forEach(element => observer.unobserve(element));
        };
    }, []);

    return (
        <div>
            <Head title={"Peluditos|Acerca de Nosotros"}/>
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

            <div className="Nosotros-Titulo animate">
                <h2>ACERCA DE NOSOTROS</h2>
            </div>
            <main className="Nosotros">
                <div className="Vision animate">
                    <h4>VISION</h4>
                    <p className="Vision-P">
                        Ser un referente en la protección y cuidado de los animales, creando una sociedad más consciente y solidaria con los seres vivos.
                    </p>
                </div>

                <div className="Mision animate">
                    <h4>MISION</h4>
                    <p className="Mision-P">
                        Rescatar, rehabilitar y encontrar hogares amorosos para animales en situación de vulnerabilidad, fomentando la adopción responsable y la educación sobre el respeto animal.
                    </p>
                </div>
            </main>
            <div className='Body2'>
                <article className="Refugio-Historia animate">
                    <img className="Imagen-Historia_Refugio" src="/Imagenes/Historia-Refugio.jpeg" alt="Historia del Refugio"/>
                    <div className="Refugio-Contenido">
                        <h4>Historia de Nuestro Refugio</h4>
                        <p className="Historia_Refugio_P">
                            Peluditos nació gracias a Laura Gutiérrez, una amante de los animales que no podía ignorar la creciente cantidad de perros y gatos abandonados en su comunidad.
                            Todo comenzó en 2018, cuando Laura rescató a Luna, una perrita que encontró herida cerca de su casa.
                            Conmovida por su situación, decidió cuidarla y buscarle un hogar. Ese primer gesto marcó el inicio de un sueño más grande.
                            Con el apoyo de amigos y vecinos, Laura organizó eventos de recaudación de fondos y, poco a poco, logró transformar un pequeño terreno baldío en el primer refugio de Peluditos. Al principio, solo contaban con espacio para cinco animales, pero gracias al esfuerzo colectivo y el amor de la comunidad, el refugio creció hasta convertirse en un lugar seguro para decenas de peluditos.
                            Hoy, Peluditos no solo rescata y rehabilita animales, sino que también promueve la adopción responsable y educa a la comunidad sobre la importancia de cuidar y respetar a los animales.
                        </p>
                    </div>
                </article>

                <aside className="RedesSociales animate">
                    <h5>ACTIVIDAD DE REDES SOCIALES</h5>
                    <div className="RedesSociales-iframeWrapper">
                        <div className="RedesSociales-iframeContainer uno">
                            <iframe
                                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMundoPatitasOficial%2Fposts%2Fpfbid0FbJKxC2KgbYpbdKxZ681JT6KvyGwWdxnD4My1udAuRVri3hEUKdZy8EX7Tp6ZCbsl&show_text=true&width=500"
                                width="500"
                                height="530"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            />
                        </div>
                        <div className="RedesSociales-iframeContainer dos">
                            <iframe
                                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMundoPatitasOficial%2Fposts%2Fpfbid0pqd48hNuuRVrSj1k1QWAEJS4QikR5vVBXrKaesBtvGJbyHyPZphgxiLUmBMAVLyNl&show_text=true&width=500"
                                width="500"
                                height="588"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            />
                        </div>
                    </div>
                </aside>
            </div>

            <hr/>
            <div className="Tecnologias animate">
                <h5>Tecnologías Usadas</h5>
                <ul className="Tecnologias-lista">
                    <li>
                        <img src="/Imagenes/laravel.png" alt="Laravel"/>
                    </li>
                    <li>
                        <img src="/Imagenes/inertiajs-logo.png" alt="Inertia.js"/>
                    </li>
                    <li>
                        <img src="/Imagenes/React.png" alt="React"/>
                    </li>
                    <li>
                        <img src="/Imagenes/Node.js_logo.svg" alt="Node.js"/>
                    </li>
                    <li>
                        <img src="/Imagenes/HTML5_logo_and_wordmark.svg.png" alt="HTML5"/>
                    </li>
                    <li>
                        <img src="/Imagenes/Official_CSS_Logo.svg" alt="CSS3"/>
                    </li>
                </ul>
            </div>
            <hr/>

            <footer>
                <p>&copy; <span>2024 Peluditos Refugio de Mascotas.</span> Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Nosotros;
