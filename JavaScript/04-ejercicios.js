//Calcular área

let radio = parseFloat(prompt("Introduce el radio: "))
let area = (Math.PI * 4) * Math.pow(radio, 2)
let volumen = ((4/3) * Math.PI) * Math.pow(radio, 3) 
alert("El aŕea de la esfera es: " + area)
alert("El volumen de la esfera es: " + volumen)