/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/

// Arreglos (objeto)
var casaArreglo = [3, 2, 1, "Rojo"]; //

// Objeto Casa
const casa = { numHabitaciones: 3, numPisos: 2, numBaños: 1, color: "Rojo", };


// Para imprimir la inforación de un objeto, utilizo la referencia al objeto, después un punto, y por último el nombre de la propiedad o método que quiero mostrar

console.log("El color de mi casa es: ", casa.color);

// Plantilla para repetir 50 veces la misma casa (estandarizar esa producción en cadena)

// Clase para generar una plantilla, ésta plantilla va a tener predefinidas las llaver (keys) de nuestras propiedades, y cada que instancie o cree un nuevo objeto, esa información se va a ir personalizando.

class casaPlantilla {

    // 1. Definir mis propiedades como variables, para posteriormente agregarle valores

    numHabitaciones = 0;
    numBaños = 0;
    numPisos = 0;
    color = "";

    // 3. Definir una función constructora. Esta función es una función especial que se dedica única y exclusivamente a tomar los datos que definimos como variables, para usarlas como parámetros de construcción y así poder instanciar nuestro objeto.
    constructor(numHabitaciones, numBaños, numPisos, color) {
        this.numHabitaciones = numHabitaciones;
        this.numBaños = numBaños;
        this.numPisos = numPisos;
        this.color = color;
    }


    // 2. Definimos los métodos como funciones, porque estas funciones nos dicen qué es lo que puede hacer mi objeto

    encenderLuces() {
        console.log("Click, luces encendidas");
    }

    abrirVentanas() {
        console.log("Swiiift, ventanas abiertas");

    }

    guardarmeEnElFresnito() {
        console.log("Que agusticidad edá?");
    }

    imprimirInfoDeLaCasa() {
        console.log("El número de habitaciones es de: ", this.numHabitaciones);
    }

}

// En la clase definimos todo de forma "normal" (declaran las variables como normalmente las usamos "=" y ";", pero cuando el objeto se crea (instancia), se visualiza de otra forma con ":" y "," entre cada valor.)

/*Instanciar objetos

Para instanciar objets, usamos la siguiente sintaxis:


variable con nombre = palabraReservadaNew referenciaDeLaClase (parametros de construccion);

let objeto = new ClaseObjeto (parametros);

*/

let casaDeFelipe = new casaPlantilla(6, 3, 3, "Azul");

console.log(casaDeFelipe);
casaDeFelipe.encenderLuces();
casaDeFelipe.guardarmeEnElFresnito();
casaDeFelipe.imprimirInfoDeLaCasa();

let casaDePaty = new casaPlantilla(5, 2, 3, "Verde");

console.log(casaDePaty);

// Ejemplo de POO con gatitos

class gatitos {
    // 1. Propiedades
    nombre = "";
    edad = "";
    tamaño = "";
    caracter = "";
    numeroVidas = 0;
    raza = "";
    vacunas = false;

    // 3. Constructor
    constructor(nombre, edad, tamaño, caracter, numeroVidas, color, raza, vacunas) {
        this.nombre = nombre;
        this.edad = edad;
        this.tamaño = tamaño;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;


    }

    // 2. Métodos
    imprimirInfo() {
        console.log("El nombre de mi gato es: ", this.nombre);
        console.log("La edad de mi gato es: ", this.edad);
        console.log("El tamaño de mi gato es: ", this.tamaño);
        console.log("El caracter de mi gato es: ", this.caracter);
        console.log("Mi gato tiene: ", this.numeroVidas);
        console.log("El color de mi gato es: ", this.color);
        console.log("La raza de mi gato es: ", this.raza);
        console.log("Mi gato tiene vacunas? ", this.vacunas);

    };

    maullar() {
        console.log("Meow");
    };

    rasguñar() {
        console.log("Mi gato rasguñó el sillón");
    };

    ronronear() {
        console.log("prrrrrrrrrrrr");
    };

    cuidarGato() {
        if (this.numeroVidas < 3) {
            console.log("Cuida a tu gatito porque tiene pocas vidas")
        }
    }

}

// Instancias
let juanchoDelCampo = new gatitos("Juancho del campo", 5, "Grande", "Tranquilo", 2, "naranja", "angora", true);

let Yue = new gatitos("Yue", 2, "mediano", "tranquila", 7, "blanca", "de la calle", true);

let Mimi = new gatitos("Mimi", 3, "Gordo", "enojona y juguetona", 7, "Gris", "de la calle", true);

let Tyrion = new gatitos("Tyrion", 9, "mediano", "asustadizo", 5, "naranja", "de la calle", true);

let Watson = new gatitos("Watson", 6, "grande", "travieso", 4, "azul", "de la calle", true);

Watson.imprimirInfo();
juanchoDelCampo.imprimirInfo();


/*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

// Objeto normal de JAVASCRIPT (tiene colores, me muestra las palabra reservadas)
objeto = {
    nombre: "Felipe",
    edad: 15,
}

console.log ("Este es un objeto normal: ", objeto);
console.log("Este es el nombre de mi objeto: ", objeto.nombre);


/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

La sintaxis para pasar de objeto normal de JS a JSON es:


JSON.stringify(objeto que quiero serializar)

*/

let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombre);

//Para desearilizar un objeto JSON, vamos a utilizar un método llamado JSON.parse(objeto que queremos deserializar)

let objetoDeserializado = (JSON.parse(objetoSerializado));
console.log(objetoDeserializado)


