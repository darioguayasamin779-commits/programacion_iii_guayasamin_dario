let idiomas = ['Ingles', 'Frances', 'Aleman', 'Italiano', 'Portugues', 'Japones'];
console.log("elemento 0", idiomas[0]);
console.log("elemento 1", idiomas[1]);
console.log("elemento 2", idiomas[2]);
console.log("elemento 3", idiomas[3]);
console.log("elemento 4", idiomas[4]);
console.log("Tamano del arreglo", idiomas.length);

console.log("Idiomas :", idiomas);
console.log("Incluir elementos a un arreglo con push");
idiomas.push("Chino");
console.log("Idiomas :", idiomas);
idiomas.push("Coreano");
console.log("Idiomas :", idiomas);
console.log("Modificar elementos de un arreglo");
idiomas[7] = "Ruso";
console.log("Idiomas :", idiomas);
console.log("Eliminar un elemento del arreglo");

idiomas.pop(); //elimina el ultimo elemento del arreglo
console.log("Idiomas :", idiomas);
idiomas.shift(); //elimina el primer elemento del arreglo
console.log("Idiomas :", idiomas);
idiomas.splice(1, 1); //elimina un elemento en la posicion 1
console.log("Idiomas :", idiomas);
