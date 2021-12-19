// Obtive ajuda de Dilenio Enderle
let currentSelectColor = 'black'

function handleColor(event) {
  let selectedDiv = document.querySelector('.selected')
  let currentDiv = event.target

  selectedDiv.classList.remove('selected')
  currentDiv.classList.add('selected')
  currentSelectColor = window.getComputedStyle(currentDiv, null).getPropertyValue('background-color');

}
// Obtive ajuda de Dilenio Enderle
function createPalette(colors) {
  const selectPalette = document.getElementById("color-palette");

  for (let i = 0; i < colors.length; i += 1) {
    let createDiv = document.createElement("div");
    createDiv.style.backgroundColor = colors[i]
    createDiv.className = "color";
    if (colors[i] === 'black') {
      createDiv.classList.add('selected')
    }
    createDiv.addEventListener('click', handleColor)

    selectPalette.appendChild(createDiv)
  }
}
// Obtive ajuda de Dilenio Enderle
function handlePixel(event) {
  let divColorize = event.target
  divColorize.style.backgroundColor = currentSelectColor
}
// Obtive ajuda de Dilenio Enderle
function creatBoard(size) {

  for (let index = 0; index < size; index += 1) {
    let boardPixels = document.getElementById("pixel-board");
    let createPixels = document.createElement("div");
    let rowClass = `row-board${index}`
    createPixels.className = rowClass;
    boardPixels.appendChild(createPixels)

    for (index2 = 0; index2 < size; index2 += 1) {
      let rowBoard = document.getElementsByClassName(rowClass)[0];
      let pixelDiv = document.createElement('div')
      pixelDiv.className = 'pixel'
      pixelDiv.addEventListener('click', handlePixel)
      rowBoard.appendChild(pixelDiv)
    }
    boardPixels.appendChild(createPixels)
  }
}
// Obtive ajuda de Dilenio Enderle
function clearBoard() {
  let clear = document.querySelector('#clear-board')
  clear.addEventListener('click', function (){
    let pixel = document.querySelectorAll('.pixel')
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = 'white'
    }
  })
}

window.onload = function () {
  createPalette(['black', 'red', 'blue', 'green'])
  clearBoard()
  creatBoard(5)
}



