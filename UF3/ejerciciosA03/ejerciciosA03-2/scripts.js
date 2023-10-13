function lanzarDados() {
    return Math.floor(Math.random() * 6) + 1
}

let tiradas = {};
console.log(tiradas)

for (let i = 0; i < 36000; i++) {
    let dado1 = lanzarDados()
    let dado2 = lanzarDados()
    let suma = dado1 + dado2


    if (!tiradas[suma]) {
        tiradas[suma] = 1
    } else {
        tiradas[suma]++
    }
}

for (let resultado in tiradas) {
    console.log(`Dados suma: ${resultado} ha salido ${tiradas[resultado]} veces.`)
}