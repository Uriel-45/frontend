import React, { useState } from 'react';
import '../styles/Password.css';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [formData, setFormData] = useState({
        email: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto

        const emailDomain = '@miumg.edu.gt';
        const email = formData.email;

        // Validar que el correo pertenezca al dominio @miumg.edu.gt
        if (!email.endsWith(emailDomain)) {
            setErrorMessage(`El correo debe pertenecer al dominio ${emailDomain}`);
            return;
        }

        // Validar que las contraseñas coincidan
        if (formData.newPassword !== formData.confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden');
            return;
        }

        //  envío del formulario
        setErrorMessage('');
        console.log("Contraseña restablecida:", formData); 

        // Redirigir al login después de restablecer la contraseña
        navigate('/'); // Redirige al login (ruta "/")
       
    };

    const handleBack = () => {
        navigate(-1); // Navegar hacia atrás
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-box">
                <h2>Recuperar Contraseña</h2>
                {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
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
                        <label>Nueva Contraseña</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            placeholder="Ingrese su nueva contraseña"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Confirmar Nueva Contraseña</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirme su nueva contraseña"
                            required
                        />
                    </div>

                    <div className="button-group">
                        <button type="button" className="back-button" onClick={handleBack}>
                            Regresar
                        </button>
                        <button type="submit" className="submit-button">
                            Restablecer Contraseña
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
