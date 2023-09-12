import React, { useState } from 'react';

export const JugadaPC = ({siJugadaAleatoria}) => {
    /** Estado para la opcion de la PC */
    const [eleccionPC, setEleccionPC] = useState(0);

    /** Funcion para la jugada aleatoria */
  const jugadaAleatoria = () => {
    setEleccionPC(Math.floor(Math.random() * (2 - 0 + 1) + 0));
    siJugadaAleatoria(eleccionPC);
  }

  return (
    <div>
        <button onClick={jugadaAleatoria}>Jugar</button>
    </div>
  )
}
