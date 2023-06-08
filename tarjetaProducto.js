// 1. Obtener los elementos del HTML  para guardarlos en variables

// Almacena el lugar de destino de mi tarjetita en una constante
const container = document.getElementById("product-container");
const botonAgregarProductos = document.getElementById("agregarProducto");

//Almacenar elementos del formulario en variables de JS
var nombreProducto = document.getElementById("nombreProducto");
var descripcionProducto = document.getElementById("descripcionProducto");
var imagenProducto = document.getElementById("imagenProducto");






//innerHTML sobreescribe

function agregarProductos() {

    // Guardo los valores de mis inputs
    var valorInputProducto = nombreProducto.value;
    let valorInputDescripcion = descripcionProducto.value;
    var valorInputImagen = imagenProducto.value;

    console.log(valorInputDescripcion);
    console.log(valorInputDescripcion);
    console.log(valorInputDescripcion);
    // Quiero que cada tarjeta tenga su propio div o contenedor
    const productCard = document.createElement("div");
    // 1. Creo el elemento
    productCard.innerHTML = `
    <img src="${valorInputImagen}" alt="Producto">
    <h3> ${valorInputProducto} </h3>
    <p> Descripcion: ${valorInputDescripcion}</p>
    <p> Precio: $9.99 </p>
    <button class="btn"> Agregar al carrito </button>
    <br>
    <br>
    <br>
`;

    // Agregar esa tarjeta de producto al container especificado (este es el hijo)
    container.appendChild(productCard);
}

// Creamos el evento 
botonAgregarProductos.addEventListener("click", agregarProductos);