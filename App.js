import logo from './logo.svg';
import './App.css';

//Sprint backlog # 1 ID-001 & ID-002 
import NavBarReact from './components/navBarReact';


//Sprint backlog # 2 ID-003
import JumboTronReact from './components/jumboTronReact';

// Sprint backlog # 2 ID-009
import HelpAlert from './components/helpAlert';

// Sprint backlog # 2 ID-012 & ID-013
import SensorProgress from './components/sensorProgress';

function App() {
  return (
    <div className="App">
      <NavBarReact />
      <JumboTronReact />
      <p>Sensores</p>
      <SensorProgress />
      <HelpAlert />

  </div>
  );
}
//  César Simón García - 220336404 @LSDW UdGVirtual
// Asesor: ARMIDA GRISELDA VÁZQUEZ CURIEL

export default App;
