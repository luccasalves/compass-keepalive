import { create } from "../utils/dom";
import "../styles/authPage.scss";
import { ButtonApp } from "../components/button";

export function AuthPage() {
  const authPage = create("main", "auth-page");
  const test = create("h1");
  test.textContent = "oi";
  authPage.append(ButtonApp("entrar", "btn", login));

  return authPage;
}

function login() {
  localStorage.setItem("logado", 1);
  location.reload();
}
