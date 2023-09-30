import React from 'react'

export const Ganador = ({ siPuntajeU, siPuntajeP, siNombreJugador, siDesactivar}) => {

    const verdad = true;

    /** Valiable para mostrar dependiendo del ganador */
    let ganador = '';

    if (siPuntajeU === 3) {
        ganador = siNombreJugador;
        /** Acá le envio un booleano a App.js */
        siDesactivar(verdad);
    } else if (siPuntajeP === 3) {
        ganador = 'PC';
        siDesactivar(verdad);
    }

    return (
        <div className='Ganador'>
            <p>Ganador: {ganador}</p>
        </div>
    )
}