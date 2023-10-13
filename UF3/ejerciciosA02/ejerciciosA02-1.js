/* 

Ejercicio 1
Escribe un script que pida al usuario el valor del radio de una circunferencia y muestre por pantalla (no en la consola):
El valor del área del círculo.
El valor del área de la esfera.
El valor del volumen de la esfera.


*/

let radio = prompt("Introduce el radio")



alert (
    `
    El radio es: ${radio} cm
    El diametro es: ${radio * 2} cm
    El perímetro es: ${((radio * 2) * Math.PI).toFixed(2)} cm
    El área es: ${(cArea = Math.PI * Math.pow(radio, 2)).toFixed(2)} cm
    El área de la esfera es: ${(sArea = 4 * Math.PI * Math.pow(radio, 2)).toFixed(2)} cm
    El valor del volumen de la esfera es: ${(volumen = (4/3) * Math.PI * Math.pow(radio, 3)).toFixed(2)} cm 
    `
)



