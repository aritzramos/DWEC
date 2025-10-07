function agregarNumero(numero) {
    const pantalla = document.getElementById('pantalla')
    pantalla.value += numero
}

function operacion() {
    const texto = document.getElementById('pantalla')
    texto.value = eval(texto.value)
}

function limpiar() {
    document.getElementById('pantalla').value = ""
}
function borrarUno() {
    const pantalla = document.getElementById('pantalla')
    pantalla.value = pantalla.value.slice(0, -1)
}

/*function raizCuadrada() {
    const pantalla = document.getElementById('pantalla');
    const valor = parseFloat(pantalla.valor)
    pantalla.value = Math.sqrt(valor)
}*/