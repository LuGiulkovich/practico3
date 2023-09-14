import React, { useState } from 'react';
import './App.css';
import { InterfazUsuario } from './componentes/InterfazUsuario';
import { EleccionJugadas } from './componentes/EleccionJugadas';
import { JugadaPC } from './componentes/JugadaPC';

function App() {
  /** Creo los estados */
  const [nombreJugador, setNombreJugador] = useState('');
  const [eleccionJugador, setEleccionJugador] = useState('');
  const [jugadaPC, setJugadaPC] = useState('');
  const [nuevaJugadaPC, setNuevaJugadaPC] = useState('');
  const [eleccionPC, setEleccionPC] = useState('');
  const [resultado, setResultado] = useState('');

  /** Funcion para cambiar el nombre del jugador en App */
  const cambiarNombreJugador = (nombreJugador) => {
    setNombreJugador(nombreJugador);
  }

  /** Funcion para cambiar la eleccion del jugador en App */
  const cambiaEleccionJugador = (eleccionJugador) => {
    setEleccionJugador(eleccionJugador);
  }

  /** Devuelve el numero aleatorio */
  const jugadaAleatoria = (numeroPC) => {
    if (numeroPC === 0) {
      setNuevaJugadaPC('Piedra');
    } else if (numeroPC === 1) {
      setNuevaJugadaPC('Papel');
    } else {
      setNuevaJugadaPC('Tijeras');
    }
    setJugadaPC(numeroPC);
  }

  /** Devuelve el nombre de la opcion aleatoria */
  const eleccionMaquina = (eleccionPC) => {
    setEleccionPC(eleccionPC);
  }

  const empezarJuego = () => {
    if (eleccionJugador === 'Piedra') {
      if (jugadaPC === 0) {
        setResultado('Empate');
      } else if (jugadaPC === 1) {
        setResultado('Perdiste');
      } else if (jugadaPC === 2) {
        setResultado('Ganaste');
      }
    } else if (eleccionJugador === 'Papel') {
      if (jugadaPC === 0) {
        setResultado('Ganaste');
      } else if (jugadaPC === 1) {
        setResultado('Empate');
      } else if (jugadaPC === 2) {
        setResultado('Perdiste');
      }
    } else if (eleccionJugador === 'Tijeras') {
      if (jugadaPC === 0) {
        setResultado('Perdiste');
      } else if (jugadaPC === 1) {
        setResultado('Ganaste');
      } else if (jugadaPC === 2) {
        setResultado('Empate');
      }
    }
  }

    return (
      <div className="App" id="App">
        <h1>Juego de Piedra, Papel y Tijeras</h1>
        <InterfazUsuario siCambiarNombreJugador={cambiarNombreJugador}/>
        <EleccionJugadas siCambiarEleccionJugador={cambiaEleccionJugador}/>
        <JugadaPC siJugadaAleatoria={jugadaAleatoria} siEmpezarJuego={empezarJuego} siEleccionMaquina={eleccionMaquina}/>
        <hr/>
        <h2>Estadistidas</h2>
        <p>Nombre del Jugador: {nombreJugador}</p>
        <p>Eleccion del Jugador: {eleccionJugador}</p>
        <p>Eleccion de la PC: {eleccionPC}</p>
        <p>Resultado de Ronda: {resultado}</p>
        <p>Eleccion nueva de la PC: {nuevaJugadaPC}</p>
      </div>
    );
  }

  export default App;