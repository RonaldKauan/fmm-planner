import { useState } from "react";
import { subjects } from "../data/subjects";
import { miniQuizzes } from "../data/miniQuizzes";
import { studyMaterials } from "../data/studyMaterials";
import MiniQuiz from "../components/MiniQuiz";
import StudyMaterials from "../components/StudyMaterials";
import "./Materias.css";

const weightLabel = { alta: "Peso Alto", média: "Peso Médio", baixa: "Peso Baixo" };
const diffLabel = { alta: "Difícil", média: "Médio", baixa: "Fácil" };

export default function Materias() {
  const [activeSubject, setActiveSubject] = useState(subjects[0].id);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [filter, setFilter] = useState("all");
  const [activeMiniQuiz, setActiveMiniQuiz] = useState(null); // { quiz, topicName }

  const subject = subjects.find((s) => s.id === activeSubject);

  const filteredTopics =
    filter === "all"
      ? subject.topics
      : subject.topics.filter((t) => t.difficulty === filter);

  const toggleTopic = (id) => setExpandedTopic(expandedTopic === id ? null : id);

  const isMath = activeSubject === "matematica";

  const openMiniQuiz = (e, topic) => {
    e.stopPropagation();
    const quiz = miniQuizzes[topic.id];
    if (!quiz) return;
    setActiveMiniQuiz({ quiz, topicName: topic.name });
  };

  return (
    <div className="materias">
      <div className="container">
        <div className="page-header">
          <h1>📚 Matérias e Assuntos</h1>
          <p>Explore os tópicos cobrados na prova e organize seus estudos</p>
        </div>

        {/* SUBJECT TABS */}
        <div className="subject-tabs">
          {subjects.map((s) => (
            <button
              key={s.id}
              className={`subject-tab ${activeSubject === s.id ? "active" : ""}`}
              style={activeSubject === s.id ? { borderColor: s.color, color: s.color, background: `${s.color}15` } : {}}
              onClick={() => { setActiveSubject(s.id); setExpandedTopic(null); setFilter("all"); }}
            >
              <span className="tab-icon">{s.icon}</span>
              <span className="tab-name">{s.name}</span>
              <span className="tab-count">{s.topics.length} tópicos</span>
            </button>
          ))}
        </div>

        {/* SUBJECT HEADER */}
        <div className="subject-header" style={{ borderLeftColor: subject.color }}>
          <div>
            <h2 style={{ color: subject.color }}>{subject.icon} {subject.name}</h2>
            <p>{subject.description}</p>
          </div>
          <div className="subject-meta">
            <div className="meta-item">
              <span className="meta-num">{subject.topics.length}</span>
              <span className="meta-label">Tópicos</span>
            </div>
            <div className="meta-item">
              <span className="meta-num">{subject.topics.reduce((a, t) => a + t.subtopics.length, 0)}</span>
              <span className="meta-label">Subtópicos</span>
            </div>
            {isMath && (
              <div className="meta-item">
                <span className="meta-num" style={{ color: "#10b981" }}>
                  {subject.topics.filter((t) => miniQuizzes[t.id]).length}
                </span>
                <span className="meta-label">Mini-provas</span>
              </div>
            )}
          </div>
        </div>

        {/* MATH BANNER */}
        {isMath && (
          <div className="mini-quiz-banner">
            <span className="mq-banner-icon">✏️</span>
            <div>
              <strong>Mini-provas disponíveis!</strong>
              <span> Cada tópico de Matemática tem uma mini-prova com questões no estilo FMM. Clique em</span>
              <span className="mq-banner-chip">Fazer Mini-Prova</span>
              <span>em qualquer tópico para testar seu conhecimento.</span>
            </div>
          </div>
        )}

        {/* FILTERS */}
        <div className="filter-bar">
          <span className="filter-label">Filtrar por dificuldade:</span>
          {["all", "baixa", "média", "alta"].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f === "all" ? "Todos" : diffLabel[f]}
            </button>
          ))}
          <span className="filter-count">{filteredTopics.length} tópico(s)</span>
        </div>

        {/* TOPICS */}
        <div className="topics-list">
          {filteredTopics.map((topic) => {
            const hasMiniQuiz = isMath && !!miniQuizzes[topic.id];
            const qCount = hasMiniQuiz ? miniQuizzes[topic.id].questions.length : 0;
            const materials = isMath ? (studyMaterials[topic.id] || []) : [];

            return (
              <div
                key={topic.id}
                className={`topic-card ${expandedTopic === topic.id ? "expanded" : ""}`}
              >
                <button className="topic-header" onClick={() => toggleTopic(topic.id)}>
                  <div className="topic-main">
                    <div className="topic-dot" style={{ background: subject.color }} />
                    <div>
                      <div className="topic-name">{topic.name}</div>
                      <div className="topic-tags">
                        <span className={`badge badge-${topic.difficulty === "alta" ? "red" : topic.difficulty === "média" ? "yellow" : "green"}`}>
                          {diffLabel[topic.difficulty]}
                        </span>
                        <span className={`badge ${topic.weight === "alta" ? "badge-blue" : "badge-purple"}`}>
                          {weightLabel[topic.weight]}
                        </span>
                        <span className="subtopic-count">{topic.subtopics.length} subtópicos</span>
                        {hasMiniQuiz && (
                          <span className="mq-available-tag">
                            ✏️ {qCount} questões
                          </span>
                        )}
                        {materials.length > 0 && (
                          <span className="sm-available-tag">
                            📌 {materials.length} materiais
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="topic-actions" onClick={(e) => e.stopPropagation()}>
                    {hasMiniQuiz && (
                      <button
                        className="mq-trigger-btn"
                        style={{ borderColor: subject.color, color: subject.color }}
                        onClick={(e) => openMiniQuiz(e, topic)}
                      >
                        ✏️ Fazer Mini-Prova
                      </button>
                    )}
                    <span className={`chevron ${expandedTopic === topic.id ? "open" : ""}`}
                      onClick={() => toggleTopic(topic.id)}
                    >
                      ›
                    </span>
                  </div>
                </button>

                {expandedTopic === topic.id && (
                  <div className="topic-body">
                    <div className="subtopics-grid">
                      {topic.subtopics.map((sub, i) => (
                        <div key={i} className="subtopic-item">
                          <span className="subtopic-bullet" style={{ background: subject.color }} />
                          {sub}
                        </div>
                      ))}
                    </div>

                    {/* STUDY MATERIALS */}
                    {materials.length > 0 && (
                      <StudyMaterials
                        materials={materials}
                        subjectColor={subject.color}
                      />
                    )}

                    {hasMiniQuiz && (
                      <button
                        className="mq-inline-btn"
                        style={{ background: `${subject.color}18`, color: subject.color, borderColor: `${subject.color}40` }}
                        onClick={(e) => openMiniQuiz(e, topic)}
                      >
                        ✏️ Fazer mini-prova deste tópico ({qCount} questões)
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredTopics.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <p>Nenhum tópico encontrado com esse filtro.</p>
          </div>
        )}

        {/* LEGEND */}
        <div className="legend">
          <div className="legend-title">Legenda</div>
          <div className="legend-items">
            <div className="legend-item"><span className="badge badge-red">Difícil</span> Alta complexidade — estude com atenção extra</div>
            <div className="legend-item"><span className="badge badge-yellow">Médio</span> Complexidade moderada — domínio necessário</div>
            <div className="legend-item"><span className="badge badge-green">Fácil</span> Conceito base — essencial para a prova</div>
            <div className="legend-item"><span className="badge badge-blue">Peso Alto</span> Tema frequente nas provas da FMM</div>
          </div>
        </div>
      </div>

      {/* MINI QUIZ MODAL */}
      {activeMiniQuiz && (
        <MiniQuiz
          quiz={activeMiniQuiz.quiz}
          topicName={activeMiniQuiz.topicName}
          subjectColor={subject.color}
          onClose={() => setActiveMiniQuiz(null)}
        />
      )}
    </div>
  );
}
