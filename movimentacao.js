
let jogador = "P1"

function trocaJogador(){
    if(jogador === "P1"){jogador = "P2"}
    else{jogador = "P1"}
    return jogador
}

function criaDisco(jogador){
    let disco = document.createElement("div")
    disco.classList.add("disco")
    disco.classList.add(jogador)
    return disco
}


function soltaDisco(e){
    let linha = tabuleiro.length - 1
    let coluna = e.currentTarget.id
    while(tabuleiro[linha][coluna] !== " " && linha > 0){
        linha --
    }
    tabuleiro[linha][coluna] = jogador
    let colunaPai = document.getElementById(coluna.toString())
    console.log(colunaPai.childElementCount)
    let disco = criaDisco(jogador)

    colunaPai.appendChild(disco)
    if(colunaPai.childElementCount === 6){
        colunaPai.removeEventListener('click', soltaDisco)
    }
    // novavitoria()
    criaTelaFinal(novavitoria(), deuEmpate())
    trocaJogador()
    exibeturnoatual()
    incrementadordejogadas()
    
}


