/*Sesión de tipos de variables

En JS tenemos 3 tipos principales de variables:

    - var: Era la forma principal de declarar variables. Es una variable muy flexible, tiene un scope (alcance) global, esto es que el valor de esta variable está disponible en todo el programa.

    - let: Lo usamos para limitar el alcance de nuestras variables (scope), y se limita a un bloque de código o expresión (meter a la mamá de bambi en una caji y devolver valores). 

    - const: se usan para declarar una variable con un valor constante.


*/

/*

Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.


Parametros = variables que necesitamos para alimentar mi funcion (todas las  variables se tienen que utilizar)
Ejemplo: limon, azucar, vasito de agua, cucharita, hielos, egua.


Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)
Ejemplo: prepararAguitaDeLimon


Operaciones: Conjunto de instrucciones (en orden especifico).
Ejemplo: 1) Cortar el limon, 2) Exprimir el limon, etc.


Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vasito de aguita de limon


*/

//1. Creamos la función con la palabra reservada function y le ponemos un nombre. Después, abrimos y cerramos parémtesis y abrimoscerraremos llaves {}. Los paréntesis son para nuestros parámetros o argumentos y las llaves para delimitar el bloque o la función.

//2. Ponemos nuestros  parámetros (variables) dentro de los paréntesis.

//3. Poner las instrucciones dentro de las llaves, utilizando los parámetros o argumentos.

//4. Invocar la función escribiendo su nombre y abrimos y cerramos paréntesis.


const pi= 13.1416;

function prepararAguitaDeLimon(limon, agua, azucar, hielos, vaso, cuchara) {

    var limon = "limon";
    var agua = "agua";
    var hielos = "hielos";
    var azucar = "azucar";
    var vaso = "vaso";
    var cuchara = "cuchara";

    console.log("Cortar el limon" + limon);
    console.log("Exprimir el limon");
    console.log("Agregar el jugo de limon al vaso" + vaso);
    console.log("Agregamos los hielos al vaso" + hielos);
    console.log("Agregamos el agua al vaso" + agua);
    console.log("Endulzamos al gusto" + azucar);
    console.log("Mezclar y disfrutar" + cuchara);
    console.log("Que rica aguita de limon");


}

prepararAguitaDeLimon();

// Variables let no se pueden sobreescribir, variables var sí se pueden, las var son por default limon= "limon" es lo mismo que var limon = "limon"la varibale const tampoco se puede redeclarar, tiene un scope (alcance) bloqueado

//Ejemplo de las 3 formas de agregar parámetros a funciones

function suma(a, b){ //Valores entan en undefined
    var a = 5; //cambió el undefined por 5
    var b = 7; //cambio el undefined por el 7

    operacion = a + b; //hago mi suma utilizando los dos valores

    console.log(operacion); //imprimir mi operacion

}

suma(); //invocamos la funcion


//Segunda forma: Usnado los valores dentro del parentesis, ya inicializados

function resta (a = 8, b = 5){
    operacion = a-b;
    console.log(operacion);
}

resta();

//Tercera forma: Inicializando valores dentro de la invocación
function multiplicacion (a, b){
    operacion = a * b;
    console.log(operacion);
}

multiplicacion(3,9);
multiplicacion(5,8);
multiplicacion(3,6);
multiplicacion(5,8);
multiplicacion(1,6);
multiplicacion(5,7);
multiplicacion(1,4);
multiplicacion(13,pi);
multiplicacion(13, ); //Se imprime NaN porque nos falta un parámetro
