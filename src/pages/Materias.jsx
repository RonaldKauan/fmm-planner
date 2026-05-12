import { useState } from "react";
import { subjects } from "../data/subjects";
import { miniQuizzes } from "../data/miniQuizzes";
import { studyMaterials } from "../data/studyMaterials";
import { exerciseLists } from "../data/exerciseLists";
import MiniQuiz from "../components/MiniQuiz";
import StudyMaterials from "../components/StudyMaterials";
import "./Materias.css";

const weightLabel = { alta: "Peso Alto", média: "Peso Médio", baixa: "Peso Baixo" };
const diffLabel   = { alta: "Difícil",   média: "Médio",       baixa: "Fácil" };

const SUBJECT_COLORS = {
  portugues:  "#3b82f6",
  matematica: "#10b981",
  ciencias:   "#8b5cf6",
};

// Monta lista plana de todas as listas de exercícios com metadados do tópico
function buildAllLists(subjects, exerciseLists) {
  const all = [];
  subjects.forEach((subject) => {
    subject.topics.forEach((topic) => {
      const lists = exerciseLists[topic.id];
      if (lists && lists.length > 0) {
        lists.forEach((list) => {
          all.push({
            ...list,
            topicId: topic.id,
            topicName: topic.name,
            subjectId: subject.id,
            subjectName: subject.name,
            subjectColor: SUBJECT_COLORS[subject.id],
            subjectIcon: subject.icon,
          });
        });
      }
    });
  });
  return all;
}

