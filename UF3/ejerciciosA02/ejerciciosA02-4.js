function actualizarReloj() {

    //primero creamos una fecha.
    const ahora = new Date()

    //declaramos las constantes obteniendo horas, minutos y segundos.
    const horas = ahora.getHours()
    const minutos = ahora.getMinutes()
    const segundos = ahora.getSeconds()

    //le damos formato y usamos padStart para que siempre tenga 2 dígitos
    const formatoHoras = (horas % 24).toString().padStart(2, '0')
    const formatoMinutos = minutos.toString().padStart(2, '0')
    const formatoSegundos = segundos.toString().padStart(2, '0')

    //creamos la constante que almacenará la hora con formato completo
    const tiempo = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`

    //actualizamos el contenido del elemento reloj
    document.getElementById('reloj').textContent = tiempo
}

setInterval(actualizarReloj, 500)
