import React from 'react';
import { Link} from '@inertiajs/inertia-react';
import {Head} from "@inertiajs/react"
import '../../css/productos.css';

const Producto = ({ imgSrc, precio, descripcion, onAddToCart }) => (
    <div className="tarjeta">
        <img src={imgSrc} alt="Producto" className="imagen_producto"/>
        <div className="precio">{precio}</div>
        <div className="cantidad">
            <label htmlFor="qty">Cantidad:</label>
            <input type="number" id="qty" defaultValue="1" min="1"/>
        </div>
        <div className="descripcion">
            {descripcion.map((desc, index) => (
                <p key={index}>{desc}</p>
            ))}
        </div>
       <button className={"añadir"}> <span className="material-symbols-outlined">add_shopping_cart</span> </button>
    </div>
);

const PaginaRefugio = () => {
    const productos = new Array(15).fill({
        imgSrc: 'https://rosariopet.com.ar/wp-content/uploads/2022/07/PC11.jpg',
        precio: '$10.00',
        descripcion: [
            'Este producto es de prueba se mejorara en la base de datos',
        ],
    });

    const handleAddToCart = (nombre, precio) => {
        console.log(`Producto añadido: ${nombre} - ${precio}`);
    };

    return (
        <div>
            <Head title="Peluditos|Tienda de Apoyo"/>
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
                    <Link href="/Contactanos" title="Contáctanos para cualquier aclaración">
                        Contáctanos
                    </Link>
                    <Link href="register" title="Iniciar Sesión">Inicio de Sesión</Link>
                </nav>
            </header>

            <main>
                <div id="mensaje" className="mensaje">
                    <div className="mensaje-contenedor">
                        <h2>Hola navegador! Veo que lograste encontrar nuestra página :3</h2>
                        <p>
                            Este mensaje es para informarte que{' '}
                            <strong>
                                ¡NO REALICES NINGÚN DONATIVO O COMPRA!
                            </strong>{' '}
                            ya que esta página está realizada específicamente para fines
                            escolares y no queremos ir al bote.
                        </p>
                        <p>¡Muchas gracias por tu atención!</p>
                        <button className="close-btn">Entendido</button>
                    </div>
                </div>

                <div className="cart-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count" id="cart-count">0</span>
                    <span className="material-symbols-outlined">shopping_cart</span>
                </div>

                <div className="productos_contenedor">
                {productos.map((producto, index) => (
                        <Producto
                            key={index}
                            imgSrc={producto.imgSrc}
                            precio={producto.precio}
                            descripcion={producto.descripcion}
                            onAddToCart={() =>
                                handleAddToCart(`Producto ${index + 1}`, producto.precio)
                            }
                        />
                    ))}
                </div>
            </main>
            <footer>
                <p>&copy; 2024 Refugio de Mascotas. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default PaginaRefugio;
