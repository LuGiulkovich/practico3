import './App.css';
import { EleccionJugadas } from './componentes/EleccionJugadas';
import { InterfazUsuario } from './componentes/InterfazUsuario';

function App() {
  console.log('Render App');
  return (
    <div className="App" id="App">
      <header className="App-header">
        Juego
      </header>
      <InterfazUsuario/>
      <EleccionJugadas/>
    </div>
  );
}

export default App;
