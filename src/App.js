import React, { useState } from 'react';
import './App.css';
import { InterfazUsuario } from './componentes/InterfazUsuario';
import { EleccionJugadas } from './componentes/EleccionJugadas';
import { Juego } from './componentes/Juego';
import { Estadisticas } from './componentes/Estadisticas';

function App() {
  /** Creo los estados */
  const [nombreJugador, setNombreJugador] = useState('');
  const [eleccionJugador, setEleccionJugador] = useState('');
  const [eleccionPC, setEleccionPC] = useState('');
  const [resultadoRonda, setResultadoRonda] = useState('');

  /** Funcion para cambiar el nombre del jugador en App */
  const cambiarNombreJugador = (nombreJugador) => {
    setNombreJugador(nombreJugador);
  }

  /** Funcion para cambiar la eleccion del jugador en App */
  const cambiaEleccionJugador = (eleccionJugador) => {
    setEleccionJugador(eleccionJugador);
  }

  const cambiarEleccionPC = (eleccionPC) => {
    setEleccionPC(eleccionPC);
  }

  const cambiarResultadoRonda = (resultadoRonda) => {
    setResultadoRonda(resultadoRonda);
  }
  
    return (
      <div className="App" id="App">
        <h1 className='App-header'>Juego de Piedra, Papel y Tijeras</h1>
        <InterfazUsuario siCambiarNombreJugador={cambiarNombreJugador}/>
        <EleccionJugadas siCambiarEleccionJugador={cambiaEleccionJugador}/>
        <Juego siEleccionJugador={eleccionJugador}
          siCambiarELeccionPC={cambiarEleccionPC}
          siCambiarResultadoRonda={cambiarResultadoRonda}
        />
        <Estadisticas siNombreJugador={nombreJugador}
          siEleccionJugador={eleccionJugador}
          siEleccionPC={eleccionPC}
          siResultado={resultadoRonda}
        />
      </div>
    );
  }

  export default App;