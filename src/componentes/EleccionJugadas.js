import React, { useState } from 'react';

export const EleccionJugadas = () => {
  const [valorBoton, setValorBoton] = useState('');

  const handleClick = (textoBoton) => {
    setValorBoton(textoBoton);
  }

  return (
    <div className='EleccionJugadas'>
      <h2>Elección de Jugada</h2>
      <button onClick={() => handleClick('Piedra')}>Piedra</button>
      <button onClick={() => handleClick('Papel')}>Papel</button>
      <button onClick={() => handleClick('Tijeras')}>Tijeras</button>
      <p>Opcion Elegida: {valorBoton}</p>
    </div>
  )
}
 