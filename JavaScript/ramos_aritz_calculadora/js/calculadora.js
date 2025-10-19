


function encender() {
   encendido = true
}


    function agregarNumero(numero) {
        if(encendido) {
            let pantalla = document.getElementById('pantalla')
            pantalla.value += numero
        }
    }
    function operacion() {
        if(encendido) {
            let texto = document.getElementById('pantalla')
            texto.value = eval(texto.value)
        }
    }

    function limpiar() {
        if(encendido) {
            document.getElementById('pantalla').value = ""
        }
    }
    function borrarUno() {
        if(encendido) {
            let pantalla = document.getElementById('pantalla')
            pantalla.value = pantalla.value.slice(0, -1)
        }
    }

    function raizCuadrada() {
        const pantalla = document.getElementById('pantalla');
        const valor = parseFloat(pantalla.value)
        pantalla.value = Math.sqrt(valor)
    }

function cambiarColor(e) {
    const boton = e.target 
    const valor = boton.innerText

    if(isNaN(valor)) {
        boton.style.background = 'yellow'
        boton.style.color = 'black'
    }else {
        const numero = parseInt(valor)
        if(numero % 2 == 0) {
            boton.style.background = 'red'
            boton.style.color = 'black'
        }else {
            boton.style.background = 'green'
            boton.style.color = 'black'
        }
    }
}

function restaurarColor(e) {
    e.target.style.background = ''
    e.target.style.color = ''
}
    
window.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('button')
    botones.forEach(boton => {
        boton.addEventListener('mouseover', cambiarColor)
        boton.addEventListener('mouseout', restaurarColor)
    })
})