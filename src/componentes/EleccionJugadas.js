import React, { useState } from 'react';

/** Componente que muestra la opcion elegida, tanto del boton del usuario como la de la pc */
export const EleccionJugadas = ({siCambiarEleccionJugador, siJugadaAleatoria}) => {
  /** Este estado devuelve el texto del boton. String */
  const [eleccionJugador, setEleccionJugador] = useState('');
  const [eleccionPC, setEleccionPC] = useState(0);

  /** Creo una funcion que me actualice el valor del boton seleccionado */
  const handleClick = (textoBoton) => {
    setEleccionJugador(textoBoton);
    siCambiarEleccionJugador(textoBoton);
  }

  /** Funcion para la jugada aleatoria */
  const jugadaAleatoria = () => {
    setEleccionPC(Math.floor(Math.random() * (2 - 0 + 1) + 0));
    siJugadaAleatoria(eleccionPC);
}

  return (
    <div className='EleccionJugadas'>
      <h2>Opciones de Juego</h2>
      <button onClick={() => handleClick('Piedra')}>Piedra</button>
      <button onClick={() => handleClick('Papel')}>Papel</button>
      <button onClick={() => handleClick('Tijeras')}>Tijeras</button>
      <button onClick={jugadaAleatoria}>Jugar</button>
    </div>
  )
}
