


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

    /*function raizCuadrada() {
        const pantalla = document.getElementById('pantalla');
        const valor = parseFloat(pantalla.valor)
        pantalla.value = Math.sqrt(valor)
    }*/

