import React, { useState } from 'react';

export const JugadaPC = ({siJugadaAleatoria, siEmpezarJuego}) => {
    /** Estado para la opcion de la PC */
    const [numeroPC, setNumeroPC] = useState(0);

    /** Funcion para la jugada aleatoria */
  const jugadaAleatoria = () => {
    setNumeroPC(Math.floor(Math.random() * (2 - 0 + 1) + 0));
    siJugadaAleatoria(numeroPC);
  }

  return (
    <div className='Btn-Jugar'>
        <button className='Espacio-Btns'
        onClick={() => {
          jugadaAleatoria();
          siEmpezarJuego();
        }}>Jugar</button>
    </div>
  )
}
