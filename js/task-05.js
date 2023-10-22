  // Selectați elementele input și span
  const nameInput = document.getElementById("name-input");
  const nameOutput = document.getElementById("name-output");

  // Adăugați un event listener pentru evenimentul "input" pe input#name-input
  nameInput.addEventListener("input", () => {
    // Obțineți valoarea curentă din input
    const inputValue = nameInput.value;

    // Actualizați valoarea span-ului cu valoarea curentă din input sau "Anonymous" dacă input-ul este gol
    nameOutput.textContent = inputValue.trim() !== "" ? inputValue : "Anonymous";
  });