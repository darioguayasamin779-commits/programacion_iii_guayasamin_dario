console.log("ciclo for");
for (let i = 0; i < 5; i++) {
    console.log("Iteración " + i);
}
console.log("Cuenta regresiva despegue de la nave de Morty");
for (let i = 10; i >= 0; i--) {
    console.log("Faltan " + i + " segundos para el despegue");
}
console.log("Cuenta regresiva despegue de la nave de Rick");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("Despegue de la nave de Rick");
    } else {
        console.log("Faltan " + i + " segundos para el despegue");
    }
}
console.log("energia de rick");
let energia = 50;
for (let i = 0; i <= 100; i+=10) {
    if(energia>=i){
        console.log("Energia de Rick: " + energia);
    }
}
const consumoPorViaje =10;
let totalconsumo = 0;

for(let viaje = 1; viaje <=5; viaje++){
    totalconsumido += consumoPorViaje;
    console.log("viaje" + viaje);
    console.log("total consumido:" + totalconsumido + "unidades combustible");
}
console.log("Total consumido : " + totalconsumido + "unidades");

console.log("Pormedio de los cristales");
let totalCristales = 0;
let dias = 7;
for(let dia = 1; dia <= dias; dia++){
    let cristales = dia *5+5;
    totalCristales += cristales;
    console.log("Dia " + dia + ": " + cristales + " cristales recolectados");
}
console.log("total de cristales recolectados: " + totalCristales);
console.log("Promedio de cristales por dia: "+ (totalCristales/dias).toFixed(2));

console.log("Dimensiones Peligrosas");
let seguros = 0;
let peligrosas = 0;
for(let dimension = 1; dimension <= 10; dimension++){
    if(dimension % 2 === 0){
        console.log("Dimension " + dimension + " es segura");
        seguros++;
    }else{
        console.log("Dimension " + dimension + " es peligrosa");
        peligrosas++;
    }
}
console.log("Total de dimensiones seguras: " + seguros);
console.log("Total de dimensiones peligrosas: " + peligrosas);

console.log("Recoleccion de Cristales de Morty");
let cristales =[35,60,45,80,70,90,55];
let total = 0;
let viajesExitosos = 0;
for (let i=0; i < cristales.length; i++) {
    total += cristales[i];
    console.log("Viaje " + (i+1) + ": " + cristales[i] + " cristales recolectados");
    if(cristales[i] >= 50){
        viajesExitosos++;
    }else{
        console.log("Viaje" +(i+1)+ " no fue exitoso, se recolectaron menos de 50 cristales");

    }
}
console.log("Total de cristales recolectados: " + total);
console.log("Total de viajes exitosos: " + viajesExitosos);

console.log("Recorrer Personajes con for .. of");
const personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry"];
for (let personaje of personajes){
    console.log("Personaje: " + personaje);
}
 let nave ={
    nombre : "Vane rick",
    combustible : 100,
    velocidad : 500,
    tripulacion : ["Rick", "Morty", "Summer"]
};
console.log("Recorrer propiedades de la nave con for .. in");
for (let propiedad in nave){
    console.log(propiedad + ": " + nave[propiedad]);

    if (propiedad === "tripulacion") {
        console.log("Tripulantes de la nave: ");
        for (let tripulante of nave[propiedad]) {
            console.log(" - " + tripulante);
        }
    }
 }

 let misiones = [
    { nombre: "Misión 1", cristales: 90, meta:100, personaje: "Rick"},
    { nombre: "Misión 2", cristales: 40, meta:50, personaje: "Morty"},
    { nombre: "Misión 3", cristales: 120, meta:100, personaje: "Summer"}
];

let exitosas =0;
for (let mision of misiones) {
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + " completada por " + mision.personaje + "con un " + porcentaje.toFixed(2) + "% de la meta alcanzada");
    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log(mision.nombre + " no fue exitosa");
    }
}
console.log("Total de misiones exitosas:", exitosas);

console.log("Uso de break y continue en un ciclo for");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se encontró el número 5, se detiene el ciclo");
        break;
    }
}
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Se encontró un número par, se continúa el ciclo");
        continue;
    }
    console.log("Número impar:", i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se encontró el número 7, se detiene el ciclo");
        break;
    }
    if (i % 2 === 0) {
        console.log("Se encontró un número par, se continúa el ciclo");
        continue;
    }
    console.log("Número impar:", i);
}