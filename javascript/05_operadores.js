console.log("Operadores Aritméticos");
let a = 10;
let b = 5;

console.log("Suma: ", a + b);
console.log("Resta: ", a - b);
console.log("Multiplicación: ", a * b);
console.log("División: ", a / b);
console.log("Módulo: ", a % b);

console.log("Operadores de Comparación");
console.log("a es igual a b: ", a == b);
console.log("a es diferente de b: ", a != b);
console.log("a es mayor que b: ", a > b);
console.log("a es menor que b: ", a < b);
console.log("a es mayor o igual que b: ", a >= b);
console.log("a es menor o igual que b: ", a <= b);

console.log("Operadores Lógicos");
let x = true;
let y = false;

console.log("x AND y: ", x && y);
console.log("x OR y: ", x || y);
console.log("NOT x: ", !x);
console.log("NOT y: ", !y);

console.log("Operadores de Asignación");
let c = 10;
console.log("Valor inicial de c: ", c);
c += 5; // c = c + 5
console.log("Después de c += 5: ", c);
c -= 3; // c = c - 3
console.log("Después de c -= 3: ", c);
c *= 2; // c = c * 2
console.log("Después de c *= 2: ", c);
c /= 4; // c = c / 4
console.log("Después de c /= 4: ", c);
c %= 3; // c = c % 3
console.log("Después de c %= 3: ", c);

console.log("Operadores de Incremento y Decremento");
let d = 5;
console.log("Valor inicial de d: ", d);
d++; // Incremento
console.log("Después de d++: ", d);
d--; // Decremento
console.log("Después de d--: ", d);

console.log("Operadores de Concatenación");
let nombre = "Rick";
let apellido = "Sanchez";
let nombreCompleto = nombre + " " + apellido;
console.log("Concatenación de nombre y apellido: ", nombreCompleto);

console.log("Operadores de Comparacion estricta");
let e = 10;
let f = "10";

console.log("e es igual a f (==): ", e == f); // true, porque compara valores
console.log("e es estrictamente igual a f (===): ", e === f); // false, porque compara tipo y valor
console.log("e es diferente de f (!=): ", e != f); // false, porque compara valores
console.log("e es estrictamente diferente de f (!==): ", e !== f); // true, porque compara tipo y valor

console.log("Operadores Ternarios");
let edad = 10;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

console.log("Tabla del Multiplicar del 5");
console.log(`1 x 5 = ${5} = ${5 * 1}`);
console.log(`2 x 5 = ${5} = ${5 * 2}`);
console.log(`3 x 5 = ${5} = ${5 * 3}`);
console.log(`4 x 5 = ${5} = ${5 * 4}`);
console.log(`5 x 5 = ${5} = ${5 * 5}`);
console.log(`6 x 5 = ${5} = ${5 * 6}`);
console.log(`7 x 5 = ${5} = ${5 * 7}`);
console.log(`8 x 5 = ${5} = ${5 * 8}`);
console.log(`9 x 5 = ${5} = ${5 * 9}`);
console.log(`10 x 5 = ${5} = ${5 * 10}`);

console.log("Tabla del División del 5");
console.log(`5 ÷ ${5} = ${5 / 5}`);
console.log(`5 ÷ ${5} = ${5 / 10}`);
console.log(`5 ÷ ${5} = ${5 / 15}`);
console.log(`5 ÷ ${5} = ${5 / 20}`);
console.log(`5 ÷ ${5} = ${5 / 25}`);
console.log(`5 ÷ ${5} = ${5 / 30}`);
console.log(`5 ÷ ${5} = ${5 / 35}`);
console.log(`5 ÷ ${5} = ${5 / 40}`);
console.log(`5 ÷ ${5} = ${5 / 45}`);
console.log(`5 ÷ ${5} = ${5 / 50}`);