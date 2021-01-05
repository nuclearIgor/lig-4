/* */
// criar caixa 6 linhas 7 colunas
// player 1 (bola vermelha) e player 2 (bola preta)
// clicar na coluna criar bolinha 1
// verificacao de ultimo player colocado
// 
//
/* */

[0, 1 , 2  ]

const fundo = document.querySelector('.fundo')

const caixa = () => {
    
    for ( let i = 0; i < 7; i++){ 
        const criaColuna = document.createElement('div')
        criaColuna.className = 'coluna'
        criaColuna.id = `${i}`
        
        fundo.appendChild(criaColuna)
    }

}
caixa()

const criaDisco = (jogador) => {
    const disco = document.createElement('div')
    disco.className = `${jogador}`

}


let jogador = jogador1

const trocarTurno = () => {
    if (jogador === jogador1) {
       return jogador = jogador2 
    }

    if (jogador === jogador2) {
        return jogador = jogador1
    }
    
}

