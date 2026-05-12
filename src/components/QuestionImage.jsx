import "./QuestionImage.css";

// ─── SVG RENDERERS ───────────────────────────────────────────────────────────

function RightTriangle({ a, b, c, labelA = "a", labelB = "b", labelC = "c" }) {
  return (
    <svg viewBox="0 0 260 200" className="q-svg">
      <polygon points="30,170 210,170 210,50" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
      {/* right angle mark */}
      <polyline points="210,155 195,155 195,170" fill="none" stroke="#60a5fa" strokeWidth="2" />
      {/* labels */}
      <text x="115" y="190" textAnchor="middle" className="svg-label">{labelA} = {a}</text>
      <text x="225" y="115" textAnchor="start" className="svg-label">{labelB} = {b}</text>
      <text x="100" y="95" textAnchor="middle" className="svg-label">{labelC} = {c}</text>
      {/* angle arc */}
      <path d="M 58,170 A 28,28 0 0,0 52,149" fill="none" stroke="#a78bfa" strokeWidth="1.5" />
      <text x="68" y="162" className="svg-label-sm" fill="#a78bfa">α</text>
    </svg>
  );
}

function Trapezoid({ B, b, h }) {
  const offset = 40;
  return (
    <svg viewBox="0 0 280 160" className="q-svg">
      <polygon
        points={`${offset},140 ${280 - offset},140 240,30 50,30`}
        fill="none" stroke="#60a5fa" strokeWidth="2.5"
      />
      {/* height dashed */}
      <line x1="145" y1="30" x2="145" y2="140" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,4" />
      {/* labels */}
      <text x="140" y="22" textAnchor="middle" className="svg-label">B = {B}</text>
      <text x="140" y="158" textAnchor="middle" className="svg-label">b = {b}</text>
      <text x="160" y="90" textAnchor="start" className="svg-label" fill="#f59e0b">h = {h}</text>
    </svg>
  );
}

function Circle({ r, showSector, sectorDeg }) {
  const cx = 130, cy = 100, radius = 75;
  let sectorPath = null;
  if (showSector) {
    const rad = (sectorDeg * Math.PI) / 180;
    const x = cx + radius * Math.cos(-Math.PI / 2 + rad);
    const y = cy + radius * Math.sin(-Math.PI / 2 + rad);
    const large = sectorDeg > 180 ? 1 : 0;
    sectorPath = `M ${cx},${cy} L ${cx},${cy - radius} A ${radius},${radius} 0 ${large},1 ${x},${y} Z`;
  }
  return (
    <svg viewBox="0 0 260 200" className="q-svg">
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#60a5fa" strokeWidth="2.5" />
      {showSector && <path d={sectorPath} fill="rgba(139,92,246,0.25)" stroke="#8b5cf6" strokeWidth="2" />}
      <line x1={cx} y1={cy} x2={cx + radius} y2={cy} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,4" />
      <text x={cx + radius / 2} y={cy - 10} textAnchor="middle" className="svg-label" fill="#f59e0b">r = {r}</text>
      {showSector && (
        <text x={cx + 20} y={cy - 30} textAnchor="start" className="svg-label" fill="#a78bfa">{sectorDeg}°</text>
      )}
    </svg>
  );
}

