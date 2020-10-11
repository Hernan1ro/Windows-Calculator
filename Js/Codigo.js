"use strict";

var d = document,
  pantalla = d.getElementById("pantalla"),
  teclas = d.querySelectorAll(".tecla span"),
  UltOperación = "",
  resultado = 0,
  principio = true,
  cal = true;

function procesador(entrada) {
  console.log(entrada);
  var val = pantalla.textContent;
  if (entrada == "<") {
  } else {
    if (entrada == "C") {
      pantalla.textContent = "0";
      resultado = 0;
      principio = true;
      cal = true;
    } else {
      if (principio == true) {
        val = "";
        pantalla.textContent = val;
        principio = false;
      }
      pantalla.textContent = entrada;
    }
  }
}

teclas.forEach(function (elemento) {
  elemento.addEventListener("click", function () {
    var entrada = this.textContent;

    if (entrada != "") {
      procesador(entrada);
    }
  });
});
