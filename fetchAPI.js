// JaveScript síncrono

console.log("Inicia Síncrono");
function dosSync (){
    console.log("Se ejecuta la función dos");
}

function unoSync(){
    console.log("Se ejecuta la función uno");
    dosSync();
    console.log("Se ejecuta el código tres")
}

unoSync();
console.log("Fin de síncrono");

/*
Ejemplos de tareas síncronas

-Promps
-Ciclos
-Invocaciones a funciones
-Eventlistener
-Condicionales

*/


// JavaScript asíncrono
console.log("Inicio de Asíncrono");
function dosAsync(){
    setTimeout(function(){
        console.log("Dos");
    }, 5000); //tiempo en milisegundos

    function unoAsync(){
        dosAsync();
        console.log("tres");
    }

    unoAsync();
    console.log("Fin de Asíncrono");
}

/*
- Función setTimeout
- Notificaciones de cierre de sesión en apps bancarias
- Spotify con su cola de reproducción
- Conexiones a servidor
- Cargos de APIs

*/

/*
Ya que entendemos que la asincronía nos servirá para conectarnos a un servido, y que sin importar la respuesta que este nos de (exitosa o no), o incluso el tiempo que tarde en responder (milisegundos o segundos), es necesario saber que hay varios mecanismos para manejar operaciones asíncronas en JS.


    -Calbacks (Llamadas de vuelta): La forma más clasica de gestionar la asincronía

    -Promises (promesas): forma moderna

    -Async/Await: forma moderna con sintaxis más ligera

*/


/*
Callback (Llamada de vuelta)

Un callback es una función que se pasa como argumento a otra función. Esta función se ejecutará después de que la otra lo haga. Este mecanismo nos ayuda a controlar que cierto código no se ejecute antes de que el otro termine.

Para qué las necesitamos?
Sabemos que JS trabaja de forma descendente, entonces hab´ra casos que queramos hacer que un código se ejecute después de que ocurra otra cosa, y tambien de forma no secuencial.

*/

function hazClick(){
    console.log("Le hiciste click al bbotón");
}

const boton = document.getElementById("boton");
boton.addEventListener("click",hazClick);


//Ejemplo de Callback


//Defino una función que toma un número y un callback (función) como parámetros
function dobleNumero(num,callback){
    const resultado = num*2; //operación común y corriente
    callback(resultado); //invocación de ese callback con el resultado como parámtro
}

//Definir una finción para mostrar el resultado
function mostrarResultado(resultado){
    console.log("El ressultado es: ", resultado);
}

dobleNumero (5, mostrarResultado);


