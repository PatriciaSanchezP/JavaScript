// JaveScript síncrono

console.log("Inicia Síncrono");
function dosSync() {
    console.log("Se ejecuta la función dos");
}

function unoSync() {
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
function dosAsync() {
    setTimeout(function () {
        console.log("Dos");
    }, 5000); //tiempo en milisegundos

    function unoAsync() {
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
/*
function hazClick(){
    console.log("Le hiciste click al bbotón");
}

const boton = document.getElementById("boton");
boton.addEventListener("click",hazClick);
*/

//Ejemplo de Callback
//Defino una funcion que toma un número y un callback (funcion) como parametros.
//Creamos una función llamado dobleNumero, que toma un númeto y un callback como argumentos (el callback es una función)


//Defino una función que toma un número y un callback (función) como parámetros
function dobleNumero(num, callback) {
    const resultado = num * 2; //operación común y corriente
    callback(resultado); //invocación de ese callback con el resultado como parámtro
}

//Definir una finción para mostrar el resultado
function mostrarResultado(resultado) {
    console.log("El ressultado es: ", resultado);
}

dobleNumero(5, mostrarResultado);

/*
Promises (promesas)

Son otro mecanismo para manejar la asincronía, utilizar promesas hace que el cófigo sea más legible y práctico que el usar callbacks, y como su nombre lo indica, una promesa es algo que en un principio no sabemos si se va a cumplir, pero en el futuro pueden pasar varias cosas. La gran ventaja de utilizar promesas es que evitamos anidar muchas funciones, y usamos una sola función (método) para manejar los callbacks.

NOTA: Las promesas son objetos

promise.then

promise.catch

Las promesas tienen estados:

- Pendiente (pending): Es el estado inicial de nuestra promesa, aquí aún no tenemos resultados.

- fullfilled: Cuando la operación asíncrona se completa con éxito (resolve)

- Rejected (rechazo): Cuando la operación falla (reject)


También las promesas, al ser un objeto, tienen métodos

-then (function resolve): Ejecuta un callback llamado resolve cuando la promessa se cumple.

- catch(function reject): Ejecuta un callback llamado reject cuando la promesa se rechaza.

- then (resolve, reject): Puedo ejecutar las dos funciones en el mismo método then.

*/


//Creo una funcion llamada obtenerProductos para poder utilizar promesas y hacer la conexion a mi url para obtener datos
function obtenerProductos() {
    //cuando se ejecute la funcion, quiero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene dos funciones: una cuando se resuelve, y otra cuando se rechaza
    return new Promise(function (resolve, reject) { //el objeto maneja dos funciones (resuelto, rechazo)
        fetch('https://fakestoreapi.com/products') //direccion a donde me voy a conectar y buscar
            .then(function (response) { //espero respuestas...
                if (response.ok) { //propiedad booleana (si o no hay respuesta)
                    return response.json();//metodo para convertir la respuesta a un objeto .json
                } else { //si no...
                    throw new Error("Error al obtener los productos. Error 404! Servidor no encontrado"); //lanzo un nuevo error (404)
                }
            })
            .then(function (data) { //Si hay una respuesta, resuelvo la promesa (exitosa) y ya tengo mis datos para despues jugar con ellos
                resolve(data);
            })
            .catch(function (error) { //Si no hay una respuesta, resulvo con un rechazo.
                reject(error);
            });
    });
};


// Uso de la promesa

obtenerProductos()
    .then(function (resultado) {
        console.log(resultado);
    })

    .catch(function (error) {
        console.log(error);
    });


//Otro ejemplo de promesa para validar un nombre. Si el nombre que estoy evaluando coincide con un valor ya guardado previamente, entonces la promesa se resuelve correctamente. Si no, la promesa se rechaza y me muestra mensaje de error.

let nombre = "Felipe";

//que el objeto promesa tiene dos posibles soluciones
let promesaNombre = new Promise(function (resolve, reject) {
    if (nombre !== "Felipe") { //si el nombre es distinto de felipe...
        reject("Error, el nombre no es Felipe"); //Entonces rechaza la promesa
    } else { //si no...
        resolve("Que bien!, el nombre es correcto:" + nombre); //resuleve la promesa e imprime un dato
    }
});

console.log(promesaNombre); //


/* Ejemplo de la PokeAPI

Necesito

    - URL
    - Promesa (Con dos posibles caminos rechazo y resolución)
    - Si se resuelbe me traigo los datos de la api
    - si no, muestro un error

*/

//Primer bloque para la conexion del servidor
const obtenerPokemon = new Promise((resolve, reject) => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto') //me conecto y busco

        .then(respuesta => { //cuando se conecte...
            if (respuesta.ok) { //si la conexion es ok
                return respuesta.json(); //guardo el dato en .json
            } else { //si no me conecto...
                throw new Error("Error 404"); //muestro un error
            }
        })

        //segundo bloque (cuando ya me conecte al servidor y encontro la info)
        .then(datos => { //entonces esos datos...
            resolve(datos); //se usan como parametro de mi resolucion
        })

        //tercer bloque (solo en caso de que no se encuentra informacion)
        .catch(error => {
            reject("Mensaje de error, no encontramos tu pokemon" + error);
        });

});


//Ya que le di el mensaje a mi mesero (creacion de la promesa), ahora voy a poder mostrar la informacion si la promesa se resuelve (encuentra la info), o si se rechaza (no encuentra la info)

obtenerPokemon

    .then(pokemon => { //el valor pokemon = datos obtenidos del servidor en .json
        console.log("Pokemon obtenido", pokemon.name);
    })
    .catch(error => {
        console.log(error);
    });


/*
Fetch API

Es una interfaz de JS, que nos da un método llamado fetch, el cual nos permite manejra solicitudes HTTP (get, post, put, delete).

Cuadnoo usamos fetch API sabemos que de forma implícita estamos usando promesas, también sabemos que esa promesa se puede resolver o rechazar.

El método fetch toma una URL como argumento y devuelve una promesa que se resuelve como un objeto llamado "response", que incluye la respuesta de la solicitud (a parte de decirnos que la conexión es ok, "pega" la información de lo que estamos consultando)

Ya que tenemos el onjeto llamado "response", vamos a poder haceer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc.
*/

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(pokeRespuesta => { //cuando la promesa se resuelve, ejecutamos esta función
        return pokeRespuesta.json(); //esta función retorna la pokeInfo en un .json
    })

    .then(pokeInfo => { //Cuando la promesa de la conexion se resuelve, entonces ejecutamos esta otra funcion. Esta función guarda la información de la respuesta, y lo guardo en una nueva variables llamada pokeInfo.

        //Uso esa variable para hacer muchas cosas
        console.log("El nombre del pokemon es: ", pokeInfo.name, "Su número de la pokedex es: ", pokeInfo.id);

    })

    .catch(pokeError => {
        console.log("No encontramos nada de información", + pokeError);
    });

//Manipulación del DOM + Fetch API

const input = document.getElementById("inputPokemon");
const button = document.getElementById("botonPokemon");
const pokemonContainer = document.querySelector("#pokemonContainer")

button.addEventListener("click", (e) => {
    e.preventDefault(); //prevenir que el navegador se actualice
    traerPokemon(input.value); //ejecuta la funcion traerPokemon
}
);

function traerPokemon(nombrePokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)

        .then(respuesta => respuesta.json())

        .then((datos)=>{
            crearPokemon(datos);
        });
    }

    function crearPokemon(nombrePokemon){
        const pokeImg = document.createElement("img"); //creo una etiqueta img
        pokeImg.src = nombrePokemon.sprites.front_default; //font_default es el nombre de la propiedad donde está la imagen de mi pokemon

        const h2 = document. createElement ("h2"); //crea una etiqueta h2
        h2.innerHTML = nombrePokemon.name; //le pongo el nombre del pokemon a ese h2

        const pokeDiv = document.createElement("div"); //Creamos un div para poner mi pokemon

        //Inserto los elementos imagen y h2 a un div particular de cada pokemon
        pokeDiv.appendChild(pokeImg);
        pokeDiv.appendChild(h2);

        pokemonContainer.appendChild(pokeDiv);
    }




    