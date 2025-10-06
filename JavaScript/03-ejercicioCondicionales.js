// Ejercicio 1
let n = 16

if(n == 1) {
console.log("Aritz")
}else {
    console.log("No soy ese")
}

//Ejercicio 2
let user = "aritz"
let pass = "hola"

let uno = "Aritz"
let dos = "HoLA"

if (uno.toLowerCase() == user && dos.toLowerCase() == pass) {
    console.log("Has iniciado sesión")
}else {
    console.log("Datos incorrectos")
}

//Ejercicio 3

if (n > 0) {
    console.log("Es positivo")
}else if(n < 0) {
    console.log("Es negativo")
} else {
    console.log("Es 0")
}

//Ejercicio 4

if(n >= 18) {
    console.log("Puedes votar")
} else {
    
    console.log("No puedes votar, te faltan " + (18-n) + " años." )
}

//Ejercicio 5

console.log(n >= 18 ? "Eres adulto" : "Eres menor")

//Ejercicio 6

let mes = 5

if(mes > 3 && mes <= 6) {
    console.log("Primavera")
} else if (mes >= 6 && mes <= 9) {
    console.log("Verano")
} else if (mes >= 9 && mes <= 12) {
    console.log("Otoño")
} else if (mes >= 1 && mes <= 3){
    console.log("Invierno")
}

//Ejercicio 7

if(mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log("Tiene 30 dias")
} else if (mes == 1 || mes == 3 || mes == 5 || mes == (7-8) || mes == 10 || mes == 12){
    console.log("Tiene 31 días")
} else if (mes == 2){ 
    console.log("Tiene 28 dias")
}

//Ejercicio 8

let idioma = 1

switch(idioma) {
    case 1: 
        console.log("Hola")
    break;
    case 2: 
    console.log("Hello")
    break;
}

//Ejercicio 9

switch(mes) {
    case 3-6:
        console.log("Primavera")
    break;
}

//Ejercicio 10

