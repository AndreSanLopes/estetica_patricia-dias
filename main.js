/*
GLOBAIS
*/

var btTopo = document.querySelector("button#top")
btTopo.style.display = "none" //OCULTA O BOTÃO DE VOLTAR AO TOPO POR PADRÃO

//MOSTRA O BOTÃO DE VOLTAR AO TOPO QUANDO O USUÁRIO DESCE PELA PÁGINA
window.onload = addEventListener("scroll", Topo => {
    btTopo.style.display = "initial"
}
)

var titH3 = document.querySelector("h3#titTxt")

function voltarTop(){
    window.scrollTo(0,0)
}

/*
.image h3:hover
letter-spacing: -0.5vh;
        transition-duration: 0.2s;*/
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

/*var teste = document.querySelector("p#escreve")
teste.innerHTML += `<br>TESTE 1, 2, 3`*/