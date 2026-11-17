console.log("Academia IDIOMIA: Funciones en JavaScript");

function iniciarClase() {
    console.log("Clase iniciada. Bienvenidos a la leccion de idiomas.");
}

iniciarClase();
iniciarClase();
iniciarClase();
iniciarClase();


function docenteClase(nombre) {
    console.log("El docente " + nombre + " esta dictando la clase.");
}
docenteClase("Dario");
docenteClase("Tyron");
docenteClase("Christian");

function sumarPracticas(practicasActuales, nuevasPracticas) {
    let practicasTotales = practicasActuales + nuevasPracticas;
    if (practicasTotales > 100) {
        practicasTotales = 100;
    }
    console.log("Registrando practicas de pronunciacion. Avance: " + practicasTotales + "%");
    return practicasTotales;
}
let avancePracticas = 50;
avancePracticas = sumarPracticas(avancePracticas, 30);
avancePracticas = sumarPracticas(avancePracticas, 40);

console.log("Calcular descuentos en matriculas:");
function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}

let precioMatricula = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioMatricula, porcentajeDescuento);
console.log("Precio original: " + precioMatricula + " dolares. Precio con descuento: " + precioConDescuento);

function evaluarAsistenciaExamen(asistencia, correctas, totalPreguntas) {
    let porcentajeCorrectas = (correctas / totalPreguntas) * 100;
    if (asistencia < 20) {
        console.log("Advertencia: Asistencia baja. Nivel actual: " + asistencia + "%");
    }
    if (porcentajeCorrectas >= 70) {
        console.log("Examen de Ingles aprobado. Porcentaje de respuestas correctas: " + porcentajeCorrectas + "%");
    } else {
        console.log("Examen de Ingles reprobado. Porcentaje de respuestas correctas: " + porcentajeCorrectas + "%");
    }
}
evaluarAsistenciaExamen(15, 8, 10);
evaluarAsistenciaExamen(50, 6, 10);

function calcularPalabras(palabrasPorLeccion, lecciones) {
    let totalPalabras = palabrasPorLeccion * lecciones;
    return totalPalabras;
}
let palabrasPorLeccion = 5;
let leccionesRealizadas = 5;
let totalPalabras = calcularPalabras(palabrasPorLeccion, leccionesRealizadas);
console.log("Total de palabras aprendidas: " + totalPalabras);

function totalVocabulario(palabras) {
    let vocabulario = palabras;
    if (vocabulario > 50) {
        console.log("Felicidades, has aprendido suficiente vocabulario para el siguiente nivel");
    }
    return vocabulario;
}

let palabrasNuevas = 10;
let leccionesNuevas = 6;
let totalVocabularioAprendido = totalVocabulario(calcularPalabras(palabrasNuevas, leccionesNuevas));
console.log("Total de vocabulario aprendido: " + totalVocabularioAprendido);
