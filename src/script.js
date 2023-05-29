// Le agregamos el evento de cargado a la ventana y ejecutamos la funcion main cuando termine
window.addEventListener("load", main)

// Creamos de variable global que contiene el nombre de las banderas seleccionadas
var listaSeleccionados = [];

// Añadimos los eventos necesarios a los botones
function main(event){
    // Recolectamos todos los botones con la clase .img-contenedor
    var botonesPaises = document.querySelectorAll(".img-contenedor");

    // A cada boton de la lista se le agrega el evento al hacer click
    botonesPaises.forEach(element => {
        element.addEventListener("click", botonSeleccionado);
    });
}

// Funcion al seleccionar los botones de la clase .img-contenedor
function botonSeleccionado(){
    // Guardamos el boton seleccionado
    var btnSeleccionado = this;

    // Si tiene el estilo de borde de seleccion se lo quitamos y lo eliminamos de la lista sino lo agregamos a la lista y le ponemos el estilo
    if (btnSeleccionado.style.border === "3px solid red"){
        btnSeleccionado.style.border = "none";
        listaSeleccionados.splice(listaSeleccionados.indexOf(btnSeleccionado.value), 1);

    } else if (btnSeleccionado.style.border !== "3px solid red" && listaSeleccionados.length <= 15) {
        btnSeleccionado.style.transition = "100ms";
        btnSeleccionado.style.border = "3px solid red";
        listaSeleccionados.push(btnSeleccionado.value);

    } else {
        alert("A excedido el numero de equipos seleccionados");
    }
}