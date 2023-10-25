//selectores y variables

const marca = document.querySelector("#marca")
const year = document.querySelector("#year")
const minimo = document.querySelector("#minimo")
const maximo = document.querySelector("#maximo")
const puertas = document.querySelector("#puertas")
const transmision = document.querySelector("#transmision")
const color = document.querySelector("#color")
const modelo = document.querySelector("#modelo")

const contenedor = document.querySelector("#resultado")

const datosBusqueda = 
    {
		marca: '',
		year: '',
        minimo: '',
        maximo: '',
		precio: '',
		puertas: '',
		transmision: '',
        color: ''
		
	}


//crear años del select
const max = new Date().getFullYear()
const min = max - 10
for (let i = max; i> min; i--) {
    const option = document.createElement("option")
    option.value = i
    option.textContent = i
    document.querySelector("#year").appendChild(option)
}

//listeners
document.addEventListener("DOMContentLoaded", () => {
    mostrarCoches(coches)

})

marca.addEventListener("input", (e) => {
    datosBusqueda.marca = e.target.value
    filtrarCoches()
})
year.addEventListener("input", (e) => {
    datosBusqueda.year = parseInt(e.target.value)
    filtrarCoches()
})
minimo.addEventListener("input", (e) => {
    datosBusqueda.minimo = parseInt(e.target.value)
    filtrarCoches()
})
maximo.addEventListener("input", (e) => {
    datosBusqueda.maximo = parseInt(e.target.value)
    filtrarCoches()
})
puertas.addEventListener("input", (e) => {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarCoches()
})
transmision.addEventListener("input", (e) => {
    datosBusqueda.transmision = e.target.value
    filtrarCoches()
})
color.addEventListener("input", (e) => {
    datosBusqueda.color = e.target.value
    filtrarCoches()
    console.log(datosBusqueda)
})



//funciones
function limpiarHTML() {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)
    }
}


function mostrarCoches(coches) {

    limpiarHTML()

    coches.forEach(coche => {
        const cocheHTML = document.createElement("p")
        cocheHTML.innerHTML = `
         <p> ${coche.marca} - ${coche.modelo} - ${coche.puertas} - ${coche.color} - ${coche.transmision}</p>
        `
        contenedor.appendChild(cocheHTML)
    })
}

function filtrarCoches() {
    const resultado = coches.filter(filtraMarca)
        .filter(filtraYear)
        .filter(filtraMin)
        .filter(filtraMax)
        .filter(filtraPuertas)
        .filter(filtraTransmision)
        .filter(filtraColor);

    if (resultado.length) {
        mostrarCoches(resultado)
    } else {
        noResultado()
    }
    
}



function noResultado() {
    limpiarHTML()
    const noResultado = document.createElement("div")
    noResultado.classList.add("alerta", "error")
    noResultado.textContent = "No hay resultados"
    contenedor.appendChild(noResultado)
}

function filtraMarca(coche) {
    if (datosBusqueda.marca) {
        return coche.marca === datosBusqueda.marca
    }
    return coche
}

function filtraYear(coche) {
    if (datosBusqueda.year) {
        return coche.year === datosBusqueda.year
    }
    return coche
}
function filtraMin(coche) {
    if (datosBusqueda.minimo) {
        return coche.minimo === datosBusqueda.minimo
    }
    return coche
}
function filtraMax(coche) {
    if (datosBusqueda.maximo) {
        return coche.maximo === datosBusqueda.maximo
    }
    return coche
}
function filtraPuertas(coche) {
    if (datosBusqueda.puertas) {
        return coche.puertas === datosBusqueda.puertas
    }
    return coche
}
function filtraTransmision(coche) {
    if (datosBusqueda.transmision) {
        return coche.transmision === datosBusqueda.transmision
    }
    return coche
}
function filtraColor(coche) {
    if (datosBusqueda.color) {
        return coche.color === datosBusqueda.color
    }
    return coche
}