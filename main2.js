// Index 3
let ligado = document.getElementById("ligado").addEventListener("click", ligar);
let desligado = document.getElementById("desligado").addEventListener("click", desligar);

function ligar() {
    document.querySelector("#ligado").style.display = "none";
    document.querySelector("#desligado").style.display = "block";
}

function desligar() {
    document.querySelector("#ligado").style.display = "block";
    document.querySelector("#desligado").style.display = "none";
}
