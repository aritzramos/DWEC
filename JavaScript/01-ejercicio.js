function sumar(a,b) {
    return a+b;
}
function restar(a,b) {
    return a-b;
}
function multi(a,b) {
    return a*b;
}
function div(a,b) {
    return a/b;
}

function menu() {
    let menu = parseInt(prompt('1. Sumar | 2. Restar | 3. Multiplicar | 4. Dividir | 5. Salir'));
    return menu;
}
function pedirNumeros() {
let a = parseFloat(prompt('Numero 1: '));
let b = parseFloat(prompt('Numero 2: '));
return [a,b];
}
let a,b;
let salir = false;

do {
   let menu1 = menu();

    switch(menu1) {
        case 1:
            [a,b] = pedirNumeros();
            alert(sumar(a,b));
        break;

        case 2:
            [a,b] = pedirNumeros();
            alert(restar(a,b));
            break;
        
        case 3:
            [a,b] = pedirNumeros();
            alert(multi(a,b));
            break;
        case 4:
            [a,b] = pedirNumeros();
            alert(div(a,b));
            break;
        case 5:
            alert('Saliendo..')
            salir=true;
            break;

    }
}while(!salir);


   
