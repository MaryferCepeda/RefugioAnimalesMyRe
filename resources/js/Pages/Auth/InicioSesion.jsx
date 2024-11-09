import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import '../../../css/InicioSesion.css';

export default function InicioSesion({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), { onFinish: () => reset('password') });
    };

    return (
        <GuestLayout>
            <Head title="Iniciar Sesión" />
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <section>
                <header>
                    <div className="image-container">
                        <div className="image">
                            <img className="avatar" src="https://static.npmjs.com/c9e19250d48d66f0e9c70c9b3991bbdb.png" alt="avatar" />
                            <img className="face face-1" src="https://static.npmjs.com/a39ceb9e9ad640f4de8eee094063d890.png" alt="cara-1" />
                            <img className="face face-2" src="https://static.npmjs.com/ecc2a793db0bd5966246e970f9c9ff5e.png" alt="cara-2" />
                            <img className="face face-3" src="https://static.npmjs.com/6bf09f9948c3044dbb2c7ed8b85098dc.png" alt="cara-3" />
                        </div>
                        <div className="curtain" id="curtain"></div>
                    </div>
                </header>
                <footer>
                    <form onSubmit={submit} className="custom-login-form">
                        <div className="custom-input-group">
                            <InputLabel htmlFor="email" value="Correo Electrónico" className="custom-label" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full custom-input"
                                autoComplete="username"
                                isFocused={true}
                                placeholder="Correo Electrónico"
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2 custom-error" />
                        </div>

                        <div className="mt-4 custom-input-group">
                            <InputLabel htmlFor="password" value="Contraseña" className="custom-label" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full custom-input"
                                autoComplete="current-password"
                                placeholder="Contraseña"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2 custom-error" />
                        </div>

                        <div className="mt-4 block custom-checkbox-group">
                            <label className="flex items-center custom-checkbox-label">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ms-2 text-sm text-gray-600 custom-checkbox-text">
                                    Recuérdame
                                </span>
                            </label>
                        </div>

                        <div className="mt-4 flex items-center justify-end custom-actions">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 custom-link"
                                >
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            )}
                            <PrimaryButton className="ms-4 custom-button" disabled={processing}>
                                Iniciar Sesión
                            </PrimaryButton>
                        </div>
                    </form>
                </footer>
            </section>
        </GuestLayout>
    );
}
