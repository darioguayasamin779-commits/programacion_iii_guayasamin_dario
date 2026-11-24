console.log(document)
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerHTML = "Laboratorio interdimencional";

const estado = document.getElementById("estado");
const boton = document.getElementById("boton");
boton.addEventListener("click", function(){
    console.log("ejecutando click")
    estado.textContent = "Portal activado";
    console.log("texto cambiado en el elemento estado")
    alert("Proceso de activacion del portal terminado")
});
const mensaje = document.getElementById("mensaje");
const boton2 = document.getElementById("ActivarPortal");
boton2.addEventListener("click", function(){
    estado.textContent = "Morty listo para la aventura";
});

let viajes=0;
const contador = document.getElementById("contador");
const nuevoViaje = document.getElementById("nuevoViaje");
boton.addEventListener("click", function(){
    viajes+=1;
    contador.textContent=viajes

});