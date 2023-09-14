import React, { useState } from 'react';
import './App.css';
import { InterfazUsuario } from './componentes/InterfazUsuario';
import { EleccionJugadas } from './componentes/EleccionJugadas';
import { JugadaPC } from './componentes/JugadaPC';
import { Estadisticas } from './componentes/Estadisticas';

function App() {
  /** Creo los estados */
  const [nombreJugador, setNombreJugador] = useState('');
  const [eleccionJugador, setEleccionJugador] = useState('');
  const [jugadaPC, setJugadaPC] = useState('');
  const [nuevaJugadaPC, setNuevaJugadaPC] = useState('');
  const [resultado, setResultado] = useState('');

  /** Funcion para cambiar el nombre del jugador en App */
  const cambiarNombreJugador = (nombreJugador) => {
    setNombreJugador(nombreJugador);
  }

  /** Funcion para cambiar la eleccion del jugador en App */
  const cambiaEleccionJugador = (eleccionJugador) => {
    setEleccionJugador(eleccionJugador);
  }

  /** Devuelve el numero aleatorio y declara la opcion de la PC correspondiente */
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
    console.log(eleccionJugador);
    console.log(jugadaPC);
    console.log(nuevaJugadaPC);
    console.log(resultado);
  }

    return (
      <div className="App" id="App">
        <h1 className='App-header'>Juego de Piedra, Papel y Tijeras</h1>
        <InterfazUsuario siCambiarNombreJugador={cambiarNombreJugador}/>
        <EleccionJugadas siCambiarEleccionJugador={cambiaEleccionJugador}/>
        <JugadaPC siJugadaAleatoria={jugadaAleatoria} siEmpezarJuego={empezarJuego}/>
        <Estadisticas siNombreJugador={nombreJugador} siEleccionJugador={eleccionJugador} siNuevaJugadaPC={nuevaJugadaPC} siResultado={resultado} />
      </div>
    );
  }

  export default App;