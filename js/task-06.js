const validationInput = document.getElementById("validation-input");

// Adăugați un event listener pentru evenimentul "blur" pe input
validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value;
  const requiredLength = validationInput.getAttribute("data-length");

  // Verificați dacă numărul de caractere este corect și adăugați/eliminați clase CSS în consecință
  if (inputValue.length === Number(requiredLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});