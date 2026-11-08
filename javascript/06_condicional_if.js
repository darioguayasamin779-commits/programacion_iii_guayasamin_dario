console.log('Condicional IF');
let energia = Number(prompt('Rick. Cuanta energia tienes?'));
console.log('Condicional simple if');

if (energia >= 0){
    console.log('Tienes energia suficiente para continuar la aventura');
}

console.log('Condicional if else dos caminos');
let conbustible = Number(prompt('Rick. Cuanto combustible tienes?'));
if (conbustible >= 0){
    console.log('Tienes combustible suficiente para continuar la aventura');
}else{
    console.log('No tienes combustible suficiente para continuar la aventura');
}

console.log('Condicional if else if varios caminos');
let dimension = prompt('Rick. En que dimension estas?');
if (dimension == 'C-137'){
    console.log('Estas en tu dimension original');
}else if(dimension == 'C-138'){
    console.log('Estas en una dimension incorrecta');
}else{
    console.log('Estas en dimension desconocida');
}

console.log('Condicional if anidado');
let energia2 = 50;
let combustible2 = 400;

if (energia2 >= 0){
    if (combustible2 >= 0){
        console.log('Tienes energia y combustible suficiente para continuar la aventura');
    }else{
        console.log('No tienes combustible suficiente para continuar la aventura');
    }
}
console.log('Condicional IF con Operadores Lógicos');
let energia3 = 50;
let combustible3 = 400;

if (energia3 >= 0 && combustible3 > 0){
    console.log('Tienes energia y combustible suficiente para continuar la aventura');
} else {
    conlog.log('No tienes energia o combustible suficiente para continuar la aventura');
}
console.log('Control de viajes interdimensionales');
let combustible4 = 400;
let energia4 = 50;
let rick_disponible ='si';
let summer_disponible ='no';
let nave_averiada = 'no';

if(combustible4>= 50 &&
    energia4>= 50 &&
    (rick_disponible==="si" ||
    summer_disponible==="si") &&
    !(nave_averiada==="si"))
{
    console.log("Viaje Autorizado");
} else {
    if(combustible4<50){
        console.log("No puedes viajar a otra dimension, no tienes suficiente combustible");
    }
    if(energia4<50){
        console.log("No puedes viajar a otra dimension, no tienes suficiente energia");
    }
    if (rick_disponible==="no"){
        console.log("No puedes viajar a otra dimension, Rick no esta disponible");
    }
    if (summer_disponible==="no"){
        console.log("No puedes viajar a otra dimension, Summer no esta disponible");
    }
    if (nave_averiada==="si"){
        console.log("No puedes viajar a otra dimension, la nave esta averiada");
    }
    if (rick_disponible==="no" && summer_disponible==="no"){
        console.log("No puedes viajar a otra dimension, ninguno de los dos esta disponible");
    }
}    


console.log('MIsión interdimensional');
let cristalesObjetivos=200;
let cristalesRecolectados=150;
let combustibleInicial=1000;
let combustibleConsumido=850;
let mortyHerido="si";
let naveAveriada="no";
let bonificacion=0;
let porcentajeCumplimiento= (cristalesRecolectados/cristalesObjetivos)*100;
let combustibleRestante=combustibleInicial-combustibleConsumido;
console.log("Resultados de la mision");
if( porcentajeCumplimiento>=90){
    console.log("Mision cumplida con exito");
} else if(porcentajeCumplimiento>=70 && porcentajeCumplimiento<90){
    console.log("Mision cumplida parcialmente");
} else if(porcentajeCumplimiento<50 && porcentajeCumplimiento<70){
    console.log("Mision regular se requiere mejorar el empeño");
} else {
    console.log("Mision fallida y Peligro de extincion");
}

console.log("Evaluacion de bonificacion por desempeño");
if (porcentajeCumplimiento >= 90 && combustibleRestante >= 200) {
    bonificacion = 1000;
    console.log("Bonificación por desempeño excelente");
} else {
    console.log("No se otorga bonificación");
}

console.log("regreso seguro a la dimension original");
if (morthyHerido === "no" && naveAveriada === "no") {
    console.log("Regreso seguro a la dimension original");
} else if (morthyHerido === "si" && naveAveriada === "no") {
    console.log("Regreso seguro a la dimension original, pero Morthy está herido");
} else if (morthyHerido === "no" && naveAveriada === "si") {
    console.log("Regreso seguro a la dimension original, pero la nave está averiada");
} else {
    console.log("Regreso inseguro a la dimension original, Morthy está herido y la nave está averiada");
}

console.log("Resumen de la misión");
console.log("Cristales objetivos: " + cristalesObjetivos);
console.log("Cristales recolectados: " + cristalesRecolectados);
console.log("Porcentaje de cumplimiento: " + porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible restante: " + combustibleInicial);
console.log("Combustible consumido: " + combustibleConsumido);
console.log("Combustible restante: " + combustibleRestante);
console.log("Morthy herido: " + morthyHerido);
console.log("Nave averiada: " + naveAveriada);
console.log("Bonificación obtenida: " + bonificacion);
