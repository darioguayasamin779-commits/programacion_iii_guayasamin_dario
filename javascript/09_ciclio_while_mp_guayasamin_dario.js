console.log("Abriendo aulas de la Academia IDIOMIA...");
let aula = 1;
while (aula <= 5) {
    console.log("Abriendo aula:", aula);
    aula++;
}
console.log("Todas las aulas abiertas. Listos para iniciar clases");

console.log("Cuenta regresiva para el inicio del curso de Ingles");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " dias para el inicio del curso");
    i--;
}

console.log("Avance del curso de Frances de Tyron");
let avance = 50;
let avancePorClase = 10;
let totalClases = 0;
while (avance < 100) {
    avance += avancePorClase;
    totalClases++;
    console.log("Clase completada... Avance del curso:", avance, "%");
}
console.log("Curso completado despues de", totalClases, "clases.");

console.log("Uso de horas del paquete de Aleman de Christian");
let horasPaquete = 100;
let horasPorModulo = 45;
let modulos = 0;
while (horasPaquete >= horasPorModulo) {
    horasPaquete -= horasPorModulo;
    modulos++;
    console.log("Modulo", modulos, "terminado. Horas restantes:", horasPaquete);
    if (horasPaquete < 50) {
        console.log("Advertencia: Quedan pocas horas en el paquete. Horas actuales:", horasPaquete);
    }
}
console.log("No hay suficientes horas para otro modulo. Total de modulos terminados:", modulos);

console.log("Practicar ejercicios de pronunciacion con Do ... While");
let concentracion = 50;
do {
    console.log("Practicando pronunciacion. Nivel de concentracion:", concentracion, "%");
    concentracion -= 15;
} while (concentracion > 0);
console.log("Concentracion agotada, hora de descansar. Nivel actual:", concentracion, "%");

console.log("Ahorrar para el examen internacional de Ingles");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana", semanas, "Ahorro actual:", ahorro, "dolares");
} while (ahorro < meta);
console.log("Meta alcanzada despues de", semanas, "semanas. Ahorro total:", ahorro, "dolares");
