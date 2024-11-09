import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import '../../../css/Registro.css';

export default function Registro() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), { onFinish: () => reset('password', 'password_confirmation') });
    };

    return (
        <GuestLayout>
            <Head title="Registro" />
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
                            <InputLabel htmlFor="name" value="Nombre" className="custom-label" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full custom-input"
                                autoComplete="name"
                                isFocused={true}
                                placeholder="Nombre"
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2 custom-error" />
                        </div>

                        <div className="mt-4 custom-input-group">
                            <InputLabel htmlFor="email" value="Correo Electrónico" className="custom-label" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full custom-input"
                                autoComplete="username"
                                placeholder="Correo Electrónico"
                                onChange={(e) => setData('email', e.target.value)}
                                required
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
                                autoComplete="new-password"
                                placeholder="Contraseña"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-2 custom-error" />
                        </div>

                        <div className="mt-4 custom-input-group">
                            <InputLabel htmlFor="password_confirmation" value="Confirmar Contraseña" className="custom-label" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full custom-input"
                                autoComplete="new-password"
                                placeholder="Confirmar Contraseña"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-2 custom-error" />
                        </div>

                        <div className="mt-4 flex items-center justify-end custom-actions">
                            <Link
                                href={route('login')}
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 custom-link"
                            >
                                ¿Ya estás registrado?
                            </Link>
                            <PrimaryButton className="ms-4 custom-button" disabled={processing}>
                                Registro
                            </PrimaryButton>
                        </div>
                    </form>
                </footer>
            </section>
        </GuestLayout>
    );
}
