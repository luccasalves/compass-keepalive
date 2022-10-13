import { ButtonApp } from "./button";
import { TextApp } from "./text";

export function DashFooter() {
  let counter = 600;
  const footer = document.createElement("footer");
  const actions = document.createElement("div");
  const refreshDiv = document.createElement("div");
  const counterBox = document.createElement("div");
  const seconds = TextApp("p", "text-counter", counter);

  footer.classList.add("dash-footer");
  actions.classList.add("actions");
  refreshDiv.classList.add("refresh-box");
  counterBox.classList.add("counter-box");

  counterBox.append(seconds, TextApp("p", "label-counter", "seconds"));

  refreshDiv.append(
    TextApp("p", "text-refresh", "Application refresh in"),
    counterBox
  );

  actions.append(
    ButtonApp("Continuar navegando", "btn-cn", handleContinueNav),
    ButtonApp("Logout", "btn-logout", logout)
  );

  footer.append(
    TextApp(
      "p",
      "text",
      "Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."
    ),
    refreshDiv,
    actions
  );

  setInterval(() => {
    counter--;
    seconds.textContent = counter;

    if (counter == 0) {
      counter = 602;
      alert("logout");
    }
  }, 1000);

  return footer;
}

function logout() {
  localStorage.setItem("logado", 0);
  location.reload();
}

function handleContinueNav() {
  window.open("https://noticias.uol.com.br/", "_blank");
}
