import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from 'react-bootstrap/Nav';

//Sprint backlog # 1 ID-001
import NavBar_User from './NavBar_User';

//Sprint backlog # 1 ID-002
import NavBar_Admin from './NavBar_Admin';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar_User />  { /* Sprint backlog # 1 ID-001 */ }
      <NavBar_Admin /> {  /* Sprint backlog # 1 ID-002 */ }

      </header>
    </div>
  );
}
//  César Simón García - 220336404 @LSDW UdGVirtual
// Asesor: ARMIDA GRISELDA VÁZQUEZ CURIEL

export default App;
