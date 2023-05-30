// Le agregamos el evento de cargado a la ventana y ejecutamos la funcion main cuando termine
window.addEventListener("load", main)

// Creamos las variables globales, la primera es la lista con los nombres de paises y la segunda la lista de botones
var listaSeleccionados = [];
var botonesPaises;

// Añadimos los eventos necesarios a los botones
function main(event){
    // Recolectamos todos los botones con la clase .img-contenedor
    botonesPaises = document.querySelectorAll(".img-contenedor");

    // A cada boton de la lista se le agrega el evento al hacer click
    botonesPaises.forEach(element => {
        element.addEventListener("click", botonSeleccionado);
    });

    // Recolectamos el boton de iniciar simulacion
    var btnIniciar = document.getElementById("btnIniciar");
    btnIniciar.addEventListener("click", iniciar);

    var btnSeleccionarDeNuevo = document.querySelector(".btn-elegir-diferentes");
    btnSeleccionarDeNuevo.addEventListener("click", limpiarSeleccion);
}

// Funcion al seleccionar los botones de la clase .img-contenedor
function botonSeleccionado(event){
    // Si tiene el estilo de borde de seleccion se lo quitamos y lo eliminamos de la lista sino lo agregamos a la lista y le ponemos el estilo
    if (this.style.border === "3px solid red"){
        this.style.border = "0px solid red";
        listaSeleccionados.splice(listaSeleccionados.indexOf(this.value), 1);

    } else if (this.style.border !== "3px solid red" && listaSeleccionados.length <= 15) {
        this.style.border = "3px solid red";
        listaSeleccionados.push(this.value);

    } else {
        alert("A excedido el numero de equipos seleccionados");
    }
}

// Funcion que inicia la simulacion
function iniciar(event){
    if(listaSeleccionados.length === 16){
        // Logica de cuando deba iniciar la simulacion
    } else {
        alert("No ha seleccionado los 16 equipos de octavos")
    }
}

// Funcion que limpia los paises seleccionados
function limpiarSeleccion(){
    botonesPaises.forEach(element => {
        element.style.border = "0px solid red";
        listaSeleccionados.pop();
    });

    // Obtenemos los contenedores de las imagenes
    const divOctavos = document.querySelector(".selectorOctavos");
    const divCuartos = document.querySelector(".selectorCuartos");
    const divSemi = document.querySelector(".selectorSemi");
    const divFinal = document.querySelector(".selectorFinal");
    const divSubCampeon = document.querySelector(".selector3erPuesto");

    // Llamamos a la funcion que limpia las imagenes
    limpiarLlave(divOctavos);
    limpiarLlave(divCuartos);
    limpiarLlave(divSemi);
    limpiarLlave(divFinal);
    limpiarLlave(divSubCampeon);
}

function limpiarLlave(divContenedor){
    let imgOctvos = divContenedor.querySelectorAll("img");
    imgOctvos.forEach(element => {
        element.setAttribute("src", "img/fondo-blanco.png");
    });
}