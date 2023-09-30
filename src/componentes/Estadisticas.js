import React from 'react'

export const Estadisticas = ({siNombreJugador, siEleccionJugador, siEleccionPC, siResultado, siRonda, siPuntoJugador, siPuntoPC}) => {
  
  return (
    <div className='Estadisticas'>
      <div className='rojo'>
        <h2>Ronda {siRonda}</h2>
      </div>
        <p>Nombre del Jugador:</p>
        <h2 className='Estadisticas-nombre'>{siNombreJugador}</h2>
        <p>Eleccion del Jugador:</p>
        <p>{siEleccionJugador}</p>
        <div></div>
        <p>Eleccion de la PC:</p>
        <p>{siEleccionPC}</p>
        <p>Resultado de Ronda:</p>
        <h2>{siResultado}</h2>
      <div className='rojo'>
        <h2>Puntaje</h2>
      </div>
        <p>Jugador: {siPuntoJugador}</p>
        <p>PC: {siPuntoPC}</p>
    </div>
  )
}
