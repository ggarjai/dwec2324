const recetas = [
    { nombre: "Tiramisú", descripcion:"Capas de bizcocho en café."},
    { nombre: "Crepes Suzette", descripcion:"Crepes en naranja y licor Cointreau."},
    { nombre: "Cheesecake de fresa", descripcion:"Galleta con queso crema y fresa."},
    { nombre: "Mousse de chocolate", descripcion:"Chocolate de textura ligera y aireada."},
    { nombre: "Pastel de zanahoria", descripcion:"Zanahorias ralladas con nueces y canela."},
    { nombre: "Panna Cotta", descripcion:"Crema suave y delicada. Nata cocida."},
    { nombre: "Brownies de chocolate", descripcion: "Brownies con nueces y chocolate derretido."}
]

//Creamos una función para mostrar las recetas
function mostrarReceta() {

    //Obtenemos el elemento HTML
    const listaRecetas = document.getElementById("lista-recetas")

    //Cambiamos el contenido de la lista a una cadena vacía
    listaRecetas.innerHTML = ""

    //mostrar la lista de recetas
    recetas.forEach((receta, index) => {

        //Creamos un elemento <li> y le damos contenido
        const item = document.createElement("li")
        item.textContent = `${receta.nombre}: ${receta.descripcion}`

        //Agregamos el elemento a la lista de recetas
        listaRecetas.appendChild(item)
    })
}

function eliminarReceta() {
    //ingresa una cadena de texto que transforma a entero
    const numeroReceta = parseInt(prompt("Ingresa el número de la receta."))

    //con el número, comprueba si es mayor que 1 y no se excede del límite máximo de recetas
    if (numeroReceta >= 1 && numeroReceta <= recetas.length) {
        recetas.splice(numeroReceta - 1, 1)
        mostrarReceta()
    } else {
        alert("Número inválido")
    }
}
//evento que llama a la función para mostrar las recetas
document.addEventListener("DOMContentLoaded", () => {
    mostrarReceta()

    //obtención del botón del html y agregar un evento de click para la función eliminarReceta
    const eliminarRecetaBtn = document.getElementById("eliminar-receta")
    eliminarRecetaBtn.addEventListener("click", eliminarReceta)
})