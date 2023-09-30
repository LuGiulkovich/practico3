import React, { useState } from 'react';

/** Componente que muestra la opcion elegida, tanto del boton del usuario como la de la pc */
export const EleccionJugadas = ({ siCambiarEleccionJugador }) => {
  /** Este estado devuelve el texto del boton. String */
  const [eleccionJugador, setEleccionJugador] = useState('');

  /** Creo una funcion que me actualice el valor del boton seleccionado */
  const handleClick = (textoBoton) => {
    setEleccionJugador(textoBoton);
    siCambiarEleccionJugador(textoBoton);
  }

  return (
    <div className='EleccionJugadas'>
      <h2 className='EleccionJugadas-h2'>Opciones de Juego</h2>
      <div className='EleccionJugadas-opciones'>
        <button className='btn-piedra EleccionJugadas-btn' 
                onClick={() => handleClick('Piedra')}></button>
        <button className='btn-papel EleccionJugadas-btn' 
                onClick={() => handleClick('Papel')}></button>
        <button className='btn-tijeras EleccionJugadas-btn'
                onClick={() => handleClick('Tijeras')}></button>
      </div>

    </div>
  )
}
