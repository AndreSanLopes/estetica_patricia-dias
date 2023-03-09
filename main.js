/*
GLOBAIS
*/

var opcao1 = document.querySelector("a#item1")
var opcao2 = document.querySelector("a#item2")
var opcao3 = document.querySelector("a#item3")

var titH3 = document.querySelector("h3#titTxt")

function espac() {
    var espacamento = `
    .image h3:hover{
        letter-spacing: -0.5vh;
        transition-duration: 0.2s;
    }
    ` //NOVOS PARÂMETROS CSS

    var novoStyle = document.createElement("style") //var CRIA A TAG style
    novoStyle.innerText = espacamento //OS PARÂMETROS PASSADOS PELA VARIÁVEL espacamento ENTRAM NA VARIÁVEL novoStyle
    document.head.appendChild(novoStyle)//novoStyle PASSA A FAZER PARTE DO head

}

function grifar() {
    opcao1.style.color = '#0e0e0e'
}

function grifar2() {
    opcao2.style.color = '#0e0e0e'
}

function grifar3() {
    opcao3.style.color = '#0e0e0e'
}

function opaco() {
    opcao1.style.color = '#0e0e0eab'
    opcao2.style.color = '#0e0e0eab'
    opcao3.style.color = '#0e0e0eab'
}

/*var teste = document.querySelector("p#escreve")
teste.innerHTML += `<br>TESTE 1, 2, 3`*/