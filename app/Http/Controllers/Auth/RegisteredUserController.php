<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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
            'email' => 'required|email|max:255|unique:users,email', // Verifica que el correo sea único
            'password' => 'required|string|confirmed|min:8', // Valida que las contraseñas coincidan
        ]);

        // Si la validación falla, regresamos con los errores
        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Crear un nuevo usuario
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password), // Encriptamos la contraseña
        ]);

        // Opcional: Disparar evento de registro (por si tienes listeners configurados)
        event(new Registered($user));

        // Iniciar sesión con el nuevo usuario
        Auth::login($user);

        // Redirigir a la página inicial
        return redirect('/'); // Redirección directa a "/"
    }
}

