const tabuleiro = [
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "]
]
function criaColunas(){
    const colunas = []
    for(let i = 0; i < 7; i ++){
        let coluna = document.createElement("div")
        coluna.classList.add("coluna")
        coluna.id = i
        colunas.push(coluna)
    }
    return colunas
}

function implementaColunasNoDom(){
    const colunas = criaColunas()
    let paiDasColunas = document.querySelector(".fundo")
    colunas.forEach((coluna) => paiDasColunas.appendChild(coluna))
}

let jogador = "P1"

function trocaJogador(){
    if(jogador === "P1"){jogador = "P2"}
    else {jogador = "P1"}
    return jogador
}

function criaDisco(jogador){
    let disco = document.createElement("div")
    disco.classList.add("disco")
    disco.classList.add(jogador)
    return disco
}

function addHandlerNasColunas(){
    let colunas = document.querySelectorAll(".coluna")
    for(i = 0; i < colunas.length; i ++){
        colunas[i].addEventListener("click", soltaDisco)
    }
}

function soltaDisco(e){
    let linha = tabuleiro.length - 1
    let coluna = e.currentTarget.id
    while(tabuleiro[linha][coluna] !== " "){
        linha --
    }
    tabuleiro[linha][coluna] = jogador
    let colunaPai = document.getElementById(coluna.toString())
    let disco = criaDisco(jogador)
    colunaPai.appendChild(disco)
    trocaJogador()
}
criaColunas()
implementaColunasNoDom()
addHandlerNasColunas()
console.log(verificaVitoriaLinha())

function verificaVitoriaLinha(){
    for(let i = tabuleiro.length -1; i >= 0; i --){
        for(j = 0; j < tabuleiro[i].length; j ++){
            let elemento = tabuleiro[i][j]
            let elementoAnterior = elemento
            let contador = 0
            if(elemento === elementoAnterior && elemento !== " "){
             
                if(elemento === "P1"){
                    contador ++
                    elementoAnterior = elemento
                }
                if(elemento === "P2"){
                    contador ++
                    elementoAnterior = elemento
                }

            }
            else if(elemento !== elementoAnterior){
                if(elemento === "P1"){
                    contador = 0
                    contador ++
                    elementoAnterior = elemento
                }
                if(elemento === "P2"){
                    contador = 0
                    contador ++
                    elementoAnterior = elemento
                }
            }
            if(contador === 4){return true}
        }
        return false
    }
}