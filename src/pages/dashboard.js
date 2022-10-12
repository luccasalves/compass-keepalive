import { create } from "../utils/dom";
import { ButtonApp } from "../components/button";

import "../styles/dashboard.scss";

export function DashboardPage() {
  const dashboardPage = create("main", "dash-page");

  return dashboardPage;
}
