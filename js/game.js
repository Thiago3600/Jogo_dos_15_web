const casas = 16
const tabuleiro = []
const box = inicializa(document.querySelector('.box'))
const boxFora = document.querySelector('.boxFora')
    // console.log(tabuleiro)

const items = document.querySelectorAll('.casa')
items.forEach((item, index) => {

    item.onmousemove = e => {
        const div = e.target


        div.ondragstart = e => {
            if (item.innerHTML === '') {
                e.preventDefault()
            }
            console.log(`ondragstart ${index}`)
        }
        const dropzones = document.querySelectorAll('.casaVazia')

        for (const drop of dropzones) {
            drop.ondragover = e => {
                e.preventDefault()
            }
            drop.ondrop = function() {
                promover(drop, div)
                rebaixar(div)
            }
        }
    }
})



function promover(item, recebe) {
    item.innerHTML = recebe.innerHTML
    item.classList.remove('casaVazia')
    item.classList.add('casa')
    item.style.cursor = 'move'
    item.draggable = true
}

function rebaixar(item) {
    item.innerHTML = ''
    item.classList.remove('casa')
    item.classList.add('casaVazia')
    item.style.cursor = 'context-menu'
    item.draggable = false
}




function inicializa(board) {
    for (let index = 0; index < casas; index++) {

        const div = document.createElement('div')

        if (index < casas - 1) {
            div.classList.add(`casa`)
            tabuleiro.push(index + 1)
            div.innerHTML = index + 1
            div.style.cursor = 'move'
            div.draggable = true
        } else {
            div.classList.add(`casaVazia`)
            div.innerHTML = ''
            tabuleiro.push(0)

        }
        board.appendChild(div)
    }
    return board
}