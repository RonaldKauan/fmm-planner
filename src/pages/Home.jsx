import { subjects } from "../data/subjects";
import { questions } from "../data/questions";
import { exams } from "../data/exams";
import "./Home.css";

const stats = [
  { label: "Questões no banco", value: questions.length, icon: "❓", color: "#3b82f6" },
  { label: "Provas catalogadas", value: exams.length, icon: "📄", color: "#8b5cf6" },
  { label: "Matérias", value: subjects.length, icon: "📚", color: "#10b981" },
  { label: "Tópicos de estudo", value: subjects.reduce((a, s) => a + s.topics.length, 0), icon: "📌", color: "#f59e0b" },
];

const tips = [
  { icon: "🎯", title: "Foco em Interpretação", desc: "Cerca de 30 questões de Português: metade é interpretação. Treine leitura diária." },
  { icon: "📐", title: "Matemática é peso", desc: "Equações do 2º grau, funções e geometria plana são os temas mais cobrados." },
  { icon: "🔬", title: "Ciências equilibrada", desc: "Biologia, Física e Química têm peso igual. Não negligencie nenhuma." },
  { icon: "⏱️", title: "Gestão do tempo", desc: "5 horas para 80 questões = ~3,75 min por questão. Pratique velocidade." },
  { icon: "📅", title: "Revisão constante", desc: "Revise os temas errados no simulado antes de avançar para novos conteúdos." },
  { icon: "🌿", title: "Amazônia sempre aparece", desc: "Questões de ecologia e biomas regionais são recorrentes nas provas da FMM." },
];

export default function Home({ onNavigate }) {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Processo Seletivo 2025 / 2026</div>
            <h1>
              Prepare-se para a <br />
              <span className="highlight">FMM</span>
            </h1>
            <p>
              Plataforma completa de estudos para o processo seletivo da
              Fundação Matias Machline. Matérias, provas antigas e simulados
              no estilo da prova real.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-lg" onClick={() => onNavigate("simulado")}>
                ✏️ Fazer Simulado
              </button>
              <button className="btn btn-ghost btn-lg" onClick={() => onNavigate("materias")}>
                📚 Ver Matérias
              </button>
            </div>
          </div>

          <div className="hero-info">
            <div className="info-card">
              <div className="info-row">
                <span className="info-icon">📝</span>
                <div>
                  <div className="info-label">Total de questões</div>
                  <div className="info-value">80 questões</div>
                </div>
              </div>
              <div className="info-row">
                <span className="info-icon">⏱️</span>
                <div>
                  <div className="info-label">Duração</div>
                  <div className="info-value">5 horas</div>
                </div>
              </div>
              <div className="info-row">
                <span className="info-icon">📚</span>
                <div>
                  <div className="info-label">Disciplinas</div>
                  <div className="info-value">3 matérias</div>
                </div>
              </div>
              <div className="info-row">
                <span className="info-icon">🎯</span>
                <div>
                  <div className="info-label">Formato</div>
                  <div className="info-value">Múltipla escolha (5 opções)</div>
                </div>
              </div>
              <div className="info-divider" />
              <div className="dist-title">Distribuição estimada</div>
              {[
                { name: "Língua Portuguesa", pct: 38, color: "#3b82f6" },
                { name: "Matemática", pct: 31, color: "#10b981" },
                { name: "Ciências Naturais", pct: 31, color: "#8b5cf6" },
              ].map((d) => (
                <div key={d.name} className="dist-row">
                  <div className="dist-label">
                    <span>{d.name}</span>
                    <span style={{ color: d.color }}>{d.pct}%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${d.pct}%`, background: d.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-icon" style={{ background: `${s.color}22`, color: s.color }}>
                  {s.icon}
                </div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="quick-nav">
        <div className="container">
          <h2 className="section-title">O que você quer fazer?</h2>
          <div className="quick-grid">
            <button className="quick-card" onClick={() => onNavigate("materias")}>
              <div className="quick-icon" style={{ background: "rgba(59,130,246,0.15)" }}>📚</div>
              <h3>Estudar Matérias</h3>
              <p>Explore todos os tópicos de Português, Matemática e Ciências organizados por assunto e dificuldade.</p>
              <span className="quick-link">Acessar matérias →</span>
            </button>
            <button className="quick-card" onClick={() => onNavigate("provas")}>
              <div className="quick-icon" style={{ background: "rgba(139,92,246,0.15)" }}>📄</div>
              <h3>Provas Antigas</h3>
              <p>Visualize e analise provas anteriores da FMM de 2015 a 2024 com informações detalhadas de cada edição.</p>
              <span className="quick-link">Ver provas →</span>
            </button>
            <button className="quick-card" onClick={() => onNavigate("simulado")}>
              <div className="quick-icon" style={{ background: "rgba(16,185,129,0.15)" }}>✏️</div>
              <h3>Fazer Simulado</h3>
              <p>Questões no estilo FMM com cronômetro, gabarito comentado e análise de desempenho por matéria.</p>
              <span className="quick-link">Começar simulado →</span>
            </button>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="tips-section">
        <div className="container">
          <h2 className="section-title">Dicas de Estudo</h2>
          <div className="tips-grid">
            {tips.map((t) => (
              <div key={t.title} className="tip-card">
                <div className="tip-icon">{t.icon}</div>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
