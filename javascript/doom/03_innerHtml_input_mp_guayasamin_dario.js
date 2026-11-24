const mensaje = document.getElementById("mensaje")
const saludo = document.getElementById("saludo")

mensaje.textContent = "Mensaje desde la Academia IDIOMIA"
saludo.innerHTML=`<h1> Hello, Bonjour, Hallo con innerHtml</h1>`;

const ficha = document.getElementById("ficha");
ficha.innerHTML=`
<h1>Dario Guayasamin</h1>
<p>Idioma: Ingles</p>
<p>Nivel: B2</p>
<p>Estado: Activo</p>
`;
const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar")
const registrar = document.getElementById("registrar");
registrar.addEventListener("click", function(){
    console.log("Ejecutando click", nombre.value);
    saludar.textContent = "Welcome "+ nombre.value;
})
