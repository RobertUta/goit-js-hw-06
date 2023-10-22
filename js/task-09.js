function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

colorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  // Schimbați culoarea de fundal a elementului <body>
  document.body.style.backgroundColor = randomColor;

  // Actualizați valoarea în span.color
  colorSpan.textContent = randomColor;
});
