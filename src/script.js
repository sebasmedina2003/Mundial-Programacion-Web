// Le agregamos el evento de cargado a la ventana y ejecutamos la funcion main cuando termine
window.addEventListener("load", main);

// Creamos las variables globales, la primera es la lista con los nombres de paises y la segunda la lista de botones
var listaSeleccionados = [];
var simulacionIniciada = false;
var botonesPaises;
var semifinalistas = [];
var finalistas = [];
var ganador;
var segundoLugar;
var tercerLugar;

// Añadimos los eventos necesarios a los botones
function main(event) {
  // Recolectamos todos los botones con la clase .img-contenedor
  botonesPaises = document.querySelectorAll(".img-contenedor");

  // A cada boton de la lista se le agrega el evento al hacer click
  botonesPaises.forEach((element) => {
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
function botonSeleccionado(event) {
  // Si tiene el estilo de borde de seleccion se lo quitamos y lo eliminamos de la lista sino lo agregamos a la lista y le ponemos el estilo
  if (this.style.border === "3px solid red" && !simulacionIniciada) {
    this.style.border = "0px solid red";
    listaSeleccionados.splice(listaSeleccionados.indexOf(this.value), 1);
  } else if (
    this.style.border !== "3px solid red" &&
    listaSeleccionados.length <= 15 &&
    !simulacionIniciada
  ) {
    this.style.border = "3px solid red";
    listaSeleccionados.push(this.value);
  } else if (simulacionIniciada) {
    swal("Error", "Hay una simulación en curso", "error");
  } else {
    mostrarError(
      "Error",
      "Ha excedido el número de equipos seleccionados",
      "error"
    );
  }
}

// Funcion que limpia los paises seleccionados
function limpiarSeleccion(event) {
  if (!simulacionIniciada) {
    // Desmarcamos todos los botones seleccionados y limpiamos la lista
    botonesPaises.forEach((element) => {
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
  } else {
    mostrarError("Error", "Hay una simulación en juego", "error");
  }
}

// Complemento de la funcion de limpiar seleccion
function limpiarLlave(divContenedor) {
  // Obtenemos todos los hijos que sean etiquetas img y p del contenedor seleccionado
  let img = divContenedor.querySelectorAll("img");
  let p = divContenedor.querySelectorAll("p");

  img.forEach((element) => {
    // Les ponemos un fondo blanco y le quitamos la transicion si la tiene y recobramos la opacidad
    element.style.transition = "0ms";
    element.setAttribute("src", "img/fondo-blanco.png");
    element.style.border = "solid #30D5C8 0px ";
    element.style.opacity = "1";
  });

  p.forEach((element) => {
    // Les ponemos un texto vacio
    element.innerHTML = "";
  });
}

function limpiarLlavesSimulacion() {
  // Desmarcamos todos los botones seleccionados y limpiamos la lista
  botonesPaises.forEach((element) => {
    element.style.border = "0px solid red";
  });

  // Obtenemos los contenedores de las imagenes
  const divOctavos = document.querySelector(".selectorOctavos");
  const divCuartos = document.querySelector(".selectorCuartos");
  const divSemi = document.querySelector(".selectorSemi");
  const divFinal = document.querySelector(".selectorFinal");
  const divSubCampeon = document.querySelector(".selector3erPuesto");

  // Llamamos a la funcion que limpia las imagenes y parrafos
  limpiarLlave(divOctavos);
  limpiarLlave(divCuartos);
  limpiarLlave(divSemi);
  limpiarLlave(divFinal);
  limpiarLlave(divSubCampeon);
}

// Funcion que inicia la simulacion
function iniciar(event) {
  // Verificamos si estan la cantidad de paises necesarios para iniciar y que no haya otra simulacion en curso
  if (listaSeleccionados.length === 16 && !simulacionIniciada) {
    // Desmarcamos todos los botones seleccionados
    botonesPaises.forEach((element) => {
      element.style.border = "0px solid red";
    });

    limpiarLlavesSimulacion();

    // Declaramos el inicio de la simulacion
    simulacionIniciada = true;

    const divOctavos = document.querySelector(".selectorOctavos");
    const imgOctavos = divOctavos.querySelectorAll("img");

    // Seleccionamos las parejas aleatoriamente y recursos necesarios de octavos por la funcion seleccionAleatoria

    const paisOct1 = seleccionAleatoria();
    imgOctavos[0].setAttribute("src", "img/" + paisOct1[0] + ".png");
    document.querySelector(".pos-8-1").innerHTML = paisOct1[1];
    const paisOct2 = seleccionAleatoria();
    imgOctavos[1].setAttribute("src", "img/" + paisOct2[0] + ".png");
    document.querySelector(".pos-8-2").innerHTML = paisOct2[1];
    const marcadorNormal1 = document.querySelector(".resultado-8-1_2");
    const marcadorPenal1 = document.querySelector(".penales-8-1_2");
    marcadorNormal1.innerHTML = "0-0";

    const paisOct3 = seleccionAleatoria();
    imgOctavos[2].setAttribute("src", "img/" + paisOct3[0] + ".png");
    document.querySelector(".pos-8-3").innerHTML = paisOct3[1];
    const paisOct4 = seleccionAleatoria();
    imgOctavos[3].setAttribute("src", "img/" + paisOct4[0] + ".png");
    document.querySelector(".pos-8-4").innerHTML = paisOct4[1];
    const marcadorNormal2 = document.querySelector(".resultado-8-3_4");
    const marcadorPenal2 = document.querySelector(".penales-8-3_4");
    marcadorNormal2.innerHTML = "0-0";

    const paisOct5 = seleccionAleatoria();
    imgOctavos[4].setAttribute("src", "img/" + paisOct5[0] + ".png");
    document.querySelector(".pos-8-5").innerHTML = paisOct5[1];
    const paisOct6 = seleccionAleatoria();
    imgOctavos[5].setAttribute("src", "img/" + paisOct6[0] + ".png");
    document.querySelector(".pos-8-6").innerHTML = paisOct6[1];
    const marcadorNormal3 = document.querySelector(".resultado-8-5_6");
    const marcadorPenal3 = document.querySelector(".penales-8-5_6");
    marcadorNormal3.innerHTML = "0-0";

    const paisOct7 = seleccionAleatoria();
    imgOctavos[6].setAttribute("src", "img/" + paisOct7[0] + ".png");
    document.querySelector(".pos-8-7").innerHTML = paisOct7[1];
    const paisOct8 = seleccionAleatoria();
    imgOctavos[7].setAttribute("src", "img/" + paisOct8[0] + ".png");
    document.querySelector(".pos-8-8").innerHTML = paisOct8[1];
    const marcadorNormal4 = document.querySelector(".resultado-8-7_8");
    const marcadorPenal4 = document.querySelector(".penales-8-7_8");
    marcadorNormal4.innerHTML = "0-0";

    const paisOct9 = seleccionAleatoria();
    imgOctavos[8].setAttribute("src", "img/" + paisOct9[0] + ".png");
    document.querySelector(".pos-8-9").innerHTML = paisOct9[1];
    const paisOct10 = seleccionAleatoria();
    imgOctavos[9].setAttribute("src", "img/" + paisOct10[0] + ".png");
    document.querySelector(".pos-8-10").innerHTML = paisOct10[1];
    const marcadorNormal5 = document.querySelector(".resultado-8-9_10");
    const marcadorPenal5 = document.querySelector(".penales-8-9_10");
    marcadorNormal5.innerHTML = "0-0";

    const paisOct11 = seleccionAleatoria();
    imgOctavos[10].setAttribute("src", "img/" + paisOct11[0] + ".png");
    document.querySelector(".pos-8-11").innerHTML = paisOct11[1];
    const paisOct12 = seleccionAleatoria();
    imgOctavos[11].setAttribute("src", "img/" + paisOct12[0] + ".png");
    document.querySelector(".pos-8-12").innerHTML = paisOct12[1];
    const marcadorNormal6 = document.querySelector(".resultado-8-11_12");
    const marcadorPenal6 = document.querySelector(".penales-8-11_12");
    marcadorNormal6.innerHTML = "0-0";

    const paisOct13 = seleccionAleatoria();
    imgOctavos[12].setAttribute("src", "img/" + paisOct13[0] + ".png");
    document.querySelector(".pos-8-13").innerHTML = paisOct13[1];
    const paisOct14 = seleccionAleatoria();
    imgOctavos[13].setAttribute("src", "img/" + paisOct14[0] + ".png");
    document.querySelector(".pos-8-14").innerHTML = paisOct14[1];
    const marcadorNormal7 = document.querySelector(".resultado-8-13_14");
    const marcadorPenal7 = document.querySelector(".penales-8-13_14");
    marcadorNormal7.innerHTML = "0-0";

    // Como son los dos ultimos no importa la seleccion aleatoria
    const paisOct15 = seleccionAleatoria();
    imgOctavos[14].setAttribute("src", "img/" + paisOct15[0] + ".png");
    document.querySelector(".pos-8-15").innerHTML = paisOct15[1];
    const paisOct16 = seleccionAleatoria();
    imgOctavos[15].setAttribute("src", "img/" + paisOct16[0] + ".png");
    document.querySelector(".pos-8-16").innerHTML = paisOct16[1];
    const marcadorNormal8 = document.querySelector(".resultado-8-15_16");
    const marcadorPenal8 = document.querySelector(".penales-8-15_16");
    marcadorNormal8.innerHTML = "0-0";

    // Recolectamos todas las cosas de 4to
    const contenedorCuartos = document.querySelector(".selectorCuartos");
    const imgCuartos = contenedorCuartos.querySelectorAll("img");
    var pNombresCuartos = [];
    pNombresCuartos.push(document.querySelector(".pos-4-1"));
    pNombresCuartos.push(document.querySelector(".pos-4-2"));
    pNombresCuartos.push(document.querySelector(".pos-4-3"));
    pNombresCuartos.push(document.querySelector(".pos-4-4"));
    pNombresCuartos.push(document.querySelector(".pos-4-5"));
    pNombresCuartos.push(document.querySelector(".pos-4-6"));
    pNombresCuartos.push(document.querySelector(".pos-4-7"));
    pNombresCuartos.push(document.querySelector(".pos-4-8"));

    const marcadorNormal9 = document.querySelector(".resultado-4-1_2");
    const marcadorPenal9 = document.querySelector(".penales-4-1_2");
    const marcadorNormal10 = document.querySelector(".resultado-4-3_4");
    const marcadorPenal10 = document.querySelector(".penales-4-3_4");
    const marcadorNormal11 = document.querySelector(".resultado-4-5_6");
    const marcadorPenal11 = document.querySelector(".penales-4-5_6");
    const marcadorNormal12 = document.querySelector(".resultado-4-7_8");
    const marcadorPenal12 = document.querySelector(".penales-4-7_8");

    // Recolectamos las cosas de semifinal
    const contenedorSemi = document.querySelector(".selectorSemi");
    const imgSemi = contenedorSemi.querySelectorAll("img");
    var pNombresSemi = [];
    pNombresSemi.push(document.querySelector(".pos-semis-1"));
    pNombresSemi.push(document.querySelector(".pos-semis-2"));
    pNombresSemi.push(document.querySelector(".pos-semis-3"));
    pNombresSemi.push(document.querySelector(".pos-semis-4"));

    const marcadorNormal13 = document.querySelector(".resultado-semis-1_2");
    const marcadorPenal13 = document.querySelector(".penales-semis-1_2");
    const marcadorNormal14 = document.querySelector(".resultado-semis-3_4");
    const marcadorPenal14 = document.querySelector(".penales-semis-3_4");

    // Recolectamos las cosas para la final
    const contenedorFinal = document.querySelector(".selectorFinal");
    const imgFinal = contenedorFinal.querySelectorAll("img");
    var pNombresFinal = [];
    pNombresFinal.push(document.querySelector(".pos-final-1"));
    pNombresFinal.push(document.querySelector(".pos-final-2"));
    const marcadorNormal15 = document.querySelector(".resultado-final-1_2");
    const marcadorPenal15 = document.querySelector(".penales-final-1_2");

    // Recolectamos las cosas para el 3er puesto
    const contenedro3erPuesto = document.querySelector(".selector3erPuesto");
    img3erPuesto = contenedro3erPuesto.querySelectorAll("img");
    var pNombres3erPuesto = [];
    pNombres3erPuesto.push(document.querySelector(".pos-3-1"));
    pNombres3erPuesto.push(document.querySelector(".pos-3-2"));
    const marcadorNormal16 = document.querySelector(".resultado-3-1_2");
    const marcadorPenal16 = document.querySelector(".penales-3-1_2 ");

    // Iniciamos las simulaciones de octavos
    Promise.all([
      simulacionPartido(
        paisOct1,
        paisOct2,
        [marcadorNormal1, marcadorPenal1],
        [imgOctavos[0], imgOctavos[1]]
      ),
      simulacionPartido(
        paisOct3,
        paisOct4,
        [marcadorNormal2, marcadorPenal2],
        [imgOctavos[2], imgOctavos[3]]
      ),
      simulacionPartido(
        paisOct5,
        paisOct6,
        [marcadorNormal3, marcadorPenal3],
        [imgOctavos[4], imgOctavos[5]]
      ),
      simulacionPartido(
        paisOct7,
        paisOct8,
        [marcadorNormal4, marcadorPenal4],
        [imgOctavos[6], imgOctavos[7]]
      ),
      simulacionPartido(
        paisOct9,
        paisOct10,
        [marcadorNormal5, marcadorPenal5],
        [imgOctavos[8], imgOctavos[9]]
      ),
      simulacionPartido(
        paisOct11,
        paisOct12,
        [marcadorNormal6, marcadorPenal6],
        [imgOctavos[10], imgOctavos[11]]
      ),
      simulacionPartido(
        paisOct13,
        paisOct14,
        [marcadorNormal7, marcadorPenal7],
        [imgOctavos[12], imgOctavos[13]]
      ),
      simulacionPartido(
        paisOct15,
        paisOct16,
        [marcadorNormal8, marcadorPenal8],
        [imgOctavos[14], imgOctavos[15]]
      ),
    ]).then((resultados) => {
      // Cuando tenemos todsos los resultados descomprmimos los empates
      const resultadosOctavos = descomprimirResultados(resultados);

      for (let k = 0; k <= 7; k++) {
        imgCuartos[k].setAttribute(
          "src",
          "img/" + resultadosOctavos[k][0] + ".png"
        );
        pNombresCuartos[k].innerHTML = resultadosOctavos[k][1];
      }

      // Establecemos los marcadores en 0-0
      marcadorNormal9.innerHTML = "0-0";
      marcadorNormal10.innerHTML = "0-0";
      marcadorNormal11.innerHTML = "0-0";
      marcadorNormal12.innerHTML = "0-0";

      // Creamos la nueva promesa para cuartos de final
      Promise.all([
        simulacionPartido(
          resultadosOctavos[0],
          resultadosOctavos[1],
          [marcadorNormal9, marcadorPenal9],
          [imgCuartos[0], imgCuartos[1]]
        ),
        simulacionPartido(
          resultadosOctavos[2],
          resultadosOctavos[3],
          [marcadorNormal10, marcadorPenal10],
          [imgCuartos[2], imgCuartos[3]]
        ),
        simulacionPartido(
          resultadosOctavos[4],
          resultadosOctavos[5],
          [marcadorNormal11, marcadorPenal11],
          [imgCuartos[4], imgCuartos[5]]
        ),
        simulacionPartido(
          resultadosOctavos[6],
          resultadosOctavos[7],
          [marcadorNormal12, marcadorPenal12],
          [imgCuartos[6], imgCuartos[7]]
        ),
      ]).then((resultados) => {
        // Cuando tenemos los resultados del 4to de final los descomprimimos
        const resultadosCuartos = descomprimirResultados(resultados);

        // Ponemos las imagenes y los parrafos personalizados por equipos
        for (let k = 0; k <= 3; k++) {
          imgSemi[k].setAttribute(
            "src",
            "img/" + resultadosCuartos[k][0] + ".png"
          );
          pNombresSemi[k].innerHTML = resultadosCuartos[k][1];
          semifinalistas.push(resultadosCuartos[k]);
        }

        // Establecemos los marcadores
        marcadorNormal13.innerHTML = "0-0";
        marcadorNormal14.innerHTML = "0-0";

        // Creamos la nueva promesa para la semifinal
        Promise.all([
          simulacionPartido(
            resultadosCuartos[0],
            resultadosCuartos[1],
            [marcadorNormal13, marcadorPenal13],
            [imgSemi[0], imgSemi[1]]
          ),
          simulacionPartido(
            resultadosCuartos[2],
            resultadosCuartos[3],
            [marcadorNormal14, marcadorPenal14],
            [imgSemi[2], imgSemi[3]]
          ),
        ]).then((resultados) => {
          // Cuando tenemos los resultados de las semifinales los descomprimimos
          const resultadosSemis = descomprimirResultados(resultados);

          // Depositamos la informacion en los contenedores de la final
          for (let k = 0; k <= 1; k++) {
            imgFinal[k].setAttribute(
              "src",
              "img/" + resultadosSemis[k][0] + ".png"
            );
            pNombresFinal[k].innerHTML = resultadosSemis[k][1];
          }

          // Inicializamos los marcadores
          marcadorNormal15.innerHTML = "0-0";
          marcadorNormal16.innerHTML = "0-0";

          // Guardamos los finalistas
          finalistas = resultadosSemis;

          // Recuperamos la informacion de quienes son los semifinalistas
          semifinalistas.splice(semifinalistas.indexOf(resultadosSemis[0]), 1);
          semifinalistas.splice(semifinalistas.indexOf(resultadosSemis[1]), 1);

          // Depositamos la informacion en el 3er lugar
          console.log(semifinalistas);
          for (let k = 0; k <= 1; k++) {
            img3erPuesto[k].setAttribute(
              "src",
              "img/" + semifinalistas[k][0] + ".png"
            );
            pNombres3erPuesto[k].innerHTML = semifinalistas[k][1];
          }

          // Creamos la promesa que resuelve el 1er lugar y 3er lugar
          Promise.all([
            simulacionPartido(
              resultadosSemis[0],
              resultadosSemis[1],
              [marcadorNormal15, marcadorPenal15],
              [imgFinal[0], imgFinal[1]]
            ),
            simulacionPartido(
              semifinalistas[0],
              semifinalistas[1],
              [marcadorNormal16, marcadorPenal16],
              [img3erPuesto[0], img3erPuesto[1]]
            ),
          ]).then((resultados) => {
            const resultadosFinal = descomprimirResultados(resultados);

            // Guardamos los ganadores
            ganador = resultadosFinal[0];
            tercerLugar = resultadosFinal[1];

            // A la lista de finalistas le quitamos el ganador para conseguir el 2do lugar
            finalistas.splice(finalistas.indexOf(ganador), 1);
            segundoLugar = finalistas[0];

            // Esperamos 2 segundos para mostrar los resultados finales
            setTimeout(
              abrirModal(ganador[0], segundoLugar[0], tercerLugar[0]),
              2000
            );

            // Terminamos la simulacion
            simulacionIniciada = false;
          });
        });
      });
    });
  } else if (listaSeleccionados.length === 16 && simulacionIniciada) {
    mostrarError("Error", "Ya hay una simulación en curso", "error");
  } else if (listaSeleccionados.length <= 15 && !simulacionIniciada) {
    mostrarError(
      "Error",
      "No ha seleccionado la cantidad de países necesarios",
      "error"
    );
  } else {
    mostrarError("Error", "Simulacion en curso", "error");
  }
}

// Creamos una función que simula un partido entre dos equipos y devuelve una promesa
function simulacionPartido(equipo1, equipo2, marcadores, imagenes) {
  return new Promise((resolve, reject) => {
    // Inicializamos los goles de cada equipo en cero
    var golesEquipo1 = 0;
    var golesEquipo2 = 0;

    // Agregamos transiciones
    imagenes[0].style.transition = "1000ms";
    imagenes[1].style.transition = "1000ms";

    // Creamos una variable para contar las iteraciones
    var contador = 0;

    // Usamos setInterval para ejecutar la función cada 15 segundos
    var intervalo = setInterval(() => {
      // Llamamos a la función marcadorGol y guardamos el resultado
      var gol = marcadorGol();
      // Sumamos los goles según el equipo
      if (gol[1] === 0) {
        golesEquipo1 = golesEquipo1 + gol[0];
        marcadores[0].innerHTML =
          golesEquipo1.toString() + "-" + golesEquipo2.toString();
      } else {
        golesEquipo2 = golesEquipo2 + gol[0];
        marcadores[0].innerHTML =
          golesEquipo1.toString() + "-" + golesEquipo2.toString();
      }
      // Incrementamos el contador
      contador++;
      // Si el contador llega a 4, paramos el intervalo y resolvemos la promesa con el resultado
      if (contador === 4) {
        clearInterval(intervalo);
        // Devolvemos los 2 equipos si quedan en empate
        if (golesEquipo1 === golesEquipo2) {
          Promise.all([resolverEmpate(equipo1, equipo2, marcadores[1])]).then(
            (resultado) => {
              // Vemos quien gano para resaltar las imagenes
              if (resultado[0] === equipo1) {
                imagenes[0].style.border = "solid #30D5C8 5px";
                imagenes[1].style.opacity = "0.5";
              } else {
                imagenes[1].style.border = "solid #30D5C8 5px";
                imagenes[0].style.opacity = "0.5";
              }
              // Devolvemos el resultado ganador
              resolve(resultado);
            }
          );
        } else if (golesEquipo2 > golesEquipo1) {
          // Aplicamos los estilos y devolvemos el resultado
          imagenes[1].style.border = "solid #30D5C8 5px";
          imagenes[0].style.opacity = "0.5";
          resolve(equipo2);
        } else {
          // Aplicamos los estilos y devolvemos el resultado
          imagenes[0].style.border = "solid #30D5C8 5px";
          imagenes[1].style.opacity = "0.5";
          resolve(equipo1);
        }
      }
      // Aqui abajo esta el tiempo por cada gol en ms, 15000ms son 15s
    }, 1000);
  });
}

function resolverEmpate(equipo1, equipo2, marcador) {
  return new Promise((resolve, reject) => {
    // Inicializamos los goles y el contador
    var golesEquipo1 = 0;
    var golesEquipo2 = 0;

    var contador = 0;

    // Inicializamos el marcador
    marcador.innerHTML =
      "(" + golesEquipo1.toString() + "-" + golesEquipo2.toString() + ")";

    // Creamos el intervalo de ejecucion del codigo
    var intervalo = setInterval(() => {
      // Calculamos el gol
      var gol = marcadorGol();

      // Agregamos el gol a quien pertenezca y actualizamos el marcador
      if (gol[1] === 0) {
        golesEquipo1 = golesEquipo1 + gol[0];
        marcador.innerHTML =
          "(" + golesEquipo1.toString() + "-" + golesEquipo2.toString() + ")";
      } else {
        golesEquipo2 = golesEquipo2 + gol[0];
        marcador.innerHTML =
          "(" + golesEquipo1.toString() + "-" + golesEquipo2.toString() + ")";
      }
      contador++;

      // Condicion de detenida de la tanda de penales
      if (contador === 5) {
        // Creamos un segundo contador por empates de penales y limpiamos el primer intercalo
        let contador2 = 1;
        clearInterval(intervalo);

        // Si hay empate repetimos el proceso
        if (golesEquipo1 == golesEquipo2) {
          intervalo = setInterval(() => {
            gol = marcadorGol();

            if (gol[1] === 0) {
              golesEquipo1 = golesEquipo1 + gol[0];
              marcador.innerHTML =
                "(" +
                golesEquipo1.toString() +
                "-" +
                golesEquipo2.toString() +
                ")";
            } else {
              golesEquipo2 = golesEquipo2 + gol[0];
              marcador.innerHTML =
                "(" +
                golesEquipo1.toString() +
                "-" +
                golesEquipo2.toString() +
                ")";
            }

            if (contador2 > 2 && golesEquipo1 > golesEquipo2) {
              clearInterval(intervalo);
              resolve(equipo1);
            } else if (contador2 > 2 && golesEquipo2 > golesEquipo1) {
              clearInterval(intervalo);
              resolve(equipo2);
            }
            contador2++;

            // Aqui abajo esta el tiempo del intervalo 3s, como son 5 penales hacen 15s en total si no hay empate
          }, 3000);

          // Si no hay empate devolvemos el equipo ganador
        } else if (golesEquipo1 > golesEquipo2) {
          resolve(equipo1);
        } else {
          resolve(equipo2);
        }
      }
    }, 1000);
  });
}

// Funcion que marca los goles
function marcadorGol() {
  // Sacamos dos numeros entre 0 y 1 que representan las probabilidades de gol y del equipo
  const probabilidad = Math.random();
  const equipo = Math.random();

  // El formato [n, m] viene como n=equipo y m=gol
  if (probabilidad >= 0.5 && equipo >= 0.5) {
    return [0, 1];
  } else if (probabilidad < 0.5 && equipo >= 0.5) {
    return [0, 0];
  } else if (probabilidad >= 0.5 && equipo < 0.5) {
    return [1, 1];
  } else {
    return [1, 0];
  }
}

// Funcion que selecciona los paises y pasa su abreviacion
function seleccionAleatoria() {
  // El random devuelve un numero entre 0 y 1, lo multiplicamos por la longitud de la lista y redondeamos a entero
  var indice = Math.floor(Math.random() * listaSeleccionados.length);
  const pais = listaSeleccionados[indice];
  // Borramos el pais de la lista de seleccioandos
  listaSeleccionados.splice(indice, 1);

  // Si su abreviacion no coincide con sus primeras 3 letras las pasamos, sino la creamos
  if (pais == "inglaterra") {
    return [pais, "ENG"];
  } else if (pais == "alemania") {
    return [pais, "GER"];
  } else if (pais == "nigeria") {
    return [pais, "NGA"];
  } else if (pais == "corea") {
    return [pais, "KOR"];
  } else if (pais == "italia") {
    return [pais, "&nbspITA"];
  }

  // En ninguno de esos casos se devuelve las 3 primeras letras del pais en mayusculas
  return [pais, pais.slice(0, 3).toUpperCase()];
}

function descomprimirResultados(resultados) {
  var resultadosOctavos = [];

  for (let k = 0; k < resultados.length; k++) {
    if (resultados[k].length === 1) {
      resultadosOctavos.push(resultados[k][0]);
    } else {
      resultadosOctavos.push(resultados[k]);
    }
  }

  return resultadosOctavos;
}

function mostrarError(titulo, mensaje, tipo) {
  try {
    swal(titulo, mensaje, tipo);
  } catch (error) {
    alert(mensaje);
  }
}

function abrirModal(nombre_campeon, nombre_subcampeon, nombre_tercerLugar) {
  document.querySelector(".campeon-modal").innerHTML =
    nombre_campeon.toUpperCase();
  document.querySelector(".subcampeon-modal").innerHTML =
    nombre_subcampeon.toUpperCase();
  document.querySelector(".tercerLugar-modal").innerHTML =
    nombre_tercerLugar.toUpperCase();

  let nombre_campeon1 = nombre_campeon.toLowerCase();
  let nombre_subcampeon1 = nombre_subcampeon.toLowerCase();
  let nombre_tercerLugar1 = nombre_tercerLugar.toLowerCase();

  document.getElementsByClassName("pais-circular-llave-campeon")[0].src =
    "img/" + nombre_campeon1 + ".png";
  document.getElementsByClassName("pais-circular-llave-subcampeon")[0].src =
    "img/" + nombre_subcampeon1 + ".png";
  document.getElementsByClassName("pais-circular-llave-tercerLugar")[0].src =
    "img/" + nombre_tercerLugar1 + ".png";

  let modal = document.querySelector(".modal-background");
  modal.style.display = "flex";
  modal.style.animation = "aparecer 1s forwards";

  var close = document.getElementById("close");
  var modal1 = document.getElementById("modal-background1");

  close.addEventListener("click", function () {
    modal1.style.display = "none";
  });
}
