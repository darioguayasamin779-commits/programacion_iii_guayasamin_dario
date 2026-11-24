let nivel = 3;
switch (nivel) {
    case 1:
        console.log('Estas en el nivel A1');
        break;
    case 2:
        console.log('Estas en el nivel A2');
        break;
    case 3:
        console.log('Estas en el nivel B1');
        break;
    case 4:
        console.log('Estas en el nivel B2');
        break;
    default:
        console.log('Nivel desconocido');
}


let docente = "Tyron";
switch (docente) {
    case "Dario":
        console.log('Hola Dario, docente de Ingles');
        break;
    case "Tyron":
        console.log('Bonjour Tyron, docente de Frances');
        break;
    case "Christian":
        console.log('Hallo Christian, docente de Aleman');
        break;
    default:
        console.log('Docente desconocido');
}



let puntaje = 50;
switch (true) {
    case (puntaje > 0 && puntaje <= 25):
        console.log('Tu dominio del idioma es basico');
        break;
    case (puntaje > 25 && puntaje <= 50):
        console.log('Tu dominio del idioma es intermedio');
        break;
    case (puntaje > 50 && puntaje <= 75):
        console.log('Tu dominio del idioma es avanzado');
        break;
    case (puntaje > 75 && puntaje <= 100):
        console.log('Tu dominio del idioma es experto');
        break;
    default:
        console.log('Puntaje desconocido');
}

console.log("Calculadora de horas de estudio");
let horasIngles = 10;
let horasFrances = 5;
let operacion = "multiplicacion";
let resultado;

switch (operacion) {
    case "suma":
        resultado = horasIngles + horasFrances;
        break;
    case "resta":
        resultado = horasIngles - horasFrances;
        break;
    case "multiplicacion":
        resultado = horasIngles * horasFrances;
        break;
    case "division":
        if (horasFrances !== 0) {
            resultado = horasIngles / horasFrances;
        } else {
            console.log("Error: No se puede dividir entre cero");
        }
        break;
    default:
        console.log("Operacion desconocida");
}

if (resultado !== undefined) {
    console.log(`El resultado de la ${operacion} es: ${resultado}`);
}
