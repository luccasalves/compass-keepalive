import { create } from "../utils/dom";
import "../styles/authPage.scss";
import { LoginForm } from "../components/login-form";

export function AuthPage() {
  const authPage = create("main", "auth-page");
  const asideBg = create("div", "aside-bg");
  const bgAuth = document.createElement("img");
  const asideLogin = document.createElement("aside");
  asideLogin.classList.add("aside-login");
  bgAuth.classList.add("bg");
  bgAuth.setAttribute("src", "src/assets/bg.png");

  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.setAttribute("src", "./src/assets/logo-compasso.svg");

  asideLogin.append(LoginForm());
  asideBg.append(bgAuth, logo);
  authPage.append(asideLogin, asideBg);

  return authPage;
}
