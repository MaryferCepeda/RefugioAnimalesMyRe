import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {Link} from "@inertiajs/inertia-react";
import React from "react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
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
                        <h1>Peluditos Refugio de Animales</h1>
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

            </div>
        </AuthenticatedLayout>
    );
}
