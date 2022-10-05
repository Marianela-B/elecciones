let votosL1 = 0;
let votosL2 = 0;
let votosTotales=0;
let divCantVotosL1 = document.getElementById("cantVotosL1");
    divCantVotosL1.innerHTML = parseInt(votosL1);
let divCantVotosL2 = document.getElementById("cantVotosL2");
    divCantVotosL2.innerHTML = parseInt(votosL2);

    function Lista1(){
        votosL1++;
        divCantVotosL1.innerHTML = votosL1;
        votosTotales++
        console.log(votosTotales);
        let porcentajeL1 = document.getElementById('porcentajeL1');
            porcentajeL1.innerHTML = (votosL1*100)/votosTotales;
    }

    function Lista2(){
        votosL2++;
        divCantVotosL2.innerHTML = votosL2;
        votosTotales ++;
        console.log(votosTotales);
        let porcentajeL2 = document.getElementById('porcentajeL2');
            porcentajeL2.innerHTML = (votosL2*100)/votosTotales;
    }

    function porcentaje(){
        let porcentajeL1 = document.getElementById('porcentajeL1');
        let porcentajeL2 = document.getElementById('porcentajeL2');
            porcentajeL1.innerHTML = ((votosL1*100)/votosTotales).toFixed(2) + '%';
            porcentajeL2.innerHTML = ((votosL2*100)/votosTotales).toFixed(2) + '%';

    }

    //let botones = document.querySelector("button");
       // botones.addEventListener("click", porcentaje);


    //let porcentajeL1 = document.getElementById('porcentajeL1');
    //porcentajeL1.innerHTML = (votosL1*100)/votosTotales;



