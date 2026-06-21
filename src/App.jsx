import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Materias from "./pages/Materias";
import ProvasAntigas from "./pages/ProvasAntigas";
import Simulado from "./pages/Simulado";
import Planejamento from "./pages/Planejamento";
import SimuladoSemanal from "./pages/SimuladoSemanal";
import HistoricoSimulados from "./pages/HistoricoSimulados";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [pageData, setPageData] = useState(null);

  const navigate = (p, data = null) => {
    setPage(p);
    setPageData(data);
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home onNavigate={navigate} />;
      case "materias":
        return <Materias />;
      case "provas":
        return <ProvasAntigas />;
      case "simulado":
        return <Simulado />;
      case "planejamento":
        return <Planejamento onNavigate={navigate} />;
      case "historico":
        return <HistoricoSimulados onNavigate={navigate} />;
      case "simuladoSemanal":
        return (
          <SimuladoSemanal
            weekNum={pageData?.weekNum ?? 1}
            onBack={() => navigate("planejamento")}
          />
        );
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  const navPage = page === "simuladoSemanal" ? "planejamento" : page;

  return (
    <div className="app">
      <Navbar currentPage={navPage} onNavigate={navigate} />
      <main className="main-content">{renderPage()}</main>
    </div>
  );
}
