<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;

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

Route::post('/register', [RegisteredUserController::class, 'store']);

Route::get('/', function () {
    return Inertia::render('paginaInicial');
});

Route::get('/Nosotros', function () {
    return Inertia::render('Nosotros');
});
Route::get('/Productos', function () {
    return Inertia::render('Productos');
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


