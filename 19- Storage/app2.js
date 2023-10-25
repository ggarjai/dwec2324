//Almacenamiento en el navegador - Local vs session

console.log(window)

localStorage.setItem("nombre", "Antonio")
sessionStorage.setItem("nombre", "Antonio")

const producto = {
    nombre: "Antonio",
    nacionalidad: "Española"
}

localStorage.setItem("listaCompra", producto)

const productoString = JSON.stringify(producto)