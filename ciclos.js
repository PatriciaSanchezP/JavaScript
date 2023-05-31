/*

Bucles e iteracion

En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a poder automarizar tareas repetitivas.

- While (mientras)
- Do while (hacer mientras)
- For (para)


While (mientras)

Este buvle nos sirve para realizar una tarea repetitiva, mientras una condición sea VERDADERA. A diferencia del if, que pregunta una vez y después ejecuta el bloque de código, el while pregunta contínuamente la condicion y ejecuta el bloque de código hasta  que la condición devuelva FALSE.


*/

//Estructura básica de una while
/*
while (){

}
*/


/*
let rolDeUsuario = "registrado"; //esto ya esta definido


while (!"registrado") { //la evaluacion es sobre el rol
    
    function registrarUsuario(){
        console.log("Regístrate para poder comprar");
    }

}


dejaloComprar();


Casos de uso del ciclo While

- Para verificar si el usuario estpa registrado o no

- Verificamos la disponibilidad de un producto (stock)

- Realizar acciones sobre nuestro carrito de compras (revisar productos, aplicar descuentos, impuestos, actualizar información, etc.)
 
- Recorrer publicaciones de un usuario

- Contador de likes

*/

//Código de mi sopita de verduritas con pollito

//Declaro e inicializo un array con mis ingredientes
var ingredientes =["zanahorias", "cebollas", "apio", "papa", "espinacas", "pollito"]; //6 elementos

//Declaramos una variable llamada ingredientesAgregadosALaOlla inicializada en 0, para usarla como un contador
var ingredientesAgregadosALaOlla = 0;


//mientras los ingredintes agregados a la olla sean menos que los ingredientes que me queden disponibles ...
while (ingredientesAgregadosALaOlla < ingredientes.length){

    //iré agregando ingredientes a la olla ...
   console.log("Agregando " + ingredientes[ingredientesAgregadosALaOlla] + " a la olla");

   // ... y voy aumentando el contador para saber cuándo parar
   ingredientesAgregadosALaOlla ++;
}

console.log("La sopita está lista");

/*

Do - While (hacer mientras)

Es similar al while, con la diferencia de que la condición se evalúe después de cada iteración. Esto garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es falsa.

do{
    bloque de código que vamos a ejecutar
} while (condición);


*/

function imprimirAsteriscos(){
   console.log("********************************");
}

imprimirAsteriscos()

console.log("Ejemplo de galletitas con Do-While");

var tiempoTranscurridoDeCoccion = 0;

//usamos el ciclo do-while

do{
    console.log("Horneando las galletas ...");
    tiempoTranscurridoDeCoccion += 5; //Aumentar de 5 en 5

    //Todo el bloque de código se va a evaluar mientras el tiempo de cocción sea menor a 30 minutos. Esto es porque las galletas se pueden cocinar en 5, 10, 15, 20 o 25 minutos, teniendo un máximo de 30. Si pasamos de este tiempo, puede que las galletas se quemen.

    //Esto es como si revisáramos el horno cada 5 minutos
} while (tiempoTranscurridoDeCoccion <30);

console.log("Las galletas están listas");


/* For (para)

Se utiliza cuandos se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicializacion, condicion y expresion final.
El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.



for (inicialización; condición; expresión de iteración){
    //Bloque de código a ejecutar
}

 - inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

 - condicion: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejcuta. 

 - expresion de iteracion: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.

*/

imprimirAsteriscos();

console.log("Ejemplo de la pizza con for");

//Definir mi lista de pasos
var pasosDeReceta = ["Preparar la masa", "Agregar los ingredientes", "Hornear la pizza"];

//Definir mi lista de tiempo por paso
var tiempoPorPaso = [15, 10, 20];

//En el ciclo for, para cada paso, se tiene un tiempo estimado.

//Para cada paso de la lista, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso, voy incrementando mi vvariable paso para saber cuantos pasos me quedan pendientes. Cuando ya no haya pasos, termino el proceso.
for (var paso = 0; paso < pasosDeReceta.length; paso ++){
    console.log("Realizado paso " + pasosDeReceta[paso]);
    console.log("Esperando " + tiempoPorPaso[paso] + " minutos"); 
}

console.log("Disfruta tu pizza");

//Ejemplo contador con for (contador de cohetes)

for (let i=10; i>0; i--){
    if (i==1){
        console.log("Falta " + i + " segundo para el despegue")
    } else{
    console.log("Faltan " + i + " segundos para el despegue")}
}

//ejemplo de for para cupones de descuento

for(let cupones =9; cupones>=0; cupones --){
    console.log("Tienes un cupón de descuento, nos quedan " + cupones);
}