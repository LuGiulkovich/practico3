import React, { useState } from 'react';

/** Componente que muestra la opcion elegida, tanto del boton del usuario como la de la pc */
export const EleccionJugadas = ({siCambiarEleccionJugador}) => {
  /** Este estado devuelve el texto del boton. String */
  const [eleccionJugador, setEleccionJugador] = useState('');

  /** Creo una funcion que me actualice el valor del boton seleccionado */
  const handleClick = (textoBoton) => {
    setEleccionJugador(textoBoton);
    siCambiarEleccionJugador(textoBoton);
  }

  return (
    <div className='EleccionJugadas'>
      <h2>Opciones de Juego</h2>
      <button onClick={() => handleClick('Piedra')}>Piedra</button>
      <button onClick={() => handleClick('Papel')}>Papel</button>
      <button onClick={() => handleClick('Tijeras')}>Tijeras</button>
      <p>Eleccion Jugador: {eleccionJugador}</p>
    </div>
  )
}
