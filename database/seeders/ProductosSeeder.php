<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Producto;


class ProductosSeeder extends Seeder
{
    public function run()
    {
        // Producto 1
        Producto::create([
            'nombre' => 'Comida para perro',
            'descripcion' => 'Comida para perro de alta calidad',
            'imagen' => '/Imagenes/productos/comida perro.webp',
            'precio' => 50.00,
            'stock' => 50,
        ]);

// Producto 2
        Producto::create([
            'nombre' => 'Juguete interactivo para mascotas',
            'descripcion' => 'Juguete interactivo para mascotas',
            'imagen' => '/Imagenes/productos/Juguete interactivo para mascotas.jpg',
            'precio' => 150.00,
            'stock' => 50,
        ]);

// Producto 3
        Producto::create([
            'nombre' => 'Rascador para gatos',
            'descripcion' => 'Rascador para gatos',
            'imagen' => '/Imagenes/productos/Rascador Gatos.jpg',
            'precio' => 260.00,
            'stock' => 50,
        ]);

// Producto 4
        Producto::create([
            'nombre' => 'Cama para perros',
            'descripcion' => 'Cama para perros',
            'imagen' => '/Imagenes/productos/Cama perro.webp',
            'precio' => 120.00,
            'stock' => 50,
        ]);

// Producto 5
        Producto::create([
            'nombre' => 'Hueso de goma para masticar',
            'descripcion' => 'Hueso de goma para masticar',
            'imagen' => '/Imagenes/productos/hueso goma.webp',
            'precio' => 45.00,
            'stock' => 50,
        ]);

// Producto 6
        Producto::create([
            'nombre' => 'Comedero para gatos',
            'descripcion' => 'Comedero para gatos',
            'imagen' => '/Imagenes/productos/Comedor Gatos.26.56PM_1200x1200.webp',
            'precio' => 200.00,
            'stock' => 50,
        ]);

// Producto 7
        Producto::create([
            'nombre' => 'Correa para perros',
            'descripcion' => 'Correa para perros',
            'imagen' => '/Imagenes/productos/Correa para perros.webp',
            'precio' => 1.00,
            'stock' => 50,
        ]);

// Producto 8
        Producto::create([
            'nombre' => 'Juguete de peluche para gatos',
            'descripcion' => 'Juguete de peluche para gatos',
            'imagen' => '/Imagenes/productos/Peluche Gato.81cf211c767a487f2ca938fcee5d3703.webp',
            'precio' => 50.00,
            'stock' => 50,
        ]);

// Producto 9
        Producto::create([
            'nombre' => 'Cama ortopédica para perros',
            'descripcion' => 'Cama ortopédica para perros',
            'imagen' => '/Imagenes/productos/cama Ortopedica Perros.jpeg',
            'precio' => 450.00,
            'stock' => 50,
        ]);

// Producto 10
        Producto::create([
            'nombre' => 'Arenero para gatos',
            'descripcion' => 'Arenero para gatos',
            'imagen' => '/Imagenes/productos/Arenero Gatos.webp',
            'precio' => 75.00,
            'stock' => 50,
        ]);

// Producto 11
        Producto::create([
            'nombre' => 'Manta suave para perros',
            'descripcion' => 'Manta suave para perros',
            'imagen' => '/Imagenes/productos/manta perros.jpeg',
            'precio' => 24.00,
            'stock' => 50,
        ]);

// Producto 12
        Producto::create([
            'nombre' => 'Jaula para perros pequeños',
            'descripcion' => 'Jaula para perros pequeños',
            'imagen' => '/Imagenes/productos/jaula perros.jpeg',
            'precio' => 122.00,
            'stock' => 50,
        ]);

// Producto 13
        Producto::create([
            'nombre' => 'Cama para gatos',
            'descripcion' => 'Cama para gatos',
            'imagen' => '/Imagenes/productos/cama gatos.jpeg',
            'precio' => 130.00,
            'stock' => 50,
        ]);

// Producto 14
        Producto::create([
            'nombre' => 'Plato para perros',
            'descripcion' => 'Plato para perros',
            'imagen' => '/Imagenes/productos/plato perro.jpeg',
            'precio' => 30.00,
            'stock' => 50,
        ]);


    }
}
