function corregirCodigos() {
    var codigo1 = document.getElementById("codigo1").value;
    var codigo2 = document.getElementById("codigo2").value;
    var codigo3 = document.getElementById("codigo3").value;
    var codigo4 = document.getElementById("codigo4").value;
    var codigo5 = document.getElementById("codigo5").value;
    var codigo6 = document.getElementById("codigo6").value;
    var codigo7 = document.getElementById("codigo7").value;
    var codigo8 = document.getElementById("codigo8").value;
    var codigo9 = document.getElementById("codigo9").value;

    var correccion1 = document.getElementById("correccion1");
    var correccion2 = document.getElementById("correccion2");
    var correccion3 = document.getElementById("correccion3");
    var correccion4 = document.getElementById("correccion4");
    var correccion5 = document.getElementById("correccion5");
    var correccion6 = document.getElementById("correccion6");
    var correccion7 = document.getElementById("correccion7");
    var correccion8 = document.getElementById("correccion8");
    var correccion9 = document.getElementById("correccion9");


    if (codigo1 == "1") {
        correccion1.innerText = "TRUE";
        correccion1.style.color = "green";
    } else {
        correccion1.innerText = "FALSE";
        correccion1.style.color = "red";
    }

    if (codigo2 == "2") {
        correccion2.innerText = "TRUE";
        correccion2.style.color = "green";
    } else {
        correccion2.innerText = "FALSE";
        correccion2.style.color = "red";
    }


    if (codigo3 == "3") {
        correccion3.innerText = "TRUE";
        correccion3.style.color = "green";
    } else {
        correccion3.innerText = "FALSE";
        correccion3.style.color = "red";
    }


    if (codigo4 == "4") {
        correccion4.innerText = "TRUE";
        correccion4.style.color = "green";
    } else {
        correccion4.innerText = "FALSE";
        correccion4.style.color = "red";
    }


    if (codigo5 == "5") {
        correccion5.innerText = "TRUE";
        correccion5.style.color = "green";
    } else {
        correccion5.innerText = "FALSE";
        correccion5.style.color = "red";
    }


    if (codigo6 == "6") {
        correccion6.innerText = "TRUE";
        correccion6.style.color = "green";
    } else {
        correccion6.innerText = "FALSE";
        correccion6.style.color = "red";
    }


    if (codigo7 == "7") {
        correccion7.innerText = "TRUE";
        correccion7.style.color = "green";
    } else {
        correccion7.innerText = "FALSE";
        correccion7.style.color = "red";
    }


    if (codigo8 == "8") {
        correccion8.innerText = "TRUE";
        correccion8.style.color = "green";
    } else {
        correccion8.innerText = "FALSE";
        correccion8.style.color = "red";
    }


    if (codigo9 == "9") {
        correccion9.innerText = "TRUE";
        correccion9.style.color = "green";
    } else {
        correccion9.innerText = "FALSE";
        correccion9.style.color = "red";
    }

    corregirCodigos();
}

// Definimos un objeto con las respuestas correctas y sus valores de puntuación correspondientes
var respuestasCorrectas = {
    pregunta1: {
        respuesta:  "1u38js79289p",
        puntuacion: 1
    },
    pregunta2: {
        respuesta:  2,
        puntuacion: 1
    },
    pregunta3: {
        respuesta:  "d3mdi4n4n468",
        puntuacion: 1
    },
    pregunta4: {
        respuesta:  "io7b470rr2z0",
        puntuacion: 1
    },
    pregunta5: {
        respuesta:  "xx9hjszz8k99",
        puntuacion: 1
    },
    pregunta6: {
        respuesta:  6,
        puntuacion: 1
    },
    pregunta7: {
        respuesta:  7,
        puntuacion: 1
    },
    pregunta8: {
        respuesta:  8,
        puntuacion: 1
     },
    pregunta9: {
        respuesta:  9,
        puntuacion: 2
    },
};

