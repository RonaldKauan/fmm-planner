import { useState } from "react";
import QuestionImage from "./QuestionImage";
import "./MiniQuiz.css";

const LETTERS = ["A", "B", "C", "D", "E"];

function formatDifficulty(d) {
  return d === "alta" ? "Difícil" : d === "média" ? "Médio" : "Fácil";
}

function diffBadge(d) {
  return d === "alta" ? "badge-red" : d === "média" ? "badge-yellow" : "badge-green";
}

export default function MiniQuiz({ quiz, topicName, subjectColor, onClose }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const [phase, setPhase] = useState("quiz"); // quiz | results

  const q = quiz.questions[current];
  const selected = answers[q.id];
  const isRevealed = revealed[q.id];
  const total = quiz.questions.length;
  const answered = Object.keys(answers).length;

  const select = (i) => {
    if (isRevealed) return;
    setAnswers((a) => ({ ...a, [q.id]: i }));
  };

  const reveal = () => {
    if (selected === undefined) return;
    setRevealed((r) => ({ ...r, [q.id]: true }));
  };

  const next = () => {
    if (current < total - 1) setCurrent((c) => c + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  const finish = () => setPhase("results");

  const restart = () => {
    setCurrent(0);
    setAnswers({});
    setRevealed({});
    setPhase("quiz");
  };

  const correct = quiz.questions.filter((qq) => answers[qq.id] === qq.answer).length;
  const score = total > 0 ? Math.round((correct / total) * 100) : 0;

  if (phase === "results") {
    return (
      <div className="mq-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div className="mq-modal mq-results-modal">
          <button className="mq-close" onClick={onClose}>✕</button>

          <div className="mq-results-header">
            <div className="mq-results-icon">
              {score >= 80 ? "🏆" : score >= 60 ? "📈" : "📚"}
            </div>
            <h2>{score >= 80 ? "Excelente!" : score >= 60 ? "Bom resultado!" : "Continue praticando!"}</h2>
            <p className="mq-topic-label">{topicName}</p>
          </div>

          <div className="mq-score-row">
            <div className="mq-score-circle" style={{ "--mq-color": score >= 80 ? "#10b981" : score >= 60 ? "#f59e0b" : "#ef4444" }}>
              <span className="mq-score-num" style={{ color: score >= 80 ? "#10b981" : score >= 60 ? "#f59e0b" : "#ef4444" }}>
                {score}%
              </span>
              <span className="mq-score-sub">{correct}/{total} certas</span>
            </div>
          </div>

          {/* GABARITO */}
          <div className="mq-gabarito">
            <h4>Gabarito comentado</h4>
            <div className="mq-gabarito-list">
              {quiz.questions.map((qq, i) => {
                const ua = answers[qq.id];
                const ok = ua === qq.answer;
                return (
                  <div key={qq.id} className={`mq-gb-item ${ok ? "ok" : "fail"}`}>
                    <div className="mq-gb-header">
                      <span className="mq-gb-num">{i + 1}</span>
                      <span className="mq-gb-question">{qq.question.split("\n")[0]}</span>
                      <span className={`mq-gb-result ${ok ? "green" : "red"}`}>
                        {ok ? "✓" : "✗"}
                      </span>
                    </div>
                    <div className="mq-gb-detail">
                      {qq.options.map((opt, idx) => (
                        <div
                          key={idx}
                          className={`mq-gb-opt
                            ${idx === qq.answer ? "correct-opt" : ""}
                            ${idx === ua && idx !== qq.answer ? "wrong-opt" : ""}
                          `}
                        >
                          <span className="mq-gb-letter">{LETTERS[idx]}</span>
                          <span>{opt}</span>
                          {idx === qq.answer && <span className="mq-gb-tag green-tag">✓ Gabarito</span>}
                          {idx === ua && idx !== qq.answer && <span className="mq-gb-tag red-tag">✗ Sua resposta</span>}
                        </div>
                      ))}
                      <div className="mq-gb-explanation">
                        <strong>💡</strong> {qq.explanation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mq-results-actions">
            <button className="btn btn-secondary" onClick={restart}>🔄 Refazer</button>
            <button className="btn btn-primary" onClick={onClose}>Fechar</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mq-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="mq-modal">
        {/* HEADER */}
        <div className="mq-header" style={{ borderTopColor: subjectColor }}>
          <div className="mq-header-left">
            <span className="mq-subject-dot" style={{ background: subjectColor }} />
            <div>
              <div className="mq-topic-name">{topicName}</div>
              <div className="mq-subtitle">Mini-Prova · {total} questões</div>
            </div>
          </div>
          <div className="mq-header-right">
            <span className="mq-progress-text">{answered}/{total} respondidas</span>
            <button className="mq-close" onClick={onClose}>✕</button>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="mq-progress-bar">
          <div
            className="mq-progress-fill"
            style={{ width: `${((current + 1) / total) * 100}%`, background: subjectColor }}
          />
        </div>

        {/* NAV DOTS */}
        <div className="mq-dots">
          {quiz.questions.map((qq, i) => {
            const a = answers[qq.id];
            const r = revealed[qq.id];
            let cls = "mq-dot";
            if (i === current) cls += " current";
            else if (r) cls += a === qq.answer ? " correct" : " wrong";
            else if (a !== undefined) cls += " answered";
            return (
              <button
                key={qq.id}
                className={cls}
                style={i === current ? { background: subjectColor, borderColor: subjectColor } : {}}
                onClick={() => setCurrent(i)}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        {/* QUESTION */}
        <div className="mq-body">
          <div className="mq-meta">
            <span className={`badge ${diffBadge(q.difficulty)}`}>
              {formatDifficulty(q.difficulty)}
            </span>
            <span className="badge badge-purple">Ano: {q.year}</span>
            <span className="mq-counter">Questão {current + 1} de {total}</span>
          </div>

          {q.image && <QuestionImage image={q.image} />}
          <p className="mq-question-text">{q.question}</p>

          <div className="mq-options">
            {q.options.map((opt, i) => {
              let cls = "mq-option";
              if (selected === i) cls += " selected";
              if (isRevealed) {
                if (i === q.answer) cls += " correct";
                else if (selected === i) cls += " wrong";
              }
              return (
                <button key={i} className={cls} onClick={() => select(i)}>
                  <span
                    className="mq-letter"
                    style={selected === i && !isRevealed ? { background: subjectColor, color: "#fff" } : {}}
                  >
                    {LETTERS[i]}
                  </span>
                  <span>{opt}</span>
                  {isRevealed && i === q.answer && <span className="mq-check">✓</span>}
                  {isRevealed && selected === i && i !== q.answer && <span className="mq-x">✗</span>}
                </button>
              );
            })}
          </div>

          {isRevealed && (
            <div className="mq-explanation">
              <span className="mq-exp-icon">💡</span>
              <p>{q.explanation}</p>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="mq-footer">
          <button className="btn btn-ghost" onClick={prev} disabled={current === 0}>
            ← Anterior
          </button>

          <div className="mq-footer-center">
            {!isRevealed && (
              <button
                className="btn btn-secondary"
                onClick={reveal}
                disabled={selected === undefined}
                title={selected === undefined ? "Selecione uma alternativa primeiro" : ""}
              >
                Ver gabarito
              </button>
            )}
          </div>

          {current < total - 1 ? (
            <button className="btn btn-primary" onClick={next}>
              Próxima →
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={finish}
              disabled={answered < total}
              title={answered < total ? `Responda todas as ${total} questões` : ""}
            >
              Ver resultado ✓
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
