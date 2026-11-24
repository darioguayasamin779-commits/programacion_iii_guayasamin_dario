const progreso = document.getElementById("progreso");
const nivel = document.getElementById("nivel");
const aula = document.getElementById("aula");
progreso.textContent = "Progreso: 100";
nivel.textContent = "Nivel: B2";
aula.textContent = "Aula: abierta";

// Seleccion a traves del nombre de la clase
const estudiante = document.querySelector(".estudiante");
estudiante.textContent = "Ana - Nivel B2";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando Clase";

const curso = document.querySelector("#curso");
curso.textContent = "Preparando Curso de Ingles";

const estadoProfesor = document.querySelector("#profesor .estado");
estadoProfesor.textContent = "Preparado para Enseñar";

const idiomas = document.querySelectorAll(".idiomas");
console.log(idiomas);
console.log(idiomas.length)

console.log(idiomas[0].textContent);
console.log(idiomas[1].textContent);
console.log(idiomas[2].textContent);
console.log(idiomas[3].textContent);
console.log(idiomas[4].textContent);
console.log(idiomas[5].textContent);

console.log("Recorrer a traves de for");
for (let i=0; i<idiomas.length; i++){
    console.log(idiomas[i].textContent);
}

console.log("Con ForEach");
idiomas.forEach(function(idioma){
    console.log(idioma.textContent);
});

console.log("Con for of");
for (let idioma of idiomas){
    console.log(idioma.textContent);
}
