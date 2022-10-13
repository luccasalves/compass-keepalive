import { TextApp } from "./text";
export function WeatherApp() {
  const weather = document.createElement("div");
  const degreeBox = document.createElement("div");
  const degreesText = TextApp("p", "text-degree", "22");
  const iconWether = document.createElement("img");

  iconWether.setAttribute("src", `./src/assets/icons/sun-dark.svg`);

  iconWether.classList.add("icon");
  weather.classList.add("weather-box");
  degreeBox.classList.add("degree-box");

  degreeBox.append(iconWether, degreesText);
  weather.append(TextApp("p", "text", "lucas"), degreeBox);

  return weather;
}
