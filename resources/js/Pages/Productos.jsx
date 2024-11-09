import React from 'react';
import '../../css/productos.css';
import {Link} from "@inertiajs/inertia-react";
let Productos = () => {
    return (
        <div>
            <header>
                <div className="header-left">
                    <a href="#">
                        <img className="logo" src="https://cdn-icons-png.flaticon.com/512/5904/5904059.png"
                             alt="Logo de la página"/>
                    </a>
                    <h1>Refugio de Mascotas</h1>
                </div>
                <nav>
                    <Link href="/" title="Este es el menú principal">Inicio</Link>
                    <Link href="/nosotros" title="Conoce las Historias de nuestras Mascotas">Nosotros</Link>
                    <Link href="/productos" title="Conoce nuestros Articulos">dshfvsjhdv</Link>
                    <Link href="/ubicacion" title="Descubre de donde Somos">Ubicación</Link>
                    <Link href="/contactanos" title="Contáctanos para cualquier aclaración">Contactanos</Link>
                </nav>
            </header>
            <article className="Introduccion">
                <p>
                    mi primera pagina web en laravel robada
                </p>
            </article>
            <footer>
                <p>&copy; 2024 Tienda de Mascotas. Todos los derechos reservados.</p>
                <section id="Redes">
                    <h4>Síguenos en:</h4>
                    <a href="#">
                        <img className="uno"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
                             alt="Instagram"/>
                    </a>
                    <a href="#">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                            alt="Facebook"/>
                    </a>
                    <a href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube"/>
                    </a>
                </section>
            </footer>
        </div>
    );
}

export default Productos;
