import React, { useState } from 'react';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom'; // para navegación

function Register() {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        password: '',
        telefono: ''
    });

    const [error, setError] = useState(''); // Para almacenar mensajes de error
    const navigate = useNavigate(); // Hook de React Router para navegar entre páginas

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar que el correo pertenezca al dominio de la UMG
        const emailDomain = '@miumg.edu.gt';
        if (!formData.email.endsWith(emailDomain)) {
            setError(`El correo debe pertenecer al dominio ${emailDomain}`);
            return;
        }

        // Si la validación es exitosa, continuar con el envío del formulario
        setError(''); // Para limpiar el error si todo está bien
        console.log('Datos registrados:', formData);

        // Redirigir al login después de un registro exitoso
        navigate('/'); // Redirige al login (ruta "/")
    };

    const handleBack = () => {
        navigate(-1); // Navegar hacia atrás en el navegador
    };

    return (
        <div className="register-background">
            <div className="register-container">
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Nombres</label>
                        <input
                            type="text"
                            name="nombres"
                            value={formData.nombres}
                            onChange={handleChange}
                            placeholder="Ingrese sus nombres"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Apellidos</label>
                        <input
                            type="text"
                            name="apellidos"
                            value={formData.apellidos}
                            onChange={handleChange}
                            placeholder="Ingrese sus apellidos"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Correo Electrónico</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Ingrese su correo electrónico"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Ingrese su contraseña"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Teléfono</label>
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder="Ingrese su teléfono"
                            required
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>} {/* Mostrar el error si existe */}

                    <div className="button-group">
                        <button type="button" className="back-button" onClick={handleBack}>
                            Regresar
                        </button>
                        <button type="submit" className="submit-button">
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
