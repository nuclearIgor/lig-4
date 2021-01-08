const tabuleiro = [
    [" "," "," "," "," "," "," "],
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
function addHandlerNasColunas(){
    let colunas = document.querySelectorAll(".coluna")
    for(i = 0; i < colunas.length; i ++){
        colunas[i].addEventListener("click", soltaDisco)
    }
}

function removeHandlerNasColunas(){
    let colunas = document.querySelectorAll(".coluna")
    for(i = 0; i < colunas.length; i ++){
        colunas[i].removeEventListener("click", soltaDisco)
    }
}

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
criaColunas()
implementaColunasNoDom()
addHandlerNasColunas()