//Selectores
const carrito = document.querySelector("#carrito")
const vaciarCarrito = document.querySelector("#vaciar-carrito")
const contenedorCarrito = document.querySelector("#lista-carrito tbody")
const listaCursos = document.querySelector("#lista-cursos")
let articulosCarrito = []

//listeners
cargarEventsListeners()

function cargarEventsListeners() {
    listaCursos.addEventListener("click", añadirCurso)

}

//funciones

function añadirCurso(e) {
    e.preventDefault()
    
    if (e.target.classList.contains("agregar-carrito")) {
        const curso = e.target.parentElement.parentElement
        leerDatosCurso(curso)


    }


}

//eliminar curso

function eliminarCursoo(e) {
    console.log(e.target)
    if (e.target.classList.contains("borrar-curso")) {
        console.log("borrando...")
        const cursoId = e.target.getAttribute("data-id")

        articulosCarrito = articulosCarrito.filter(() => {
            curso.id !== cursoId
        })
        console.log(articulosCarrito)
        carritoHTML(articulosCarrito)
    }
}

//leer datos curso seleccionado
function leerDatosCurso(curso) {
    
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }


    //revisamos si existe

    const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id)
    console.log(infoCurso)

    if (existe) {
        const cursos = articulosCarrito.map((curso)=> {
            if (curso.id === infoCurso.id)
            curso.cantidad++
        })
    }

    articulosCarrito = [...articulosCarrito, infoCurso]
    console.log(articulosCarrito)
    carritoHTML(articulosCarrito)
}

function carritoHTML() {

    limpiarHTML()
    
    articulosCarrito.forEach((curso) => {

        const curso = (imagen, titulo, precio, cantidad, id)

        const row = document.createElement("tr")
        row.innerHTML = `
        <td>
            <img src="${imagen} width="100">
        </td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso data-id">X</a>
        </td>
        
        `
        console.log(titulo)

        row.innerHTML = `
            <td>${titulo}</td>
            `

        contenedorCarrito.appendChild(row)
    })
}

function limpiarHTML() {
    contenedorCarrito.innerHTML = ""

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.firstChild.remove()
    }
}