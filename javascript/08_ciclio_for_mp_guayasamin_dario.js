console.log("ciclo for - Academia IDIOMIA");
for (let i = 0; i < 5; i++) {
    console.log("Leccion " + i);
}
console.log("Cuenta regresiva para el examen de Ingles");
for (let i = 10; i >= 0; i--) {
    console.log("Faltan " + i + " dias para el examen");
}
console.log("Cuenta regresiva para el examen de Frances");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("Hoy es el examen de Frances");
    } else {
        console.log("Faltan " + i + " dias para el examen");
    }
}
console.log("Progreso del estudiante");
let progreso = 50;
for (let i = 0; i <= 100; i += 10) {
    if (progreso >= i) {
        console.log("Progreso alcanzado: " + i + "%");
    }
}

console.log("Horas acumuladas por clase");
const horasPorClase = 2;
let totalHoras = 0;
for (let clase = 1; clase <= 5; clase++) {
    totalHoras += horasPorClase;
    console.log("Clase " + clase);
    console.log("Total acumulado: " + totalHoras + " horas de estudio");
}
console.log("Total de horas: " + totalHoras + " horas");

console.log("Promedio de palabras aprendidas");
let totalPalabras = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let palabras = dia * 5 + 5;
    totalPalabras += palabras;
    console.log("Dia " + dia + ": " + palabras + " palabras aprendidas");
}
console.log("Total de palabras aprendidas: " + totalPalabras);
console.log("Promedio de palabras por dia: " + (totalPalabras / dias).toFixed(2));

console.log("Clases presenciales y virtuales");
let presenciales = 0;
let virtuales = 0;
for (let clase = 1; clase <= 10; clase++) {
    if (clase % 2 === 0) {
        console.log("Clase " + clase + " es presencial");
        presenciales++;
    } else {
        console.log("Clase " + clase + " es virtual");
        virtuales++;
    }
}
console.log("Total de clases presenciales: " + presenciales);
console.log("Total de clases virtuales: " + virtuales);

console.log("Puntajes de los examenes de Dario");
let puntajes = [35, 60, 45, 80, 70, 90, 55];
let total = 0;
let examenesAprobados = 0;
for (let i = 0; i < puntajes.length; i++) {
    total += puntajes[i];
    console.log("Examen " + (i + 1) + ": " + puntajes[i] + " puntos");
    if (puntajes[i] >= 50) {
        examenesAprobados++;
    } else {
        console.log("Examen " + (i + 1) + " no fue aprobado, obtuvo menos de 50 puntos");
    }
}
console.log("Total de puntos: " + total);
console.log("Total de examenes aprobados: " + examenesAprobados);

console.log("Recorrer idiomas con for .. of");
const idiomas = ["Ingles", "Frances", "Aleman", "Italiano", "Portugues"];
for (let idioma of idiomas) {
    console.log("Idioma: " + idioma);
}
let curso = {
    nombre: "Ingles Intensivo",
    horas: 100,
    nivel: "B2",
    docentes: ["Dario", "Tyron", "Christian"]
};
console.log("Recorrer propiedades del curso con for .. in");
for (let propiedad in curso) {
    console.log(propiedad + ": " + curso[propiedad]);

    if (propiedad === "docentes") {
        console.log("Docentes del curso: ");
        for (let docente of curso[propiedad]) {
            console.log(" - " + docente);
        }
    }
}

let niveles = [
    { nombre: "Nivel A1", palabras: 90, meta: 100, docente: "Dario" },
    { nombre: "Nivel A2", palabras: 40, meta: 50, docente: "Tyron" },
    { nombre: "Nivel B1", palabras: 120, meta: 100, docente: "Christian" }
];

let aprobados = 0;
for (let nivel of niveles) {
    let porcentaje = (nivel.palabras / nivel.meta) * 100;
    console.log(nivel.nombre + " dictado por " + nivel.docente + " con un " + porcentaje.toFixed(2) + "% de la meta alcanzada");
    if (porcentaje >= 90) {
        aprobados++;
    } else {
        console.log(nivel.nombre + " no fue aprobado");
    }
}
console.log("Total de niveles aprobados:", aprobados);

console.log("Uso de break y continue en un ciclo for");
for (let leccion = 1; leccion <= 10; leccion++) {
    if (leccion === 5) {
        console.log("Leccion 5 es examen parcial, se detiene el ciclo");
        break;
    }
    console.log("Leccion:", leccion);
}
for (let leccion = 1; leccion <= 10; leccion++) {
    if (leccion % 2 === 0) {
        console.log("Leccion par es de repaso, se continua el ciclo");
        continue;
    }
    console.log("Leccion nueva:", leccion);
}
for (let leccion = 1; leccion <= 10; leccion++) {
    if (leccion === 7) {
        console.log("Leccion 7 es examen final, se detiene el ciclo");
        break;
    }
    if (leccion % 2 === 0) {
        console.log("Leccion par es de repaso, se continua el ciclo");
        continue;
    }
    console.log("Leccion nueva:", leccion);
}
