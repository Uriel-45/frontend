import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

function Menu({ userName }) { // Pasar el nombre de usuario como prop
    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1>Menú</h1>
                <div className="settings-icon">
                    <Link to="/configuracion-perfil">
                        <i className="fas fa-cog"></i> {/* Icono de ajustes */}
                    </Link>
                </div>
            </header>
            <div className="menu-sidebar">
                <div className="menu-user-profile">
                    <i className="fas fa-user-circle"></i>
                    <p className="user-name">{userName}</p> {/* Mostrar nombre de usuario */}
                </div>
                <nav className="menu-nav">
                    <Link to="/dashboard">
                        <button>Dashboard</button>
                    </Link>
                    <Link to="/reportes">
                        <button>Reportes</button>
                    </Link>
                    <Link to="/reserva">
                        <button>Reserva</button>
                    </Link>
                    <Link to="/">
                        <button className="logout-button">Cerrar Sesión</button>
                    </Link>
                </nav>
            </div>
            <div className="menu-content">
                <h2>Parqueo UMG</h2>
                <div className="car-image"></div>
            </div>
        </div>
    );
}

export default Menu;
