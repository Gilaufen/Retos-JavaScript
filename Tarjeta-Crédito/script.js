const inputTarjeta = document.getElementById("inputTarjeta");
const inputFecha = document.getElementById("inputFecha");
const inputCVV = document.getElementById("inputCVV");

/*Podemos usar cualquier digito para hacer la mascara */
const mascaraNumero = "####-####-####-####";
const mascaraFecha = "##/##";
const mascaraCVV = "###";

let tarjetaNumero = [];
let fechaNumero = [];
let cvvNumero = [];

inputTarjeta.addEventListener("keydown", (e) => {

    if (e.key === "Tab") {
        return;
    }

    e.preventDefault();

    ingresoDatos(mascaraNumero, e.key, tarjetaNumero);

    inputTarjeta.value = tarjetaNumero.join("");
});

inputFecha.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }

    e.preventDefault();

    ingresoDatos(mascaraFecha, e.key, fechaNumero);
    inputFecha.value = fechaNumero.join("");

});

inputCVV.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return;
    }

    e.preventDefault();

    ingresoDatos(mascaraCVV, e.key, cvvNumero);
    inputCVV.value = cvvNumero.join("");

});

function ingresoDatos(mascara, key, arreglo) {
    let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    //valida por si le da por borrar cositas
    if (key === "Backspace" && arreglo.length > 0) {
        //eliminar el ultimo elemento del arreglo
        arreglo.pop();
        return;
    }

    if (numeros.includes(key) && arreglo.length + 1 <= mascara.length) {
        if (mascara[arreglo.length] === "-" || mascara[arreglo.length] === "/") {
            arreglo.push(mascara[arreglo.length], key);
        }else{
            arreglo.push(key);
        }
    }


}