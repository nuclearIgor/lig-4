const criafundo3d = ()=>{
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