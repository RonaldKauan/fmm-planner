import { useState, useEffect, useRef } from "react";
import { weekSimulados } from "../data/weekSimulados";
import "./SimuladoSemanal.css";

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

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

// ── TELA DE QUESTÕES ─────────────────────────────────────────────────────────
function QuizScreen({ questions, onFinish }) {
  const MINUTES_PER_Q = 4;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(questions.length * MINUTES_PER_Q * 60);
  const timerRef = useRef(null);
  const finishRef = useRef(onFinish);
  finishRef.current = onFinish;
  const answersRef = useRef(answers);
  answersRef.current = answers;

  useEffect(() => {
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
  const answered = Object.keys(answers).length;
  const progress = ((current + 1) / questions.length) * 100;
  const timerWarning = timeLeft < 120;

  const select = (i) => setAnswers((a) => ({ ...a, [q.id]: i }));
  const finish = () => { clearInterval(timerRef.current); onFinish(answers); };

  return (
    <div className="ss-quiz">
      <div className="ss-topbar">
        <div className="ss-progress-info">
          <span>Questão {current + 1} de {questions.length}</span>
          <span className="ss-answered">{answered} respondidas</span>
        </div>
        <div className={`ss-timer ${timerWarning ? "warning" : ""}`}>
          ⏱️ {formatTime(timeLeft)}
        </div>
        <button className="btn btn-primary" onClick={finish}>Finalizar</button>
      </div>

      <div className="progress-bar-wrap ss-progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%`, background: SUBJECT_COLORS[q.subject] }}
        />
      </div>

      <div className="ss-dots">
        {questions.map((qq, i) => {
          const ans = answers[qq.id];
          let cls = "ss-dot";
          if (i === current) cls += " current";
          else if (ans !== undefined) cls += " answered";
          return (
            <button key={qq.id} className={cls} onClick={() => setCurrent(i)}>
              {i + 1}
            </button>
          );
        })}
      </div>

      <div className="ss-card">
        <div className="ss-meta">
          <span className="badge badge-blue">
            {SUBJECT_ICONS[q.subject]} {SUBJECT_LABELS[q.subject]}
          </span>
          {q.topic && <span className="badge badge-purple">{q.topic}</span>}
          <span
            className={`badge ${q.difficulty === "alta" ? "badge-red" : q.difficulty === "média" ? "badge-yellow" : "badge-green"}`}
          >
            {q.difficulty === "alta" ? "Difícil" : q.difficulty === "média" ? "Médio" : "Fácil"}
          </span>
        </div>

        <div className="ss-q-text">{q.question}</div>

        <div className="ss-options">
          {q.options.map((opt, i) => {
            let cls = "ss-option";
            if (selected === i) cls += " selected";
            return (
              <button key={i} className={cls} onClick={() => select(i)}>
                <span className="ss-letter">{String.fromCharCode(65 + i)}</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        <div className="ss-actions">
          <button className="btn btn-ghost" onClick={() => setCurrent((c) => c - 1)} disabled={current === 0}>
            ← Anterior
          </button>
          {current < questions.length - 1 ? (
            <button className="btn btn-primary" onClick={() => setCurrent((c) => c + 1)}>
              Próxima →
            </button>
          ) : (
            <button className="btn btn-success" onClick={finish}>
              Finalizar ✓
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── TELA DE RESULTADOS ───────────────────────────────────────────────────────
function ResultsScreen({ questions, answers, onBack, onRetry }) {
  const [showReview, setShowReview] = useState(false);
  const total = questions.length;
  const correct = questions.filter((q) => answers[q.id] === q.answer).length;
  const score = Math.round((correct / total) * 100);

  const bySubject = {};
  questions.forEach((q) => {
    if (!bySubject[q.subject]) bySubject[q.subject] = { total: 0, correct: 0 };
    bySubject[q.subject].total++;
    if (answers[q.id] === q.answer) bySubject[q.subject].correct++;
  });

  const grade =
    score >= 80 ? { label: "Excelente!", icon: "🏆" }
    : score >= 60 ? { label: "Bom resultado!", icon: "📈" }
    : { label: "Continue estudando!", icon: "📚" };

  const gradeColor = score >= 80 ? "#10b981" : score >= 60 ? "#f59e0b" : "#ef4444";

  return (
    <div className="ss-results">
      <div className="ss-results-card">
        <div className="ss-results-icon">{grade.icon}</div>
        <h2>{grade.label}</h2>

        <div className="ss-score-circle" style={{ "--score-color": gradeColor }}>
          <div className="ss-score-num" style={{ color: gradeColor }}>{score}%</div>
          <div className="ss-score-sub">{correct} de {total} corretas</div>
        </div>

        <div className="ss-by-subject">
          <h4>Desempenho por disciplina</h4>
          {Object.entries(bySubject).map(([sub, data]) => {
            const pct = Math.round((data.correct / data.total) * 100);
            return (
              <div key={sub} className="ss-subject-result">
                <div className="ss-sr-header">
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

        <div className="ss-results-actions">
          <button className="btn btn-secondary" onClick={() => setShowReview(!showReview)}>
            {showReview ? "Ocultar gabarito" : "📋 Ver gabarito comentado"}
          </button>
          <button className="btn btn-ghost" onClick={onRetry}>🔄 Refazer</button>
          <button className="btn btn-primary" onClick={onBack}>← Voltar ao Planejamento</button>
        </div>
      </div>

      {showReview && (
        <div className="ss-review">
          <h3>Gabarito comentado</h3>
          <div className="ss-review-list">
            {questions.map((q, i) => {
              const ua = answers[q.id];
              const ok = ua === q.answer;
              return (
                <div key={q.id} className={`ss-review-item ${ok ? "correct" : "wrong"}`}>
                  <div className="ss-review-header">
                    <span className="ss-review-num">{i + 1}</span>
                    <div className="ss-review-meta">
                      <span className="badge badge-blue">{SUBJECT_LABELS[q.subject]}</span>
                      {q.topic && <span className="badge badge-purple">{q.topic}</span>}
                    </div>
                    <span className={`ss-review-result ${ok ? "green" : "red"}`}>
                      {ok ? "✓ Correto" : "✗ Errado"}
                    </span>
                  </div>
                  <p className="ss-review-question">{q.question}</p>
                  <div className="ss-review-answers">
                    {q.options.map((opt, idx) => (
                      <div
                        key={idx}
                        className={`ss-review-opt ${idx === q.answer ? "correct-opt" : ""} ${idx === ua && idx !== q.answer ? "wrong-opt" : ""}`}
                      >
                        <span className="ss-rev-letter">{String.fromCharCode(65 + idx)}</span>
                        {opt}
                        {idx === q.answer && <span className="ss-rev-badge correct-badge">✓ Gabarito</span>}
                        {idx === ua && idx !== q.answer && <span className="ss-rev-badge wrong-badge">✗ Sua resposta</span>}
                      </div>
                    ))}
                  </div>
                  <div className="ss-review-explanation">
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

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function SimuladoSemanal({ weekNum = 1, onBack }) {
  const [phase, setPhase] = useState("quiz");
  const [answers, setAnswers] = useState({});

  const data = weekSimulados[weekNum];
  if (!data) return <div className="container"><p>Simulado não encontrado.</p></div>;

  const { questions } = data;

  const finish = (ans) => {
    setAnswers(ans);
    setPhase("results");
  };

  const retry = () => {
    setAnswers({});
    setPhase("quiz");
  };

  return (
    <div className="simulado-semanal">
      <div className="container">
        <div className="ss-header">
          <button className="ss-back-btn" onClick={onBack}>← Planejamento</button>
          <div className="ss-title-block">
            <h1>{data.title}</h1>
            <p>{data.subtitle}</p>
          </div>
        </div>

        {phase === "quiz" && (
          <QuizScreen questions={questions} onFinish={finish} />
        )}
        {phase === "results" && (
          <ResultsScreen
            questions={questions}
            answers={answers}
            onBack={onBack}
            onRetry={retry}
          />
        )}
      </div>
    </div>
  );
}
