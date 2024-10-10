import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ConfiguracionPerfil.css'; // Asegúrate de tener el archivo de estilos

function ConfiguracionPerfil({ setUserName }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombreUsuario: '',
        correo: '',
        telefono: '',
        fechaNacimiento: '',
        genero: ''
    });
    const [error, setError] = useState('');

    // Maneja el cambio en los campos del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Validar y guardar los datos
    const handleSave = () => {
        const { nombreUsuario, correo, telefono, fechaNacimiento, genero } = formData;

        // Validar que todos los campos estén llenos
        if (!nombreUsuario || !correo || !telefono || !fechaNacimiento || !genero) {
            setError('Todos los campos son obligatorios');
            return;
        }

        // Guardar el nombre de usuario en el menú
        setUserName(nombreUsuario);

        // Redirigir al menú
        navigate('/menu');
    };

    return (
        <div className="configuracion-perfil-container">
            <h1>Configuración de Perfil</h1>
            {error && <p className="error-message">{error}</p>}
            <form className="perfil-form">
                <div className="form-group">
                    <label>Nombre de Usuario</label>
                    <input
                        type="text"
                        name="nombreUsuario"
                        value={formData.nombreUsuario}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Número de Teléfono</label>
                    <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Fecha de Nacimiento</label>
                    <input
                        type="date"
                        name="fechaNacimiento"
                        value={formData.fechaNacimiento}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Género</label>
                    <select
                        name="genero"
                        value={formData.genero}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <div className="form-buttons">
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={() => navigate('/menu')}
                    >
                        Cancelar
                    </button>
                    <button
                        type="button"
                        className="save-button"
                        onClick={handleSave}
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ConfiguracionPerfil;
