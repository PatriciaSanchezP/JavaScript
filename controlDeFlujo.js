/*

Control de FLujo


Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).


Condiciones

Son estructuras o condiciones que nos permiten modificar el órden natural de ejecución de nuestro programa. Son sentencias específicas que nos ayudarán a decidir si una condición se cumple o no (verdadero o falso), a partir de esta respuesta se ejecuta una o varias instrucciones.

Ejemplo

Tengo limpia mi playera de la suerte? //pregunta o instrucción que detona la condición.
    true: Entonces, vot a la fiesta //respuesta con su posible instrucción
    false: Entonces, me quedo a mimir //respuesta con su posible instrucción


*/

/*Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.

Estructura básica de un if

if (condicion){
    //Ejecuta este bloque de código
}

*/


//Felipe tiene 17 años y quiere ir a una fiesta. Dicha fiesta solo es para personas afultas (mayores de 18 años). Ayuda a Felipe a decidir si puede ir a la fiesta o no.

//Evaluamos solo una expresion (si Felipe tiene menos de 18 años), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).

let edadFelipe = 17; //
let edadPermitida = 18;

if (edadFelipe < edadPermitida){
    console.log("Lo siento Felipe, no puedes ir a la fiesta")
}


/*

Else (de otro modo = si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa.


Estructura básica del else

if(condición){
    //Este bloque se ejecuta si la condicion es verdadera
} else{
    //Este bloque se ejecuta si la condición es falsa. else es el fuente entre una función y otra.
}

*/

let edadAxel = true;
let edadParaEntrarALaFiesta = 18;

if(edadAxel < edadParaEntrarALaFiesta){
    console.log("Lo siento, no puedes entrar a la fiesta")
} else{
    console.log("Felicidades, tienes la edad permitida para entrar a la fiesta")
}

/* Test de nuestro programa (valores que también se evaluan como falsos)

    - "false" (Strinng)
    - NaN
    - false (boolean dispara verdadero)
    

*/

/*

Else if (además si / si no entonces)

Esta condicional nos ayuda a ejecutar una nueva condicion en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesairas, terminando con una estructura else.

Estructura básica del else if

if (condición 1){
    //bloque de código que se ejecuta si la conción 1 es verdadera
} else if (condición 2){
    //bloque de código que se ejecuta si la condición 1 es falsa y la condición 2 es verdadera
} else if (condición 3){
    //bloque de código que se ejecuta si la condición 1 es falsa y la condición 2 tambiénn es falsa
} else{
    //bloque de código que se ejecuta si la condición 1, 2 y 3 son falsas
}

Se pueden anidar x cantidad de else if entre el if que evalua la condición inicial y el else que termina toda la expresión.

*/

let hora = prompt("Ingrese la hora actual");
if (hora < 12){
    console.log("Buenos días");
} else if (hora <= 19){
    console.log("Buenas tardes ya, qué bárbaro como pasa el tiempo");
} else{
    console.log("Buenas noches, vamos a mimir");
}

/*Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables. 
Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.


 - case: Evalua el caso o condicion asociado que dispara un bloque de codigo
 - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
 - default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else)


switch (expresión o condición){
    case valor1:
        //Código que se ejecuta si la condición es igual a valor1
    break;

    case valor2:
        //Código que se ejecuta si la condición es igual a valor2
    break;

    case valor3:
        //Código que se ejecuta si la condición es igual a valor3
    break:

    case valor4:
        //Código que se ejecuta si la condición es igual a valor4
    break;

    case valor5:
        //Código que se ejecuta si la condición es igual a valor5
    break;

    default:
        //Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)

}
*/

//Ejemplo de Switch

let pisoDestino = prompt("Ingresa el piso al que quieras ir (1 al 5)");

switch(pisoDestino) {
    //para jugar con noestros casos, el tipo de dato debe coincidir para que se ejecute correctamente

    case "1":
        console.log("Vamos a piso 1 (suena música de elevador de fondo)");
        break;

    case "2":
        console.log("Vamos a piso 2 (suena música de elevador de fondo)");
        break;

    case "3":
        console.log("Vamos a piso 3 (suena música de elevador de fondo)");
        break;

    case "4":
        console.log("Vamos a piso 4 (suena música de elevador de fondo)");
        break;

    case "5":
       console.log("Vamos a piso 5 (suena música de elevador de fondo)");
       break;

       default:
        console.log("Ingresaste un piso que no es válido")

}

//Ejercicio de Eevee

var elementoEvolucion = prompt("Ingrese el elemento con el que evolucionaras a tu pokemon (piedraFuego, piedraTrueno, piedraAgua, esDeMañana, esDeNoche, rocaMusgo, rocaHielo o conoceMovimientoHada)");

switch (elementoEvolucion) {
    case "piedraFuego":
        console.log("Tu Eevee evoluciono a Flaereon");
        break;

    case "piedraTrueno":
        console.log("Tu Eevee evoluciono a Jolteon");
        break;

    case "piedraAgua":
        console.log("Tu Eevee evoluciono a Vaporeon");
        break;

    case "esDeMañana":
        console.log("Tu Eevee evoluciono a Espeon");
        break;

    case "esDeNoche":
        console.log("Tu Eevee evoluciono a Umbreon");
        break;

    case "rocaMusgo":
        console.log("Tu Eevee evoluciono a Leafeon");
        break;

    case "rocaHielo":
        console.log("Tu Eevee evoluciono a Glaceon");
        break;

    case "conoceMovimientoHada":
        console.log("Tu Eevee evoluciono a Sylveon");
        break;
    
    default:
        console.log("Se mantiene tu Eevee.");
        break;
}