import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from 'react-bootstrap/Nav';

function NavBar_Admin() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
          <Nav.Link href="/home">Consultar información</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Descargar">Descargar reportes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Configurar">Configurar lineas de producción</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Admin">
            Accesar como administrador del sitio 
          </Nav.Link>
        </Nav.Item>
        </Nav>
      </header>
    </div>
  );
}

export default NavBar_Admin;
