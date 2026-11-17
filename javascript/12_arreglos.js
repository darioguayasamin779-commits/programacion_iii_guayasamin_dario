let personajes = ['Rick', 'Morty', 'Summer', 'Jerry', 'Dario', 'Guayasamin'];
console.log("elemento 0", personajes[0]);
console.log("elemento 1", personajes[1]);
console.log("elemento 2", personajes[2]);
console.log("elemento 3", personajes[3]);
console.log("elemento 4", personajes[4]);
console.log("Tamaño del arreglo", personajes.length);

console.log("Personajes :", personajes);
console.log("Incluir elementos a iun arreglo con push");
personajes.push("Defas");
console.log("Personajes :", personajes);
personajes.push("Saulito");
console.log("Personajes :", personajes);
console.log("Modificar elemtos a un arreglo");
personajes[7]="Saul";
console.log("Personajes :", personajes);
console.log("Eliminar un elemnto del arreglo");

personajes.pop(); //elimina el ultimo elemento del arreglo
console.log("Personajes :", personajes);
personajes.shift(); //elimina el primer elemento del arreglo
console.log("Personajes :", personajes);
personajes.splice(1,1); //elimina un elemento en la posicion 1
console.log("Personajes :", personajes);