import React, { useState } from 'react';
import './App.css';
import { InterfazUsuario } from './componentes/InterfazUsuario';
import { EleccionJugadas } from './componentes/EleccionJugadas';
import { Juego } from './componentes/Juego';
import { Estadisticas } from './componentes/Estadisticas';
import { Ganador } from './componentes/Ganador';

function App() {
  /** Creo los estados */
  const [nombreJugador, setNombreJugador] = useState('');
  const [eleccionJugador, setEleccionJugador] = useState('');
  const [eleccionPC, setEleccionPC] = useState('');
  const [resultadoRonda, setResultadoRonda] = useState('');
  const [numeroRonda, setNumeroRonda] = useState(0);
  const [puntajeU, setPuntajeU] = useState(0);
  const [puntajeP, setPuntajeP] = useState(0);
  const [btn, setBtn] = useState(false);

  /** Funcion para cambiar el nombre del jugador en App */
  const cambiarNombreJugador = (nombreJugador) => {
    setNombreJugador(nombreJugador);
  }

  /** Funcion para cambiar la eleccion del jugador en App */
  const cambiaEleccionJugador = (eleccionJugador) => {
    setEleccionJugador(eleccionJugador);
  }

  const cambiarEleccionPC = (eleccionPC) => {
    setEleccionPC(eleccionPC);
  }

  const cambiarResultadoRonda = (resultadoRonda) => {
    setResultadoRonda(resultadoRonda);
    if (resultadoRonda === 'Ganaste') {
      setPuntajeU(puntajeU + 1);
    } else if (resultadoRonda === 'Perdiste') {
      setPuntajeP(puntajeP + 1);
    }
  }

  const cambiarRonda = (ronda) => {
    setNumeroRonda(ronda)
  }

  const desactivarBtn = (btn) => {
    setBtn(btn)
  }

  const reiniciarJuego = () => {
    setNombreJugador('');
    setEleccionJugador('');
    setEleccionPC('');
    setResultadoRonda('');
    setNumeroRonda('');
    setPuntajeU(0);
    setPuntajeP(0);
    setBtn(false);
  }

return (
  <div className="App" id="App">
    <h1 className='App-header'>Juego de Piedra, Papel y Tijeras</h1>
    <InterfazUsuario siCambiarNombreJugador={cambiarNombreJugador} />
    <EleccionJugadas siCambiarEleccionJugador={cambiaEleccionJugador} />
    <Juego siEleccionJugador={eleccionJugador}
      siCambiarELeccionPC={cambiarEleccionPC}
      siCambiarResultadoRonda={cambiarResultadoRonda}
      siCambiarRonda={cambiarRonda}
      siBtn={btn}
    />
    <Estadisticas siNombreJugador={nombreJugador}
      siEleccionJugador={eleccionJugador}
      siEleccionPC={eleccionPC}
      siResultado={resultadoRonda}
      siRonda={numeroRonda}
      siPuntoJugador={puntajeU}
      siPuntoPC={puntajeP}
    />
    <Ganador siNombreJugador={nombreJugador}
      siPuntajeU={puntajeU}
      siPuntajeP={puntajeP}
      siDesactivar={desactivarBtn}
    />
    <button onClick={reiniciarJuego}>Volver a Empezar</button>
  </div>
);
  }

export default App;