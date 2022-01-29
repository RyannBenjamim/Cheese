let botao = document.querySelector("button").addEventListener("click", login);
let user = document.querySelector("#user");
let pass = document.querySelector("#pass");

let usuario = "Fulano"
let senha = "requeijao"

function login() {
    if (user.value == usuario && pass.value == senha) {
        alert("Você acertou a senha, Parabéns! #Requeijão")
    } else {
        alert("[ERRO] Senha ou usuário estão errados!")
    }
}