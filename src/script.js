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

        // Seleccionamos las parejas aleatoriamente de octavos por la funcion seleccionAleatoria

        const paisOct1 = seleccionAleatoria();
        imgOctavos[0].setAttribute("src", "img/" + paisOct1[0] + ".png");
        document.querySelector(".pos-8-1").innerHTML = paisOct1[1];
        const paisOct2 = seleccionAleatoria();
        imgOctavos[1].setAttribute("src", "img/" + paisOct2[0] + ".png");
        document.querySelector(".pos-8-2").innerHTML = paisOct2[1];
        const marcador1 = document.getElementById("marcadorNormal1");

        const paisOct3 = seleccionAleatoria();
        imgOctavos[2].setAttribute("src", "img/" + paisOct3[0] + ".png");
        document.querySelector(".pos-8-3").innerHTML = paisOct3[1];
        const paisOct4 = seleccionAleatoria();
        imgOctavos[3].setAttribute("src", "img/" + paisOct4[0] + ".png");
        document.querySelector(".pos-8-4").innerHTML = paisOct4[1];
        const marcador2 = document.getElementById("marcadorNormal2");

        const paisOct5 = seleccionAleatoria();
        imgOctavos[4].setAttribute("src", "img/" + paisOct5[0] + ".png");
        document.querySelector(".pos-8-5").innerHTML = paisOct5[1];
        const paisOct6 = seleccionAleatoria();
        imgOctavos[5].setAttribute("src", "img/" + paisOct6[0] + ".png");
        document.querySelector(".pos-8-6").innerHTML = paisOct6[1];
        const marcador3 = document.getElementById("marcadorNormal3");

        const paisOct7 = seleccionAleatoria();
        imgOctavos[6].setAttribute("src", "img/" + paisOct7[0] + ".png");
        document.querySelector(".pos-8-7").innerHTML = paisOct7[1];
        const paisOct8 = seleccionAleatoria();
        imgOctavos[7].setAttribute("src", "img/" + paisOct8[0] + ".png");
        document.querySelector(".pos-8-8").innerHTML = paisOct8[1];
        const marcador4 = document.getElementById("marcadorNormal4");

        const paisOct9 = seleccionAleatoria();
        imgOctavos[8].setAttribute("src", "img/" + paisOct9[0] + ".png");
        document.querySelector(".pos-8-9").innerHTML = paisOct9[1];
        const paisOct10 = seleccionAleatoria();
        imgOctavos[9].setAttribute("src", "img/" + paisOct10[0] + ".png");
        document.querySelector(".pos-8-10").innerHTML = paisOct10[1];
        const marcador5 = document.getElementById("marcadorNormal5");
        
        const paisOct11 = seleccionAleatoria();
        imgOctavos[10].setAttribute("src", "img/" + paisOct11[0] + ".png");
        document.querySelector(".pos-8-11").innerHTML = paisOct11[1];
        const paisOct12 = seleccionAleatoria();
        imgOctavos[11].setAttribute("src", "img/" + paisOct12[0] + ".png");
        document.querySelector(".pos-8-12").innerHTML = paisOct12[1];
        const marcador6 = document.getElementById("marcadorNormal6");

        const paisOct13 = seleccionAleatoria();
        imgOctavos[12].setAttribute("src", "img/" + paisOct13[0] + ".png");
        document.querySelector(".pos-8-13").innerHTML = paisOct13[1];
        const paisOct14 = seleccionAleatoria();
        imgOctavos[13].setAttribute("src", "img/" + paisOct14[0] + ".png");
        document.querySelector(".pos-8-14").innerHTML = paisOct14[1];
        const marcador7 = document.getElementById("marcadorNormal7");

        // Como son los dos ultimos no importa la seleccion aleatoria
        const paisOct15 = seleccionAleatoria();
        imgOctavos[14].setAttribute("src", "img/" + paisOct15[0] + ".png");
        document.querySelector(".pos-8-15").innerHTML = paisOct15[1];
        const paisOct16 = seleccionAleatoria();
        imgOctavos[15].setAttribute("src", "img/" + paisOct16[0] + ".png");
        document.querySelector(".pos-8-16").innerHTML = paisOct16[1];
        const marcador8 = document.getElementById("marcadorNormal8");

        // Iniciamos las simulaciones
        Promise.all([

            simulacionPartido(paisOct1, paisOct2, marcador1),
            simulacionPartido(paisOct3, paisOct4, marcador2),
            simulacionPartido(paisOct5, paisOct6, marcador3),
            simulacionPartido(paisOct7, paisOct8, marcador4),
            simulacionPartido(paisOct9, paisOct10, marcador5),
            simulacionPartido(paisOct11, paisOct12, marcador6),
            simulacionPartido(paisOct13, paisOct14, marcador7),
            simulacionPartido(paisOct15, paisOct16, marcador8),

            ]).then( (resultados) => {
                console.log("promesa finalizada")
            })

        // Decimos que la simulacion finalizo
        simulacionIniciada = false;

    } else if(listaSeleccionados.length === 16 && simulacionIniciada){
        alert("Ya hay una simulacion en curso");

    } else if(listaSeleccionados.length <= 15 && !simulacionIniciada){
        alert("No ha seleccionado la cantidad de paises necesarios");

    } else{
        alert("Ha ocurrido un problema");
    }
}

