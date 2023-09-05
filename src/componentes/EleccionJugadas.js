import React, { useState } from 'react';

export const EleccionJugadas = () => {
  const [valorBoton, setValorBoton] = useState('');
  const [valorPc, setValorPc] = useState(0);

  function jugadaPc() {
    setValorPc(Math.floor(Math.random() * (2 - 0 + 1) + 0));
  } 

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
      <button onClick={jugadaPc}>Jugar</button>
      <p>La opcion de la Pc es: {valorPc}</p>
    </div>
  )
}
 