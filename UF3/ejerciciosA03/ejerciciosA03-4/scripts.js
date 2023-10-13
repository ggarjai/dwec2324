function Persona(nombre, edad, genero) {
    this.nombre = nombre
    this.edad = edad
    this.genero = genero
}

//mostrar información de la persona
Persona.prototype.getInfo = function(){
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`)
}

//clase estudiante (heredada de persona)
function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero)
    this.curso = curso
    this.grupo = grupo
}

//heredar métodos de persona
Estudiante.prototype = Object.create(Persona.prototype)

//matricular a un estudiante
Estudiante.prototype.matricular = function (curso, grupo) {
    this.curso = curso
    this.grupo = grupo
    console.log(`${this.nombre} ha sido matriculado en el curso ${curso} del grupo ${grupo}`)
}

//clase profesor heredada de persona
function Profesor(nombre, edad, genero, modulo, nivel) {
    Persona.call(this, nombre, edad, genero)
    this.modulo = modulo
    this.nivel = nivel
}

//heredar los metodos de persona
Profesor.prototype = Object.create(Persona.prototype)

//asignar modulo y nivel al profesor
Profesor.prototype.imparte = function (modulo, nivel) {
    this.modulo = modulo
    this.nivel = nivel
    console.log(`${this.nombre} imparte el módulo ${modulo} del nivel ${nivel}`)
}


//casos de prueba
const estudiante1 = new Estudiante("Antonio González", 25, "Masculino", "Clientes", "A")
const estudiante2 = new Estudiante("Manuel Méndez", 22, "Masculino", "Servidores", "C")
const estudiante3 = new Estudiante("Sofía Pelayo", 19, "Femenino", "Despliegues", "B")

const profesor1 = new Profesor("Jeff Thomas", 34, "Masculino", "Clientes", "Avanzado")
const profesor2 = new Profesor("Miguel Macías", 37, "Masculino", "Servidores", "Básico")
const profesor3 = new Profesor("Andrea Jardín", 45, "Femenino", "Clientes", "Intermedio")

estudiante1.getInfo()
estudiante1.matricular("Servidores", "A")
estudiante2.getInfo()
estudiante2.matricular("Despliegues", "C")
estudiante3.getInfo()

profesor1.getInfo()
profesor1.imparte("Despliegues", "Básico")
profesor2.getInfo()
profesor2.imparte("Clientes", "Intermedio")
profesor3.getInfo()