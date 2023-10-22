function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.getElementById("boxes");

createButton.addEventListener("click", () => {
  const amount = Number(document.querySelector("input").value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const initialSize = 30;
  const stepSize = 10;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const boxSize = initialSize + i * stepSize;
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxesDiv.appendChild(fragment);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}