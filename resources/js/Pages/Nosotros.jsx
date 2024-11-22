import React from 'react';
import '../../css/Nosotros.css';
import '../../css/Diseño Movil/Nosotros_Movil.css'
import {Link} from "@inertiajs/inertia-react";
import {Head} from "@inertiajs/react"


let Nosotros = () => {
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
                    <h1>Peluditos</h1>
                </div>
                <div className="header-Derecha">
                    <a href="https://github.com/MaryferCepeda/RefugioAnimalesMyRe.git" target="_blank"
                       rel="noopener noreferrer">
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
                    <Link href="#" title="Contáctanos para cualquier aclaración">
                        Contáctanos
                    </Link>
                    <Link href="register" title="Iniciar Sesión">Inicio de Sesión</Link>
                </nav>
            </header>

            <div className={"Nosotros-Titulo"}>
                <h2>ACERCA DE NOSOTROS</h2>
            </div>
            <main className={"Nosotros"}>
                <div className={"Vision"}>
                    <h4>VISION</h4>
                    <p className={"Vision-P"}>
                        Ser un referente en la protección y cuidado
                        de los animales, creando una sociedad
                        más consciente y solidaria con los
                        seres vivos.
                    </p>
                </div>

                <div className={"Mision"}>
                    <h4>MISION</h4>
                    <p className={"Mision-P"}>
                        Rescatar, rehabilitar y encontrar hogares amorosos
                        para animales en situación de vulnerabilidad, fomentando
                        la adopción responsable y la educación sobre el respeto
                        animal.
                    </p>
                </div>
            </main>

            <article className={"Refugio-Historia"}>

            </article>

            <footer>
                <p>&copy; 2024 Refugio de Mascotas. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
export default Nosotros;
