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
  if (entrada == "." && val.indexOf(".") > 1) return;
  if (entrada == "<") {
    if (val.length > 1) {
      val = val.substring(0, val.length - 1);
      pantalla.textContent = val;
    } else {
      pantalla.textContent = "0";
      principio = 1;
      cal = 1;
    }
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
      } else {
      }
      if (
        entrada == "+" ||
        entrada == "-" ||
        entrada == "/" ||
        entrada == "X"
      ) {
        principio = true;
        if (cal) {
          resultado = val;
          cal = false;
        } else {
          calculador(val);
          pantalla.textContent = resultado;
        }
        UltOperación = entrada;
      } else {
        if (entrada == "=") {
          calculador(val);
          pantalla.textContent = resultado;
          cal = true;
          principio = true;
        } else {
          pantalla.textContent = val + entrada;
        }
      }
    }
  }
}

function calculador(val) {
  val = parseFloat(val);
  resultado = parseFloat(resultado);
  switch (UltOperación) {
    case "+":
      resultado += val;
      break;
    case "-":
      resultado -= val;
      break;
    case "X":
      resultado *= val;
      break;
    case "/":
      resultado /= val;
      break;
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
