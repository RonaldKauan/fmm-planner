import "./Navbar.css";

const navItems = [
  { id: "home", label: "Início", icon: "🏠" },
  { id: "materias", label: "Matérias", icon: "📚" },
  { id: "provas", label: "Provas Antigas", icon: "📄" },
  { id: "simulado", label: "Simulado", icon: "✏️" },
  { id: "planejamento", label: "Planejamento", icon: "📅" },
];

export default function Navbar({ currentPage, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button className="navbar-brand" onClick={() => onNavigate("home")}>
          <span className="brand-icon">🎓</span>
          <div>
            <span className="brand-title">FMM</span>
            <span className="brand-sub">Fundação Matias Machline</span>
          </div>
        </button>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${currentPage === item.id ? "active" : ""}`}
                onClick={() => onNavigate(item.id)}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
