/*

Operadores

Los operadores nos permiten realizar una operación en una o varios operandos (Variables o datos).

- Operadores de asignación
- Operadores de cadena
- Operadores lógicos
- Operadores de comparación
- Operadores aritméticos


Operadores de asignación (=)

Los operadores de asignación (=) se utilizan para asignarle valor a una variable. Asigna un valor al operando de la izquierda basado en el valor del operador de la derecha.

*/

//Operadores de asignación

let edadFelipe = 31;
var recipiente = "café";

/*
Operadores de comparación (>, <, >=, <=, ==, ===, !=, !==)

Los operadores de comparación nos ayudan a comparar dos expresiones o valores y nos devulven un valor boolean que representa la relación de sus valores.

*/

let numero1 = 13;
let numero2 = 25;
let numero3 = "25";

//Operador menor que
console.log("El valor 13 es menor que el valor 25? " + (numero1 < numero2));

//Operador mayor que
console.log("El valor 13 es menor que el valor 25? " + (numero1 > numero2));

//Operador menor o igual que
console.log("El valor 25 es menor o igual que el valor 25? " + (numero2 <= numero3));

//Operador de igualdad (Solo evalua valores)
console.log("El valor 25 es igual que el valor 25? " + (numero2 == numero3)); //Se ponen 2 iguales porque si no se reasigna

//Operador de igual estricta (evalua el valor pero también evalua el tipo de dato)
console.log("El valor 25 es igual que el valor 25? " + (numero2 === numero3))

// Operador de desigualdad (!=)
console.log("El valor 13 no es igual al valor 25? " + (numero1 != numero2));

// Operador de desigualdad estricta (!==)
console.log("El valor 25 no es igual al valor 25? " + (numero2 !== numero3));

/*
 Operadores lógicos (&& (and), || (or), ! (not))

 Los operadores lógicos nos devuelven un resultado a partit de que se cumpla (o no) una condición. El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar, y ,los podemos poner en un orden especifico).

 AND (&&) 
 Sirve para determinar si dos expresiones son verdaderas. 
 
    - Si ambas expresiones osn verdaderas, el resultado es verdadero.
    - Si una de las dos expresiones es falsa, todo el resyltado es falso.

OR (||)
Sirve para determinar si dos expresiones son falsas.

    - Si cualquiera de esas afirmaciones es verdadera, todo es verdadero.
    - Si las dos afirmaciones son falsas, todo es falso.


NOT (!)
Sirve para mostrar lo contrario a lo que estamos devolviendo

*/

//  Ejemplo con AND (&&)

var num1 = 12;
var num2 = 24;

afirmacion1 = (num1 < num2); //verdadero
afirmacion2 = (num1 != num2); //verdadero

console.log(afirmacion1 && afirmacion2); //Imprime true porque ambas afirmaciones son verdaderas

//Ejemplo con OR (||)
afirmacion3 = (num1 < num2); //verdadero
afirmacion4 = (num1 != num2); //verdadero

console.log(afirmacion3 || afirmacion4); //true porque al menos una afirmacion es verdadera

//Ejemplo con NOT (!)
console.log(!afirmacion3); //false
console.log(!afirmacion4); //false

//Ejercicio de combinación de operaciones

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op1 = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

console.log(op1);

//!Combinando operaciones2

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op2 = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3); //true

console.log(op2);

/*
como num5 es mayor a num2 es true
como num4 no es menor a num3 es false
como se unen con un and, todo el paréntesis es false

como num1 no es estrictamente igual a num2 es false
al tener el ! antes se vuelve true
como num3 no es diferente a num3 es false
como los une un or es true
Como a  los dos paréntesis los une un or es true

*/

/*

Operadores aritméticos (+,-, *, /, %, **, ++, --)

    + (suma): suma dos o más valores numéricos
    - (resta): resta dos o más valores numéricos
    * (multiplicación): multiplica dos o más valores numéricos
    / (división): divide dos o más valores numéricos
    % (módulo o residuo): retorna el residuo de una división
    ** (exponenciación): retorna el resultado de una potencia. Se escribe la base antes de los asteriscos y el exponente después de los asteriscos.
    ++ (incremento): incrementa un valor de uno en uno.
    -- (decremento): decrementa un valor de uno en uno.


*/

let valor1 = 55;
let valor2 = 17;

console.log("Suma: " , + (valor1 + valor2)); //Se utiliza la coma para separar la cadena de texto del valor numérico
console.log("Resta: " , valor1 - valor2);
console.log("Multiplicación: ", valor1 * valor2);
console.log("División: ", valor1 / valor2);
console.log("Residuo: ", valor1 % valor2);
console.log("Exponenciación: ", valor1 ** valor2);
console.log("Incremento: ", ++valor1);
console.log("Decremento: " , --valor2);

console.log(valor1);

//Ejercicio IMC
pesoLibras = prompt("Dame tu peso en libras ");
estaturaCm = prompt("Dame tu estatura en cm ");
pesoKg = pesoLibras*0.453592;
estaturaM = estaturaCm/100;

IMC = pesoKg/(Math.pow(estaturaM,2))

function IMCfun(estaturaCm, pesoLibras){

    if (IMC < 16){
        console.log("Su peso es " + pesoKg.toFixed(2) + " y la clasificación de su IMC= " + IMC.toFixed(1) + ", de acuerdo a la OMS es: Criterio de ingreso" );
    } else if(IMC <= 16.9){
        console.log("Su peso es " + pesoKg.toFixed(2) + " y la clasificación de su IMC= " + IMC.toFixed(1) + ", de acuerdo a la OMS es: Infrapeso")
    } else if(IMC <= 18.4){
        console.log( "Su peso es " + pesoKg.toFixed(2) + " y la clasificación de su IMC= " + IMC.toFixed(1) + ", de acuerdo a la OMS es: Bajo peso")
    } else if(IMC <= 24.9){
        console.log( "Su peso es " + pesoKg.toFixed(2) + " y la clasificación de su IMC= " + IMC.toFixed(1) + ", de acuerdo a la OMS es: Peso normal")
    } else if(IMC <= 24.9){
        console.log("Su peso es " + pesoKg.toFixed(2) + " y la clasificación de su IMC= " + IMC.toFixed(1) + ", de acuerdo a la OMS es: Peso normal")
    } else if(IMC <= 29.9){
        console.log("Su peso es " + pesoKg.toFixed(2) + " y la clasificación de su IMC= " + IMC.toFixed(1) + ", de acuerdo a la OMS es: Sobrepeso");
    }  else if(IMC <= 34.9){
        console.log("Su peso es " + pesoKg.toFixed(2) + " y la clasificación de su IMC= " + IMC.toFixed(1) + ", de acuerdo a la OMS es: Obesidad premórbida");
    } else if(IMC <= 45){
        console.log("Su peso es " + pesoKg.toFixed(2) + " y la clasificación de su IMC= " + IMC.toFixed(1) + ", de acuerdo a la OMS es:Obesidad mórbida");
    } else if(IMC > 45){
        console.log("Su peso es " + pesoKg.toFixed(2) + " y la clasificación de su IMC= " + IMC.toFixed(1) + ",  de acuerdo a la OMS es:Obesidad hipermobida");
    }else {
        console.log("");
    }


}


IMCfun(estaturaCm, pesoLibras);

