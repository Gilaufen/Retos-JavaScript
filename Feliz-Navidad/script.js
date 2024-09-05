let botonSonido = new Audio("../sound/cancion.mp3");
let botonPlay = document.getElementById("play");
let botonPause = document.getElementById("pause");
let papaNoel = document.getElementById("papaNoel")


function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();

    //sumamos un milisegundo porque va a tener un segundo de retraso
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {

        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,

    }

};


function cuentaRegresiva(tiempoFaltante, reloj, mensaje) {

    let e = document.getElementById('mensaje')

    const diasDiv = document.getElementById('dia');
    const horaDiv = document.getElementById('hora');
    const minutoDiv = document.getElementById('minuto');
    const segundoDiv = document.getElementById('segundo');


    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(tiempoFaltante);

        //muestra la cuenta regresiva
        diasDiv.innerHTML = `${t.diasFaltantes}`
        horaDiv.innerHTML = `${t.horasFaltantes}`
        minutoDiv.innerHTML = `${t.minutosFaltantes}`
        segundoDiv.innerHTML = `${t.segundosFaltantes}`


        if (t.tiempoFaltante <= 1) {
            //refresca intervalo y de paso manda un mensaje
            clearInterval(tiempoActual);
            diasDiv.innerHTML = `00`
            horaDiv.innerHTML = `00`
            minutoDiv.innerHTML = `00`
            segundoDiv.innerHTML = `00`
            e.innerHTML = mensaje;

            botonPlay.classList.add("activado");
            botonPause.classList.add("activado");
            botonPlay.classList.remove("inactivado");
            botonPause.classList.remove("inactivado");

            papaNoel.classList.add("on");

        } else {
            botonPlay.classList.add("inactivado");
            botonPause.classList.add("inactivado");
            papaNoel.classList.add("off");
        }

    }, 1000
    );
};

function bailar() {
    botonSonido.play();
}

function pausar() {
    botonSonido.pause();
}


cuentaRegresiva('Dec 25 2023 00:00:00 GMT-0500', 'cuentaRegresiva', '¡Feliz Navidad!');



