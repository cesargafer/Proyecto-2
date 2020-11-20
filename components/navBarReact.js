import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBarReact = (props) => {
  return (
    <div>
      <p>Proyectos de Mejora</p>
      <Nav>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Pagina de Control</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Configuración</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Admininstrador</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBarReact;


