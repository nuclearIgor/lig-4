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

const novavitoria = ()=>{
    if(condicaohorizontal()){return true}
    else if(condicaovertical()){return true}
    else if(diagonalpradireita()){return true}
    else if(diagonalpraesquerda()){return true}
}

function deuEmpate(){
    let empate = false
    let espacosCheios = 0
    for (let linha = tabuleiro.length -1; linha > 0; linha --) { 
        for (let coluna = tabuleiro[linha].length -1; coluna >= 0; coluna --) {
            if(tabuleiro[linha][coluna] !== " "){
                espacosCheios ++
            }
        }
    }
    
    if(espacosCheios === (tabuleiro.length -1) * tabuleiro[0 + 1].length) {
        empate = true
    }

    console.log(espacosCheios)
    console.log(empate)
    return empate
}

function criaTelaFinal(vitoria, deuEmpate){
    let div = document.querySelector(".tela-resultado")
    let botaoJogaNovamente = document.getElementById("botao-reset")
    if(vitoria === true){
        
        //cria tela vitoria

        div.firstElementChild.classList.remove("hidden")
        div.firstElementChild.innerText = `Você venceu!!`
        div.firstElementChild.appendChild(criaDisco(jogador))
        div.classList.remove("hidden")
        botaoJogaNovamente.classList.add("botaoJogarNovamente")
        botaoJogaNovamente.classList.remove("botao-reset")



        return div
     }

    if(deuEmpate === true){
        //cria tela empate
        div.lastElementChild.classList.remove("hidden")
        div.classList.remove("hidden")
        div.lastElementChild.innerText = `Empate!!`
        div.lastElementChild.appendChild(criaDisco(jogador))
        trocaJogador()
        div.lastElementChild.appendChild(criaDisco(jogador))
        botaoJogaNovamente.classList.add("botaoJogarNovamente")
        botaoJogaNovamente.classList.remove("botao-reset")
        
        return div
    }

}