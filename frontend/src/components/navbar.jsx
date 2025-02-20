import React from 'react';
import { NavLink } from 'react-router-dom';
import './stlye-components/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Mas que Mascotas</div>
      <ul className="nav-links">
        {/* Usa NavLink para que las rutas se integren con el router */}
        <li><NavLink to="/" className='nav-link'>Inicio</NavLink></li>
        <li><NavLink to="/darenadopcion" className='nav-link'>Poné en Adopción</NavLink></li>
        <li><NavLink to="https://www.linkedin.com/in/faustina-retamar-43ab861a6/" className='nav-link'>Contacto</NavLink></li>
      </ul>
      <div className="menu-toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
