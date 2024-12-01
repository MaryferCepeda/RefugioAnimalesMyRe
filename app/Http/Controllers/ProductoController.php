<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    // Función para obtener los productos y mostrarlos
    public function index()
    {
        $productos = Producto::all(); // Obtener todos los productos
        return Inertia::render('Productos', [
            'productos' => $productos, // Pasar los productos a la vista
        ]);
    }

    // Función para agregar productos al carrito y actualizar el stock
    public function agregarAlCarrito($id, Request $request)
    {
        // Obtener el producto por ID
        $producto = Producto::find($id);

        // Verifica que haya suficiente stock
        if ($producto && $producto->stock >= $request->cantidad) {
            // Disminuir el stock en la base de datos
            $producto->stock -= $request->cantidad;
            $producto->save(); // Guardar el producto con el stock actualizado

            return response()->json([
                'mensaje' => 'Producto agregado al carrito',
                'producto' => $producto, // Opcional: Puedes devolver el producto actualizado
            ]);
        } else {
            // Si el stock no es suficiente
            return response()->json([
                'mensaje' => 'Stock insuficiente',
            ], 400);
        }
    }
}
