console.log("Aqui inicia el ejercicio jugueteria");
pesoPayaso = 112;
pesoMuñeca = 75;
numeroDeMuñecas = 14;
numeroDePayasos = 27;
pesoPaquete = (numeroDeMuñecas*pesoMuñeca) + (numeroDePayasos*pesoPayaso);

console.log("El peso total del paquete es: " + pesoPaquete + " g");

//Ejercicio muñecas y payasos

function peso(){
    pesoPayaso = 112;
    pesoMuñeca = 75;
    numeroDeMuñecas = prompt("Ingresa el numero de muñecas: ");
    numeroDePayasos = prompt("Ingresa el numero de payasos: ");
    pesoPaquete = (numeroDeMuñecas * pesoMuñeca) + (numeroDePayasos * pesoPayaso);

    console.log("El peso total del paquete es: " + pesoPaquete + " g");
    alert("El peso total del paquete es: " + pesoPaquete + " g");

}

peso();