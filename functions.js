//**********************************************************************
//******************** Desplazar palabra en divs ***********************
let intervalID;

let indiceDiv0 = 0;
let contadorDiv0 = -1;
let indiceDiv1 = 0;
let contadorDiv1 = -1;
let indiceDiv2 = 0;
let contadorDiv2 = -1;
let indiceDiv3 = 0;
let contadorDiv3 = 0;

function launch() {
    //Comprobar si ya se ha configurado un intervalo
    if (!intervalID) {
        intervalID = setInterval(move, 1000);
    }
}

function move() {

    //Obtengo la palabra del textbox
    let word = document.getElementById("textBox").value + " ";

    //Declaro el array
    let array = [];
    //Con un For Loop recorro caracter a caracter la palabra y lo añado al array
    for (let i of word) {
        array.push(i);
    }

    //En cada div recorro la palabra caracter a caracter por intervalo

    //DIV0
    if (indiceDiv0 >= array.length) {
        indiceDiv0 = 0;
    } else if (contadorDiv0 >= 0) {
        document.getElementById("div0").innerHTML = array[indiceDiv0];
        indiceDiv0++;
    }

    //DIV1
    if (indiceDiv1 >= array.length || contadorDiv1 < contadorDiv3) {
        indiceDiv1 = 0;
    } else if (contadorDiv1 >= 0) {
        document.getElementById("div1").innerHTML = array[indiceDiv1];
        indiceDiv1++;
        contadorDiv0++;
    }

    //DIV2
    if (indiceDiv2 >= array.length || contadorDiv2 < contadorDiv3) {
        indiceDiv2 = 0;
    } else if (contadorDiv2 >= 0) {
        document.getElementById("div2").innerHTML = array[indiceDiv2];
        indiceDiv2++;
        contadorDiv1++;
    }

    //DIV3
    if (indiceDiv3 >= array.length) {
        indiceDiv3 = 0;
    } else if (contadorDiv3 >= 0) {
        document.getElementById("div3").innerHTML = array[indiceDiv3];
        indiceDiv3++;
        contadorDiv2++;
    }

    // =)
    const oElem = document.getElementById("myBox");

    if (oElem.className === "go") {
        oElem.className = "stop";
    } else {
        oElem.className = "go"
    }
}

function stop() {
    clearInterval(intervalID);
    //Liberar nuestro intervalID de la variable
    intervalID = null;
}

function reboot(){
    location.reload();
}

document.getElementById("iniciar").addEventListener("click", launch);
document.getElementById("parar").addEventListener("click", stop);
document.getElementById("reboot").addEventListener("click", reboot);