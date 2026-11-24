const lecciones = document.getElementById("lecciones");
const horas = document.getElementById("horas");
const resultado = document.getElementById("resultado")
const calcular = document.getElementById("calcular");
calcular.addEventListener("click", function(){
    if(lecciones.value.trim()===""
    || horas.value.trim() ===""){
        resultado.textContent = "Completa ambos campos";
        return;
    }
    const cantidad = Number(lecciones.value);
    const horasNumber = Number(horas.value);
    if (!Number.isFinite(cantidad) ||
    !Number.isFinite(horasNumber)){
        resultado.textContent="Ingrese valores válidos";
        return;
    }
    const total = cantidad * horasNumber;
    resultado.textContent ="Horas totales de estudio: "+ total;
});
