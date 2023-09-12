import React, { useState } from 'react';

export const JugadaPC = ({siJugadaAleatoria}) => {
    const [eleccionPC, setEleccionPC] = useState(0);

    /** Funcion que genera la jugada aleatoria de la Pc */
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
