import App from "./src/app";

const appEmpty = document.querySelector("#app");

const loading = document.createElement("img");
loading.setAttribute("src", "./src/assets/logo-compasso.svg");
appEmpty.append(loading);

loading.setAttribute("class", "app-init");
setTimeout(() => {
  loading.setAttribute("class", "app-loading");
  App();
}, 3000);

setTimeout(() => {
  appEmpty.removeChild(loading);
}, 3500);
