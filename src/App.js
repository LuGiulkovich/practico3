import React, { useState } from 'react';
import './App.css';
import { InterfazUsuario } from './componentes/InterfazUsuario';
import { EleccionJugadas } from './componentes/EleccionJugadas';

function App() {
  /** Creo los estados */
  const [nombreJugador, setNombreJugador] = useState('');
  const [eleccionJugador, setEleccionJugador] = useState('');
  const [jugadaPC, setJugadaPC] = useState('');

  /** Funcion para cambiar el nombre del jugador en App */
  const cambiarNombreJugador = (nombreJugador) => {
    setNombreJugador(nombreJugador);
  }

  /** Funcion para cambiar la eleccion del jugador en App */
  const cambiaEleccionJugador = (eleccionJugador) => {
    setEleccionJugador(eleccionJugador);
  }

  const jugadaAleatoria = (numeroPC) => {
    setJugadaPC(numeroPC);
  }

    return (
      <div className="App" id="App">
        <h1>Juego de Piedra, Papel y Tijeras</h1>
        <InterfazUsuario siCambiarNombreJugador={cambiarNombreJugador}/>
        <EleccionJugadas siCambiarEleccionJugador={cambiaEleccionJugador} siJugadaAleatoria={jugadaAleatoria}/>
        <p>Nombre del Jugador: {nombreJugador}</p>
        <p>Eleccion del Jugador: {eleccionJugador}</p>
        <p>Eleccion de la PC: {jugadaPC}</p>
      </div>
    );
  }

  export default App;