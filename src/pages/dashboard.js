import { create } from "../utils/dom";
import { ButtonApp } from "../components/button";

import { LogoApp } from "../components/logo";
import { TextApp } from "../components/text";
import { DashFooter } from "../components/dash-footer";

const dashboardPage = create("main", "dash-page");
const TextSection = document.createElement("section");

TextSection.classList.add("text-section");

export function DashboardPage() {
  dashboardPage.append(LogoApp());

  TextSection.append(
    TextApp("h1", "heading-3", "Our mission is"),
    TextApp("p", "text", "Nossa missão é"),
    TextApp("h1", "heading-1", "to transform the world"),
    TextApp("p", "text", "transformar o mundo"),
    TextApp("h1", "heading-1", "building digital experiences"),
    TextApp("p", "text", "construindo experiencias digitais"),
    TextApp("h1", "heading-1", "that enable our client's growth"),
    TextApp("p", "text", "que permitam o crescimento dos nossos clientes")
  );

  dashboardPage.append(TextSection, DashFooter());

  return dashboardPage;
}
