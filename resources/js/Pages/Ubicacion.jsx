import React from 'react';
import '../../css/PaginaInicial.css';
import { Link } from '@inertiajs/inertia-react';

function PaginaInicial() {
    return (
        <div>
            <header>
                <div className="header-left">
                    <a href="#">
                        <img className="logo" src="https://cdn-icons-png.flaticon.com/512/5904/5904059.png" alt="Logo de la página" />
                    </a>
                    <h1>Refugio de Mascotas</h1>
                </div>
                <nav>
                    <Link href="/" title="Este es el menú principal">Inicio</Link>
                    <Link href="/nosotros" title="Conoce las Historias de nuestras Mascotas">Nosotros</Link>
                    <Link href="/productos" title="Conoce nuestros Articulos">Productos</Link>
                    <Link href="/ubicacion" title="Descubre de donde Somos">Ubicación</Link>
                    <Link href="/contactanos" title="Contáctanos para cualquier aclaración">Contactanos</Link>
                </nav>
            </header>
            <main className="FondoNegro">
                <section className="Historia1">
                    <img className="MacotaUno" src="https://static.vecteezy.com/system/resources/thumbnails/034/928/042/small_2x/ai-generated-cat-clip-art-free-png.png" />
                    <p className="Descripcion">
                        Miau era un pequeño gatito encontrado en las calles, solo y asustado. Un buen samaritano lo llevó al refugio, donde recibió atención médica y mucha dedicación. Aunque estaba tímido al principio, pronto comenzó a jugar y a confiar en las personas. Miau se hizo amigo de los demás gatos, hasta de los perros que llegaban al refugio. Un día, una familia lo vio y supo que Miau era el gatito perfecto para ellos. Ahora, Miau vive feliz en su nuevo hogar, rodeado de amor y cuidado. ¿Estás listo para darle una oportunidad?
                        <button className="Conocer">
                            <a href="#"> CONOCER MAS</a>
                        </button>
                    </p>
                </section>
            </main>
            <article className="Introduccion">
                <p>
                    Bienvenidos al Refugio Esperanza En el Refugio Esperanza, nuestro compromiso es brindar una segunda oportunidad a los animales que necesitan un hogar. Somos un equipo apasionado de voluntarios que trabaja incansablemente para rescatar, cuidar y encontrar familias amorosas para perros y gatos abandonados. Creemos que cada animal merece una vida llena de amor, seguridad y bienestar. Aquí encontrarás a muchos amigos peludos esperando su oportunidad para ser parte de una familia. ¡Ven a conocernos y descubre cómo puedes cambiar una vida para siempre! Adopta, transforma una vida y únete a nuestra misión de amor.
                </p>
                <img src="https://png.pngtree.com/png-clipart/20230623/original/pngtree-an-illustration-of-dog-in-circle-shape-sky-png-image_9205321.png" className="IntroduccionCanina" />
            </article>
            <footer>
                <p>&copy; 2024 Tienda de Mascotas. Todos los derechos reservados.</p>
                <section id="Redes">
                    <h4>Síguenos en:</h4>
                    <a href="#">
                        <img className="uno" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="Instagram" />
                    </a>
                    <a href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt="Facebook" />
                    </a>
                    <a href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" />
                    </a>
                </section>
            </footer>
        </div>
    );
}

export default PaginaInicial;
