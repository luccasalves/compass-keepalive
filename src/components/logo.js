export function LogoApp() {
  const path = "../assets/logo-compasso.svg";
  const logo = document.createElement("img");
  logo.setAttribute("src", "./src/assets/logo-compasso-dark.svg");
  logo.setAttribute("class", "logo");
  return logo;
}
