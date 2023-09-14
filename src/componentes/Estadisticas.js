import React from 'react'

export const Estadisticas = ({siNombreJugador, siEleccionJugador, siNuevaJugadaPC, siResultado}) => {
  return (
    <div className='EleccionJugadas'>
        <h2>Estadistidas</h2>
        <p>Nombre del Jugador: {siNombreJugador}</p>
        <p>Eleccion del Jugador: {siEleccionJugador}</p>
        <p>Eleccion de la PC: {siNuevaJugadaPC}</p>
        <p>Resultado de Ronda: {siResultado}</p>
    </div>
  )
}
