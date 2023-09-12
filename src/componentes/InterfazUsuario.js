import React, { useState } from 'react';

/** Creo el componente InterfazUsuario */
/** Este componente recibe un prop para cambiar el nombre */
export const InterfazUsuario = ({siCambiarNombreJugador}) => {
    const [nombreJugador, setNombreJugador] = useState('');

    /** Esta funcion toma el nombre ingresado por el input y la guarda */
    const cambiarNombre = (e) => {
        setNombreJugador(e.target.value);
    }

    return (
        <div className='InterfazUsuario'>
            <label>
                Ingresa tu Nombre:
                <input 
                    type='text' 
                    value={nombreJugador} 
                    onChange={cambiarNombre} 
                />
            </label>
            <button onClick={ () => siCambiarNombreJugador(nombreJugador)}>
                Confirmar Nombre
            </button>
        </div>
    );
}
