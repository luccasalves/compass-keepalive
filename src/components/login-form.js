import { InputApp } from "./input";
import { ButtonApp } from "./button";
const loginForm = document.createElement("div");
const msgError = document.createElement("p");
msgError.classList.add("warning");
export function LoginForm() {
  loginForm.classList.add("login-form");

  const inputUsername = InputApp("Usuário", "text", "user", "person");
  const inputPass = InputApp("Senha", "password", "pass", "lock");

  inputUsername.addEventListener("keyup", () => watchInput("user"));
  inputPass.addEventListener("keyup", () => watchInput("pass"));

  loginForm.append(
    inputUsername,
    inputPass,
    msgError,
    ButtonApp("Entrar", "btn", login)
  );

  return loginForm;
}

function watchInput(id) {
  const i = document.querySelector(`#i-${id}`);
  i.classList.add("animation-icon");

  msgError.textContent = "";

  if (document.querySelector(`#${id}`).value.length == 0) {
    i.classList.remove("animation-icon");
    document.querySelector(`#${id}`).classList.remove("warning");
  }
}

function login() {
  const user = document.querySelector(`#user`);
  const pass = document.querySelector(`#pass`);

  if (user.value == "admin" && pass.value == "admin") {
    localStorage.setItem("logado", 1);
    location.reload();
    return;
  }
  document.querySelector("#user").classList.add("warning");
  document.querySelector("#pass").classList.add("warning");

  msgError.textContent = "Ops, usuário ou senha inválidos. Tente novamente!";
}
