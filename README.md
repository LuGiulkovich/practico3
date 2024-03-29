# Remodel de Piedra, Papel y Tijeras con React

Este proyecto está destinado a aplicar los conocimientos vistos sobre React, haciendo un remodel del tradicional juego Piedra, Papel y Tijeras.

Aquí está el link para entrar:
* [practico3] (https://lugiulkovich.github.io/practico3/)

## Reglas 

* Ingresar un nombre de jugador:
** Este no puede contener numeros, espacios o estar vacio.
* Elegir una opcion:
** Parece obvio pero el juego no comenzará hasta elegir una opcion.
*El mejor de 5:
** Ganará quien sea el mejor de 5 puntos.

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

### 4to Error: Dos funciones en un solo botón
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

(UPDATE) 23/9/2023:

Lo cambie a todo para que en una sola funcion se ejecutaran tanton la jugada aleatoria como el juego en si.
~~~
<button
  onClick={() => {
    juego();
}}>Jugar</button>
~~~

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

(UPDATE) 23/9/2023: 

Logré solucionar este delay, la solucion fue crear una funcion que me llevara el dasto obtenido por el juego (que genera de forma aleatoria el resultado de la pc) a otra funcion el el compo ente padre que recibia y actualizaba ese dato para luego pasarlo al compente que contiene las estadisticas del juego.

#### Delay en la aparicion del resultado

Como en el anterior caso, el resultado de la ronda tarda un "render" en aparecer por pantalla.

> Arreglar aparicion del resultado de la ronda.

(UPDATE) 23/9/2023: 

Para solucionar esto volvi a hacer lo mismo que en la seccion anterior jaja.

#### Solucion a los delays

Bueno, simple y llanamente cambie todo mi código a una forma que me funcionara y de manera simple logré mantener actualizado los valores de los cuales tenia en delay jaja.
La solucion fue poner todo en variables para que se actualizaran al toque, ahora solo queda mandarlos al DOM.

(UPDATE) 23/9/20223:

La solucion para los delay que estaba teniendo era que no los llamaba correctamente ó no colocaba las funciones que me tomaban los vlaores de los datos que queria pasar entre componentes.

##### Conocimiento desbloqueado:

Antes de olvidarme acabo de darme cuenta de que el delay en la aparicion de los puntajes se debia a que yo llabama a la funcion juego la cual ejecutaba si yo ganaba mandaba un resultado y luego sumaba mi puntaje pero aparecia luego de la otra ronda porque al ganar se setea un nuevo valor a mi puntaje y luego se mostraba.

#### Las rondas no se suman
Tengo la siguiente linea de codigo:

~~~
let numeroRonda = 0;

const juego = () => {
  ...

  numeroRonda += 1;
}
~~~

Se supone que cada vez que haga click en el boton que ejecuta el juego el numero de rondas deberia aumentar, bueno no es el caso.

>Arreglar suma de variables

Para arreglar este problema lo que hice fue crear un estado para las Rondas en este caso y sumarlar en una funcion que luego la agregaria en la funcion que contiene el juego.

### Desabilitar Boton 

Quiero hacer que cuando uno de los dos "jugadores" gane la partida el boton de jugar se desbilite para volver a empezar pero me surgio un problema. Por pantalla me muestra el resultado de los jugadores pero cuando uno llega a los tres puntos me da la posibilidad de hacer otra jugada y recien ahí me desabilita el boton.

>Arreglar o mejorar el boton

(UPDATE) 28/9/2023:

Para arreglar este problema lo que hice fue:

* EL el componente Ganador.js cree un estado llamado "btn" con valor true.
* En App.js crear un estado tambien llamado "btn" pero con valor false.
* Cuando el jugador o la maquina lleguen a 3 puntos una funcion toma el valor true de Ganador.js
* Luego App.js lo toma y lo setea en el estado btn que estaba en false.
* Despues lo mando al componente Juego.js que contiene el boton de Jugar y lo desactiva con disabled=true;.

### Quitar el display:none;

Quería hacer aparecer el mensaje del ganador al ganar la partida y lo estaba haciendo con

~~~
document.getElementById('');
~~~

y agregarle una clase CSS para quitar el

~~~
display: none;
~~~

La solucion a este problema fue usar useEffect para validar la cantidad de puntos de los participantes y luego setear un estado llamado mostrar para que con una constante agregar o no la clase que quería y mandar este dato al componente correspondiente.

>*Llora de la alegría*

## Informacion utilizada

Para este practico me ayude con la info siguiente:

* [ChatGPT] (https://chat.openai.com/)

* [React Page] (https://react.dev/learn/react-developer-tools)

* [Validacion Input] (https://www.youtube.com/watch?v=s3pC93LgP18&t=919s)

* [useEffect] (https://www.youtube.com/watch?v=tu2p6Oiq3VI)

* [Argentina Programa] (https://sites.google.com/unc.edu.ar/argentinaprograma/p%C3%A1ginas-web-con-componentes-din%C3%A1micos/videos/teoricos)

*