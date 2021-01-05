
function verificaVitoriaLinha(){
    let vitoria = false
    for(let i = 0; i < tabuleiro.length; i ++){
        for(let j = 0; j < tabuleiro[i].length; j++){
            if(tabuleiro[i][j] === jogador && tabuleiro[i+1][j+1] === jogador && tabuleiro[i+2][j+2] === jogador && tabuleiro[i+3][j+3] === jogador)
            vitoria = true
            console.log(vitoria)
        }
    }
    return vitoria
    /*let resultado = false
    let contador = 0
    for(let i = tabuleiro.length -1; i >= 0; i --){
        for(j = 0; j < tabuleiro[i].length; j ++){
            let elemento = tabuleiro[i][j]
            let elementoAnterior = elemento
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
            if(contador === 4){resultado = true}
        }
        console.log(resultado)
        return resultado
    }*/
}