<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

    // Definir la tabla si no es plural por defecto
    protected $table = 'productos';

    // Definir los campos que se pueden llenar
    protected $fillable = [
        'nombre',
        'descripcion',
        'imagen',
        'precio',
        'stock',
    ];
}


