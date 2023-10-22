  // Declarați variabila counterValue și atribuiți-i valoarea 0 la început
  let counterValue = 0;

  // Selectați elementele butoanelor și elementul span pentru valoarea contorului
  const decrementButton = document.querySelector("[data-action='decrement']");
  const incrementButton = document.querySelector("[data-action='increment']");
  const valueSpan = document.getElementById("value");

  // Adăugați un event listener pentru butonul de decrementare
  decrementButton.addEventListener("click", () => {
    counterValue -= 1;
    updateCounter();
  });

  // Adăugați un event listener pentru butonul de incrementare
  incrementButton.addEventListener("click", () => {
    counterValue += 1;
    updateCounter();
  });

  // Funcție pentru actualizarea valorii în interfață
  function updateCounter() {
    valueSpan.textContent = counterValue;
  }

  // Inițializați valoarea contorului în interfață
  updateCounter();