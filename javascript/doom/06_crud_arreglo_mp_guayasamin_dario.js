let estudiantes = [
    {
        id: 1,
        nombre: "Dario",
        idioma: "Ingles",
        nivel: "C1"
    },
    {
        id: 2,
        nombre: "Tyron",
        idioma: "Frances",
        nivel: "B1"
    },
    {
        id: 3,
        nombre: "Christian",
        idioma: "Aleman",
        nivel: "A1"
    },
];

const formulario = document.getElementById("formulario");
const tituloFormulario = document.getElementById("tituloFormulario");
const nombre = document.getElementById("nombre");
const idioma = document.getElementById("idioma");
const nivel = document.getElementById("nivel");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");
const mensaje = document.getElementById("mensaje");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

let idEditando = null;
let siguienteId = 4;

// Consultar: mostrar todos los estudiantes en tarjetas
function mostrarEstudiantes() {
    contenedor.replaceChildren();
    cantidad.textContent = "Cantidad: " + estudiantes.length;
    estudiantes.forEach(function (estudiante) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        const titulo = document.createElement("h3");
        titulo.textContent = estudiante.nombre;
        const parrafoIdioma = document.createElement("p");
        parrafoIdioma.textContent = "Idioma: " + estudiante.idioma;
        const parrafoNivel = document.createElement("p");
        parrafoNivel.textContent = "Nivel: " + estudiante.nivel;
        const acciones = document.createElement("div");
        acciones.classList.add("acciones");
        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");
        botonEditar.addEventListener("click", function () {
            editarEstudiante(estudiante.id);
        });
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function () {
            eliminarEstudiante(estudiante.id);
        });
        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo, parrafoIdioma, parrafoNivel, acciones);
        contenedor.appendChild(tarjeta);
    });
}

// Eliminar: pedir confirmacion y quitar del arreglo
function eliminarEstudiante(id) {
    const estudiante = estudiantes.find(function (e) {
        return e.id == id;
    });
    const confirmar = confirm("Eliminar a " + estudiante.nombre + " ?");
    if (!confirmar) {
        return;
    }
    estudiantes = estudiantes.filter(function (e) {
        return e.id !== id;
    });
    mensaje.textContent = "Estudiante eliminado";
    mostrarEstudiantes();
}

// Actualizar: cargar los datos en el formulario
function editarEstudiante(id) {
    const estudiante = estudiantes.find(function (e) {
        return e.id == id;
    });
    nombre.value = estudiante.nombre;
    idioma.value = estudiante.idioma;
    nivel.value = estudiante.nivel;
    idEditando = id;
    tituloFormulario.textContent = "Editar Estudiante";
    guardar.textContent = "Guardar";
    cancelar.hidden = false;
    nombre.focus();
}

mostrarEstudiantes();

// Crear o guardar cambios
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombreEstudiante = nombre.value.trim();
    const idiomaEstudiante = idioma.value;
    const nivelEstudiante = nivel.value;
    if (nombreEstudiante === "") {
        mensaje.textContent = "Ingrese el nombre del estudiante";
        return;
    }
    if (idEditando == null) {
        const nuevoEstudiante = {
            id: siguienteId,
            nombre: nombreEstudiante,
            idioma: idiomaEstudiante,
            nivel: nivelEstudiante
        };
        siguienteId++;
        estudiantes.push(nuevoEstudiante);
        mensaje.textContent = "Estudiante matriculado";
    } else {
        const estudiante = estudiantes.find(function (e) {
            return e.id == idEditando;
        });
        estudiante.nombre = nombreEstudiante;
        estudiante.idioma = idiomaEstudiante;
        estudiante.nivel = nivelEstudiante;
        mensaje.textContent = "Estudiante actualizado";
    }
    mostrarEstudiantes();
    limpiarFormulario();
});

function limpiarFormulario() {
    formulario.reset();
    idEditando = null;
    tituloFormulario.textContent = "Registrar Estudiante";
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}

cancelar.addEventListener("click", function () {
    limpiarFormulario();
    mensaje.textContent = "";
});
