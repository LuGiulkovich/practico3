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

### 4to Error: Don funciones en un solo botón
Tuve problemas para hacer que el boton de "Jugar" comenzara el juego. Mi codigo era este:

~~~
const jugadaAleatoria = () => {
    setEleccionPC(Math.floor(Math.random() * (2 - 0 + 1) + 0));
    siJugadaAleatoria(eleccionPC);
    siEmpezarJuego();
  }
~~~

Hasta que lo cambie de lugar para corregirlo.

~~~
<button
  onClick={() => {
    jugadaAleatoria();
    siEmpezarJuego();
}}>Jugar</button>
~~~

>Me funciona pero me da un delay en la aparicion de la opcion de la pc.

### 5to Error: No aparece el primer valor de mi estado

#### Delay en la opcion obtenida por la PC

Logré que el juego me mostrara la opcion elegida por la PC (tanto el nombre de la opcion como el numero para comprarar con el del usuario). Pero al momento de empezar a juhgar, en la primer partida no me muestra el nombre de la opcion en pantalla. Pero solo esta primer partida es la que no me la muestra.

>Arreglar aparicion de la opcion de la pc.

Para arreglar este problemilla hice lo siguiente:

~~~
const jugadaAleatoria = (numeroPC) => {
    if (numeroPC === 0) {
      setNuevaJugadaPC('Piedra');
    }
}
~~~

En App.js a la funcion que me recibe el numero del componente que me genera el numero aleatorio le agregué un nuevo estado dependiendo de cual haya sido ese numero. En este caso piedra y me lo da a nuevo valor actualizado.

#### Delay en la aparicion del resultado

Como en el anterior caso, el resultado de la ronda tarda un "render" en aparecer por pantalla.

>Arreglar aparicion del resultado de la ronda.