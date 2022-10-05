let votosL1 = 0;
let votosL2 = 0;
let votosTotales=0;
let divCantVotosL1 = document.getElementById("cantVotosL1");
    divCantVotosL1.innerHTML = parseInt(votosL1);
let divCantVotosL2 = document.getElementById("cantVotosL2");
    divCantVotosL2.innerHTML = parseInt(votosL2);

    function Lista1(){
        let seleccionarTex= document.getElementById("textoVoto");
        let seleccionarTex1= document.getElementById("textoVoto1");
        seleccionarTex.style.display = "block";
        seleccionarTex1.style.display = "none";
    };
    


    function Lista2(){
        let seleccionarTex1= document.getElementById("textoVoto1");
        let seleccionarTex= document.getElementById("textoVoto");
        seleccionarTex1.style.display = "block";
        seleccionarTex.style.display = "none";
    }
    setTimeout(Lista2, 2000);
    function porcentaje(){
        //let porcentajeL1 = document.getElementById('porcentajeL1');
        //let porcentajeL2 = document.getElementById('porcentajeL2');
            //porcentajeL1.innerHTML = ((votosL1*100)/votosTotales).toFixed(2) + '%';
            //porcentajeL2.innerHTML = ((votosL2*100)/votosTotales).toFixed(2) + '%';
            console.log('porcentaje lista 1: '+ ((votosL1*100)/votosTotales).toFixed(2) + '%');
            console.log('porcentaje lista 2: '+ ((votosL2*100)/votosTotales).toFixed(2) + '%');

    }

    //let botones = document.querySelector("button");
       // botones.addEventListener("click", porcentaje);


    //let porcentajeL1 = document.getElementById('porcentajeL1');
    //porcentajeL1.innerHTML = (votosL1*100)/votosTotales;



