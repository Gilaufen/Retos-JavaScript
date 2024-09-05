const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        //console.log(boton.textContent);
        const botonOn = boton.textContent;

      

        if (boton.id === "limpiar") {
            pantalla.textContent ="0";
            return;
        }

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1) {
                pantalla.textContent = "0";
            }
            else{
            pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;
        }

        if(boton.id === "igual") {
            try {                
                
                var firstChart = pantalla.textContent.charAt(pantalla.textContent.length - (pantalla.textContent.length + 1));
                var lastChart = pantalla.textContent.charAt(pantalla.textContent.length - 1);
                if (lastChart === "/" || firstChart === "/") {
                    pantalla.textContent = "error";    
                } else {
                    pantalla.textContent = eval(pantalla.textContent);
                }                
            } catch (error) {
                pantalla.textContent = "error";
            }
            return;
        }
        

        if(pantalla.textContent === "0" || pantalla.textContent === "¡Error!"){
            pantalla.textContent = botonOn;
        }
        else {
            pantalla.textContent += botonOn;
        }
    })

})
