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
    if(horizontal === true){return true}
    else if(vertical === true){return true}
    else if(diagonalA === true){return true}
    else if(diagonalB === true){return true}
}











function condicaoVitoria() {
    let vitoria = false

    for (let linha = tabuleiro.length -1; linha >= 0; linha --) {

        for (let coluna = tabuleiro[linha].length -1; coluna >= 0; coluna --) {
           
            if ( tabuleiro[linha][coluna] === jogador 
                && tabuleiro[linha - 1][coluna - 1] === jogador 
                && tabuleiro[linha - 2][coluna - 2] === jogador 
                && tabuleiro[linha - 3][coluna - 3] === jogador 
                ) {
                    vitoria = true
                    console.log(vitoria +'dosSantos')
                }
        }

        for (let coluna = 0; coluna < tabuleiro[linha].length; coluna ++) {

            if ( tabuleiro[linha][coluna] === jogador 
                && tabuleiro[linha][coluna + 1] === jogador 
                && tabuleiro[linha][coluna + 2] === jogador 
                && tabuleiro[linha][coluna + 3] === jogador 
                ) {
                    vitoria = true
                    console.log(vitoria +'horizontalSantos')
                }
            
             else if ( tabuleiro[linha][coluna] === jogador 
                    && tabuleiro[linha - 1][coluna] === jogador 
                    && tabuleiro[linha - 2][coluna] === jogador 
                    && tabuleiro[linha - 3][coluna] === jogador 
                    ) {
                        vitoria = true
                        console.log(vitoria +'verticalSantos')
                    }

            else if ( tabuleiro[linha][coluna] === jogador 
                    && tabuleiro[linha - 1][coluna + 1] === jogador 
                    && tabuleiro[linha - 2][coluna + 2] === jogador 
                    && tabuleiro[linha - 3][coluna + 3] === jogador 
                    ) {
                        vitoria = true
                        console.log(vitoria +'MenosSantos')
                    }

        }
    }

    return vitoria
}

function deuEmpate(){
    let vitoria = condicaoVitoria()
    let linha = tabuleiro.length -1
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
    
    if(espacosCheios === tabuleiro.length * tabuleiro[linha + 1].length && vitoria === false){
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