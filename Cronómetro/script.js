let hr = mn = sg = ms = "0" + 0, iniciarTiempo;

const botonIniciar = document.querySelector(".iniciar");
const botonDetener = document.querySelector(".detener");
const botonReiniciar = document.querySelector(".reiniciar");

botonIniciar.addEventListener("click", iniciar);
botonDetener.addEventListener("click", detener);
botonReiniciar.addEventListener("click", reiniciar);

function iniciar() {
    botonDetener.classList.remove("on");
    botonIniciar.classList.add("on");

    iniciarTiempo = setInterval(()=>{
        ms++;
        ms = ms < 10 ? "0" + ms :ms

        if(ms==100){
            sg++;
            sg = sg < 10 ? "0" + sg :sg;
            ms = "0" + 0;
        }
        
        if(sg == 60){
            mn++
            mn = mn < 10 ? "0" + mn :mn;
            sg = "0" + 0;
        }

        if(mn == 60){
            hr++;
            hr = hr < 10 ? "0" + hr :hr;
            mn = "0" + 0;
        }

        ingresarValor();

    },10);
}


function detener() {
    botonIniciar.classList.remove("on");
    botonDetener.classList.add("on");

    //ya no se refresca la pantalla, no sigue el cronómetro
    clearInterval(iniciarTiempo);


}
function reiniciar() {
    botonDetener.classList.remove("on");
    botonIniciar.classList.remove("on");
    clearInterval(iniciarTiempo);
    hr = mn = sg = ms = "0" + 0;
    ingresarValor();
}

function ingresarValor() {
 
    document.querySelector(".milisegundo").innerHTML =ms;
    document.querySelector(".segundo").innerHTML =sg;
    document.querySelector(".minuto").innerHTML =mn;
    document.querySelector(".hora").innerHTML =hr;
}