// Funcion que selecciona los paises y pasa su abreviacion
function seleccionAleatoria(){
    // El random devuelve un numero entre 0 y 1, lo multiplicamos por la longitud de la lista y redondeamos a entero
    var indice = Math.floor(Math.random() * listaSeleccionados.length);
    const pais = listaSeleccionados[indice];
    // Borramos el pais de la lista de seleccioandos
    listaSeleccionados.splice(indice, 1);

    // Si su abreviacion no coincide con sus primeras 3 letras las pasamos, sino la creamos
    if(pais == "venezuela"){
        return [pais, "VNZ"];

    }else if (pais == "inglaterra"){
        return [pais, "GBR"];
        
    }else if (pais == "alemania"){
        return [pais, "DEU"];
        
    }else if (pais == "nigeria"){
        return [pais, "NGA"];
        
    }else if (pais == "portugal"){
        return [pais, "PRT"];
        
    } else if(pais == "corea"){
        return [pais, "KOR"];

    } else {
        return [pais, pais.slice(0,3).toUpperCase()]
    }
}

// Creamos una función que simula un partido entre dos equipos y devuelve una promesa
function simulacionPartido(equipo1, equipo2, marcador){

    return new Promise( (resolve, reject) => {
        // Inicializamos los goles de cada equipo en cero
        var golesEquipo1 = 0;
        var golesEquipo2 = 0;
        // Creamos una variable para contar las iteraciones
        var contador = 0;
        // Usamos setInterval para ejecutar la función cada 15 segundos
        var intervalo = setInterval( () => {
            // Llamamos a la función marcadorGol y guardamos el resultado
            var gol = marcadorGol();
            console.log(gol[0])
            console.log(gol[1])
            // Sumamos los goles según el equipo
            if(gol[1] === 0){
                golesEquipo1 = golesEquipo1 +  gol[0];
                marcador.innerHTML = golesEquipo1.toString() + "-" + golesEquipo2.toString();
            } else {
                golesEquipo2 = golesEquipo2 + gol[0];
                marcador.innerHTML = golesEquipo1.toString() + "-" + golesEquipo2.toString();
            }
            // Incrementamos el contador
            contador++;
            // Si el contador llega a 4, paramos el intervalo y resolvemos la promesa con el resultado
            if (contador === 5) {
                clearInterval(intervalo);
                resolve([equipo1, equipo2, golesEquipo1, golesEquipo2]);
            }
        }, 5000);
    });
}

// Funcion que marca los goles
function marcadorGol(){
    const probabilidad = Math.random()
    const equipo = Math.random()

    if(probabilidad >= 0.5 && equipo >= 0.5){
        return [0, 1]

    } else if(probabilidad < 0.5 && equipo >= 0.5){
        return [0, 0]

    } else if(probabilidad >= 0.5 && equipo < 0.5){
        return [1, 1]

    } else {
        return [1,0]

    }
}
























// Funcion que muestra el resultado final del partido y devuelve el ganador o el empate
function pResultado(resultado) {
    // Extraemos los nombres y los goles de los equipos del resultado
    var [equipo1, equipo2, golesEquipo1, golesEquipo2] = resultado;
    // Mostramos los nombres y los goles de los equipos
    console.log(`${equipo1}: ${golesEquipo1}`);
    console.log(`${equipo2}: ${golesEquipo2}`);
    // Comparamos los goles para determinar el ganador o el empate
    if (golesEquipo1 > golesEquipo2) {
        console.log(`${equipo1} pasa a la siguiente ronda`);
        return equipo1;
    } else if (golesEquipo1 < golesEquipo2) {
        console.log(`${equipo2} pasa a la siguiente ronda`);
        return equipo2;
    } else {
        console.log(`Hay empate entre ${equipo1} y ${equipo2}`);
        return 'empate';
    }
}

