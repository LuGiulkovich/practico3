import React, { useState } from 'react';

export const Juego = ({siEleccionJugador}) => {
  /** Estados para la PC */
  const [puntoPC, setPuntoPC] = useState(0);
  /** Estados para el Usuario */
  const [puntoJugador, setPuntoJugador] = useState(0);

  const [ronda, setRonda] = useState(0);

  let resultado = '';
  let numAleatorio;
  let opcionPC = '';

  /** Devuelve el numero aleatorio y declara la opcion de la PC correspondiente */
  const jugadaAleatoria = () => {

    numAleatorio = Math.floor(Math.random() * (2 - 0 + 1) + 0);

    if (numAleatorio === 0) {
      opcionPC = 'Piedra';
    } else if (numAleatorio === 1) {
      opcionPC = 'Papel';
    } else {
      opcionPC = 'Tijeras';
    }

    setPuntoPC(numAleatorio);
  }

  const sumaU = () => {
    setPuntoJugador(puntoJugador + 1);
  }

  const sumaP = () => {
    setPuntoPC(puntoPC + 1);
  }

  const juego = () => {
    jugadaAleatoria();

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
    setRonda(ronda + 1);

    console.log('Ronda: ' + ronda);
    console.log('El jugador elige: ' + siEleccionJugador);
    console.log('Numero pc: ' + puntoPC);
    console.log('Eleccion pc: ' + opcionPC);
    console.log('Resultado de la ronda: ' + resultado);

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
