const criafundo3d = ()=> {
    let filler = document.querySelector('.filler')
    
    for(let i = 0; i < 7; i++){
      let coluna = document.createElement('div')
        coluna.classList.add('colunafiller')
        for(let j = 0; j < 6; j++){
            let circulo = document.createElement('div')
            circulo.classList.add('circulofiller')
            coluna.appendChild(circulo)
        }
        filler.appendChild(coluna)
    }
}
criafundo3d()

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