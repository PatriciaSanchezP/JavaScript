// alert("Estoy vivoooooo!");



/*

Variables

Es un elemento del cual su valor puede cambiar o variar dependiendo la circunstancia. Esta variable ocupa un espacio de memoria y dependiendo de su valor o del elemento que este dentro  de este espacio es el tipo de variable que tenemos.

Variable = recipiente donde pondremos el valor
Valor = la informacion con la que llenamos el recipiente

Declarar = Ponerle nombre a nuestro recipiente
Inicializar = Llenar ese recipiente

*/

recipiente = "agua";
recipiente = "cafe";
recipiente = "colores y lapices";
recipiente = "leche";

// Usamos esta linea de codigo para imprimir o mostrar la informacion de mi recipiente

console.log(recipiente);

// Declarar vs inicializar

quieresSerMiNovia = null;
edad = null;
altura = null;
peso = null;
genero = null;


/*

Tipos de datos (primitivos y no primitivos)

Se llaman primitivos porque son datos que no pueden ser modificados, ya vienen con el lenguaje y se consideran el dato mas simple o mas basico.

    - String: Sirve para agregar valores en forma de texto. Para que se considere asi, el valor debe estar dentro de comillas siimples (' '), dobles(" ") y backticks (` `)

    -Number: sirve para agregar valores en formato numérico (para poder usarlos en operaciones aritméticas). Estos valores no usan comillas.


    - Boolean: Sirven para representar valores del tipo true or false (encendido o apagado, 0 y 1, si y no). 


    - Undefined: Sirve para representar un tipo de dato que no tiene valor. Cuando declaramos variables sin inicializar, tendremos datos del tipo unndefined.



    - Null: Sirve para definir que un valor es nulo.

    - NaN (Not at Number): Sirve para representar un valor que no es un numero. Lo obtenemos si hacemos una operacion con una variable que no es un numero o con una operacion que no es posible.



    - Symbol
    - Object (no es primitivo)

*/

// Ejemplo para la concatenacion

apodoDeFelipe = "El 'amante numero uno' de los chilaquiles verdes";

console.log(apodoDeFelipe)

// Ejemplos de valores numéricos

edadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -156.35;

console.log(edadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);

// Ejemplos de valores booleanos
esAdministrador = true;
contraseñaCorrecta = false;
cuentaPremiun = false;

console.log(esAdministrador);

//Ejemplos de datos indefinidos

//respuestaDeMiCrush;
//precioBoletoDeEstacionamiento; //No sabes cuánto tiempo te vas a tardar

//Ejemplos de valores nulos
respuestaDeMiCrush = null;
console.log(respuestaDeMiCrush);

//Ejemplo con valores NaN

operacionMatematica = 0/0;
console.log(operacionMatematica);

/* TypeOf 

Es una expresion que nos ayuda a saber que tipo de dato es el que estamos evaluando

typeof(elDatoAvaluar);

Todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando.



*/
console.log(typeof(esAdministrador)); //boolean
console.log(typeof(edadDeFelipe)); // number
console.log(typeof(operacionMatematica)); //number

/*

Este

Es

Un

Comentario

Multilinea

*/


//1- Creamos la función con la palabra reservada function y le ponemos un nombre. Después, abrimos y cerramos parentesis y abrimos y cerramos llaves {}. 

function prepararAguitaDeLimon(limon, agua, hielos, azucar, vaso, cuchara){}