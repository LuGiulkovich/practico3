import React from 'react'

export const Estadisticas = ({siNombreJugador, siEleccionJugador, siNuevaJugadaPC, siResultado, siRonda, siPuntoJugador, siPuntoPC}) => {
  return (
    <div className='EleccionJugadas'>
        <h2>Estadisticas</h2>
        <h3>Ronda {siRonda}</h3>
        <p>Nombre del Jugador: {siNombreJugador}</p>
        <p>Eleccion del Jugador: {siEleccionJugador}</p>
        <p>Eleccion de la PC: {siNuevaJugadaPC}</p>
        <p>Resultado de Ronda: {siResultado}</p>
        <h3>Puntaje</h3>
        <p>Jugador: {siPuntoJugador}</p>
        <p>PC: {siPuntoPC}</p>
    </div>
  )
}
