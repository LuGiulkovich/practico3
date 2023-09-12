import React, { useState } from 'react';
import './App.css';
import { InterfazUsuario } from './componentes/InterfazUsuario';

function App() {
  /** Creo los estados */
  const [nombreJugador, setNombreJugador] = useState('');

  /** Funcion para cambiar el nombre del jugador en App */
  const cambiarNombreJugador = (nombreJugador) => {
    setNombreJugador(nombreJugador);
  }

    return (
      <div className="App" id="App">
        <h1>Juego de Piedra, Papel y Tijeras</h1>
        <InterfazUsuario siCambiarNombreJugador={cambiarNombreJugador}/>
        <p>Nombre del Jugador: {nombreJugador}</p>
      </div>
    );
  }

  export default App;