import "./StudyMaterials.css";

const TYPE_META = {
  video: { icon: "▶️", label: "Vídeo", color: "#ef4444", badge: "badge-red" },
  article: { icon: "📄", label: "Artigo", color: "#3b82f6", badge: "badge-blue" },
};

const TAG_STYLE = {
  Teoria:     { bg: "rgba(59,130,246,0.12)",  color: "#60a5fa" },
  Exercícios: { bg: "rgba(16,185,129,0.12)",  color: "#34d399" },
  Técnica:    { bg: "rgba(245,158,11,0.12)",  color: "#fbbf24" },
  Dica:       { bg: "rgba(139,92,246,0.12)",  color: "#a78bfa" },
  Leitura:    { bg: "rgba(99,102,241,0.12)",  color: "#818cf8" },
  Interativo: { bg: "rgba(236,72,153,0.12)",  color: "#f472b6" },
  Conceito:   { bg: "rgba(20,184,166,0.12)",  color: "#2dd4bf" },
  Revisão:    { bg: "rgba(249,115,22,0.12)",  color: "#fb923c" },
};

export default function StudyMaterials({ materials, subjectColor }) {
  if (!materials || materials.length === 0) return null;

  return (
    <div className="study-materials">
      <div className="sm-title">
        <span className="sm-title-icon">📌</span>
        Material de Estudo
      </div>
      <div className="sm-grid">
        {materials.map((m, i) => {
          const meta = TYPE_META[m.type] || TYPE_META.article;
          const tagStyle = TAG_STYLE[m.tag] || TAG_STYLE.Leitura;

          return (
            <a
              key={i}
              href={m.url}
              target="_blank"
              rel="noreferrer noopener"
              className="sm-card"
              style={{ "--sm-color": subjectColor }}
            >
              <div className="sm-card-top">
                <div className="sm-type-icon">{meta.icon}</div>
                <div className="sm-tags">
                  <span
                    className="sm-tag"
                    style={{ background: tagStyle.bg, color: tagStyle.color }}
                  >
                    {m.tag}
                  </span>
                  <span className={`badge ${meta.badge}`} style={{ fontSize: "0.65rem" }}>
                    {meta.label}
                  </span>
                </div>
                <span className="sm-external">↗</span>
              </div>

              <div className="sm-card-body">
                <div className="sm-card-title">{m.title}</div>
                <div className="sm-card-source">{m.source}</div>
                <div className="sm-card-desc">{m.description}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
