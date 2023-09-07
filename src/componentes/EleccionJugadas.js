import React, { useState } from 'react';

/** Componente que muestra la opcion elegida,
 * tanto del boton del usuario como la de la pc */
export const EleccionJugadas = () => {
  /** Declaros los estados que voy a utilizar */
  const [valorBoton, setValorBoton] = useState('');
  const [valorPc, setValorPc] = useState(0);
  const [opcionPc, setOpcionPc] = useState('');

  /** Funcion que genera la jugada aleatoria de la Pc */
  function jugadaPc() {
    /** Actualizo el valor que genera la pc */
    setValorPc(Math.floor(Math.random() * (2 - 0 + 1) + 0));
    /** Si la la opcion es 0 */
    if (valorPc === 0) {
      /** actiualizo el valor de la opcion de la pc */
      setOpcionPc('Piedra');
    } else if (valorPc === 1) {
      setOpcionPc('Papel');
    } else if (valorPc === 2) {
      setOpcionPc('Tijeras');
    }
  };

  /** Creo una funcion flecha que me actualice el valor del boton seleccionado */
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
      <p>La opcion de la Pc es: {opcionPc}</p>
    </div>
  )
}
