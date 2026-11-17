let calificaciones = [30, 50, 70, 40];
let posicion = 1;
let nuevaCalificacion = 100;

for (let i = 0; i < calificaciones.length; i++) {
    console.log("Posicion", i);
    console.log("Calificacion", calificaciones[i]);
    if (posicion > 0 && posicion < calificaciones.length) {
        calificaciones[posicion] = nuevaCalificacion;
    } else {
        console.log("Posicion no valida");
    }
}
console.log("Calificaciones:", calificaciones);

let docentes = [
    {id: 1, nombre: "Dario", idioma: "Ingles", experiencia: 5},
    {id: 2, nombre: "Tyron", idioma: "Frances", experiencia: 3},
    {id: 3, nombre: "Christian", idioma: "Aleman", experiencia: 4},
];
for (let docente of docentes) {
    console.log("ID:", docente.id);
    console.log("Nombre :", docente.nombre);
    console.log("Idioma :", docente["idioma"]);
    console.log("Experiencia :", docente["experiencia"], "anios");
}
console.log("IDIOMIA organiza los cursos");
let cursos = [
    {docente: "Dario", estudiantes: [30, 50, 60]},
    {docente: "Tyron", estudiantes: [20, 30, 30]},
    {docente: "Christian", estudiantes: [90, 80, 70]}
];

for (let curso of cursos) {
    let totalEstudiantes = 0;
    console.log("Docente: ", curso.docente);
    for (let grupo of curso.estudiantes) {
        console.log("Estudiantes del grupo: ", grupo);
        totalEstudiantes += grupo;
    }
    console.log("Total de estudiantes de", curso.docente, "son :", totalEstudiantes);
}

let horasOriginales = [30, 50, 70, 40];
let horasDobles = horasOriginales.map(elemento => {
    return elemento * 2;
});
console.log("Horas dobles:", horasDobles);
let horasValidas = horasOriginales.filter(hora => hora >= 50);
console.log("Horas validas:", horasValidas);
let totalHoras = horasOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
});
console.log("Total de horas:", totalHoras);
