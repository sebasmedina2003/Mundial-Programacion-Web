// Le agregamos el evento de cargado a la ventana y ejecutamos la funcion main cuando termine
window.addEventListener("load", main)

// Creamos las variables globales, la primera es la lista con los nombres de paises y la segunda la lista de botones
var listaSeleccionados = [];
var simulacionIniciada = false;
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

    // Seleccionamos el boton de elegirDiferentes Paises
    var btnSeleccionarDeNuevo = document.querySelector(".btn-elegir-diferentes");
    btnSeleccionarDeNuevo.addEventListener("click", limpiarSeleccion);
}

// Funcion al seleccionar los botones de la clase .img-contenedor
function botonSeleccionado(event){
    // Si tiene el estilo de borde de seleccion se lo quitamos y lo eliminamos de la lista sino lo agregamos a la lista y le ponemos el estilo
    if (this.style.border === "3px solid red" && !simulacionIniciada){
        this.style.border = "0px solid red";
        listaSeleccionados.splice(listaSeleccionados.indexOf(this.value), 1);

    } else if (this.style.border !== "3px solid red" && listaSeleccionados.length <= 15 && !simulacionIniciada) {
        this.style.border = "3px solid red";
        listaSeleccionados.push(this.value);
    } else if (simulacionIniciada){
        alert("Hay una simulacion en curso");
    } else {
        alert("A excedido el numero de equipos seleccionados");
    }
}

// Funcion que limpia los paises seleccionados
function limpiarSeleccion(event){
    if(!simulacionIniciada){
        // Desmarcamos todos los botones seleccionados y limpiamos la lista
        botonesPaises.forEach(
            element => {
                element.style.border = "0px solid red";
                listaSeleccionados.pop();
            }
        );

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
    } else {
        alert("Hay una simulacion en juego");
    }
}

// Complemento de la funcion de limpiar seleccion
function limpiarLlave(divContenedor){
    // Obtenemos todos los hijos que sean etiquetas img y p del contenedor seleccionado
    let img = divContenedor.querySelectorAll("img");
    let p = divContenedor.querySelectorAll("p");

    img.forEach(
        element => {
            // Les ponemos un fondo blanco
            element.setAttribute("src", "img/fondo-blanco.png");
        }
    );

    p.forEach(
        element => {
            // Les ponemos un texto vacio
            element.innerHTML = "";
        }
    );
}

// Funcion que inicia la simulacion
function iniciar(event){
    // Verificamos si estan la cantidad de paises necesarios para iniciar y que no haya otra simulacion en curso
    if(listaSeleccionados.length === 16 && !simulacionIniciada){
        // Decimos que la simulacion inicio
        simulacionIniciada = true;

        // Desmarcamos todos los botones seleccionados
        botonesPaises.forEach(
            element => {
                element.style.border = "0px solid red";
            }
        );

        const divOctavos = document.querySelector(".selectorOctavos");
        const imgOctavos = divOctavos.querySelectorAll("img");
        const pOctavos = divOctavos.querySelectorAll("p")

        // Seleccionamos las parejas aleatoriamente de octavos y las vamos eliminando de la lista


        const paisOct1 = seleccionAleatoria();
        imgOctavos[0].setAttribute("src", "img/" + paisOct1 + ".png")
        const paisOct2 = seleccionAleatoria();
        imgOctavos[1].setAttribute("src", "img/" + paisOct2 + ".png")

        const paisOct3 = seleccionAleatoria();
        imgOctavos[2].setAttribute("src", "img/" + paisOct3 + ".png")
        const paisOct4 = seleccionAleatoria();
        imgOctavos[3].setAttribute("src", "img/" + paisOct4 + ".png")

        const paisOct5 = seleccionAleatoria();
        imgOctavos[4].setAttribute("src", "img/" + paisOct5 + ".png")
        const paisOct6 = seleccionAleatoria();
        imgOctavos[5].setAttribute("src", "img/" + paisOct6 + ".png")

        const paisOct7 = seleccionAleatoria();
        imgOctavos[6].setAttribute("src", "img/" + paisOct7 + ".png")
        const paisOct8 = seleccionAleatoria();
        imgOctavos[7].setAttribute("src", "img/" + paisOct8 + ".png")

        const paisOct9 = seleccionAleatoria();
        imgOctavos[8].setAttribute("src", "img/" + paisOct9 + ".png")
        const paisOct10 = seleccionAleatoria();
        imgOctavos[9].setAttribute("src", "img/" + paisOct10 + ".png")
        
        const paisOct11 = seleccionAleatoria();
        imgOctavos[10].setAttribute("src", "img/" + paisOct11 + ".png")
        const paisOct12 = seleccionAleatoria();
        imgOctavos[11].setAttribute("src", "img/" + paisOct12 + ".png")

        const paisOct13 = seleccionAleatoria();
        imgOctavos[12].setAttribute("src", "img/" + paisOct13 + ".png")
        const paisOct14 = seleccionAleatoria();
        imgOctavos[13].setAttribute("src", "img/" + paisOct14 + ".png")

        // Como son los dos ultimos no importa la seleccion aleatoria
        const paisOct15 = listaSeleccionados[0];
        imgOctavos[14].setAttribute("src", "img/" + paisOct15 + ".png")
        const paisOct16 = listaSeleccionados[1];
        imgOctavos[15].setAttribute("src", "img/" + paisOct16 + ".png")

        listaSeleccionados.splice(0);
        listaSeleccionados.splice(1);


        // Decimos que la simulacion finalizo
        simulacionIniciada = false;

    } else if(listaSeleccionados.length === 16 && simulacionIniciada){
        alert("Ya hay una simulacion en curso");

    } else if(listaSeleccionados.length <= 15 && !simulacionIniciada){
        alert("No ha seleccionado la cantidad de paises necesarios");

    } else{
        alert(listaSeleccionados.length)
        alert(simulacionIniciada)
    }
}

function seleccionAleatoria(){
    console.log(listaSeleccionados.length)
    // El random devuelve un numero entre 0 y 1, lo multiplicamos por la longitud de la lista y redondeamos a entero
    var indice = Math.floor(Math.random() * listaSeleccionados.length);
    console.log(indice)
    const pais = listaSeleccionados[indice];
    console.log(pais)
    // Borramos el pais de la lista de seleccioandos
    listaSeleccionados.splice(indice, 1);

    return pais
}