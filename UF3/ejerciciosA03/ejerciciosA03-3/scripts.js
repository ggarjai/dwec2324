//aplanar la matriz
function aplanarArray(matriz) {
    return matriz.reduce((acc, current) => {
        return acc.concat(Array.isArray(current) ? aplanarArray(current) : current)
    }, [])
  }
  
  //ordenar la matriz
function ordenarArray(matriz) {
    if (matriz.length <= 1) {
    return matriz
    }

    const select = matriz[0]
    const left = []
    const right = []

    for (let i = 1; i < matriz.length; i++) {
        if (matriz[i] < select) {
            left.push(matriz[i])
        } else {
            right.push(matriz[i])
        }
    }

    return ordenarArray(left).concat(select, ordenarArray(right))
}
  
//matriz dada
const matriz = [[5, 4, 6], [2, 9, 3], [8, 1, 7]]
  
//aplanar la matriz
const aplanada = aplanarArray(matriz)
  
//ordenar la matriz aplanada
const resultado = ordenarArray(aplanada)
  
console.log(`Matriz desordenada:`)
console.log(matriz)
console.log(`Matriz ordenada:`)
console.log(resultado)
