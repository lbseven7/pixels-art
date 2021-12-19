let currentSelectColor = 'black'

function handleColor(event) {
  let selectedDiv = document.querySelector('.selected')
  let currentDiv = event.target

  selectedDiv.classList.remove('selected')
  currentDiv.classList.add('selected')
  currentSelectColor = window.getComputedStyle(currentDiv, null).getPropertyValue('background-color');

}

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
      rowBoard.appendChild(pixelDiv)
    }
    boardPixels.appendChild(createPixels)
  }
}

window.onload = function () {
  createPalette(['black', 'red', 'blue', 'green'])

  creatBoard(5)
}


