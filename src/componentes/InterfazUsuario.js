import React, { useState } from 'react';
import { NombreInvalido } from './NombreInvalido';

/** Creo el componente InterfazUsuario */
/** Este componente recibe un prop para cambiar el nombre */
export const InterfazUsuario = ({ siCambiarNombreJugador }) => {
    const [nombreJugador, setNombreJugador] = useState('');
    const [mostrarNombre, setMostrarNombre] = useState(false);
    const [btnNo, setBtnNo] = useState(false);

    /** Esta funcion toma el nombre ingresado por el input y la guarda
    y tambien valida que el campo sea correcto
    Sin numero ni espacios o campo vacio*/
    const cambiarNombre = (e) => {
        if (/^[a-zA-Z]+$/.test(e.target.value)) {
            setMostrarNombre(false);
            setBtnNo(false);
          } else {
            setMostrarNombre(true);
            setBtnNo(true);
          }
        setNombreJugador(e.target.value);
    }

    /* Agrego la clase para que se muestre el warning o no */
    const mostrarWarning = mostrarNombre ? 'warning-mostrar' : 'warning';

    return (
        <div className='InterfazUsuario'>
            <label className='InterfazUsuario-label'>
                Ingresa tu Nombre:
                <input
                    className='InterfazUsuario-input'
                    type='text'
                    value={nombreJugador}
                    onChange={cambiarNombre}
                />
                <button 
                    className='InterfazUsuario-btn' 
                    onClick={() => siCambiarNombreJugador(nombreJugador)}
                    disabled={btnNo}>
                    Confirmar Nombre
                </button>
            </label>
            <div className={mostrarWarning}>
              <NombreInvalido />
            </div>
        </div>
    );
}
