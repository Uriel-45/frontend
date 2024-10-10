import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook para redirigir

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validar si el correo tiene el dominio correcto de UMG
        if (!formData.email.endsWith('@miumg.edu.gt')) {
            setError('El correo debe pertenecer al dominio @miumg.edu.gt');
        } else {
            setError('');
            
            console.log("Inicio de sesión exitoso:", formData);
            // Redirigir al Menu después de iniciar sesión
            navigate('/menu');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <form onSubmit={handleSubmit}>
                    <h2>LOGIN</h2>
                    <div className="input-group">
                        <label>Correo Electrónico</label>
                        <input
                            type="text"
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
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Iniciar Sesión</button>
                </form>

                <div className="login-options">
                    <Link to="/forgot-password">¿Olvidó su contraseña?</Link>
                    <Link to="/register">Registrarse</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
