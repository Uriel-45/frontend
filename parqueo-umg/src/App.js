import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Menu from './components/Menu'; 
import Dashboard from './components/Dashboard';
import Reportes from './components/Reportes';
import Reserva from './components/Reserva';
import ConfiguracionPerfil from './components/ConfiguracionPerfil'; 

function App() {
    const [userName, setUserName] = useState('Name'); // Estado para el nombre de usuario

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/menu" element={<Menu userName={userName} />} /> {/* Pasar el nombre de usuario */}
                    <Route path="/dashboard" element={<Dashboard userName={userName}/>} />
                    <Route path="/reportes" element={<Reportes />} />
                    <Route path="/reserva" element={<Reserva />} />
                    <Route path="/configuracion-perfil" element={<ConfiguracionPerfil setUserName={setUserName} />} /> {/* Pasar la función para actualizar el nombre de usuario */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
