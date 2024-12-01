import { Link } from '@inertiajs/inertia-react';
import { Head } from "@inertiajs/react";
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

const PaginaRefugioProductos = () => {
    const productos = [
        {
            imgSrc: '/Imagenes/productos/comida perro.webp',
            precio: '$50.00',
            descripcion: ['Comida para perro de alta calidad'],
        },
        {
            imgSrc: '/Imagenes/productos/Juguete interactivo para mascotas.jpg',
            precio: '$150.00',
            descripcion: ['Juguete interactivo para mascotas'],
        },
        {
            imgSrc: '/Imagenes/productos/Rascador Gatos.jpg',
            precio: '$260.00',
            descripcion: ['Rascador para gatos'],
        },
        {
            imgSrc: '/Imagenes/productos/Cama perro.webp',
            precio: '$120.00',
            descripcion: ['Cama para perros'],
        },
        {
            imgSrc: '/Imagenes/productos/hueso goma.webp',
            precio: '$45.00',
            descripcion: ['Hueso de goma para masticar'],
        },
        {
            imgSrc: '/Imagenes/productos/Comedor Gatos.26.56PM_1200x1200.webp',
            precio: '$200.00',
            descripcion: ['Comedero para gatos'],
        },
        {
            imgSrc: '/Imagenes/productos/Correa para perros.webp',
            precio: '$1.00',
            descripcion: ['Correa para perros'],
        },
        {
            imgSrc: '/Imagenes/productos/Peluche Gato.81cf211c767a487f2ca938fcee5d3703.webp',
            precio: '$50.00',
            descripcion: ['Juguete de peluche para gatos'],
        },
        {
            imgSrc: '/Imagenes/productos/cama Ortopedica Perros.jpeg',
            precio: '$450.00',
            descripcion: ['Cama ortopédica para perros'],
        },
        {
            imgSrc: '/Imagenes/productos/Arenero Gatos.webp',
            precio: '$75.00',
            descripcion: ['Arenero para gatos'],
        },
        {
            imgSrc: '/Imagenes/productos/manta perros.jpeg',
            precio: '$24.00',
            descripcion: ['Manta suave para perros'],
        },
        {
            imgSrc: '/Imagenes/productos/jaula perros.jpeg',
            precio: '$122.00',
            descripcion: ['Cage para perros pequeños'],
        },
        {
            imgSrc: '/Imagenes/productos/cama gatos.jpeg',
            precio: '$130.00',
            descripcion: ['Cama para gatos'],
        },
        {
            imgSrc: '/Imagenes/productos/plato perro.jpeg',
            precio: '$30.00',
            descripcion: ['Plato para perros'],
        },
    ];

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
                            src="/Imagenes/logo.png"
                            alt="Logo de la página"
                        />
                    </a>
                    <h1>Refugio de Animales</h1>
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
                            <Link href="/Donar">Donativos</Link>
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

export default PaginaRefugioProductos;