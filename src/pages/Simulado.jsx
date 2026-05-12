import { useState, useEffect, useRef } from "react";
import { questions as fmmQuestions } from "../data/questions";
import { adeQuestions } from "../data/adeQuestions";
import { imageQuestions } from "../data/imageQuestions";
import { subjects } from "../data/subjects";
import QuestionImage from "../components/QuestionImage";
import "./Simulado.css";

// ─── DATA ────────────────────────────────────────────────────────────────────
const ALL_QUESTIONS = [
  ...fmmQuestions.map((q) => ({ ...q, source: q.source || "FMM", topicId: q.topicId || null })),
  ...adeQuestions,
  ...imageQuestions,
];

const MATH_TOPICS = subjects.find((s) => s.id === "matematica")?.topics || [];

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

const SOURCE_META = {
  FMM:       { label: "FMM",       color: "#3b82f6", bg: "rgba(59,130,246,0.12)" },
  "ADE SEMED": { label: "ADE SEMED", color: "#f59e0b", bg: "rgba(245,158,11,0.12)" },
};

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

// ─── SETUP SCREEN ────────────────────────────────────────────────────────────
function SetupScreen({ onStart }) {
  const [subject, setSubject] = useState("matematica");
  const [source, setSource] = useState("all");
  const [mathTopic, setMathTopic] = useState("all");
  const [count, setCount] = useState(10);
  const [timed, setTimed] = useState(true);

  // Compute available pool
  const pool = ALL_QUESTIONS.filter((q) => {
    if (subject !== "all" && q.subject !== subject) return false;
    if (source !== "all" && q.source !== source) return false;
    if (subject === "matematica" && mathTopic !== "all" && q.topicId !== mathTopic) return false;
    return true;
  });

  const available = pool.length;
  const countOptions = [5, 10, 15, 20, Math.min(available, 30)]
    .filter((v, i, a) => a.indexOf(v) === i && v <= available && v > 0);

  const safeCount = countOptions.includes(count)
    ? count
    : countOptions[countOptions.length - 1] || available;

  const isMath = subject === "matematica";

  return (
    <div className="setup-screen">
      <div className="setup-card">
        <div className="setup-icon">✏️</div>
        <h2>Configurar Simulado</h2>
        <p>Combine filtros para montar seu simulado personalizado</p>

        {/* SUBJECT */}
        <div className="setup-field">
          <label>Disciplina</label>
          <div className="subject-selector">
            {[
              { v: "all",        label: "Todas as disciplinas", icon: "📚" },
              { v: "portugues",  label: "Língua Portuguesa",    icon: "📖" },
              { v: "matematica", label: "Matemática",           icon: "📐" },
              { v: "ciencias",   label: "Ciências Naturais",    icon: "🔬" },
            ].map((s) => (
              <button
                key={s.v}
                className={`subj-btn ${subject === s.v ? "active" : ""}`}
                onClick={() => { setSubject(s.v); setMathTopic("all"); }}
              >
                {s.icon} {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* SOURCE */}
        <div className="setup-field">
          <label>Banca / Fonte</label>
          <div className="source-selector">
            {[
              { v: "all",        label: "Todas as fontes", icon: "📋" },
              { v: "FMM",        label: "FMM — Fundação Matias Machline", icon: "🎓" },
              { v: "ADE SEMED",  label: "ADE SEMED Manaus", icon: "🏫" },
            ].map((s) => (
              <button
                key={s.v}
                className={`subj-btn source-btn ${source === s.v ? "active" : ""}`}
                style={source === s.v && s.v !== "all" ? {
                  background: SOURCE_META[s.v]?.bg,
                  borderColor: SOURCE_META[s.v]?.color,
                  color: SOURCE_META[s.v]?.color,
                } : {}}
                onClick={() => setSource(s.v)}
              >
                {s.icon} {s.label}
                {s.v !== "all" && (
                  <span className="source-count">
                    {ALL_QUESTIONS.filter(
                      (q) => q.source === s.v && (subject === "all" || q.subject === subject)
                    ).length} questões
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* MATH TOPIC FILTER */}
        {isMath && (
          <div className="setup-field">
            <label>
              Assunto de Matemática
              <span className="available-count">{available} disponíveis</span>
            </label>
            <select
              className="topic-select"
              value={mathTopic}
              onChange={(e) => setMathTopic(e.target.value)}
            >
              <option value="all">Todos os assuntos</option>
              {MATH_TOPICS.map((t) => {
                const tCount = ALL_QUESTIONS.filter(
                  (q) =>
                    q.subject === "matematica" &&
                    q.topicId === t.id &&
                    (source === "all" || q.source === source)
                ).length;
                return (
                  <option key={t.id} value={t.id} disabled={tCount === 0}>
                    {t.name} ({tCount})
                  </option>
                );
              })}
            </select>
          </div>
        )}

        {/* COUNT */}
        <div className="setup-field">
          <label>
            Quantidade de questões
            {!isMath && <span className="available-count">{available} disponíveis</span>}
          </label>
          <div className="count-options">
            {countOptions.map((n) => (
              <button
                key={n}
                className={`count-btn ${safeCount === n ? "active" : ""}`}
                onClick={() => setCount(n)}
              >
                {n}
              </button>
            ))}
            {available === 0 && (
              <span style={{ fontSize: "0.8rem", color: "var(--danger)" }}>
                Nenhuma questão nessa combinação
              </span>
            )}
          </div>
        </div>

        {/* TIMER */}
        <div className="setup-field">
          <label>Cronômetro</label>
          <div className="toggle-row">
            <button className={`toggle-btn ${timed ? "active" : ""}`} onClick={() => setTimed(true)}>
              ⏱️ Ativado ({safeCount * 4} min)
            </button>
            <button className={`toggle-btn ${!timed ? "active" : ""}`} onClick={() => setTimed(false)}>
              ∞ Sem limite
            </button>
          </div>
        </div>

        {/* POOL SUMMARY */}
        {available > 0 && (
          <div className="pool-summary">
            <span>📊</span>
            <span>
              <strong>{available}</strong> questão(ões) encontrada(s) com esses filtros
              {source !== "all" && (
                <span className="pool-source-tag" style={{
                  background: SOURCE_META[source]?.bg,
                  color: SOURCE_META[source]?.color,
                }}>
                  {SOURCE_META[source]?.label}
                </span>
              )}
            </span>
          </div>
        )}

        <button
          className="btn btn-primary btn-start"
          disabled={available === 0}
          onClick={() =>
            onStart({ subject, source, mathTopic, count: safeCount, timed, pool })
          }
        >
          🚀 Iniciar Simulado
        </button>
      </div>
    </div>
  );
}

// ─── QUESTION SCREEN ─────────────────────────────────────────────────────────
function QuestionScreen({ questions, timed, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const [timeLeft, setTimeLeft] = useState(timed ? questions.length * 4 * 60 : null);
  const timerRef = useRef(null);

  const finishRef = useRef(onFinish);
  finishRef.current = onFinish;
  const answersRef = useRef(answers);
  answersRef.current = answers;

  useEffect(() => {
    if (!timed) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          finishRef.current(answersRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []); // eslint-disable-line

  const q = questions[current];
  const selected = answers[q.id];
  const isRevealed = revealed[q.id];

  const select = (i) => {
    if (isRevealed) return;
    setAnswers((a) => ({ ...a, [q.id]: i }));
  };

  const reveal = () => {
    if (selected === undefined) return;
    setRevealed((r) => ({ ...r, [q.id]: true }));
  };

  const answered = Object.keys(answers).length;
  const progress = ((current + 1) / questions.length) * 100;
  const timerWarning = timed && timeLeft < 120;
  const srcMeta = SOURCE_META[q.source] || SOURCE_META["FMM"];

  return (
    <div className="question-screen">
      <div className="q-topbar">
        <div className="q-progress-info">
          <span>Questão {current + 1} de {questions.length}</span>
          <span className="q-answered">{answered} respondidas</span>
        </div>
        {timed && (
          <div className={`q-timer ${timerWarning ? "warning" : ""}`}>
            ⏱️ {formatTime(timeLeft)}
          </div>
        )}
        <button
          className="btn btn-primary"
          onClick={() => { clearInterval(timerRef.current); onFinish(answers); }}
        >
          Finalizar
        </button>
      </div>

      <div className="progress-bar-wrap q-progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%`, background: SUBJECT_COLORS[q.subject] }}
        />
      </div>

      <div className="q-nav-dots">
        {questions.map((qq, i) => {
          const ans = answers[qq.id];
          const rev = revealed[qq.id];
          let cls = "q-dot";
          if (i === current) cls += " current";
          else if (rev) cls += ans === qq.answer ? " correct" : " wrong";
          else if (ans !== undefined) cls += " answered";
          return (
            <button key={qq.id} className={cls} onClick={() => setCurrent(i)}>
              {i + 1}
            </button>
          );
        })}
      </div>

      <div className="q-card">
        <div className="q-meta">
          <span className="badge badge-blue">{SUBJECT_ICONS[q.subject]} {SUBJECT_LABELS[q.subject]}</span>
          {q.topic && <span className="badge badge-purple">{q.topic}</span>}
          <span className="badge badge-yellow">Ano: {q.year}</span>
          <span
            className="source-pill"
            style={{ background: srcMeta.bg, color: srcMeta.color }}
          >
            {q.source}
          </span>
          <span className={`badge ${q.difficulty === "alta" ? "badge-red" : q.difficulty === "média" ? "badge-yellow" : "badge-green"}`}>
            {q.difficulty === "alta" ? "Difícil" : q.difficulty === "média" ? "Médio" : "Fácil"}
          </span>
        </div>

        {q.image && <QuestionImage image={q.image} />}
        <div className="q-text">{q.question}</div>

        <div className="q-options">
          {q.options.map((opt, i) => {
            let cls = "q-option";
            if (selected === i) cls += " selected";
            if (isRevealed) {
              if (i === q.answer) cls += " correct";
              else if (selected === i) cls += " wrong";
            }
            return (
              <button key={i} className={cls} onClick={() => select(i)}>
                <span className="q-letter">{String.fromCharCode(65 + i)}</span>
                <span>{opt}</span>
                {isRevealed && i === q.answer && <span className="q-check">✓</span>}
                {isRevealed && selected === i && i !== q.answer && <span className="q-x">✗</span>}
              </button>
            );
          })}
        </div>

        {isRevealed && (
          <div className="q-explanation">
            <div className="explanation-title">💡 Explicação</div>
            <p>{q.explanation}</p>
          </div>
        )}

        <div className="q-actions">
          <button className="btn btn-ghost" onClick={() => setCurrent((c) => c - 1)} disabled={current === 0}>
            ← Anterior
          </button>
          {!isRevealed && (
            <button className="btn btn-secondary" onClick={reveal} disabled={selected === undefined}>
              Ver gabarito
            </button>
          )}
          {current < questions.length - 1 ? (
            <button className="btn btn-primary" onClick={() => setCurrent((c) => c + 1)}>
              Próxima →
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => { clearInterval(timerRef.current); onFinish(answers); }}
            >
              Finalizar ✓
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── RESULTS SCREEN ──────────────────────────────────────────────────────────
function ResultsScreen({ questions, answers, onRestart }) {
  const [showReview, setShowReview] = useState(false);
  const total = questions.length;
  const correct = questions.filter((q) => answers[q.id] === q.answer).length;
  const score = Math.round((correct / total) * 100);

  // by subject
  const bySubject = {};
  questions.forEach((q) => {
    if (!bySubject[q.subject]) bySubject[q.subject] = { total: 0, correct: 0 };
    bySubject[q.subject].total++;
    if (answers[q.id] === q.answer) bySubject[q.subject].correct++;
  });

  // by source
  const bySource = {};
  questions.forEach((q) => {
    const src = q.source || "FMM";
    if (!bySource[src]) bySource[src] = { total: 0, correct: 0 };
    bySource[src].total++;
    if (answers[q.id] === q.answer) bySource[src].correct++;
  });

  // by math topic (only if all are math)
  const allMath = questions.every((q) => q.subject === "matematica");
  const byTopic = {};
  if (allMath) {
    questions.forEach((q) => {
      const tid = q.topicId || "outro";
      if (!byTopic[tid]) byTopic[tid] = { total: 0, correct: 0, name: q.topic || tid };
      byTopic[tid].total++;
      if (answers[q.id] === q.answer) byTopic[tid].correct++;
    });
  }

  const grade =
    score >= 80 ? { label: "Excelente!", icon: "🏆" }
    : score >= 60 ? { label: "Bom resultado!", icon: "📈" }
    : { label: "Continue estudando!", icon: "📚" };

  const gradeColor = score >= 80 ? "#10b981" : score >= 60 ? "#f59e0b" : "#ef4444";

  return (
    <div className="results-screen">
      <div className="results-card">
        <div className="results-icon">{grade.icon}</div>
        <h2>{grade.label}</h2>

        <div className="score-circle" style={{ "--score-color": gradeColor }}>
          <div className="score-num" style={{ color: gradeColor }}>{score}%</div>
          <div className="score-sub">{correct} de {total} corretas</div>
        </div>

        {/* POR FONTE */}
        {Object.keys(bySource).length > 1 && (
          <div className="results-by-subject" style={{ marginBottom: 16 }}>
            <h4>Desempenho por banca</h4>
            {Object.entries(bySource).map(([src, data]) => {
              const pct = Math.round((data.correct / data.total) * 100);
              const meta = SOURCE_META[src] || SOURCE_META["FMM"];
              return (
                <div key={src} className="subject-result">
                  <div className="sr-header">
                    <span>{src}</span>
                    <span style={{ color: meta.color }}>{data.correct}/{data.total} ({pct}%)</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar-fill" style={{ width: `${pct}%`, background: meta.color }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* POR DISCIPLINA */}
        {!allMath && (
          <div className="results-by-subject">
            <h4>Desempenho por disciplina</h4>
            {Object.entries(bySubject).map(([sub, data]) => {
              const pct = Math.round((data.correct / data.total) * 100);
              return (
                <div key={sub} className="subject-result">
                  <div className="sr-header">
                    <span>{SUBJECT_ICONS[sub]} {SUBJECT_LABELS[sub]}</span>
                    <span style={{ color: SUBJECT_COLORS[sub] }}>{data.correct}/{data.total} ({pct}%)</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar-fill" style={{ width: `${pct}%`, background: SUBJECT_COLORS[sub] }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* POR TÓPICO (só matemática) */}
        {allMath && Object.keys(byTopic).length > 1 && (
          <div className="results-by-subject">
            <h4>Desempenho por assunto</h4>
            {Object.entries(byTopic).map(([tid, data]) => {
              const pct = Math.round((data.correct / data.total) * 100);
              return (
                <div key={tid} className="subject-result">
                  <div className="sr-header">
                    <span>📐 {data.name}</span>
                    <span style={{ color: "#10b981" }}>{data.correct}/{data.total} ({pct}%)</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar-fill" style={{ width: `${pct}%`, background: "#10b981" }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="results-actions">
          <button className="btn btn-secondary" onClick={() => setShowReview(!showReview)}>
            {showReview ? "Ocultar gabarito" : "📋 Ver gabarito comentado"}
          </button>
          <button className="btn btn-primary" onClick={onRestart}>
            🔄 Novo simulado
          </button>
        </div>
      </div>

      {showReview && (
        <div className="review-section">
          <h3>Gabarito comentado</h3>
          <div className="review-list">
            {questions.map((q, i) => {
              const ua = answers[q.id];
              const ok = ua === q.answer;
              const srcMeta = SOURCE_META[q.source] || SOURCE_META["FMM"];
              return (
                <div key={q.id} className={`review-item ${ok ? "correct" : "wrong"}`}>
                  <div className="review-header">
                    <span className="review-num">{i + 1}</span>
                    <div className="review-meta">
                      <span className="badge badge-blue">{SUBJECT_LABELS[q.subject]}</span>
                      {q.topic && <span className="badge badge-purple">{q.topic}</span>}
                      <span className="source-pill" style={{ background: srcMeta.bg, color: srcMeta.color }}>
                        {q.source}
                      </span>
                    </div>
                    <span className={`review-result ${ok ? "green" : "red"}`}>
                      {ok ? "✓ Correto" : "✗ Errado"}
                    </span>
                  </div>
                  {q.image && <QuestionImage image={q.image} />}
                  <p className="review-question">{q.question}</p>
                  <div className="review-answers">
                    {q.options.map((opt, idx) => (
                      <div
                        key={idx}
                        className={`review-opt ${idx === q.answer ? "correct-opt" : ""} ${idx === ua && idx !== q.answer ? "wrong-opt" : ""}`}
                      >
                        <span className="rev-letter">{String.fromCharCode(65 + idx)}</span>
                        {opt}
                        {idx === q.answer && <span className="rev-badge correct-badge">✓ Gabarito</span>}
                        {idx === ua && idx !== q.answer && <span className="rev-badge wrong-badge">✗ Sua resposta</span>}
                      </div>
                    ))}
                  </div>
                  <div className="review-explanation">
                    <strong>💡 Explicação:</strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
export default function Simulado() {
  const [phase, setPhase] = useState("setup");
  const [config, setConfig] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const start = (cfg) => {
    const selected = shuffle(cfg.pool).slice(0, cfg.count);
    setQuestions(selected);
    setConfig(cfg);
    setPhase("quiz");
  };

  const finish = (ans) => {
    setAnswers(ans);
    setPhase("results");
  };

  const restart = () => {
    setPhase("setup");
    setConfig(null);
    setQuestions([]);
    setAnswers({});
  };

  return (
    <div className="simulado">
      <div className="container">
        {phase === "setup" && (
          <>
            <div className="page-header">
              <h1>✏️ Simulado</h1>
              <p>FMM · ADE SEMED Manaus — filtre por banca, disciplina e assunto</p>
            </div>
            <SetupScreen onStart={start} />
          </>
        )}
        {phase === "quiz" && (
          <QuestionScreen questions={questions} timed={config.timed} onFinish={finish} />
        )}
        {phase === "results" && (
          <ResultsScreen questions={questions} answers={answers} onRestart={restart} />
        )}
      </div>
    </div>
  );
}
