import { create } from "../utils/dom";
import "../styles/authPage.scss";
import { LoginForm } from "../components/login-form";
import { TextApp } from "../components/text";

export function AuthPage() {
  const authPage = create("main", "auth-page");
  const asideBg = create("div", "aside-bg");
  const bgAuth = document.createElement("img");
  const asideLogin = document.createElement("aside");
  const welcomeBox = document.createElement("div");

  welcomeBox.classList.add("welcome-box");
  asideLogin.classList.add("aside-login");
  bgAuth.classList.add("bg");
  bgAuth.setAttribute("src", "src/assets/bg.png");

  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.setAttribute("src", "./src/assets/logo-compasso.svg");

  welcomeBox.append(
    TextApp("p", "welcome", "Olá"),
    TextApp(
      "p",
      "label-welcome",
      "Para continuar navegando de forma segura, efetue o login na rede."
    )
  );

  asideLogin.append(welcomeBox, LoginForm());
  asideBg.append(bgAuth, logo);
  authPage.append(asideLogin, asideBg);

  return authPage;
}
