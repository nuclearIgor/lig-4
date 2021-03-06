const telaStart = () => {

    let fundoStart = document.createElement('div')
    fundoStart.classList.add('fundoStart')

    document.body.appendChild(fundoStart)

    let nomeJogo = document.createElement('div')
    nomeJogo.textContent = 'LIG-4 TURBO'
    nomeJogo.classList.add('nomeJogo')

    document.querySelector('.fundoStart').appendChild(nomeJogo)

}
telaStart()

const carregarTelaJogo = () => {
    let nomeJogo = document.querySelector('.nomeJogo')
    let fundoStart = document.querySelector('.fundoStart')
    let buttonStart = document.querySelector('#botao-start')
    let botaoReset = document.querySelector('#botao-reset')
    let main = document.querySelector('#main')

    nomeJogo.classList.add('hidden')
    fundoStart.classList.add('hidden')
    buttonStart.classList.add('hidden')
    botaoReset.classList.remove('hidden')
    main.classList.remove('hidden')
    main.classList.remove('hidden')

}

const adicionaEventoBotaoStart = () => {
    let buttonStart = document.querySelector('#botao-start')

    buttonStart.addEventListener('click', carregarTelaJogo )
}

adicionaEventoBotaoStart()


const resetaJogo = () => {

    for (let linha = tabuleiro.length -1; linha >= 0; linha --) {

        for (let coluna = tabuleiro[linha].length -1; coluna >= 0; coluna --) {

            tabuleiro[linha][coluna] = ' '

        }
    } 

    let todasColunas = document.querySelectorAll('.coluna')

    for(let i = 0; i < todasColunas.length; i++) {
        todasColunas[i].innerHTML = ''
    }
    addHandlerNasColunas()

    let div = document.querySelector(".tela-resultado")
    let botaoJogaNovamente = document.getElementById("botao-reset")

    div.firstElementChild.classList.add("hidden")
    div.lastElementChild.classList.add("hidden")
    div.classList.add("hidden")
    botaoJogaNovamente.classList.remove("botaoJogarNovamente")
    botaoJogaNovamente.classList.add("botao-reset")

    //reseta contador de jogadas
    let contadorJogadas = document.getElementById("contadordejogadas")
    contadorJogadas.textContent = 0

    //reseta disco turno jogador
    jogador = "P1"
    exibeturnoatual()
   
    jogadas = 0
   
}


const adicionaEventoReset = () => {
    let botaoReset = document.querySelector('#botao-reset')

    botaoReset.addEventListener('click', resetaJogo)

}
adicionaEventoReset()

const removeEventoReset = () => {
    let botaoReset = document.querySelector('#botao-reset')
    botaoReset.removeEventListener('click', resetaJogo)
}


let jogadas = 0

const incrementadordejogadas = () => {
    if(jogadas < tabuleiro.length * tabuleiro[0].length){
        jogadas+=1
        return jogadasnatela()
    }
}

const jogadasnatela = ()=>{
    const espaconatela = document.getElementById('contadordejogadas')
    return espaconatela.innerText = jogadas
}

const turno = document.getElementById('turno')
turno.appendChild(criaDisco(jogador))

const exibeturnoatual = () => {
   return turno.firstChild.replaceWith(criaDisco(jogador))
}