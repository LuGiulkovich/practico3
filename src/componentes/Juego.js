import React, { useState } from 'react';

export const Juego = ({siEleccionJugador, siCambiarELeccionPC, siCambiarResultadoRonda}) => {

  /** Estados  */
  const [eleccionPC, setEleccionPC] = useState('');
  const [resultadoRonda, setResultadoRonda] = useState('');
  /** Estado para contar las rondas */
  const [numRonda, setNumRonda] = useState(0);

  /** --- Variables --- */
  /** Guarda un numero random entre 0, 1 y 2 */
  let numAleatorio;
  /** Guarda el numero aleatorio anterior para definir la opcion de la PC */
  let puntoPC;
  /** Contiene el string del nombre de la opcion de la PC */
  let opcionPC;
  /** Contiene el resultado */
  let resultado = '';


  let puntajePC = 0;
  let puntajeJugador = 0;

  /** Devuelve el numero aleatorio y declara la opcion de la PC correspondiente */
  const jugadaAleatoria = () => {

    numAleatorio = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    /** Declaro que significa cada numero obtenido por el numAleatorio */
    if (numAleatorio === 0) {
      opcionPC = 'Piedra';
    } else if (numAleatorio === 1) {
      opcionPC = 'Papel';
    } else {
      opcionPC = 'Tijeras';
    }

    /** Le doy al estado la opcion obtenida */
    setEleccionPC(opcionPC);
    /** Y la mando al componente padre a traves de una funcion */
    siCambiarELeccionPC(opcionPC);
    /** Guardo el numero aleatorio en otra variable para usarla de comparador */
    puntoPC = numAleatorio;
  }

  /** Funcion que suma en 1 el puntaje del jugador */
  const sumaU = () => {
    puntajeJugador += 1;
  }

  /** Funcion que suma en 1 el puntaje de la PC */
  const sumaP = () => {
    puntajePC += 1;
  }

  const sumarRonda = () => {
    setNumRonda(numRonda + 1);
  }

  /** Funcion que contiene el juego */
  const juego = () => {
    sumarRonda();
    /** Genero el numero aleatorio */
    jugadaAleatoria();

    /** Determinador del ganador de cada ronda */
    if (siEleccionJugador === 'Piedra') {
      if (puntoPC === 0) {
        resultado = 'Empate';
      } else if (puntoPC === 1) {
        resultado = 'Perdiste';
        sumaP();
      } else if (puntoPC === 2) {
        resultado = 'Ganaste';
        sumaU();
      }
    } else if (siEleccionJugador === 'Papel') {
      if (puntoPC === 0) {
        resultado = 'Ganaste';
        sumaU();
      } else if (puntoPC === 1) {
        resultado = 'Empate';
      } else if (puntoPC === 2) {
        resultado = 'Perdiste';
        sumaP();
      }
    } else if (siEleccionJugador === 'Tijeras') {
      if (puntoPC === 0) {
        resultado = 'Perdiste';
        sumaP();
      } else if (puntoPC === 1) {
        resultado = 'Ganaste';
        sumaU();
      } else if (puntoPC === 2) {
        resultado = 'Empate';
      }
    }

    

    /** Le doy un nuevo valor al estado del resultado */
    setResultadoRonda(resultado);
    /** Y la mando al componente padre */
    siCambiarResultadoRonda(resultado);

    /** --- VERIFICACION POR CONSOLA --- */
    console.clear();
    console.log('Ronda: ' + numRonda);
    console.log('El jugador elige: ' + siEleccionJugador);
    console.log('Numero pc: ' + puntoPC);
    console.log('Eleccion pc: ' + opcionPC);
    console.log('Resultado de la ronda: ' + resultado);
    console.log('Puntaje del jugador: ' + puntajeJugador);
    console.log('Puntaje de la PC: ' + puntajePC);
  }

  return (
    <div className='Btn-Jugar'>
      <button className='Espacio-Btns'
        onClick={() => {
          juego();
        }}>Jugar</button>
    </div>
  )
}
