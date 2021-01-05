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