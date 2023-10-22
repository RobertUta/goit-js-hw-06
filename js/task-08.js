const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Opriți comportamentul implicit de reîncărcare a paginii

  // Accesați elementele formularului
  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  // Verificați dacă câmpurile sunt goale
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Toate câmpurile trebuie completate.");
  } else {
    // Colectați valorile într-un obiect
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    // Afișați obiectul cu datele introduse în consolă
    console.log(formData);

    // Resetați valorile câmpurilor
    loginForm.reset();
  }
});