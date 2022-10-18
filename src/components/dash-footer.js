import { ButtonApp } from "./button";
import { TextApp } from "./text";

export function DashFooter() {
  let counter = 11;
  const footer = document.createElement("footer");
  const actions = document.createElement("div");
  const refreshInfoBox = document.createElement("div");
  const counterBox = document.createElement("div");
  const secondsText = document.createElement("p");
  const windowInfo = document.createElement("div");

  footer.classList.add("dash-footer");
  actions.classList.add("actions");
  refreshInfoBox.classList.add("refresh-box");
  counterBox.classList.add("counter-box");
  secondsText.classList.add("seconds-text");
  windowInfo.classList.add("window-info");

  windowInfo.append(
    TextApp(
      "p",
      "info-text",
      "Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."
    )
  );
  refreshInfoBox.append(
    TextApp("p", "app-refresh-text", "Application refresh in"),
    counterBox
  );
  counterBox.append(secondsText, TextApp("p", "label-counter", "seconds"));

  actions.append(
    ButtonApp("Continuar navegando", "btn-cn", handleContinueNav),
    ButtonApp("Logout", "btn-logout", logout)
  );

  footer.append(windowInfo, refreshInfoBox, actions);

  setInterval(() => {
    counter--;
    secondsText.textContent = counter;

    if (counter == 0) {
      const res = confirm(
        `SESSÃO INSPIRADA !\nAperte 'Ok' caso deseje permanecer logado ou 'cancelar' para sair `
      );

      res ? (counter = 600) : logout();
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
