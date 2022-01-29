// Index 4
let alarme4 = document.getElementById("alarme04");
alarme4.addEventListener("click", play4);

let alarme3 = document.getElementById("alarme03");
alarme3.addEventListener("click", play3);

let alarme2 = document.getElementById("alarme02");
alarme2.addEventListener("click", play2);

let alarme1 = document.getElementById("alarme01");
alarme1.addEventListener("click", play1);

let statusAlarme4 = 0;
let statusAlarme3 = 0;
let statusAlarme2 = 0;
let statusAlarme1 = 0;

function play4() {
    if (statusAlarme4 == 0) {
        statusAlarme4 = 1;
        alarme4.style.height = "200px";
        alarme4.style.fontSize = "20px";
        alarme4.innerHTML = "Data: 29/01/2022 <br><br>";
        alarme4.innerHTML += "Início: 03:45h <br><br>";
        alarme4.innerHTML += "Fim: 03:46h";
    } else if (statusAlarme4 == 1) {
        statusAlarme4 = 0;
        alarme4.style.height = "100%";
        alarme4.innerHTML = "Alarme 04";
        alarme4.style.fontSize = "16px"
    }
}

function play3() {
    if (statusAlarme3 == 0) {
        statusAlarme3 = 1;
        alarme3.style.height = "200px";
        alarme3.style.fontSize = "20px";
        alarme3.innerHTML = "Data: 20/01/2022 <br><br>";
        alarme3.innerHTML += "Início: 19:45h <br><br>";
        alarme3.innerHTML += "Fim: 19:47h";
    } else if (statusAlarme3 == 1) {
        statusAlarme3 = 0;
        alarme3.style.height = "100%";
        alarme3.innerHTML = "Alarme 03";
        alarme3.style.fontSize = "16px"
    }
}

function play2() {
    if (statusAlarme2 == 0) {
        statusAlarme2 = 1;
        alarme2.style.height = "200px";
        alarme2.style.fontSize = "20px"
        alarme2.innerHTML = "Data: 02/12/2021 <br><br>"
        alarme2.innerHTML += "Início: 00:23h <br><br>"
        alarme2.innerHTML += "Fim: 00:24h"
    } else if (statusAlarme2 == 1) {
        statusAlarme2 = 0;
        alarme2.style.height = "100%";
        alarme2.innerHTML = "Alarme 02";
        alarme2.style.fontSize = "16px"
    }
}

function play1() {
    if (statusAlarme1 == 0) {
        statusAlarme1 = 1;
        alarme1.style.height = "200px";
        alarme1.style.fontSize = "20px"
        alarme1.innerHTML = "Data: 07/08/2021 <br><br>"
        alarme1.innerHTML += "Início: 05:53h <br><br>"
        alarme1.innerHTML += "Fim: 05:56h"
    } else if (statusAlarme1 == 1) {
        statusAlarme1 = 0;
        alarme1.style.height = "100%";
        alarme1.innerHTML = "Alarme 01";
        alarme1.style.fontSize = "16px"
    }
}