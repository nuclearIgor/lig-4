const condicaohorizontal =()=>{
    let resultado = false
    for (let linha = tabuleiro.length -1; linha >= 0; linha --){
        for (let coluna = 0; coluna < tabuleiro[linha].length; coluna ++){
            if ( tabuleiro[linha][coluna] === jogador 
                && tabuleiro[linha][coluna + 1] === jogador 
                && tabuleiro[linha][coluna + 2] === jogador 
                && tabuleiro[linha][coluna + 3] === jogador 
                ){  resultado = true
                    console.log(resultado + ' nova horizontal')
                }
            }
    }
    return resultado
}

const condicaovertical = () =>{
    let resultado = false
    for (let linha = tabuleiro.length-1 ; linha >= 0; linha--){
        for (let coluna = 0; coluna < tabuleiro[linha].length; coluna ++){
            if ( tabuleiro[linha][coluna] === jogador 
                && tabuleiro[linha - 1][coluna] === jogador 
                && tabuleiro[linha - 2][coluna] === jogador 
                && tabuleiro[linha - 3][coluna] === jogador 
                ) {
                    resultado = true
                    console.log(resultado +' nova vertical')
                }
        }
}
 return resultado
}
// condicaohorizontal()

const diagonalpradireita=()=>{
    let resultado = false
    for (let linha = tabuleiro.length -1; linha >= 0; linha --){
        for (let coluna = 0; coluna < tabuleiro[linha].length; coluna ++){
            if ( tabuleiro[linha][coluna] === jogador 
                && tabuleiro[linha - 1][coluna + 1] === jogador 
                && tabuleiro[linha - 2][coluna + 2] === jogador 
                && tabuleiro[linha - 3][coluna + 3] === jogador 
                ) {
                    resultado = true
                    console.log(resultado +' nova diagonal direita')
                }
        }
}
return resultado
}


const diagonalpraesquerda=()=>{
    let resultado = false

    for (let linha = tabuleiro.length -1; linha >= 0; linha --) {
        for (let coluna = tabuleiro[linha].length -1; coluna >= 0; coluna --) {
           
            if ( tabuleiro[linha][coluna] === jogador 
                && tabuleiro[linha - 1][coluna - 1] === jogador 
                && tabuleiro[linha - 2][coluna - 2] === jogador 
                && tabuleiro[linha - 3][coluna - 3] === jogador 
                ) {
                    resultado = true
                    console.log(resultado +' nova diagonal esquerda')
                }
        }

}
return resultado
}

const novavitoria = (horizontal, vertical, diagonalA, diagonalB)=>{
    if(condicaohorizontal() === true){return true}
    else if(condicaovertical() === true){return true}
    else if(diagonalpradireita() === true){return true}
    else if(diagonalpraesquerda() === true){return true}
}

function deuEmpate(){
    // let vitoria = novavitoria()
    let linha = tabuleiro.length -2
    let coluna = tabuleiro[linha].length -1
    let empate = false
    let espacosCheios = 0
    for (linha; linha >= 0; linha --) {
        for (coluna; coluna >= 0; coluna --) {
            if(tabuleiro[linha][coluna] !== " "){
                espacosCheios ++
            }
        }
    }
    
    if(espacosCheios === tabuleiro.length * tabuleiro[linha + 1].length && novavitoria() === false){
        empate = true
    }
    return empate
}

function criaTelaFinal(vitoria, deuEmpate){
    let div = document.querySelector(".tela-resultado")
    let botaoJogaNovamente = document.getElementById("#botao-reset")
    if(vitoria === true){
        
        //cria tela vitoria
        div.classList.add("vitoria")
        div.classList.remove("hidden")

    }

    if(deuEmpate === true){
        //cria tela empate
        div.classList.add("empate")
        div.classList.remove("hidden")
        
    }
}