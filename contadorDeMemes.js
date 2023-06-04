// 1- Traer a referenciar toddos los elementos del html y los vamos a guardar en variables para poder utilizarlas después

//Métodos de selección
let numeroContador = document.getElementById("numeroContador");
let botonIncremento = document.getElementById("botonIncrementar");
let botonDecremento = document.getElementById("botonDecrementar");
let botonResetear = document.querySelector("#botonResetear");
let memeRandom = document.querySelector("#memeRandom");

//Declarar una variable con un estado inicial
var valorContador = 0;


//Lógica de negocio

function incrementar() {
    valorContador++;
    numeroContador.innerHTML = valorContador;

    if (valorContador % 10 === 0) {
        mostrarImagen();
    }
}


function decrementar() {
    valorContador--;
    numeroContador.innerHTML = valorContador;

    if (valorContador % 10 === 0) {
        mostrarImagen();
    }
}

function resetear() {
    valorContador = 0;
    numeroContador.innerHTML = valorContador;
}

// Función para mostrar la imagen

// La intención de esta función es que cuando sea invocado, recorre el arreglo y toma uno de los elementos de forma aleatoria (index)
function mostrarImagen() {
    var coleccionImagenes = ["./assets/meme1.jpg", "./assets/meme2.png", "./assets/meme3.png", "./assets/meme4.png"];

    // Generar un índice aleatorio
    let indexRandom = Math.floor(Math.random() * coleccionImagenes.length);

    // Obtener la URL o dirección de la imagen
    let urlAleatoria = coleccionImagenes[indexRandom];

    // Agrego la URL al atributo src que dejé vacio en el HTML
    memeRandom.src = urlAleatoria;
    // Cambio la propiedad de visualización (display) a un block
    memeRandom.style.display = "block";

}

//Eventos en los botones

botonIncremento.addEventListener("click", incrementar);

botonDecremento.addEventListener("click", decrementar);

botonResetear.addEventListener("click", resetear);
