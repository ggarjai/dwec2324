

sessionStorage.removeItem("nombre2")

const mesesParse = JSON.parse(localStorage.getItem("meses"))

console.log(mesesParse)

mesesParse.push("Abril")

localStorage.setItem("meses", JSON.stringify(mesesParse))