let horaDoDesafio = document.querySelector("h1");
horaDoDesafio.innerHTML = "HORA DO DESAFIO";

function oBotaoFoiClicado() {
        console.log("botao foi clicado");
}

function exibirAlerta() {
        alert("Eu amo JS");
}

function exibirPrompt() {
        let nomeDacidade = prompt("Digite o nome de uma cidade do Brasil que você gosta muito:");
        alert("Estive em " + nomeDacidade + "e lembrei de você");
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt("Digite o primeiro número"));
    let segundoNumero = parseInt(prompt("Digite o segundo número"));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}

