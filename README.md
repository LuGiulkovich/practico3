# Remodel de Piedra, Papel y Tijeras con React

Este proyecto está destinado a aplicar los conocimientos vistos sobre React, haciendo un remodel del tradicional juego Piedra, Papel y Tijeras.

Aquí está el link para entrar:
* [practico3] (https://lugiulkovich.github.io/practico3/)

## Prueba y error

### 1er Error: Estados

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

### 2do Error: Input
Me pasaba que al cambiar el nombre del usuario se cambia de todos lados y se renderizaba todo, asique probé con dejarlo en el componente padre y quitarle el evento onChange.
Este era mi primer codigo:
~~~
<input type='text' onChange={e => cambiarNombre(e.target.value)} />
~~~
Y al hacerlo se solucionó.

### 3er Error: Botones de Opciones

Al oprimir el boton el componente me tira la opcion elegida, pero al queres pasarle ese dato al componente padre tiene "delay". Ya que cuando oprimo un boton no me dice nada, pero luego al oprimir otro (o el mismo) recién ahí me dice la opcion que habia elegido antreiormente.

Este era mi codigo:

~~~
const handleClick = (textoBoton) => {
    setEleccionJugador(textoBoton);
  }
~~~

Y también por consola me salía este error:

>Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.

Mi error estaba en que el boton que llamaba esta funcion le habia agregado tambien un prop que guardaba la opcion elegida por el jugador pero la cambié de luegar y la puse dentro de la funcion "handleClick", de esta forma al oprimir el boton se ejecutaria todo al mismo tiempo y el delay desaparecería.

~~~
const handleClick = (textoBoton) => {
    setEleccionJugador(textoBoton);
    // Esta es la prop que actualiza la opcion del jugador
    siCambiarEleccionJugador(textoBoton);
  }
~~~
