document.addEventListener("DOMContentLoaded", () => {

    //objeto con el contenido del mensaje
    const emailObjeto = {
        email: "",
        asunto: "",
        mensaje: ""
    }

    //selectores
    const inputEmail = document.querySelector("#email")
    const inputAsunto = document.querySelector("#asunto")
    const inputMensaje = document.querySelector("#mensaje")
    const formulario = document.querySelector("#formulario")
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector("#spinner")

    //listeners
    inputEmail.addEventListener("input", validar)
    inputAsunto.addEventListener("input", validar)
    inputMensaje.addEventListener("input", validar)
    btnSubmit.addEventListener("submit", activarSpinner)
    btnReset.addEventListener("click", (e) => {
        e.preventDefault()
        resetForm()
        comprobarEmail()
    })
    
    //funciones
    
    function activarSpinner(e){
        e.preventDefault()
        spinner.classList.remove("hidden")
        spinner.classList.add("flex")
    
    setTimeout(() => {
        spinner.classList.remove("hidden")
        spinner.classList.add("flex")
    }, 3000)

    resetForm()

    //creamos alerta de todo OK

    const aviso = document.createElement("p")
    aviso.classList.add("bg-green-500", "text-white", "text-center", "rounded-lg", "mt-10", "text-sm")
    aviso.textContent = "El mensaje se ha enviado con éxito"
    }

    function resetForm() {
        emailObjeto.email=""
        emailObjeto.asunto=""
        emailObjeto.mensaje=""
        formulario.reset()
    }


    function validar(e) {
    
        if (e.target.value.trim() === "") {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            emailObjeto[e.target.name]=""
            comprobarEmail()
            return
        } 
        if (e.target.id === "email" && !validarEmail(e.target.value)) {
            mostrarAlerta("El email no es válido", e.target.parentElement)
            emailObjeto[e.target.name]=""
            comprobarEmail()
            return
        }
    


        limpiarAlerta(e.target.parentElement)
    
        emailObjeto[e.target.name] = e.target.values
        comprobarEmail(emailObjeto)
    }

    function comprobarEmail() {
        const values = Object.values(emailObjeto)

        if (values.includes("")) {
            btnSubmit.classList.add("opacity-50")
            btnSubmit.disabled = true
        } else {
            btnSubmit.classList.remove("opacity-50")
            btnSubmit.disabled = false
        }
    }
    
    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector(".bg-red-600")
        if (alerta) {
            alerta.remove()
        }
    }
    
    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia)
    
    
        const error = document.createElement("p")
        error.textContent = mensaje
        error.classList.add("bg-red-600", "text-center", "text-white", "p-2")
        console.log(error)
        referencia.appendChild(error)
    
    }
    
    function validarEmail(email) {
        regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //expresion regular
        resultado = regex.test(email)
        return resultado
    }
})

