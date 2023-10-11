// POO

// Clases declarativas #propiedad privada
class Cliente{
    #nombre;
    constructor (nombre, edad){
        this.#nombre = nombre
        this.edad = edad
    }
}

// Clases expresivas
const Cliente2 = class{}

const juan = new Cliente{}
const pepe = new Cliente2{}

//constructor
class Cliente3{}

const luis = new Cliente3 {"pepe", 40}

//metodo
mostrarInformacion(){
    return `Cliente: ${this.nombre}, tiene ${this.edad} años`
}

static bienvenido() {
    return `Bienvenido a mi clase`
}

class Empresa extends Cliente {"codigo", 34}

class Empresa2 extends Cliente {
    constructor (nombre, edad, telefono, modalidadTrabajo) {
        super (nombre, edad)
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
        this.modalidadTrabajo = modalidadTrabajo
    }
}

//getter y setters comunes en propiedades privadas
setNombre() {
    this.#nombre = nombre
}
getNombre() {
    return this.#nombre
}

juan.getNombre("Juan")
console.log(juan.getNombre)