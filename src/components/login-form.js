import { InputApp } from "./input";
import { ButtonApp } from "./button";

export function LoginForm() {
  const loginForm = document.createElement("form");
  loginForm.classList.add("login-form");

  const inputUsername = InputApp("Usuário", "text", "user", "person");
  const inputPass = InputApp("Senha", "password", "pass", "lock");

  inputUsername.addEventListener("keyup", () => watchInput("user"));
  inputPass.addEventListener("keyup", () => watchInput("pass"));

  loginForm.append(inputUsername, inputPass, ButtonApp("Entrar", "btn", login));

  return loginForm;
}

function watchInput(id) {
  const i = document.querySelector(`#i-${id}`);
  i.classList.add("animation-icon");
  if (document.querySelector(`#${id}`).value.length == 0) {
    i.classList.remove("animation-icon");
  }
}

function login() {
  const user = document.querySelector(`#user`);
  const pass = document.querySelector(`#pass`);

  if (user.value == "admin" && pass.value == "uol") {
    localStorage.setItem("logado", 1);
    location.reload();
    return;
  }

  alert("credencias erradas");
}
