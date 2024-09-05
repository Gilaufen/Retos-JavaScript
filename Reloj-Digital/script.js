document.addEventListener("DOMContentLoaded", function () {


    function TiempoCalculator() {
        
        let tiempo = new Date()

        let hora = tiempo.getHours();
        let minuto = tiempo.getMinutes();
        let segundo = tiempo.getSeconds();

        hora = hora < 10 ? "0" + hora : hora;
        minuto = minuto < 10 ? "0" + minuto : minuto;
        segundo = segundo < 10 ? "0" + segundo : segundo;


        let pantallaReloj = hora + " : " + minuto + " : " + segundo;
        let relojDigital = document.querySelector(".reloj");

        relojDigital.innerHTML = pantallaReloj;
    }

    setInterval(TiempoCalculator, 1000);
})