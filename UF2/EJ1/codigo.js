
//Ejercicio 1

console.log("Hola mundo")
console.log("Soy el primer script")




//Ejercicio 2

let mensaje = "Hola mundo!\nQué fácil es incluir 'comillas simples' y \"comillas dobles\"."
alert(mensaje)




//Ejercicio 3
//Aquí declaramos la variable horaDelDia como la fecha y hora actual
let horaDelDia = new Date()
//de la fecha solo cogeremos las horas
let presente = horaDelDia.getHours()

//Comprobamos el rango de horas para saber qué momento del día es y dar el saludo correcto
if (presente <= 12 || presente >= 6) {
    alert("Buenos días")
} else if (presente <= 20 || presente >= 13) {
    alert("Buenas tardes")
} else if (presente <= 5 || presente >= 21) {
    alert("Buenas noches")
}



//Ejercicio 4

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
alert(meses)
//Aquí estamos declarando una variable de tipo array, con todos los meses separados en posiciones de la [0] a la [11] y estamos haciendo una alerta para mostrarlo en un pop-up



//Ejercicio 5
//Declaración de array
let valores = [true, 5, false, "hola", "adios", 2]

//Haciendo las operaciones
let suma = valores[1] + valores[5]
let resta = valores[1] - valores[5]
let multiplicacion = valores[5] * valores[1]
let division = valores[5] / valores[1]
let resto = valores[1] % valores[5]

//Creando una alerta que muestra todas las operaciones en una ventana
alert(`Ejercicio 5 suma:\n
 Resultado suma: ${suma}
 Resultado resta: ${resta}
 Resultado multiplicacion: ${multiplicacion}
 Resultado division: ${division}
 Resultado resto: ${resto}`)



//Ejercicio 6
//
var numero1 = 5;
var numero2 = 8;
if (numero1 < numero2) { //mayor que numero2
    alert("numero1 no es mayor que numero2")
}
if (numero2 > 0) { //mayor que cero
    alert("numero2 es positivo")
}
if (numero2 < 0) { //negativo
    alert("numero2 es negativo o distinto de cero")
}




//Ejercicio 7

let paresImpares = parseInt(prompt("Introduce un número entero:"))
if (paresImpares % 2 === 0) { //verifica si el resto entre dos da cero
    alert(paresImpares + " es un número par")
} else {
    alert(paresImpares + " es un número impar")
}




//Ejercicio 8
var texto = prompt("Introduce una frase") //introducimos la frase
function palindromo(texto) { //le pasamos la variable a la funcion
    var aMinusculas = texto.toLowerCase().replace(/[\W_]/g, '') //la pasamos a minúsculas
    var invertido = aMinusculas.split('').reverse().join('') //la dividimos en caracteres y le damos la vuelta
    if (invertido == texto) { //comparamos el resultado con la variable introducida por el usuario
        alert(`La frase introducida es un palíndromo`)
    } else {
        alert(`La frase introducida no es un palíndromo`)
    }
}
alert(palindromo(texto))
