import React from 'react'

export const Ganador = ({siPuntajeU, siPuntajeP, siNombreJugador}) => {

    let ganador = '';

    if (siPuntajeU === 3) {
        ganador = siNombreJugador;
    } else if (siPuntajeP === 3) {
        ganador = 'PC';
    }

  return (
    <div className='EleccionJugadas'>
        <h1>Ganador</h1>
        <p>{ganador}</p>
    </div>
  )
}