function LinearGraph({ a, b }) {
  // Draw axes + line from x=-3 to x=3
  const W = 280, H = 200, ox = W / 2, oy = H / 2, scale = 30;
  const x1 = -4, y1 = a * x1 + b;
  const x2 = 4, y2 = a * x2 + b;
  const toSvg = (x, y) => [ox + x * scale, oy - y * scale];
  const [sx1, sy1] = toSvg(x1, y1);
  const [sx2, sy2] = toSvg(x2, y2);
  const ticks = [-3, -2, -1, 1, 2, 3];
  const zero = a !== 0 ? (-b / a).toFixed(1) : null;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="q-svg">
      {/* grid */}
      {ticks.map((t) => (
        <g key={t}>
          <line x1={ox + t * scale} y1={10} x2={ox + t * scale} y2={H - 10} stroke="#334155" strokeWidth="1" />
          <line x1={10} y1={oy - t * scale} x2={W - 10} y2={oy - t * scale} stroke="#334155" strokeWidth="1" />
        </g>
      ))}
      {/* axes */}
      <line x1={10} y1={oy} x2={W - 10} y2={oy} stroke="#94a3b8" strokeWidth="1.5" />
      <line x1={ox} y1={10} x2={ox} y2={H - 10} stroke="#94a3b8" strokeWidth="1.5" />
      {/* axis arrows */}
      <polygon points={`${W - 10},${oy} ${W - 18},${oy - 5} ${W - 18},${oy + 5}`} fill="#94a3b8" />
      <polygon points={`${ox},10 ${ox - 5},18 ${ox + 5},18`} fill="#94a3b8" />
      {/* tick labels */}
      {ticks.map((t) => (
        <g key={t}>
          <text x={ox + t * scale} y={oy + 16} textAnchor="middle" className="svg-tick">{t}</text>
          <text x={ox - 16} y={oy - t * scale + 4} textAnchor="middle" className="svg-tick">{t}</text>
        </g>
      ))}
      <text x={ox + 8} y={oy + 16} className="svg-tick">0</text>
      <text x={W - 8} y={oy + 16} className="svg-tick">x</text>
      <text x={ox + 8} y={18} className="svg-tick">y</text>
      {/* function line */}
      <line x1={sx1} y1={sy1} x2={sx2} y2={sy2} stroke="#10b981" strokeWidth="2.5" />
      {/* label */}
      <text x={sx2 - 50} y={sy2 - 10} className="svg-label" fill="#10b981">
        f(x) = {a > 0 ? "" : ""}{a}x {b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`}
      </text>
    </svg>
  );
}

function QuadraticGraph({ a, b, c }) {
  const W = 280, H = 200, ox = W / 2, oy = H / 2, scale = 28;
  const toSvg = (x, y) => [ox + x * scale, oy - y * scale];
  const pts = [];
  for (let x = -4; x <= 4; x += 0.15) {
    const y = a * x * x + b * x + c;
    if (Math.abs(y) < 6) pts.push(toSvg(x, y));
  }
  const path = pts.length
    ? "M " + pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" L ")
    : "";
  const ticks = [-3, -2, -1, 1, 2, 3];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="q-svg">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={ox + t * scale} y1={10} x2={ox + t * scale} y2={H - 10} stroke="#334155" strokeWidth="1" />
          <line x1={10} y1={oy - t * scale} x2={W - 10} y2={oy - t * scale} stroke="#334155" strokeWidth="1" />
        </g>
      ))}
      <line x1={10} y1={oy} x2={W - 10} y2={oy} stroke="#94a3b8" strokeWidth="1.5" />
      <line x1={ox} y1={10} x2={ox} y2={H - 10} stroke="#94a3b8" strokeWidth="1.5" />
      <polygon points={`${W - 10},${oy} ${W - 18},${oy - 5} ${W - 18},${oy + 5}`} fill="#94a3b8" />
      <polygon points={`${ox},10 ${ox - 5},18 ${ox + 5},18`} fill="#94a3b8" />
      {ticks.map((t) => (
        <g key={t}>
          <text x={ox + t * scale} y={oy + 16} textAnchor="middle" className="svg-tick">{t}</text>
          <text x={ox - 16} y={oy - t * scale + 4} textAnchor="middle" className="svg-tick">{t}</text>
        </g>
      ))}
      <text x={ox + 8} y={oy + 16} className="svg-tick">0</text>
      <text x={W - 8} y={oy + 16} className="svg-tick">x</text>
      <text x={ox + 8} y={18} className="svg-tick">y</text>
      {path && <path d={path} fill="none" stroke="#f59e0b" strokeWidth="2.5" />}
      <text x={W - 60} y={25} className="svg-label" fill="#f59e0b">
        y = {a}x² {b >= 0 ? `+ ${b}x` : `− ${Math.abs(b)}x`} {c >= 0 ? `+ ${c}` : `− ${Math.abs(c)}`}
      </text>
    </svg>
  );
}

function BarChart({ data, title }) {
  const W = 280, H = 180;
  const pad = { l: 40, r: 10, t: 30, b: 40 };
  const maxVal = Math.max(...data.map((d) => d.value));
  const bw = (W - pad.l - pad.r) / data.length;
  const chartH = H - pad.t - pad.b;
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="q-svg">
      {title && <text x={W / 2} y={16} textAnchor="middle" className="svg-label">{title}</text>}
      {/* y-axis */}
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={H - pad.b} stroke="#94a3b8" strokeWidth="1.5" />
      {/* x-axis */}
      <line x1={pad.l} y1={H - pad.b} x2={W - pad.r} y2={H - pad.b} stroke="#94a3b8" strokeWidth="1.5" />
      {/* bars */}
      {data.map((d, i) => {
        const bh = (d.value / maxVal) * chartH;
        const bx = pad.l + i * bw + bw * 0.15;
        const by = H - pad.b - bh;
        return (
          <g key={i}>
            <rect x={bx} y={by} width={bw * 0.7} height={bh} fill={colors[i % colors.length]} rx="3" opacity="0.9" />
            <text x={bx + bw * 0.35} y={by - 5} textAnchor="middle" className="svg-tick">{d.value}</text>
            <text x={bx + bw * 0.35} y={H - pad.b + 14} textAnchor="middle" className="svg-tick" fontSize="9">{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function DataTable({ headers, rows, caption }) {
  const colW = Math.min(90, 240 / headers.length);
  const W = 40 + headers.length * colW;
  const H = 30 + (rows.length + 1) * 26;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="q-svg" style={{ maxHeight: 180 }}>
      {caption && <text x={W / 2} y={14} textAnchor="middle" className="svg-label">{caption}</text>}
      {/* header row */}
      <rect x={5} y={20} width={W - 10} height={24} fill="rgba(59,130,246,0.2)" rx="4" />
      {headers.map((h, i) => (
        <text key={i} x={5 + i * colW + colW / 2} y={36} textAnchor="middle" className="svg-label">{h}</text>
      ))}
      {/* data rows */}
      {rows.map((row, ri) => (
        <g key={ri}>
          <rect x={5} y={44 + ri * 26} width={W - 10} height={24}
            fill={ri % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.07)"} />
          <line x1={5} y1={44 + ri * 26} x2={W - 5} y2={44 + ri * 26} stroke="#334155" strokeWidth="1" />
          {row.map((cell, ci) => (
            <text key={ci} x={5 + ci * colW + colW / 2} y={60 + ri * 26} textAnchor="middle" className="svg-tick">{cell}</text>
          ))}
        </g>
      ))}
      {/* border */}
      <rect x={5} y={20} width={W - 10} height={4 + (rows.length + 1) * 26} fill="none" stroke="#334155" strokeWidth="1.5" rx="4" />
    </svg>
  );
}

function Cube({ side }) {
  const s = 60;
  const ox = 80, oy = 100;
  const off = 28;
  return (
    <svg viewBox="0 0 220 180" className="q-svg">
      {/* front face */}
      <rect x={ox} y={oy} width={s} height={s} fill="rgba(59,130,246,0.15)" stroke="#60a5fa" strokeWidth="2" />
      {/* top face */}
      <polygon
        points={`${ox},${oy} ${ox + off},${oy - off} ${ox + s + off},${oy - off} ${ox + s},${oy}`}
        fill="rgba(59,130,246,0.25)" stroke="#60a5fa" strokeWidth="2"
      />
      {/* right face */}
      <polygon
        points={`${ox + s},${oy} ${ox + s + off},${oy - off} ${ox + s + off},${oy + s - off} ${ox + s},${oy + s}`}
        fill="rgba(59,130,246,0.2)" stroke="#60a5fa" strokeWidth="2"
      />
      {/* dimension label */}
      <text x={ox + s / 2} y={oy + s + 18} textAnchor="middle" className="svg-label">{side}</text>
      <text x={ox + s + off + 8} y={oy - off / 2} textAnchor="start" className="svg-label">{side}</text>
      <text x={ox - 12} y={oy + s / 2} textAnchor="end" className="svg-label">{side}</text>
    </svg>
  );
}

function Cylinder({ r, h }) {
  const cx = 130, rx = 55, ry = 18, top = 40;
  const bottom = top + h * 3.5;
  return (
    <svg viewBox="0 0 260 200" className="q-svg">
      {/* body */}
      <rect x={cx - rx} y={top} width={rx * 2} height={bottom - top} fill="rgba(16,185,129,0.12)" stroke="#34d399" strokeWidth="2" />
      {/* top ellipse */}
      <ellipse cx={cx} cy={top} rx={rx} ry={ry} fill="rgba(16,185,129,0.25)" stroke="#34d399" strokeWidth="2" />
      {/* bottom ellipse */}
      <ellipse cx={cx} cy={bottom} rx={rx} ry={ry} fill="rgba(16,185,129,0.15)" stroke="#34d399" strokeWidth="2" />
      {/* radius arrow */}
      <line x1={cx} y1={top} x2={cx + rx} y2={top} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x={cx + rx / 2} y={top - 8} textAnchor="middle" className="svg-label" fill="#f59e0b">r = {r}</text>
      {/* height arrow */}
      <line x1={cx + rx + 14} y1={top} x2={cx + rx + 14} y2={bottom} stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4,3" />
      <text x={cx + rx + 28} y={(top + bottom) / 2} textAnchor="start" className="svg-label" fill="#a78bfa">h = {h}</text>
    </svg>
  );
}

function PieChart({ slices }) {
  const cx = 120, cy = 100, r = 75;
  let startAngle = -Math.PI / 2;
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
  const total = slices.reduce((s, sl) => s + sl.value, 0);
  return (
    <svg viewBox="0 0 260 200" className="q-svg">
      {slices.map((sl, i) => {
        const angle = (sl.value / total) * 2 * Math.PI;
        const endAngle = startAngle + angle;
        const x1 = cx + r * Math.cos(startAngle);
        const y1 = cy + r * Math.sin(startAngle);
        const x2 = cx + r * Math.cos(endAngle);
        const y2 = cy + r * Math.sin(endAngle);
        const large = angle > Math.PI ? 1 : 0;
        const midAngle = startAngle + angle / 2;
        const lx = cx + (r + 18) * Math.cos(midAngle);
        const ly = cy + (r + 18) * Math.sin(midAngle);
        const d = `M ${cx},${cy} L ${x1},${y1} A ${r},${r} 0 ${large},1 ${x2},${y2} Z`;
        startAngle = endAngle;
        return (
          <g key={i}>
            <path d={d} fill={colors[i % colors.length]} opacity="0.85" stroke="#0f172a" strokeWidth="1.5" />
            <text x={lx} y={ly} textAnchor="middle" className="svg-tick" fill={colors[i % colors.length]}>
              {sl.label} {sl.value}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── REGISTRY ────────────────────────────────────────────────────────────────
const RENDERERS = {
  right_triangle: RightTriangle,
  trapezoid: Trapezoid,
  circle: Circle,
  linear_graph: LinearGraph,
  quadratic_graph: QuadraticGraph,
  bar_chart: BarChart,
  data_table: DataTable,
  cube: Cube,
  cylinder: Cylinder,
  pie_chart: PieChart,
};

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
export default function QuestionImage({ image }) {
  if (!image) return null;
  const Renderer = RENDERERS[image.type];
  if (!Renderer) return null;
  return (
    <div className="question-image-wrap">
      <Renderer {...image.props} />
      {image.caption && <p className="image-caption">{image.caption}</p>}
    </div>
  );
}