// Funcion que simula una tanda de penales entre dos equipos y devuelve el ganador
function simulacionPenales(equipo1, equipo2) {
    return new Promise( (resolve, reject) => {
        // Inicializamos los penales de cada equipo en cero
        var penalesEquipo1 = 0;
        var penalesEquipo2 = 0;
        // Creamos una variable para contar las iteraciones
        var contador = 0;
        // Usamos setInterval para ejecutar la función cada 15 segundos
        var intervalo = setInterval( () => {
            // Llamamos a la función marcadorPenal y guardamos el resultado
            var penal = marcadorPenal();
            // Sumamos los penales según el equipo
            if(penal[1] == 0){
                penalesEquipo1 += penal[0];
            } else {
                penalesEquipo2 += penal[0];
            }
            // Incrementamos el contador
            contador++;
            // Si el contador llega a 10 o hay una diferencia de más de dos penales, paramos el intervalo y resolvemos la promesa con el ganador
            if (contador == 10 || Math.abs(penalesEquipo1 - penalesEquipo2) > 2) {
                clearInterval(intervalo);
                if (penalesEquipo1 > penalesEquipo2) {
                    resolve(equipo1);
                } else {
                    resolve(equipo2);
                }
            }
        }, 15000);
    });
}

// Funcion que marca los penales
function marcadorPenal(){
    const probabilidad = Math.random()
    const equipo = Math.random()

    if(probabilidad >= 0.5 && equipo >= 0.5){
        return [0, 1]

    } else if(probabilidad < 0.5 && equipo >= 0.5){
        return [0, 0]

    } else if(probabilidad >= 0.5 && equipo < 0.5){
        return [1, 1]

    } else {
        return [1,0]

    }
}

// Funcion que simula el mini torneo entre cuatro equipos
function simulacionTorneo(equipos) {
    // Simulamos los dos partidos de semifinales y esperamos a que se resuelvan las promesas
    Promise.all([
        simulacionPartido(equipos[0], equipos[1]),
        simulacionPartido(equipos[2], equipos[3])
    ]).then( (resultados) => {
        // Mostramos y procesamos los resultados de las semifinales
        console.log('Resultados de las semifinales:');
        var finalistas = [];
        for (let resultado of resultados) {
            var ganador = pResultado(resultado);
            // Si hay empate, simulamos una tanda de penales y esperamos a que se resuelva la promesa
            if (ganador == 'empate') {
                console.log('Se define por penales');
                simulacionPenales(resultado[0], resultado[1]).then( (ganador) => {
                    console.log(`El ganador por penales es ${ganador}`);
                    finalistas.push(ganador);
                    // Si ya tenemos dos finalistas, simulamos la final y esperamos a que se resuelva la promesa
                    if (finalistas.length == 2) {
                        simulacionPartido(finalistas[0], finalistas[1]).then( (resultado) => {
                            // Mostramos y procesamos el resultado de la final
                            console.log('Resultado de la final:');
                            var campeon = pResultado(resultado);
                            // Si hay empate, simulamos otra tanda de penales y esperamos a que se resuelva la promesa
                            if (campeon == 'empate') {
                                console.log('Se define por penales');
                                simulacionPenales(resultado[0], resultado[1]).then( (campeon) => {
                                    console.log(`El campeón por penales es ${campeon}`);
                                }).catch( (error) => {
                                    console.error(error);
                                });
                            } else {
                                console.log(`El campeón es ${campeon}`);
                            }
                        }).catch( (error) => {
                            console.error(error);
                        });
                    }
                }).catch( (error) => {
                    console.error(error);
                });
            } else {
                finalistas.push(ganador);
                // Si ya tenemos dos finalistas, simulamos la final y esperamos a que se resuelva la promesa
                if (finalistas.length == 2) {
                    simulacionPartido(finalistas[0], finalistas[1]).then( (resultado) => {
                        // Mostramos y procesamos el resultado de la final
                        console.log('Resultado de la final:');
                        var campeon = pResultado(resultado);
                        // Si hay empate, simulamos otra tanda de penales y esperamos a que se resuelva la promesa
                        if (campeon == 'empate') {
                            console.log('Se define por penales');
                            simulacionPenales(resultado[0], resultado[1]).then( (campeon) => {
                                console.log(`El campeón por penales es ${campeon}`);
                            }).catch( (error) => {
                                console.error(error);
                            });
                        } else {
                            console.log(`El campeón es ${campeon}`);
                        }
                    }).catch( (error) => {
                        console.error(error);
                    });
                }
            }
            
        }
        
    }).catch( (error) => {
        // Mostramos el error si ocurre
        console.error(error);
    });
}