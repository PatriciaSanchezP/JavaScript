//Ejercicio 9

function velocidad(d,t){
    operacion = d/t;
    console.log("La velodidad es de " + operacion + " km/h");
}

velocidad(50,3);

//Ejercicio 10

function formulaGeneral(a,b,c){
    x1 = (-b + Math.sqrt(b**2-(4*a*c)))/(2*a);
    x2 = (-b - Math.sqrt(b**2-(4*a*c)))/(2*a);
    console.log("Las raíces para la ecuación cuadrática son " + x1 + " y " + x2);
}


formulaGeneral(1,2,-15);



