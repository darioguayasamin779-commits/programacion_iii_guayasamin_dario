const bandera = document.getElementById("bandera");
const cambiar = document.getElementById("cambiar");
const verSaludo = document.getElementById("verSaludo");
const saludo = document.getElementById("saludo");

cambiar.addEventListener("click", function(){
    if(bandera.getAttribute("title")==="Ingles"){
    bandera.setAttribute("src","bandera_francia.svg");
    bandera.setAttribute("title","Frances");
    bandera.dataset.saludo= "Bonjour";
    }else{
    bandera.setAttribute("src","bandera_reino_unido.svg");
    bandera.setAttribute("title","Ingles");
    bandera.dataset.saludo= "Hello";
    }

})
verSaludo.addEventListener("click",function(){
    saludo.textContent="Saludo: "+bandera.dataset.saludo;
})

const aula = document.getElementById("aula");
const abrirAula = document.getElementById("abrirAula");

abrirAula.addEventListener("click", function(){
    if(aula.textContent==="Aula Cerrada"){
    aula.style.backgroundColor = "green";
    aula.style.color="white";
    aula.textContent="Aula Abierta";
    }else{
    aula.style.backgroundColor = "red";
    aula.style.color="white";
    aula.textContent="Aula Cerrada";
    }
});
