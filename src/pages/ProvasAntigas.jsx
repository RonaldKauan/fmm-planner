import { useState } from "react";
import { exams } from "../data/exams";
import "./ProvasAntigas.css";

const SUBJECT_META = {
  portugues: { name: "Língua Portuguesa", icon: "📖", color: "#3b82f6" },
  matematica: { name: "Matemática",        icon: "📐", color: "#10b981" },
  ciencias:  { name: "Ciências Naturais", icon: "🔬", color: "#8b5cf6" },
  ingles:    { name: "Inglês",             icon: "🇺🇸", color: "#f59e0b" },
};

const LINK_TYPE_META = {
  prova:    { icon: "📄", label: "Prova Oficial",  color: "#10b981" },
  gabarito: { icon: "✅", label: "Gabarito",        color: "#3b82f6" },
  edital:   { icon: "📋", label: "Edital",          color: "#8b5cf6" },
  externo:  { icon: "🔗", label: "Site Externo",    color: "#f59e0b" },
};

const FORMAT_BADGE = {
  novo:   { label: "Formato atual",  cls: "badge-green"  },
  antigo: { label: "Formato antigo", cls: "badge-purple" },
};

export default function ProvasAntigas() {
  const [selected, setSelected] = useState(null);
  const exam = exams.find((e) => e.id === selected);

  return (
    <div className="provas">
      <div className="container">
        <div className="page-header">
          <h1>📄 Provas Antigas</h1>
          <p>Edições anteriores da FMM com links oficiais e distribuição real de questões</p>
        </div>

        {/* FORMAT NOTICE */}
        <div className="format-notice">
          <div className="format-notice-item old">
            <span className="fn-icon">📜</span>
            <div>
              <strong>Formato antigo (até 2021)</strong>
              <span>Português + Matemática + <em>Inglês</em></span>
            </div>
          </div>
          <div className="format-notice-arrow">→</div>
          <div className="format-notice-item new">
            <span className="fn-icon">📋</span>
            <div>
              <strong>Formato atual (2022+)</strong>
              <span>Português + Matemática + <em>Ciências Naturais</em></span>
            </div>
          </div>
        </div>

        <div className="provas-layout">
          {/* LIST */}
          <div className="provas-list">
            <div className="list-header">
              <h3>Edições</h3>
              <span className="badge badge-blue">{exams.length} provas</span>
            </div>
            {exams.map((e) => {
              const isOld = e.format === "antigo";
              return (
                <button
                  key={e.id}
                  className={`exam-item ${selected === e.id ? "active" : ""}`}
                  onClick={() => setSelected(selected === e.id ? null : e.id)}
                >
                  <div className="exam-item-year">{e.year}</div>
                  <div className="exam-item-info">
                    <div className="exam-item-title">{e.title}</div>
                    <div className="exam-item-meta">
                      {e.totalQuestions} questões · {isOld ? "Port + Mat + Ing" : "Port + Mat + Cien"}
                    </div>
                  </div>
                  <div className="exam-item-right">
                    <span className={`format-tag ${isOld ? "tag-old" : "tag-new"}`}>
                      {isOld ? "Inglês" : "Ciências"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* DETAIL */}
          <div className="provas-detail">
            {!exam ? (
              <div className="detail-empty">
                <div className="empty-icon">📄</div>
                <h3>Selecione uma prova</h3>
                <p>Clique em uma edição para ver detalhes, distribuição de questões e links de download.</p>
              </div>
            ) : (
              <div className="detail-content">
                <div className="detail-header">
                  <div>
                    <div className="detail-year">{exam.year}</div>
                    <h2>{exam.title}</h2>
                    <div className="detail-date">📅 Realizada em {exam.date}</div>
                  </div>
                  <div className="detail-header-badges">
                    <span className={`badge ${exam.difficulty === "alta" ? "badge-red" : "badge-yellow"}`}>
                      {exam.difficulty === "alta" ? "Difícil" : "Médio"}
                    </span>
                    <span className={`badge ${FORMAT_BADGE[exam.format].cls}`}>
                      {FORMAT_BADGE[exam.format].label}
                    </span>
                  </div>
                </div>

                {/* STATS */}
                <div className="detail-stats">
                  <div className="dstat">
                    <div className="dstat-val">{exam.totalQuestions}</div>
                    <div className="dstat-label">Total de questões</div>
                  </div>
                  <div className="dstat">
                    <div className="dstat-val">{exam.subjects.length}</div>
                    <div className="dstat-label">Disciplinas</div>
                  </div>
                  <div className="dstat">
                    <div className="dstat-val">5h</div>
                    <div className="dstat-label">Duração</div>
                  </div>
                </div>

                {/* DESCRIÇÃO */}
                <div className="detail-section">
                  <h4>Sobre esta prova</h4>
                  <p>{exam.description}</p>
                </div>

                {/* DISTRIBUIÇÃO */}
                <div className="detail-section">
                  <h4>Distribuição de questões</h4>
                  <div className="distribution">
                    {exam.subjects.map((subj) => {
                      const meta = SUBJECT_META[subj];
                      const qty = exam.distribution[subj] || 0;
                      const pct = Math.round((qty / exam.totalQuestions) * 100);
                      return (
                        <div key={subj} className="dist-item">
                          <div className="dist-item-header">
                            <span>{meta.icon} {meta.name}</span>
                            <span style={{ color: meta.color, fontWeight: 700 }}>
                              {qty} questões ({pct}%)
                            </span>
                          </div>
                          <div className="progress-bar-wrap">
                            <div
                              className="progress-bar-fill"
                              style={{ width: `${pct}%`, background: meta.color }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* DESTAQUES */}
                <div className="detail-section">
                  <h4>Destaques do conteúdo</h4>
                  <ul className="highlights-list">
                    {exam.highlights.map((h, i) => (
                      <li key={i} className="highlight-item">
                        <span className="highlight-bullet">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* LINKS */}
                <div className="detail-section">
                  <h4>Links e Downloads</h4>
                  {exam.links?.length > 0 ? (
                    <div className="links-grid">
                      {exam.links.map((link, i) => {
                        const meta = LINK_TYPE_META[link.type] || LINK_TYPE_META.externo;
                        return (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="exam-link-card"
                            style={{ "--link-color": meta.color }}
                          >
                            <span className="link-card-icon">{meta.icon}</span>
                            <div className="link-card-body">
                              <div className="link-card-label">{meta.label}</div>
                              <div className="link-card-title">{link.label}</div>
                            </div>
                            <span className="link-card-arrow">↗</span>
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="pdf-unavail">
                      <span>🔍</span>
                      <span>
                        Links diretos não disponíveis. Acesse{" "}
                        <a href="http://matematicaetop.blogspot.com/p/provas-fundacao-matias-machiline.html"
                          target="_blank" rel="noreferrer" className="inline-link">
                          Matemática é Top
                        </a>{" "}ou{" "}
                        <a href="https://matematicamonteiro.com/fmm/"
                          target="_blank" rel="noreferrer" className="inline-link">
                          Matemática Monteiro
                        </a>.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RODAPÉ */}
        <div className="tips-box">
          <div className="tips-box-icon">ℹ️</div>
          <div>
            <h4>Fontes dos links</h4>
            <p>
              PDFs e gabaritos oficiais apontam para{" "}
              <a href="https://www.fundacaomatiasmachline.org.br/processo-seletivo/"
                target="_blank" rel="noreferrer" className="inline-link">
                fundacaomatiasmachline.org.br
              </a>.
              {" "}Links externos apontam para{" "}
              <a href="http://matematicaetop.blogspot.com/p/provas-fundacao-matias-machiline.html"
                target="_blank" rel="noreferrer" className="inline-link">Matemática é Top</a>
              {" "}e{" "}
              <a href="https://matematicamonteiro.com/fmm/"
                target="_blank" rel="noreferrer" className="inline-link">Matemática Monteiro</a>
              , acervos com provas de 2010 a 2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
