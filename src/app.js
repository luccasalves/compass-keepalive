import { AuthPage } from "./pages/auth";
import { DashboardPage } from "./pages/dashboard";
import "./styles/index.scss";

function App() {
  setTimeout(() => {
    const app = document.querySelector("#app");
    const appStatus = localStorage.getItem("logado");

    if (Number(appStatus) === 1) {
      app.appendChild(DashboardPage());
      return app;
    }
    app.appendChild(AuthPage());
  }, 1000);
}

export default App;
