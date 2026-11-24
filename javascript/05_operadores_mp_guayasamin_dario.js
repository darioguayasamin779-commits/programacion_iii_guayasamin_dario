console.log("Operadores Aritmeticos - Academia IDIOMIA");
let palabrasIngles = 10;
let palabrasFrances = 5;

console.log("Suma de palabras aprendidas: ", palabrasIngles + palabrasFrances);
console.log("Resta: ", palabrasIngles - palabrasFrances);
console.log("Multiplicacion: ", palabrasIngles * palabrasFrances);
console.log("Division: ", palabrasIngles / palabrasFrances);
console.log("Modulo: ", palabrasIngles % palabrasFrances);

console.log("Operadores de Comparacion");
console.log("Ingles es igual a Frances: ", palabrasIngles == palabrasFrances);
console.log("Ingles es diferente de Frances: ", palabrasIngles != palabrasFrances);
console.log("Ingles es mayor que Frances: ", palabrasIngles > palabrasFrances);
console.log("Ingles es menor que Frances: ", palabrasIngles < palabrasFrances);
console.log("Ingles es mayor o igual que Frances: ", palabrasIngles >= palabrasFrances);
console.log("Ingles es menor o igual que Frances: ", palabrasIngles <= palabrasFrances);

console.log("Operadores Logicos");
let asistioClase = true;
let entregoTarea = false;

console.log("asistio AND entrego: ", asistioClase && entregoTarea);
console.log("asistio OR entrego: ", asistioClase || entregoTarea);
console.log("NOT asistio: ", !asistioClase);
console.log("NOT entrego: ", !entregoTarea);

console.log("Operadores de Asignacion");
let puntos = 10;
console.log("Puntos iniciales: ", puntos);
puntos += 5; // puntos = puntos + 5
console.log("Despues de puntos += 5: ", puntos);
puntos -= 3; // puntos = puntos - 3
console.log("Despues de puntos -= 3: ", puntos);
puntos *= 2; // puntos = puntos * 2
console.log("Despues de puntos *= 2: ", puntos);
puntos /= 4; // puntos = puntos / 4
console.log("Despues de puntos /= 4: ", puntos);
puntos %= 3; // puntos = puntos % 3
console.log("Despues de puntos %= 3: ", puntos);

console.log("Operadores de Incremento y Decremento");
let lecciones = 5;
console.log("Lecciones iniciales: ", lecciones);
lecciones++; // Incremento
console.log("Despues de lecciones++: ", lecciones);
lecciones--; // Decremento
console.log("Despues de lecciones--: ", lecciones);

console.log("Operadores de Concatenacion");
let nombre = "Christian";
let idioma = "Aleman";
let presentacion = nombre + " ensena " + idioma;
console.log("Concatenacion de docente e idioma: ", presentacion);

console.log("Operadores de Comparacion estricta");
let nivelNumero = 2;
let nivelTexto = "2";

console.log("nivelNumero es igual a nivelTexto (==): ", nivelNumero == nivelTexto); // true, porque compara valores
console.log("nivelNumero es estrictamente igual a nivelTexto (===): ", nivelNumero === nivelTexto); // false, porque compara tipo y valor
console.log("nivelNumero es diferente de nivelTexto (!=): ", nivelNumero != nivelTexto); // false, porque compara valores
console.log("nivelNumero es estrictamente diferente de nivelTexto (!==): ", nivelNumero !== nivelTexto); // true, porque compara tipo y valor

console.log("Operadores Ternarios");
let calificacion = 8;
let mensaje = (calificacion >= 7) ? "Aprobaste el nivel" : "Debes repetir el nivel";
console.log(mensaje);

console.log("Palabras nuevas por semana (5 palabras diarias)");
console.log(`Dia 1: 1 x 5 = ${1 * 5} palabras`);
console.log(`Dia 2: 2 x 5 = ${2 * 5} palabras`);
console.log(`Dia 3: 3 x 5 = ${3 * 5} palabras`);
console.log(`Dia 4: 4 x 5 = ${4 * 5} palabras`);
console.log(`Dia 5: 5 x 5 = ${5 * 5} palabras`);
console.log(`Dia 6: 6 x 5 = ${6 * 5} palabras`);
console.log(`Dia 7: 7 x 5 = ${7 * 5} palabras`);
console.log(`Dia 8: 8 x 5 = ${8 * 5} palabras`);
console.log(`Dia 9: 9 x 5 = ${9 * 5} palabras`);
console.log(`Dia 10: 10 x 5 = ${10 * 5} palabras`);

console.log("Reparto de 50 palabras entre estudiantes");
console.log(`50 / 1 = ${50 / 1} palabras por estudiante`);
console.log(`50 / 2 = ${50 / 2} palabras por estudiante`);
console.log(`50 / 5 = ${50 / 5} palabras por estudiante`);
console.log(`50 / 10 = ${50 / 10} palabras por estudiante`);
console.log(`50 / 25 = ${50 / 25} palabras por estudiante`);
console.log(`50 / 50 = ${50 / 50} palabras por estudiante`);
