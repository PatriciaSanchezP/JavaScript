/*

Arreglos (arrays, matrices, colecciones de datos)

En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.


*/

//Formas de declarar un array o arreglo

//1. Usanso los corchetes []

var miArray = [1, 2, 3, 4, 5, 6];

//Variable sin inicializar
var colores;

//Arreglo sin asignar a una variable
["azul", "rojo", "naranja", "verde"];

//Variable  colores declarando e inicializando
var colores = ["azul", "rojo", "naranja", "verde", ["Verde Pastel", "Amarillo Pastel", "Rosa Pastel"]];

//Podemos tener distintos tipos de datos en un mismo arreglo
var datosDeFelipe = ["Felipe", 31, "Guadalajara", "Nikky", true, undefined];

//Cada asignatura está asociada a una variable individual

var asignatura1 = "Matemáticas";
var asignatura2 = "Literatura";
var asignatura3 = "Física";


//Array
var asignaturas = ["Matemáticas", "Literatura", "Física"];

console.log(typeof(asignaturas));

//Acceso a elementos de un arreglo

console.log("El elemento en la posición 2 de mis asignaturas es: ", asignaturas[2]);

console.log("El elemento en la posición 2 de mi asignatura es: ", asignaturas[10]); //Muestra indefinido, se desperdicia memoria, el elemento o espacio existe pero no tiene ningún valor

//Mostrar la longitud de el arreglo
console.log(asignaturas.length);

//Ejercicio de arrays

//Array carrito de compras

var carrito = ["pantalon", "camisa", "corbata"];

var publicacion = ["Felipe", 137, "29-Mayo-2023"];


//Modificar los elementos dentro del array

//Reasignamos el valaor a un elemento de nuestro arreglo por madio de su index
publicacion[1] = 138;

console.log(publicacion);

//No teníamos un elemento en la posición (index) 4 (indefinido = 150)
publicacion[4] = 150; //Mala prática, modificar algo que no existe

//Método para agregar elementos al final de un arreglo
asignaturas.push("Biología");

console.log(asignaturas);

asignaturas.push("Inglés");
console.log(asignaturas);

//Método para eliminar el ultimo elemento de un arreglo, sólo se elimina el último
asignaturas.pop();
console.log(asignaturas);

//Método para agregar elementos al principio de un arreglo
asignaturas.unshift("Química", "Educación Física", "Artes");
console.log(asignaturas);

//Método para quitar elementos del pricipio de un arreglo
asignaturas.shift();
console.log(asignaturas);

//Método para saber si mi arreglo incluye un elemento específico

let carritoDeWalmart = ["Gansitos", "Coquita", "Galletas Marias", "Mazapan"];
regalo = carritoDeWalmart.includes("Coquita");

if (regalo=true){
    console.log("Te regalo un sartén");

}

//Método para concatenar arreglos

var listaDeGolosinas = ["Gansitos", "Coquita", "Galletas Marias", "Mazapan"];

var listaDeFrutitasYVerduritas = ["manzanas", "mango", "toronjas", "platano", "fresas"];

var listaDeComprasdeLaQuincena = listaDeGolosinas.concat (listaDeFrutitasYVerduritas);
console.log(listaDeComprasdeLaQuincena);

//Método para buscar un elemento en un arreglo y devolver el índice de su primera aparición. Si el elemento no se muestra, retorna -1

console.log(listaDeComprasdeLaQuincena.indexOf("toronjas")) //Devulve la primera aparición

//concatenar != unir

//Método para unir elementos de un arreglo en una cadena de texto
console.log(listaDeComprasdeLaQuincena.join(" *** "));

// Modificación del arreglo (push, pop,shift, unshift, splice)

// Acceso y búsqueda de elementos (indexOf, LastIndexOf, includes)

// Transformación de elementos (sort, reverse, nap)

// Operaciones lógicas (every, some)

// Creación de nuevos arreglos (slice, concat, join, reverse)

/* Splice (agregar, eliminar o reemplazar elementos en posiciones específicas)

Sintaxis del splice


array.splice(iniciamos, numeroElementosABorrar, ElementoAInsertar, ElementoAInsertar);

*/


// Splice para borrar elementos
var abecedario = ["A","B","C", "D","E"]; //borrar C y D

abecedario.splice(2,2);

console.log(abecedario); //A, B, E

// Splice para insertar elementos
abecedario.splice(2,0,"C","D");

console.log(abecedario); //A B C D E

// Splice para reemplazar elementos del arreglo
var vocales = ["A", "E", "I", "O", "U"]; //reemplazar E I

vocales.splice(1,2,"comer", "comer", "comer"); 

console.log(vocales); // A comer comer comer O U


/* Ejemplo con map
let precios = [100, 54, 67, 45];

function descuento(){
    //código para aplicar descuento
}

let preciosConDescuento = []

*/