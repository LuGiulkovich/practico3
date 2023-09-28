import React, { useState } from 'react'

export const Ganador = ({siPuntajeU, siPuntajeP, siNombreJugador, siDesactivar}) => {

    const [btn, setBtn] = useState(true);

    let ganador = '';


    if (siPuntajeU === 3) {
        ganador = siNombreJugador;
        siDesactivar(btn);
    } else if (siPuntajeP === 3) {
        ganador = 'PC';
        siDesactivar(btn);
    }

  return (
    <div className='EleccionJugadas'>
        <h1>Ganador</h1>
        <p>{ganador}</p>
    </div>
  )
}