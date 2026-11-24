console.log('Condicional IF - Academia IDIOMIA');
let horas = Number(prompt('Cuantas horas estudiaste esta semana?'));
console.log('Condicional simple if');

if (horas >= 5){
    console.log('Estudiaste lo suficiente esta semana');
}

console.log('Condicional if else dos caminos');
let calificacion = Number(prompt('Cual fue tu calificacion en el examen (0 a 10)?'));
if (calificacion >= 7){
    console.log('Aprobaste el examen, puedes pasar al siguiente nivel');
}else{
    console.log('No aprobaste el examen, debes repetir el nivel');
}

console.log('Condicional if else if varios caminos');
let idioma = prompt('Que idioma estudias? (Ingles, Frances, Aleman)');
if (idioma == 'Ingles'){
    console.log('Tu docente es Dario');
}else if(idioma == 'Frances'){
    console.log('Tu docente es Tyron');
}else if(idioma == 'Aleman'){
    console.log('Tu docente es Christian');
}else{
    console.log('Ese idioma aun no se ofrece en IDIOMIA');
}

console.log('Condicional if anidado');
let asistencia2 = 85;
let tareas2 = 10;

if (asistencia2 >= 80){
    if (tareas2 >= 8){
        console.log('Tienes asistencia y tareas suficientes para rendir el examen');
    }else{
        console.log('Te faltan tareas para rendir el examen');
    }
}

console.log('Condicional IF con Operadores Logicos');
let asistencia3 = 85;
let tareas3 = 10;

if (asistencia3 >= 80 && tareas3 >= 8){
    console.log('Tienes asistencia y tareas suficientes para rendir el examen');
} else {
    console.log('No tienes asistencia o tareas suficientes para rendir el examen');
}

console.log('Control de inscripcion al examen internacional');
let horasCurso = 120;
let asistencia4 = 90;
let dario_disponible = 'si';
let tyron_disponible = 'no';
let deuda_pendiente = 'no';

if(horasCurso >= 100 &&
    asistencia4 >= 80 &&
    (dario_disponible === "si" ||
    tyron_disponible === "si") &&
    !(deuda_pendiente === "si"))
{
    console.log("Inscripcion al examen autorizada");
} else {
    if(horasCurso < 100){
        console.log("No puedes inscribirte, no tienes suficientes horas de curso");
    }
    if(asistencia4 < 80){
        console.log("No puedes inscribirte, tu asistencia es insuficiente");
    }
    if (dario_disponible === "no"){
        console.log("No puedes inscribirte, Dario no esta disponible para evaluar");
    }
    if (tyron_disponible === "no"){
        console.log("No puedes inscribirte, Tyron no esta disponible para evaluar");
    }
    if (deuda_pendiente === "si"){
        console.log("No puedes inscribirte, tienes una deuda pendiente con la academia");
    }
    if (dario_disponible === "no" && tyron_disponible === "no"){
        console.log("No puedes inscribirte, ningun evaluador esta disponible");
    }
}


console.log('Evaluacion del nivel B1');
let palabrasObjetivo = 200;
let palabrasAprendidas = 150;
let horasPlanificadas = 100;
let horasUsadas = 85;
let faltoExamenOral = "si";
let deudaPendiente = "no";
let beca = 0;
let porcentajeCumplimiento = (palabrasAprendidas / palabrasObjetivo) * 100;
let horasRestantes = horasPlanificadas - horasUsadas;
console.log("Resultados del nivel");
if (porcentajeCumplimiento >= 90){
    console.log("Nivel aprobado con excelencia");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90){
    console.log("Nivel aprobado");
} else if (porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70){
    console.log("Nivel regular, se requiere reforzar el vocabulario");
} else {
    console.log("Nivel reprobado, debe repetir el curso");
}

console.log("Evaluacion de beca por desempeno");
if (porcentajeCumplimiento >= 90 && horasRestantes >= 10) {
    beca = 50;
    console.log("Beca del 50% por desempeno excelente");
} else {
    console.log("No se otorga beca");
}

console.log("Entrega del certificado");
if (faltoExamenOral === "no" && deudaPendiente === "no") {
    console.log("Certificado entregado");
} else if (faltoExamenOral === "si" && deudaPendiente === "no") {
    console.log("Certificado pendiente, falta rendir el examen oral");
} else if (faltoExamenOral === "no" && deudaPendiente === "si") {
    console.log("Certificado pendiente, existe una deuda con la academia");
} else {
    console.log("Certificado no entregado, falta el examen oral y existe una deuda");
}

console.log("Resumen del nivel");
console.log("Palabras objetivo: " + palabrasObjetivo);
console.log("Palabras aprendidas: " + palabrasAprendidas);
console.log("Porcentaje de cumplimiento: " + porcentajeCumplimiento.toFixed(2) + "%");
console.log("Horas planificadas: " + horasPlanificadas);
console.log("Horas usadas: " + horasUsadas);
console.log("Horas restantes: " + horasRestantes);
console.log("Falto examen oral: " + faltoExamenOral);
console.log("Deuda pendiente: " + deudaPendiente);
console.log("Beca obtenida: " + beca + "%");
