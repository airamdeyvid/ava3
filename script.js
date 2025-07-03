const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const emailFeedback = document.getElementById("emailFeedback");
const senhaFeedback = document.getElementById("senhaFeedback");
const form = document.getElementById("cadastroForm");

// Validação de e-mail
function validarEmail(email) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

// Validação de senha
function validarSenha(senha) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(senha);
}

// Feedback em tempo real
emailInput.addEventListener("input", () => {
  if (validarEmail(emailInput.value)) {
    emailFeedback.textContent = "E-mail válido!";
    emailFeedback.style.color = "green";
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
  } else {
    emailFeedback.textContent = "E-mail inválido.";
    emailFeedback.style.color = "red";
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
  }
});

senhaInput.addEventListener("input", () => {
  if (validarSenha(senhaInput.value)) {
    senhaFeedback.textContent = "Senha forte!";
    senhaFeedback.style.color = "green";
    senhaInput.classList.add("valid");
    senhaInput.classList.remove("invalid");
  } else {
    senhaFeedback.textContent =
      "A senha deve ter 8+ caracteres, 1 maiúscula, 1 número e 1 símbolo.";
    senhaFeedback.style.color = "red";
    senhaInput.classList.add("invalid");
    senhaInput.classList.remove("valid");
  }
});

// Impedir envio se inválido
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValido = validarEmail(emailInput.value);
  const senhaValida = validarSenha(senhaInput.value);

  if (emailValido && senhaValida) {
    alert("Cadastro realizado com sucesso!");
    form.reset();
    emailInput.classList.remove("valid");
    senhaInput.classList.remove("valid");
    emailFeedback.textContent = "";
    senhaFeedback.textContent = "";
  } else {
    alert("Corrija os erros antes de enviar.");
  }
});
