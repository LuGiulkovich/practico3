import React, { useState, useEffect } from 'react';
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
  const [mostrar, setMostrar] = useState(false);

  /** Funcion para cambiar el nombre del jugador en App */
  const cambiarNombreJugador = (nombreJugador) => {
    if (nombreJugador === '') {

    }
    setNombreJugador(nombreJugador);
  }

  /** Funcion para cambiar la eleccion del jugador en App */
  const cambiaEleccionJugador = (eleccionJugador) => {
    setEleccionJugador(eleccionJugador);
  }

  /** Funcion para cambiar la eleccion de la PC */
  const cambiarEleccionPC = (eleccionPC) => {
    setEleccionPC(eleccionPC);
  }

  /** Funcion para cambiar el resultado de la ronda y sumar los puntajes */
  const cambiarResultadoRonda = (resultadoRonda) => {
    setResultadoRonda(resultadoRonda);
    if (resultadoRonda === 'Ganaste') {
      setPuntajeU(puntajeU + 1);
    } else if (resultadoRonda === 'Perdiste') {
      setPuntajeP(puntajeP + 1);
    }
  }

  /** Funcion para cambiar la ronda */
  const cambiarRonda = (ronda) => {
    setNumeroRonda(ronda)
  }

  /** Funcion para desactivar el boton Jugar */
  const desactivarBtn = (btn) => {
    setBtn(btn)
  }

  /** Funcion para reiniciar los estados del juego */
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

  /* Funcion para hacer aparecer el mensaje del ganador :') */
  useEffect(() => {
    if (puntajeP === 3 || puntajeU === 3) {
      setMostrar(true);
    } else {
      setMostrar(false);
    }
  }, [puntajeP, puntajeU]);

  /* Constante para agregar o no la clase */
  const agregarClase = mostrar ? 'App-ganadorMostrar' : 'App-ganador'; 

  return (
    <div className='App' id='App'>
      <div className={agregarClase}>
        <Ganador siNombreJugador={nombreJugador}
          siPuntajeU={puntajeU}
          siPuntajeP={puntajeP}
          siDesactivar={desactivarBtn}
        />
        <button className='App-btn' onClick={reiniciarJuego}>Volver a Empezar</button>
      </div>
      <div className='App-sacar' id='App-sacar'>
        <div className='App-orden'>
          <div className='App-juego'>
            <h1 className='App-header'>Juego de Piedra, Papel y Tijeras</h1>
            <InterfazUsuario siCambiarNombreJugador={cambiarNombreJugador} />
            <EleccionJugadas siCambiarEleccionJugador={cambiaEleccionJugador} />
            <Juego siEleccionJugador={eleccionJugador}
              siCambiarELeccionPC={cambiarEleccionPC}
              siCambiarResultadoRonda={cambiarResultadoRonda}
              siCambiarRonda={cambiarRonda}
              siBtn={btn}
            />
          </div>
          <div className='App-estadisticasCostado'>
            <Estadisticas siNombreJugador={nombreJugador}
              siEleccionJugador={eleccionJugador}
              siEleccionPC={eleccionPC}
              siResultado={resultadoRonda}
              siRonda={numeroRonda}
              siPuntoJugador={puntajeU}
              siPuntoPC={puntajeP}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;