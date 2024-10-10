import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import '../styles/Dashboard.css';

function Dashboard({ userName }) {
    const [selectedArea, setSelectedArea] = useState('AREA SUR');

    const areas = {
        'AREA SUR': [
            { id: 'S1', status: 'available' },
            { id: 'S2', status: 'reserved' },
            { id: 'S3', status: 'occupied' },
            { id: 'S4', status: 'available' },
            { id: 'S5', status: 'available' },
            { id: 'S6', status: 'available' },
            { id: 'S7', status: 'reserved' },
            { id: 'S8', status: 'reserved' },
            { id: 'S9', status: 'occupied' },
            { id: 'S10', status: 'unavailable' }
        ],
        'AREA ESTE': [
            { id: 'E1', status: 'available' },
            { id: 'E2', status: 'occupied' },
            { id: 'E3', status: 'reserved' },
            { id: 'E4', status: 'available' },
            { id: 'E5', status: 'unavailable' }
        ],
        'AREA OESTE': [
            { id: 'O1', status: 'reserved' },
            { id: 'O2', status: 'reserved' },
            { id: 'O3', status: 'available' },
            { id: 'O4', status: 'unavailable' }
        ],
        'AREA NORTE': [
            { id: 'N1', status: 'available' },
            { id: 'N2', status: 'reserved' },
            { id: 'N3', status: 'reserved' },
            { id: 'N4', status: 'occupied' },
            { id: 'N5', status: 'available' }
        ],
        'AREA CENTRAL': [
            { id: 'C1', status: 'occupied' },
            { id: 'C2', status: 'occupied' },
            { id: 'C3', status: 'unavailable' }
        ]
    };

    const handleAreaClick = (area) => {
        setSelectedArea(area);
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
            </header>
            <div className="dashboard-content">
                <div className="dashboard-sidebar">
                    <div className="menu-user-profile">
                        <i className="fas fa-user-circle"></i>
                        <p className="user-name">{userName}</p>
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
                        {/* Agregar el botón Menú */}
                        <Link to="/menu">
                            <button>Menú</button>
                        </Link>
                    </nav>
                </div>
                <div className="dashboard-main-content">
                    <div className="status-cards">
                        <div className="status-card available">
                            <h2>{areas[selectedArea].filter(slot => slot.status === 'available').length}</h2>
                            <p>DISPONIBLES</p>
                        </div>
                        <div className="status-card occupied">
                            <h2>{areas[selectedArea].filter(slot => slot.status === 'occupied').length}</h2>
                            <p>OCUPADOS</p>
                        </div>
                        <div className="status-card reserved">
                            <h2>{areas[selectedArea].filter(slot => slot.status === 'reserved').length}</h2>
                            <p>RESERVADOS</p>
                        </div>
                        <div className="status-card unavailable">
                            <h2>{areas[selectedArea].filter(slot => slot.status === 'unavailable').length}</h2>
                            <p>NO DISPONIBLE</p>
                        </div>
                    </div>
                    <div className="area-buttons">
                        <button
                            className={`area-button ${selectedArea === 'AREA SUR' ? 'selected' : ''}`}
                            onClick={() => handleAreaClick('AREA SUR')}
                        >
                            AREA SUR
                        </button>
                        <button
                            className={`area-button ${selectedArea === 'AREA ESTE' ? 'selected' : ''}`}
                            onClick={() => handleAreaClick('AREA ESTE')}
                        >
                            AREA ESTE
                        </button>
                        <button
                            className={`area-button ${selectedArea === 'AREA OESTE' ? 'selected' : ''}`}
                            onClick={() => handleAreaClick('AREA OESTE')}
                        >
                            AREA OESTE
                        </button>
                        <button
                            className={`area-button ${selectedArea === 'AREA NORTE' ? 'selected' : ''}`}
                            onClick={() => handleAreaClick('AREA NORTE')}
                        >
                            AREA NORTE
                        </button>
                        <button
                            className={`area-button ${selectedArea === 'AREA CENTRAL' ? 'selected' : ''}`}
                            onClick={() => handleAreaClick('AREA CENTRAL')}
                        >
                            AREA CENTRAL
                        </button>
                    </div>
                    <div className="parking-grid">
                        {areas[selectedArea].map((slot) => (
                            <div key={slot.id} className={`parking-slot ${slot.status}`}>
                                {slot.id}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
