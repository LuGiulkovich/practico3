import React, { useState } from 'react';

export const JugadaPC = ({siJugadaAleatoria, siEmpezarJuego, siEleccionMaquina}) => {
    /** Estado para la opcion de la PC */
    const [numeroPC, setNumeroPC] = useState(0);
    const [eleccionPC, setEleccionPC] = useState('');

    /** Funcion para la jugada aleatoria */
  const jugadaAleatoria = () => {
    setNumeroPC(Math.floor(Math.random() * (2 - 0 + 1) + 0));
    siJugadaAleatoria(numeroPC);
  }

  const nombreEleccionPC = () => {
    if (numeroPC === 0) {
      setEleccionPC('Piedra');
    } else if (numeroPC === 1) {
      setEleccionPC('Papel');
    } else if (numeroPC === 2) {
      setEleccionPC('Tijeras');
    }
    siEleccionMaquina(eleccionPC);
  }

  return (
    <div>
        <button onClick={() => {
          jugadaAleatoria();
          nombreEleccionPC();
          siEmpezarJuego();
        }}>Jugar</button>
    </div>
  )
}