function calcularPuntuacion() {
    var respuestasUsuario = {
        pregunta1: {
            respuesta: document.getElementById("codigo1").value,
            puntuacion: 0
        },
        pregunta2: {
            respuesta: document.getElementById("codigo2").value,
            puntuacion: 0
        },
        pregunta3: {
            respuesta: document.getElementById("codigo3").value,
            puntuacion: 0
        },
        pregunta4: {
            respuesta: document.getElementById("codigo4").value,
            puntuacion: 0
        },
        pregunta5: {
            respuesta: document.getElementById("codigo5").value,
            puntuacion: 0
        },
        pregunta6: {
            respuesta: document.getElementById("codigo6").value,
            puntuacion: 0
        },
        pregunta7: {
            respuesta: document.getElementById("codigo7").value,
            puntuacion: 0
        },
        pregunta8: {
            respuesta: document.getElementById("codigo8").value,
            puntuacion: 0
        },
        pregunta9: {
            respuesta: document.getElementById("codigo9").value,
            puntuacion: 0
        },
    };

    for (var pregunta in respuestasCorrectas) {
        if (respuestasCorrectas.hasOwnProperty(pregunta)) {
            if (respuestasCorrectas[pregunta].respuesta == respuestasUsuario[pregunta].respuesta) {
                respuestasUsuario[pregunta].puntuacion = respuestasCorrectas[pregunta].puntuacion;
            }
        }
    }

    var puntuacionTotal = 0;
    for (var pregunta in respuestasUsuario) {
        if (respuestasUsuario.hasOwnProperty(pregunta)) {
            puntuacionTotal += respuestasUsuario[pregunta].puntuacion;
        }
    }

    // Calculamos la puntuación total sumando las puntuaciones de cada respuesta
    var puntuacionTotal = 0;
    for (var pregunta in respuestasUsuario) {
        if (respuestasUsuario.hasOwnProperty(pregunta)) {
            var respuestaUsuario = respuestasUsuario[pregunta];
            var respuestaCorrecta = respuestasCorrectas[pregunta];
            if (respuestaUsuario.respuesta == respuestaCorrecta.respuesta) {
                puntuacionTotal += respuestaCorrecta.puntuacion;
            }
        }
    }

// Mostramos la puntuación total en el elemento con id "puntuacion-total"
    var puntuacionTotalElement = document.getElementById("puntuacion-total");
    puntuacionTotalElement.innerText = "Tu puntuación total es: " + puntuacionTotal;
}

function corregirCodigos() {
    var puntuacionTotal = 0;
    var respuestasCorrectas = ["1u38js79289p", "2", "d3mdi4n4n468", "io7b470rr2z0", "xx9hjszz8k99", "6", "7", "8", "9"];
    
    for (var i = 1; i <= respuestasCorrectas.length; i++) {
      var codigo = document.getElementById("codigo" + i).value;
      var correccion = document.getElementById("correccion" + i);
      var puntuacion = document.getElementById("puntuacion" + i);
  
      if (codigo == respuestasCorrectas[i - 1] && i != 9) {
        correccion.innerHTML = '<img class="respuesta-img" id="true" src="./images/true.png">';
        puntuacion.innerHTML = "+1 punto";
        puntuacionTotal += 1;
      } else if (codigo == "") {
        correccion.innerHTML = '<img class="respuesta-img" id="false" src="./images/false.png">';
        puntuacion.innerHTML = "+0 puntos";
      } else if (i == 9 & codigo == respuestasCorrectas[i - 1]){
        correccion.innerHTML = '<img class="respuesta-img" id="true" src="./images/true.png">';
        puntuacion.innerHTML = "+2 puntos";
        puntuacionTotal += 2;
      } else {
        correccion.innerHTML = '<img class="respuesta-img" id="false" src="./images/false.png">';
        puntuacion.innerHTML = "+0 puntos";
      }
    }
    document.getElementById("puntuacion-total").innerHTML = "Puntuación total: " + puntuacionTotal;
  }