

function createPalette() {
  const selectPalette = document.getElementById("color-palette");
  console.log(selectPalette);
  for (let i = 0; i < 4; i += 1) {
    let createDiv = document.createElement("div");
    createDiv.className = "color";
    selectPalette.appendChild(createDiv)
  }
}
createPalette()

const divFilho = document.getElementsByClassName("color")[0];
console.log(divFilho);
divFilho.className = "selected color";


