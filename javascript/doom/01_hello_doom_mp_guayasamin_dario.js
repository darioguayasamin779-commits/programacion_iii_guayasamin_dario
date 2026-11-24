console.log(document)
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerHTML = "Academia de Idiomas IDIOMIA";

const estado = document.getElementById("estado");
const boton = document.getElementById("botonClase");
boton.addEventListener("click", function(){
    console.log("ejecutando click")
    estado.textContent = "Clase de Ingles abierta";
    console.log("texto cambiado en el elemento estado")
    alert("Proceso de apertura de la clase terminado")
});
const mensaje = document.getElementById("mensaje");
const boton2 = document.getElementById("cambiarMensaje");
boton2.addEventListener("click", function(){
    mensaje.textContent = "Bonjour, listo para aprender frances";
});

let lecciones=0;
const contador = document.getElementById("contador");
const nuevaLeccion = document.getElementById("nuevaLeccion");
nuevaLeccion.addEventListener("click", function(){
    lecciones+=1;
    contador.textContent=lecciones

});
