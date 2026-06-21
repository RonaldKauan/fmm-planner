import { useState } from "react";
import { getHistorico, getWeakTopics, clearHistorico } from "../data/simuladoStorage";
import "./HistoricoSimulados.css";

const SUBJECT_LABELS = {
  portugues: "Língua Portuguesa",
  matematica: "Matemática",
  ciencias: "Ciências Naturais",
};

const SUBJECT_COLORS = {
  portugues: "#3b82f6",
  matematica: "#10b981",
  ciencias: "#8b5cf6",
};

const SUBJECT_ICONS = {
  portugues: "📖",
  matematica: "📐",
  ciencias: "🔬",
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatTime(s) {
  if (!s) return "—";
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}min ${String(sec).padStart(2, "0")}s`;
}

function ScoreCircle({ score }) {
  const color = score >= 80 ? "#10b981" : score >= 60 ? "#f59e0b" : "#ef4444";
  return (
    <div className="hist-score-circle" style={{ "--c": color }}>
      <span className="hist-score-num" style={{ color }}>{score}%</span>
    </div>
  );
}

function WeakTopicsPanel({ weakTopics }) {
  if (weakTopics.length === 0) {
    return (
      <div className="hist-weak-empty">
        <span>🎯</span>
        <p>Nenhum tópico deficiente identificado. Continue assim!</p>
      </div>
    );
  }

  return (
    <div className="hist-weak-list">
      {weakTopics.map((t) => {
        const color = t.pct < 40 ? "#ef4444" : "#f59e0b";
        const subjectColor = SUBJECT_COLORS[t.subject] || "#6b7280";
        return (
          <div key={t.topic} className="hist-weak-item">
            <div className="hist-weak-header">
              <div className="hist-weak-info">
                <span className="hist-weak-topic">{t.topic}</span>
                <span
                  className="hist-weak-subject"
                  style={{ color: subjectColor }}
                >
                  {SUBJECT_ICONS[t.subject]} {SUBJECT_LABELS[t.subject] || t.subject}
                </span>
              </div>
              <div className="hist-weak-stat" style={{ color }}>
                <strong>{t.pct}%</strong>
                <span>{t.correct}/{t.total}</span>
              </div>
            </div>
            <div className="hist-weak-bar">
              <div
                className="hist-weak-fill"
                style={{ width: `${t.pct}%`, background: color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ResultCard({ result, onReplay }) {
  const [open, setOpen] = useState(false);

  const gradeIcon =
    result.score >= 80 ? "🏆" : result.score >= 60 ? "📈" : "📚";

  return (
    <div className={`hist-card ${open ? "open" : ""}`}>
      <button className="hist-card-header" onClick={() => setOpen((o) => !o)}>
        <div className="hist-card-left">
          <ScoreCircle score={result.score} />
          <div className="hist-card-info">
            <div className="hist-card-title">
              {gradeIcon} {result.title}
            </div>
            <div className="hist-card-meta">
              <span>📅 {formatDate(result.completedAt)}</span>
              <span>
                ✅ {result.correct}/{result.total} corretas
              </span>
              {result.timeUsed && (
                <span>⏱️ {formatTime(result.timeUsed)}</span>
              )}
            </div>
          </div>
        </div>
        <span className={`hist-chevron ${open ? "open" : ""}`}>›</span>
      </button>

      {open && (
        <div className="hist-card-body">
          {/* Desempenho por matéria */}
          <div className="hist-subjects">
            <h4>Desempenho por disciplina</h4>
            {Object.entries(result.bySubject).map(([sub, data]) => (
              <div key={sub} className="hist-subject-row">
                <div className="hist-subject-label">
                  <span>{SUBJECT_ICONS[sub] || "📋"}</span>
                  <span>{SUBJECT_LABELS[sub] || sub}</span>
                </div>
                <div className="hist-subject-bar-wrap">
                  <div className="hist-subject-bar">
                    <div
                      className="hist-subject-fill"
                      style={{
                        width: `${data.pct}%`,
                        background: SUBJECT_COLORS[sub] || "#6b7280",
                      }}
                    />
                  </div>
                  <span
                    className="hist-subject-pct"
                    style={{ color: SUBJECT_COLORS[sub] || "#6b7280" }}
                  >
                    {data.correct}/{data.total} ({data.pct}%)
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tópicos com erros neste simulado */}
          {(() => {
            const wrong = Object.entries(result.byTopic)
              .filter(([, d]) => d.pct < 100)
              .sort(([, a], [, b]) => a.pct - b.pct);
            if (wrong.length === 0) return null;
            return (
              <div className="hist-topics">
                <h4>Tópicos para revisar (este simulado)</h4>
                <div className="hist-topics-list">
                  {wrong.map(([topic, data]) => (
                    <div
                      key={topic}
                      className={`hist-topic-tag ${data.pct < 60 ? "weak" : "partial"}`}
                    >
                      <span>{topic}</span>
                      <span className="hist-topic-pct">{data.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          <div className="hist-card-actions">
            <button className="btn btn-primary" onClick={() => onReplay(result.weekNum)}>
              🔄 Refazer Simulado
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HistoricoSimulados({ onNavigate }) {
  const [historico, setHistorico] = useState(() => getHistorico());
  const [weakTopics] = useState(() => getWeakTopics(60));
  const [confirmClear, setConfirmClear] = useState(false);

  const handleClear = () => {
    clearHistorico();
    setHistorico([]);
    setConfirmClear(false);
  };

  const overallAvg =
    historico.length > 0
      ? Math.round(historico.reduce((s, r) => s + r.score, 0) / historico.length)
      : null;

  return (
    <div className="historico-page">
      <div className="container">
        {/* HEADER */}
        <div className="hist-header">
          <div>
            <h1>Meus Simulados</h1>
            <p className="hist-subtitle">
              Histórico de desempenho e tópicos para revisão
            </p>
          </div>
          {historico.length > 0 && (
            <div className="hist-header-stats">
              <div className="hist-stat-card">
                <div className="hist-stat-num">{historico.length}</div>
                <div className="hist-stat-label">realizados</div>
              </div>
              <div className="hist-stat-card">
                <div
                  className="hist-stat-num"
                  style={{
                    color:
                      overallAvg >= 80
                        ? "#10b981"
                        : overallAvg >= 60
                        ? "#f59e0b"
                        : "#ef4444",
                  }}
                >
                  {overallAvg}%
                </div>
                <div className="hist-stat-label">média geral</div>
              </div>
            </div>
          )}
        </div>

        {historico.length === 0 ? (
          /* EMPTY STATE */
          <div className="hist-empty">
            <div className="hist-empty-icon">📝</div>
            <h2>Nenhum simulado realizado ainda</h2>
            <p>
              Complete um simulado semanal e seu resultado ficará salvo aqui
              com análise de desempenho e tópicos para revisar.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => onNavigate("planejamento")}
            >
              Ir ao Planejamento →
            </button>
          </div>
        ) : (
          <>
            {/* TÓPICOS DEFICIENTES */}
            <section className="hist-section">
              <div className="hist-section-header">
                <div>
                  <h2>
                    ⚠️ Tópicos para Revisão{" "}
                    {weakTopics.length > 0 && (
                      <span className="hist-weak-count">{weakTopics.length}</span>
                    )}
                  </h2>
                  <p className="hist-section-sub">
                    Tópicos com menos de 60% de acerto em todos os simulados
                  </p>
                </div>
              </div>
              <WeakTopicsPanel weakTopics={weakTopics} />
            </section>

            {/* HISTÓRICO */}
            <section className="hist-section">
              <div className="hist-section-header">
                <h2>📋 Histórico</h2>
                {!confirmClear ? (
                  <button
                    className="btn btn-ghost hist-clear-btn"
                    onClick={() => setConfirmClear(true)}
                  >
                    Limpar histórico
                  </button>
                ) : (
                  <div className="hist-confirm-clear">
                    <span>Confirmar?</span>
                    <button className="btn btn-danger" onClick={handleClear}>
                      Sim, limpar
                    </button>
                    <button
                      className="btn btn-ghost"
                      onClick={() => setConfirmClear(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </div>
              <div className="hist-list">
                {historico.map((r) => (
                  <ResultCard
                    key={r.id}
                    result={r}
                    onReplay={(weekNum) =>
                      onNavigate("simuladoSemanal", { weekNum })
                    }
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
