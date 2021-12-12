

function createPalette() {
  const selectPalette = document.getElementById("color-palette");

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

/*function selectColor(event) {
  const colors = document.querySelectorAll('.color');
  for (let i = 0; i < colors.length; i += 1) {
    console.log(colors[i]);
    colors[i].classList.remove('selected');
    event.target.classList.add('selected');
  }
}
Selection.addEventListener('click', selectColor);*/
function pegaCor() {

}
