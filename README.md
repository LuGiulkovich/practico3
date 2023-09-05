# Remodel de Piedra, Papel y Tijeras con React

Este proyecto está destinado a aplicar los conocimientos vistos sobre React, haciendo un remodel del tradicional juego Piedra, Papel y Tijeras.

Aquí está el link para entrar:
* [practico3] (https://lugiulkovich.github.io/practico3/)

## Aprendiendo sobre la marcha

### Estados de React
Quiero dejar escrito los problemas que tuve utilizando los estados de React.

#### 1

Este fue mi primer intento de utilizar los estados de React.
~~~
const [eleccion, setEleccion] = useState('nada');
  return (
    <div className='EleccionJugadas'>
        <h1>Eleccion de Jugada</h1>
        <button onClick={() => setEleccion(eleccion + ' piedra')}>{eleccion} Piedra</button>
  )
~~~
No entendía muy bien el concepto de estados hasta que me topé con este codigo que hice.
Resulta que cuando hace conts [eleccion, setEleccion] = useState('nada);
En mi boton aparecía la palabra "nada" y cuando oprimía se agregaba "piedra". 
En resumen "eleccion" toma lo que tiene como parámetro "useState" y con el evento "onClick" "setEleccion" me agrega la palabra piedra xD.

## Prueba y Error