// ── MODAL DE VISUALIZAÇÃO DE PDF ─────────────────────────────────────────────
function PdfModal({ pdf, onClose }) {
  const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdf.url)}&embedded=true`;

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <div className="pdf-modal-meta">
            <span
              className="pdf-modal-subject"
              style={{ background: pdf.subjectColor + "22", color: pdf.subjectColor }}
            >
              {pdf.subjectIcon} {pdf.topicName}
            </span>
            <h3 className="pdf-modal-title">{pdf.title}</h3>
            <p className="pdf-modal-source">{pdf.source}</p>
          </div>
          <div className="pdf-modal-actions">
            <a
              href={pdf.url}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-ghost pdf-open-btn"
            >
              ↗ Abrir em nova aba
            </a>
            <button className="pdf-close-btn" onClick={onClose} aria-label="Fechar">✕</button>
          </div>
        </div>
        <div className="pdf-viewer-wrap">
          <iframe
            src={viewerUrl}
            title={pdf.title}
            className="pdf-frame"
            allowFullScreen
          />
          <div className="pdf-fallback">
            <p>PDF não carregou?</p>
            <a href={pdf.url} target="_blank" rel="noreferrer noopener" className="btn btn-primary">
              Baixar / Abrir PDF ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SEÇÃO DE LISTAS ───────────────────────────────────────────────────────────
function ListasView({ allLists, activeSubject, onOpenPdf }) {
  const [filterSubject, setFilterSubject] = useState(activeSubject);

  const filtered = filterSubject === "all"
    ? allLists
    : allLists.filter((l) => l.subjectId === filterSubject);

  // Agrupa por matéria → tópico
  const grouped = {};
  filtered.forEach((item) => {
    const key = item.subjectId;
    if (!grouped[key]) grouped[key] = { name: item.subjectName, icon: item.subjectIcon, color: item.subjectColor, topics: {} };
    const tk = item.topicId;
    if (!grouped[key].topics[tk]) grouped[key].topics[tk] = { name: item.topicName, lists: [] };
    grouped[key].topics[tk].lists.push(item);
  });

  return (
    <div className="listas-view">
      {/* FILTRO POR MATÉRIA */}
      <div className="listas-filter">
        <button
          className={`listas-filter-btn ${filterSubject === "all" ? "active" : ""}`}
          onClick={() => setFilterSubject("all")}
        >
          📚 Todas as matérias
          <span className="listas-count">{allLists.length}</span>
        </button>
        {subjects.map((s) => {
          const n = allLists.filter((l) => l.subjectId === s.id).length;
          return (
            <button
              key={s.id}
              className={`listas-filter-btn ${filterSubject === s.id ? "active" : ""}`}
              style={filterSubject === s.id ? {
                borderColor: SUBJECT_COLORS[s.id],
                color: SUBJECT_COLORS[s.id],
                background: SUBJECT_COLORS[s.id] + "15",
              } : {}}
              onClick={() => setFilterSubject(s.id)}
            >
              {s.icon} {s.name}
              <span className="listas-count">{n}</span>
            </button>
          );
        })}
      </div>

      {/* GRUPOS */}
      {Object.entries(grouped).map(([subjectId, subjectData]) => (
        <div key={subjectId} className="listas-subject-group">
          <div className="listas-subject-title" style={{ color: subjectData.color }}>
            {subjectData.icon} {subjectData.name}
          </div>

          {Object.entries(subjectData.topics).map(([topicId, topicData]) => (
            <div key={topicId} className="listas-topic-group">
              <div className="listas-topic-name">{topicData.name}</div>
              <div className="listas-cards">
                {topicData.lists.map((list, i) => (
                  <div key={i} className="lista-card">
                    <div className="lista-card-top">
                      <span
                        className="lista-source-badge"
                        style={{ background: list.subjectColor + "18", color: list.subjectColor }}
                      >
                        {list.source.split("—")[0].trim()}
                      </span>
                      {list.pages && (
                        <span className="lista-pages">{list.pages} pág.</span>
                      )}
                    </div>
                    <div className="lista-card-title">{list.title}</div>
                    <div className="lista-card-desc">{list.description}</div>
                    <div className="lista-card-actions">
                      <button
                        className="btn btn-primary lista-btn"
                        style={{ background: list.subjectColor, borderColor: list.subjectColor }}
                        onClick={() => onOpenPdf(list)}
                      >
                        📄 Ver PDF no site
                      </button>
                      <a
                        href={list.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn btn-ghost lista-btn-ghost"
                      >
                        ↗
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">📂</div>
          <p>Nenhuma lista disponível para esta matéria ainda.</p>
        </div>
      )}
    </div>
  );
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function Materias() {
  const [activeSubject, setActiveSubject]   = useState(subjects[0].id);
  const [expandedTopic, setExpandedTopic]   = useState(null);
  const [filter, setFilter]                 = useState("all");
  const [activeMiniQuiz, setActiveMiniQuiz] = useState(null);
  const [view, setView]                     = useState("topics"); // "topics" | "lists"
  const [activePdf, setActivePdf]           = useState(null);

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

  const allLists = buildAllLists(subjects, exerciseLists);
  const totalLists = allLists.length;

  return (
    <div className="materias">
      <div className="container">
        <div className="page-header">
          <h1>📚 Matérias e Assuntos</h1>
          <p>Explore os tópicos cobrados na prova e organize seus estudos</p>
        </div>

        {/* VIEW TOGGLE */}
        <div className="view-toggle">
          <button
            className={`view-toggle-btn ${view === "topics" ? "active" : ""}`}
            onClick={() => setView("topics")}
          >
            📋 Tópicos e Materiais
          </button>
          <button
            className={`view-toggle-btn ${view === "lists" ? "active" : ""}`}
            onClick={() => setView("lists")}
          >
            📄 Listas de Exercícios
            <span className="view-toggle-count">{totalLists}</span>
          </button>
        </div>

        {/* ── VIEW: TÓPICOS ─────────────────────────────────────────────────── */}
        {view === "topics" && (
          <>
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
                const hasLists = !!(exerciseLists[topic.id]?.length);

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
                              <span className="mq-available-tag">✏️ {qCount} questões</span>
                            )}
                            {materials.length > 0 && (
                              <span className="sm-available-tag">📌 {materials.length} materiais</span>
                            )}
                            {hasLists && (
                              <span className="list-available-tag">📄 listas PDF</span>
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
                        <span
                          className={`chevron ${expandedTopic === topic.id ? "open" : ""}`}
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

                        {materials.length > 0 && (
                          <StudyMaterials materials={materials} subjectColor={subject.color} />
                        )}

                        {/* LISTAS PDF INLINE */}
                        {hasLists && (
                          <div className="topic-lists-inline">
                            <div className="sm-title">
                              <span className="sm-title-icon">📄</span>
                              Listas de Exercícios em PDF
                            </div>
                            <div className="topic-lists-grid">
                              {exerciseLists[topic.id].map((list, i) => (
                                <div key={i} className="topic-list-card">
                                  <div className="tlc-source">{list.source.split("—")[0].trim()}</div>
                                  <div className="tlc-title">{list.title}</div>
                                  {list.pages && <div className="tlc-pages">{list.pages} páginas</div>}
                                  <div className="tlc-actions">
                                    <button
                                      className="tlc-btn"
                                      style={{ borderColor: subject.color + "60", color: subject.color }}
                                      onClick={() => {
                                        const enriched = {
                                          ...list,
                                          topicName: topic.name,
                                          subjectId: subject.id,
                                          subjectName: subject.name,
                                          subjectColor: subject.color,
                                          subjectIcon: subject.icon,
                                        };
                                        setActivePdf(enriched);
                                      }}
                                    >
                                      📄 Ver no site
                                    </button>
                                    <a href={list.url} target="_blank" rel="noreferrer noopener" className="tlc-btn-ext">
                                      ↗
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
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
          </>
        )}

        {/* ── VIEW: LISTAS ──────────────────────────────────────────────────── */}
        {view === "lists" && (
          <ListasView
            allLists={allLists}
            activeSubject={activeSubject}
            onOpenPdf={setActivePdf}
          />
        )}
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

      {/* PDF MODAL */}
      {activePdf && (
        <PdfModal pdf={activePdf} onClose={() => setActivePdf(null)} />
      )}
    </div>
  );
}
