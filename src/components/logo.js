export function LogoApp() {
  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.setAttribute("src", "./src/assets/logo-compasso-dark.svg");
  return logo;
}
