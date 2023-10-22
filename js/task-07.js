  // Selectați elementele input și span
  const fontSizeControl = document.getElementById("font-size-control");
  const textSpan = document.getElementById("text");

  // Adăugați un event listener pentru evenimentul "input" pe input#font-size-control
  fontSizeControl.addEventListener("input", () => {
    // Obțineți valoarea curentă a input-ului range
    const fontSizeValue = fontSizeControl.value;

    // Actualizați stilul inline al elementului span cu noua dimensiune a fontului
    textSpan.style.fontSize = fontSizeValue + "px";
  });