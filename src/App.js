import React, { useState } from 'react';
import './App.css';
import { InterfazUsuario } from './componentes/InterfazUsuario';
import { EleccionJugadas } from './componentes/EleccionJugadas';
import { Juego } from './componentes/Juego';

function App() {
  /** Creo los estados */
  const [nombreJugador, setNombreJugador] = useState('');
  const [eleccionJugador, setEleccionJugador] = useState('');


  /** Funcion para cambiar el nombre del jugador en App */
  const cambiarNombreJugador = (nombreJugador) => {
    setNombreJugador(nombreJugador);
  }

  /** Funcion para cambiar la eleccion del jugador en App */
  const cambiaEleccionJugador = (eleccionJugador) => {
    setEleccionJugador(eleccionJugador);
  }

    return (
      <div className="App" id="App">
        <h1 className='App-header'>Juego de Piedra, Papel y Tijeras</h1>
        <InterfazUsuario siCambiarNombreJugador={cambiarNombreJugador}/>
        <EleccionJugadas siCambiarEleccionJugador={cambiaEleccionJugador}/>
        <Juego siEleccionJugador={eleccionJugador} />
      </div>
    );
  }

  export default App;