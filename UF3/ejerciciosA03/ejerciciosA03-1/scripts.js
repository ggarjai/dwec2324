function repetirPalabra(n) {

    if (n === 1) {
        return "bauuuba"
    }

    return repetirPalabra(n - 1) + " bauuuba"
}

const n = parseInt(prompt("Introduce el número de veces"))

if (!isNaN(n)) {
    const resultado = repetirPalabra(n)
    alert(resultado)
} else {
    alert("El valor introducido no es válido")
}

repetirPalabra(n)