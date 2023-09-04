import React, {useState} from 'react';

export const InterfazUsuario = () => {
    const [nombre, setNombre] = useState('Luciano Giulkovich');

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

    return (
        <div className='InterfazUsuario'>
            <h1>Piedra, Papel y Tijeras</h1>
            <p>Ingresa tu Nombre</p>
            <input type='text' onChange={e => cambiarNombre(e.target.value)}/>

            <p>Mi nombre es: <strong className={nombre.length >=4 ?'verde' : 'rojo'}>{nombre}</strong></p>

            <button onClick={e => {
                console.log("El valor guardado en tu estado es: ", nombre);
            }}>Guardar Nombre</button>

        </div>
    );
}
