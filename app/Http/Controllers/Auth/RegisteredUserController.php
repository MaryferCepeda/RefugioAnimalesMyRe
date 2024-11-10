<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Registro');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        // Validación de los datos de entrada
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|string|confirmed|min:8',
        ]);

        // Si la validación falla, regresamos con los errores
        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Verificar si el correo electrónico ya está registrado
        $existingUser = User::where('email', $request->email)->first();

        if ($existingUser) {
            // Si el usuario ya existe, iniciamos sesión y lo redirigimos al dashboard
            Auth::login($existingUser);
            return redirect()->route('dashboard'); // Ajusta la ruta de redirección según tu caso
        }

        // Si no existe el usuario, creamos uno nuevo
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password), // Encriptamos la contraseña
        ]);

        // Iniciamos sesión con el nuevo usuario
        Auth::login($user);
        return redirect()->route('/');
    }
}
