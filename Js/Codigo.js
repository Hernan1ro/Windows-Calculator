'use strict';

var d = document, pantalla = d.getElementById("pantalla"), teclas = d.querySelectorAll(".tecla span");

console.log(pantalla)
console.log(teclas[5].innerHTML);

teclas.forEach(function(elemento){
   console.log(elemento.textContent); 
})