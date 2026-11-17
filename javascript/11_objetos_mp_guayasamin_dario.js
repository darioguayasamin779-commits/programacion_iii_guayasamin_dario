let nombre = "Dario";
let edad = 20;
let idioma = "Ingles";
let progreso = 100;
let suspendido = false;

let estudiante = {
    nombre: "Dario",
    edad: 20,
    idioma: "Ingles",
    progreso: 100,
    suspendido: false,
}

console.log("Informacion del estudiante de IDIOMIA:");
console.log("Estudiante", estudiante);
console.log("Nombre del estudiante: " + estudiante.nombre);
console.log("Edad del estudiante: " + estudiante["edad"]);
console.log("Idioma que estudia: " + estudiante["idioma"]);
console.log("Progreso del curso: " + estudiante.progreso + "%");
console.log("Estado de la matricula: " + (estudiante.suspendido ? "Suspendida" : "Activa"));

console.log("Agregar una nueva propiedad al estudiante:");
estudiante.nivel = "B2 Intermedio";
console.log("Nivel del estudiante: " + estudiante.nivel);
console.log("Estudiante", estudiante);

console.log("Actualizar el progreso del estudiante:");
estudiante.progreso = 80;
console.log("Nuevo progreso: " + estudiante.progreso + "%");
estudiante["suspendido"] = true;
console.log("Estado actualizado de la matricula: " + (estudiante.suspendido ? "Suspendida" : "Activa"));

console.log("Estudiante", estudiante);
console.log("Eliminar una propiedad del estudiante:");
delete estudiante.nivel;
console.log("Propiedad 'nivel' eliminada.");
console.log("Estudiante", estudiante);

console.log("Recorrer las propiedades del estudiante:");
for (let propiedad in estudiante) {
    console.log(propiedad + ": " + estudiante[propiedad]);
}

function calcularTotalLibros(librosPorCurso, cantidadCursos) {
    let total = librosPorCurso * cantidadCursos;
    return total;
}

let librosPorCurso = 10;
let cantidadCursos = 5;
let totalLibros = calcularTotalLibros(librosPorCurso, cantidadCursos);
console.log("Total de libros: " + totalLibros);
