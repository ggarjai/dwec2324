let nombre = prompt("Introduce tu nombre")
let apellido1 = prompt("Introduce tu primer apellido")
let apellido2 = prompt("Introduce tu segundo apellido")

nombre = nombre.replace(/ /g, '')
apellido1 = apellido1.replace(/ /g, '')
apellido2 = apellido2.replace(/ /g, '')

nombre = nombre.toLowerCase
apellido1 = apellido1.toLowerCase
apellido2 = apellido2.toLowerCase

let palabra = nombre.charAt(0) + apellido1 + apellido2.charAt(0)


alert(
    `
    Nombre: ${nombre}
    Apellido 1: ${apellido1}
    Apellido 2: ${apellido2}
    `
)

alert(palabra)