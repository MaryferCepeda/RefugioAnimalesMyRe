<?php


use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductoController;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;

// Ruta para autenticación con Google
Route::get('/google-auth/redirect', function () {
    return Socialite::driver('google')->redirect();
});

Route::get('/google-auth/callback', function () {
    $user_google = Socialite::driver('google')->user();
    $user = User::updateOrCreate(
        [
            'google_id' => $user_google->id,
        ],
        [
            'name' => $user_google->name,
            'email' => $user_google->email,
            'password' => bcrypt('defaultpassword'),
        ]
    );
    Auth::login($user);

    return redirect('/');
});

// Registro de usuarios
Route::post('/register', [RegisteredUserController::class, 'store']);

// Rutas de la página principal y otras páginas estáticas
Route::get('/', function () {
    return Inertia::render('paginaInicial');
});

Route::get('/Donar', function () {
    return Inertia::render('Donaciones');
});

Route::get('/Nosotros', function () {
    return Inertia::render('Nosotros');
});

// Ruta para ver los productos
Route::get('/Productos', [ProductoController::class, 'index']);

// Ruta para agregar productos al carrito y actualizar el stock
Route::post('/Productos/{id}/agregar', [ProductoController::class, 'agregarAlCarrito']);

// Página de contacto
Route::get('/Contactanos', function () {
    return Inertia::render('Contactanos');
});

// Ruta del Dashboard
Route::get('/Dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('Dashboard');

// Rutas de perfil de usuario autenticado
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Requiere la autenticación de Laravel
require __DIR__ . '/auth.php';


