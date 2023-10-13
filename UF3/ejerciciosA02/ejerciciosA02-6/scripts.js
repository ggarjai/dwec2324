const equipos = [
    { posicion: "Posición", nombre: "Equipo", puntos:"Puntos"},
    { posicion: "1", nombre: "Barcelona", puntos:"20"},
    { posicion: "2", nombre: "Real Madrid", puntos:"19"},
    { posicion: "3", nombre: "Atlético de madrid", puntos:"16"}
]


function mostrarEquipos () {

    //obtenemos el item en html para cambiarlo por una cadena vacia y ordenamos
    const listaEquipos = document.getElementById("lista-equipos")
    listaEquipos.innerHTML = ""
    equipos.sort((a, b) => b.puntos - a.puntos)

    //iteramos y mostramos el contenido
    equipos.forEach((equipo, index) => {
        const posicion = index + 1
        const item = document.createElement("li")
        item.textContent = `${equipo.posicion} ${equipo.nombre}: ${equipo.puntos}`
        listaEquipos.appendChild(item)
    })
}

function agregarEquipo() {

    //para el formulario en html
    const nombre = document.getElementById("nombre").value
    const puntos = document.getElementById("puntos").value

    if (nombre && puntos) {
        const nuevoEquipo = { nombre, puntos }
        equipos.push(nuevoEquipo)

        mostrarEquipos()

        document.getElementById("nombre").value = ""
        document.getElementById("puntos").value = ""
    }
}

//evento que llama a la función para mostrar la lista de equipos
document.addEventListener("DOMContentLoaded", () => {
    mostrarEquipos()

    //boton de enviar los datos introducidos en el formulario
    const equipoForm = document.getElementById("formulario-equipos")
    equipoForm.addEventListener("submit", (e) => {
        e.preventDefault()
        agregarEquipo()
    });
});

