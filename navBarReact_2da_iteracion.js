import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


/*
Sprint backlog # 1 ID-001
Segunda fase de desarrollo, revisión y ajuste de los Sprints y el backlog
Desempeñando el rol de usuario, necesito tener acceso al menú de comandos,
con la finalidad de consultar información, descargar reportes, configurar líneas de producción.

*/
const NavBarReact_2da_iteracion = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav pills>
        <NavItem>
          <NavLink href="#"> Consultar Información de sensores IoT </NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Menu Operativo
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Usuario</DropdownItem>
            <DropdownItem>Consultar Información</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Descargar Reporte</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">Configuracion</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Ayuda</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">ADMIN</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBarReact_2da_iteracion;
