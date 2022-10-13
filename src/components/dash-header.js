import { ClockApp } from "./clock";
import { LogoApp } from "./logo";
import { WeatherApp } from "./wether";

export function DashHeader() {
  const header = document.createElement("header");
  header.classList.add("dash-header");

  header.append(LogoApp(), ClockApp(true), WeatherApp());

  return header;
}
