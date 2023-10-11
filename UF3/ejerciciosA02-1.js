/* Ejercicio 2

Escribe un script que pida al usuario su nombre y apellidos y muestre:
El tamaño del nombre más los apellidos (sin contar espacios).
La cadena en minúsculas y en mayúsculas.
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga:
Nombre
Apellido 1 
Apellido 2
Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido, Por ejemplo, para Laura Folgado Galache sería lfolgadog.
Otra propuesta de nombre de usuario, compuesto por las tres primeras letras del nombre (con la primera en mayúscula) y de los dos apellidos. Por ejemplo, para el nombre anterior sería Laufolgal
 */

let datos = prompt("Introduce nombre y apellidos")
console.log(datos.length)

for (i=0;i<datos.length;i++){
    if (datos[i] === " ") {
        console.log("OK!!")
        continue
    }
    console.log(datos[i])
}