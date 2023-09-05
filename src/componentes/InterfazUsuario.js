import React, { useState } from 'react';

/** Creo el componente InterfazUsiario */
export const InterfazUsuario = () => {
    const [nombre, setNombre] = useState('');

    /** Agrego una funcion para determinar que el campo ingresado no esté vacio */
    const cambiarNombre = (nuevoNombre) => {
        if (nuevoNombre === '') {
            /** Si el campo del imput está vacío */
            setNombre('No puede estar vacío');
            /** Me dice 'No puede estar vacío' */
            /** Ya que 'setNombre' actualiza el valor de 'nombre' */
        } else {
            /** Sino le da el valor del nombre ingresado a 'nombre' */
            setNombre(nuevoNombre);
        }
    }

    /** Este componente me retorna un div */
    return (
        /** Con la clase 'InterfazUsuario' */
        <div className='InterfazUsuario'>
            <h1>Piedra, Papel y Tijeras</h1>
            <p>Ingresa tu Nombre</p>
            <input type='text' onChange = {e => cambiarNombre(e.target.value)}/>

            <p>Mi nombre es:</p>
            <p>{nombre}</p>

            <button onClick={() => {
                console.log("El valor guardado en tu estado es: ", nombre);
            }}>Guardar Nombre</button>
        </div>
    );
}
