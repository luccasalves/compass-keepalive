import { create } from "../utils/dom";
import "../styles/authPage.scss";
import { LoginForm } from "../components/login-form";

export function AuthPage() {
  const authPage = create("main", "auth-page");

  authPage.append(LoginForm());

  return authPage;
}

function login() {
  localStorage.setItem("logado", 1);
  location.reload();
}
