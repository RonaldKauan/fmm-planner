import { useState } from "react";
import "./Planejamento.css";

const SIMULADO_RELEASES = {
  1: "2026-05-17",
  2: "2026-05-24",
  3: "2026-05-31",
  4: "2026-06-06",
};

function getLocalDateStr(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function isSimuladoAvailable(weekNum) {
  const release = SIMULADO_RELEASES[weekNum];
  if (!release) return false;
  return getLocalDateStr(new Date()) >= release;
}

// Baseado no histórico: PS2025 → 15/12/2024 | PS2026 → 23/11/2025
// Estimativa PS2027 (prova de 2026): ~22/11/2026
const EXAM_DATE = new Date("2026-11-22");
const TODAY = new Date();

function getDaysLeft() {
  const diff = EXAM_DATE - TODAY;
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function formatDate(date) {
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

function getWeekStatus(startDate, endDate) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const s = new Date(startDate);
  const e = new Date(endDate);
  if (now > e) return "done";
  if (now >= s && now <= e) return "current";
  return "upcoming";
}

const weeks = [
  {
    num: 1,
    start: "2026-05-11",
    end: "2026-05-17",
    focus: "Interpretação de Texto + Conjuntos e Frações",
    subjects: [
      {
        label: "Português",
        color: "#3b82f6",
        topics: [
          "Interpretação de Texto (explícito e implícito)",
          "Vocabulário contextual",
          "Identificação do tema central e intenção do autor",
        ],
      },
      {
        label: "Matemática",
        color: "#10b981",
        topics: ["Conjuntos Numéricos (N, Z, Q, R)", "Frações e Decimais", "Dízimas periódicas"],
      },
    ],
    tip: "Interpretação representa ~30% das questões de Português. Comece por aqui.",
  },
  {
    num: 2,
    start: "2026-05-18",
    end: "2026-05-24",
    focus: "Classes de Palavras + Potenciação e Radiciação",
    subjects: [
      {
        label: "Português",
        color: "#3b82f6",
        topics: [
          "Substantivo, adjetivo, verbo, advérbio",
          "Pronomes e preposições",
          "Artigo, numeral, interjeição",
        ],
      },
      {
        label: "Matemática",
        color: "#10b981",
        topics: ["Potenciação e suas propriedades", "Raiz quadrada e cúbica", "Notação científica"],
      },
    ],
    tip: "Classes de palavras é base para concordância e análise sintática — domine antes de avançar.",
  },
  {
    num: 3,
    start: "2026-05-25",
    end: "2026-05-31",
    focus: "Ortografia e Acentuação + Razão e Proporção",
    subjects: [
      {
        label: "Português",
        color: "#3b82f6",
        topics: [
          "Ortografia: porquê/porque/por quê/por que",
          "Uso de s, z, x, ch, g, j",
          "Acentuação: regras gerais, proparoxítonas, paroxítonas, oxítonas",
        ],
      },
      {
        label: "Matemática",
        color: "#10b981",
        topics: [
          "Razão e proporção",
          "Regra de três simples e composta",
          "Grandezas diretamente e inversamente proporcionais",
        ],
      },
    ],
    tip: "Ortografia e acentuação são questões de memorização — faça exercícios repetitivos.",
  },
  {
    num: 4,
    start: "2026-06-01",
    end: "2026-06-07",
    focus: "Concordância + Porcentagem e Juros",
    subjects: [
      {
        label: "Português",
        color: "#3b82f6",
        topics: [
          "Concordância verbal (casos especiais)",
          "Concordância nominal",
        ],
      },
      {
        label: "Matemática",
        color: "#10b981",
        topics: [
          "Cálculo de porcentagem",
          "Aumento e desconto percentual",
          "Juros simples e compostos",
        ],
      },
    ],
    tip: "Concordância verbal com sujeito composto e indeterminado costuma cair bastante.",
  },
  {
    num: 5,
    start: "2026-06-08",
    end: "2026-06-14",
    focus: "Regência, Crase e Pontuação + Equações",
    subjects: [
      {
        label: "Português",
        color: "#3b82f6",
        topics: [
          "Regência verbal e nominal",
          "Emprego da crase e casos sem crase",
          "Uso da vírgula, ponto e vírgula, dois-pontos",
        ],
      },
      {
        label: "Matemática",
        color: "#10b981",
        topics: [
          "Expressões algébricas e produtos notáveis",
          "Fatoração",
          "Equações do 1º grau",
        ],
      },
    ],
    tip: "Crase exige prática com exemplos reais — resolva questões de provas anteriores.",
  },
  {
    num: 6,
    start: "2026-06-15",
    end: "2026-06-21",
    focus: "Figuras de Linguagem + Equações do 2º Grau",
    subjects: [
      {
        label: "Português",
        color: "#3b82f6",
        topics: [
          "Metáfora, comparação, metonímia",
          "Hipérbole, eufemismo, personificação",
          "Antítese, paradoxo, ironia",
        ],
      },
      {
        label: "Matemática",
        color: "#10b981",
        topics: [
          "Equações do 2º grau (Bhaskara)",
          "Soma e produto das raízes",
          "Sistemas de equações",
          "Inequações",
        ],
      },
    ],
    tip: "Decore o Bhaskara até aplicar automaticamente — é praticamente garantido na prova.",
  },
  {
    num: 7,
    start: "2026-06-22",
    end: "2026-06-28",
    focus: "Tipos de Texto e Análise Sintática + Funções",
    subjects: [
      {
        label: "Português",
        color: "#3b82f6",
        topics: [
          "Narração, descrição e dissertação",
          "Texto jornalístico, literário, charge e tirinha",
          "Análise sintática: sujeito, predicado, objetos",
        ],
      },
      {
        label: "Matemática",
        color: "#10b981",
        topics: [
          "Conceito de função, domínio e imagem",
          "Função afim (1º grau) e gráficos",
          "Função quadrática (2º grau) e gráficos",
        ],
      },
    ],
    tip: "Questões com charge e tirinha testam figuras de linguagem + interpretação simultaneamente.",
  },
  {
    num: 8,
    start: "2026-06-29",
    end: "2026-07-05",
    focus: "Revisão de Português + Geometria Plana I",
    subjects: [
      {
        label: "Português",
        color: "#3b82f6",
        topics: [
          "Orações subordinadas e coordenadas",
          "Revisão geral de gramática",
          "Resolução de questões de provas antigas",
        ],
      },
      {
        label: "Matemática",
        color: "#10b981",
        topics: [
          "Ângulos e triângulos",
          "Teorema de Pitágoras",
          "Semelhança de triângulos",
        ],
      },
    ],
    tip: "A semana de revisão de Português é o momento de identificar suas maiores lacunas.",
  },
  {
    num: 9,
    start: "2026-07-06",
    end: "2026-07-12",
    focus: "Geometria Plana II + Geometria Espacial",
    subjects: [
      {
        label: "Matemática",
        color: "#10b981",
        topics: [
          "Áreas: quadriláteros, triângulo, círculo",
          "Polígonos: classificação e propriedades",
          "Prismas, pirâmides, cilindro, cone e esfera",
          "Volume e área de sólidos",
        ],
      },
    ],
    tip: "Geometria plana é um dos temas mais pesados de Matemática. Memorize cada fórmula de área.",
  },
  {
    num: 10,
    start: "2026-07-13",
    end: "2026-07-19",
    focus: "Progressões e Estatística + Início de Ciências",
    subjects: [
      {
        label: "Matemática",
        color: "#10b981",
        topics: [
          "Progressão Aritmética (PA): termo geral e soma",
          "Progressão Geométrica (PG): termo geral e soma",
          "Estatística: média, moda, mediana",
          "Probabilidade simples e análise combinatória básica",
        ],
      },
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: ["Citologia: célula procariótica e eucariótica", "Organelas celulares e funções"],
      },
    ],
    tip: "PA e PG são recorrentes — foque em achar o termo geral e a soma dos n primeiros termos.",
  },
  {
    num: 11,
    start: "2026-07-20",
    end: "2026-07-26",
    focus: "Simulado Português + Matemática | Citologia e Divisão Celular",
    subjects: [
      {
        label: "Revisão",
        color: "#f59e0b",
        topics: [
          "Simulado com 50 questões de Português e Matemática",
          "Análise dos erros e revisão dos pontos críticos",
        ],
      },
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: [
          "Divisão celular: mitose e meiose",
          "Membrana plasmática e transporte",
        ],
      },
    ],
    tip: "Primeiro simulado parcial: meça seu tempo e identifique os maiores gargalos.",
    isReview: true,
  },
  {
    num: 12,
    start: "2026-07-27",
    end: "2026-08-02",
    focus: "Genética",
    subjects: [
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: [
          "1ª e 2ª Leis de Mendel",
          "Dominância e recessividade",
          "Heredograma",
          "DNA e RNA",
          "Mutações e variabilidade genética",
        ],
      },
    ],
    tip: "Exercite Heredograma até conseguir resolver qualquer cruzamento com rapidez.",
  },
  {
    num: 13,
    start: "2026-08-03",
    end: "2026-08-09",
    focus: "Ecologia e Biomas",
    subjects: [
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: [
          "Ecossistemas e biomas brasileiros",
          "Cadeias e teias alimentares",
          "Ciclos biogeoquímicos",
          "Relações ecológicas",
          "Impactos ambientais",
          "Amazônia: biodiversidade e preservação",
        ],
      },
    ],
    tip: "Amazônia é tema recorrente na FMM. Estude biomas regionais com atenção especial.",
  },
  {
    num: 14,
    start: "2026-08-10",
    end: "2026-08-16",
    focus: "Seres Vivos e Fisiologia Humana I",
    subjects: [
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: [
          "Vírus, bactérias e protistas",
          "Fungos e plantas",
          "Animais invertebrados e vertebrados",
          "Classificação dos seres vivos",
          "Evolução e seleção natural",
        ],
      },
    ],
    tip: "Classificação dos seres vivos pode parecer extensa — foque nos grupos mais cobrados (vírus, bactérias, mamíferos).",
  },
  {
    num: 15,
    start: "2026-08-17",
    end: "2026-08-23",
    focus: "Fisiologia Humana II",
    subjects: [
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: [
          "Sistemas digestório e respiratório",
          "Sistemas circulatório e excretor",
          "Sistema nervoso e endócrino",
          "Sistema reprodutor",
          "Saúde e doenças",
        ],
      },
    ],
    tip: "Fisiologia humana costuma ter questões com imagens — treine identificar os órgãos.",
  },
  {
    num: 16,
    start: "2026-08-24",
    end: "2026-08-30",
    focus: "Química: Átomo e Tabela Periódica",
    subjects: [
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: [
          "Modelos atômicos (Dalton ao atual)",
          "Prótons, nêutrons e elétrons",
          "Tabela periódica: grupos e períodos",
          "Propriedades periódicas",
          "Isótopos, isótonos e isóbaros",
        ],
      },
    ],
    tip: "Memorize os 20 primeiros elementos e suas características — aparecem em vários tipos de questão.",
  },
  {
    num: 17,
    start: "2026-08-31",
    end: "2026-09-06",
    focus: "Química: Ligações Químicas e Funções Inorgânicas",
    subjects: [
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: [
          "Ligação iônica, covalente e metálica",
          "Geometria molecular e polaridade",
          "Ácidos: classificação e nomenclatura",
          "Bases: classificação e nomenclatura",
          "Sais e óxidos: classificação",
        ],
      },
    ],
    tip: "Nomenclatura de funções inorgânicas exige muita prática com exercícios.",
  },
  {
    num: 18,
    start: "2026-09-07",
    end: "2026-09-13",
    focus: "Química: Reações e Estequiometria",
    subjects: [
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: [
          "Tipos de reações químicas",
          "Balanceamento de equações",
          "Cálculo estequiométrico",
          "Reagente limitante",
          "Soluções e concentração",
        ],
      },
    ],
    tip: "Estequiometria é o tema de Química com maior nível de dificuldade — reserve tempo extra.",
  },
  {
    num: 19,
    start: "2026-09-14",
    end: "2026-09-20",
    focus: "Física: Cinemática",
    subjects: [
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: [
          "Posição, deslocamento e velocidade",
          "Movimento Uniforme (MU)",
          "Movimento Uniformemente Variado (MUV)",
          "Queda livre",
          "Lançamento de projéteis",
        ],
      },
    ],
    tip: "Domine as equações do MUV — quase toda questão de cinemática usa v = v₀ + at e s = s₀ + v₀t + ½at².",
  },
  {
    num: 20,
    start: "2026-09-21",
    end: "2026-09-27",
    focus: "Física: Dinâmica e Energia",
    subjects: [
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: [
          "Leis de Newton (1ª, 2ª e 3ª)",
          "Força, massa e aceleração",
          "Atrito e força normal",
          "Energia cinética e potencial",
          "Trabalho e potência",
        ],
      },
    ],
    tip: "A 2ª Lei de Newton (F = ma) aparece em quase todas as questões de dinâmica.",
  },
  {
    num: 21,
    start: "2026-09-28",
    end: "2026-10-04",
    focus: "Física: Termologia, Óptica e Eletricidade",
    subjects: [
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: [
          "Temperatura, calor e dilatação térmica",
          "Propagação do calor",
          "Reflexão e refração da luz",
          "Espelhos e lentes",
          "Corrente elétrica, tensão e resistência",
          "Lei de Ohm e circuitos",
        ],
      },
    ],
    tip: "Termologia e óptica são temas onde os gráficos são muito usados — treine interpretação de gráficos.",
  },
  {
    num: 22,
    start: "2026-10-05",
    end: "2026-10-11",
    focus: "Simulado Completo I (80 questões / 5h)",
    subjects: [
      {
        label: "Revisão",
        color: "#f59e0b",
        topics: [
          "Simulado completo no estilo FMM: 80 questões, 5 horas",
          "Análise detalhada dos erros por matéria",
          "Revisão dos tópicos com pior desempenho",
        ],
      },
    ],
    tip: "Simule as condições reais da prova: sem pausas longas, controle o tempo por questão (~3,75 min).",
    isReview: true,
  },
  {
    num: 23,
    start: "2026-10-12",
    end: "2026-10-18",
    focus: "Revisão de Português — Pontos Críticos",
    subjects: [
      {
        label: "Português",
        color: "#3b82f6",
        topics: [
          "Revisão das questões erradas no simulado",
          "Prática extra de interpretação de texto",
          "Gramática: concordância, regência, crase",
          "Provas antigas da FMM (2020–2024)",
        ],
      },
    ],
    tip: "Use as provas antigas para identificar o padrão de enunciado preferido pela FMM.",
    isReview: true,
  },
  {
    num: 24,
    start: "2026-10-19",
    end: "2026-10-25",
    focus: "Revisão de Matemática — Pontos Críticos",
    subjects: [
      {
        label: "Matemática",
        color: "#10b981",
        topics: [
          "Revisão das questões erradas no simulado",
          "Reforço em Geometria e Funções",
          "Prática de Equações e Porcentagem",
          "Provas antigas da FMM — foco em Matemática",
        ],
      },
    ],
    tip: "Se errou geometria no simulado, refaça as demonstrações das fórmulas — ajuda a fixar.",
    isReview: true,
  },
  {
    num: 25,
    start: "2026-10-26",
    end: "2026-11-01",
    focus: "Revisão de Ciências — Pontos Críticos",
    subjects: [
      {
        label: "Ciências",
        color: "#8b5cf6",
        topics: [
          "Revisão das questões erradas no simulado",
          "Biologia: Genética e Ecologia (maior peso)",
          "Química: funções inorgânicas e estequiometria",
          "Física: cinemática e dinâmica",
        ],
      },
    ],
    tip: "Genética e Ecologia têm o maior peso em Ciências. Priorize-as na revisão.",
    isReview: true,
  },
  {
    num: 26,
    start: "2026-11-02",
    end: "2026-11-08",
    focus: "Simulado Completo II + Revisão Final",
    subjects: [
      {
        label: "Revisão",
        color: "#f59e0b",
        topics: [
          "Simulado completo: 80 questões, 5 horas",
          "Compare desempenho com o Simulado I",
          "Revisão expressa de todos os tópicos mais cobrados",
        ],
      },
    ],
    tip: "Neste ponto, confie no seu preparo. O objetivo é reforçar o que já sabe, não aprender coisas novas.",
    isReview: true,
  },
  {
    num: 27,
    start: "2026-11-09",
    end: "2026-11-21",
    focus: "Semana Pré-Prova — Revisão Leve",
    subjects: [
      {
        label: "Revisão",
        color: "#f59e0b",
        topics: [
          "Revisão apenas dos seus resumos e anotações",
          "Sem simulados longos — questões curtas de aquecimento",
          "Descanso, sono e alimentação adequados",
          "Confirmar local de prova, documentos e horário",
        ],
      },
    ],
    tip: "Não tente aprender nada novo. Descanso mental é tão importante quanto o estudo.",
    isReview: true,
  },
  {
    num: 28,
    start: "2026-11-22",
    end: "2026-11-22",
    focus: "Dia da Prova",
    subjects: [
      {
        label: "Prova",
        color: "#ef4444",
        topics: [
          "Acordar cedo, tomar café da manhã",
          "Levar documento com foto e material permitido",
          "Chegar com antecedência (portões fecham ~7h50)",
          "Gerenciar o tempo: ~3,75 min por questão",
          "Responder o que sabe primeiro, depois o difícil",
          "Conferir o gabarito antes de entregar",
        ],
      },
    ],
    tip: "Confie no seu preparo. Leia cada questão com calma e elimine alternativas erradas.",
    isExam: true,
  },
];

export default function Planejamento({ onNavigate }) {
  const [expanded, setExpanded] = useState(null);
  const canStartSimulado = isSimuladoAvailable(1);
  const daysLeft = getDaysLeft();
  const todayStr = TODAY.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const currentWeek = weeks.find((w) => getWeekStatus(w.start, w.end) === "current");
  const doneCount = weeks.filter((w) => getWeekStatus(w.start, w.end) === "done").length;
  const totalWeeks = weeks.length - 1;
  const progress = Math.min(100, Math.round((doneCount / totalWeeks) * 100));

  return (
    <div className="plan-page">
      {/* HEADER */}
      <section className="plan-hero">
        <div className="container">
          <div className="plan-hero-inner">
            <div className="plan-hero-text">
              <div className="plan-badge">Planejamento de Estudos</div>
              <h1>
                Cronograma até a <span className="highlight">FMM 2026</span>
              </h1>
              <p className="plan-date-label">Hoje: {todayStr}</p>
              <p className="plan-subtitle">
                28 semanas de estudo estratégico até a prova prevista. Distribuição baseada no peso de cada matéria
                e no padrão histórico da FMM.
              </p>
              <div className="exam-ref">
                PS2025 → prova em 15/12/2024 &nbsp;|&nbsp; PS2026 → prova em 23/11/2025
              </div>
            </div>

            <div className="plan-countdown-card">
              <div className="countdown-days">{daysLeft}</div>
              <div className="countdown-label">dias até a prova</div>
              <div className="countdown-date">
                Previsão: {EXAM_DATE.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
              </div>
              <div className="plan-progress-wrap">
                <div className="plan-progress-label">
                  <span>Progresso do cronograma</span>
                  <span>{progress}%</span>
                </div>
                <div className="plan-progress-bar">
                  <div className="plan-progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <div className="plan-progress-sub">{doneCount} de {totalWeeks} semanas concluídas</div>
              </div>
              {currentWeek && (
                <div className="current-week-badge">
                  Semana atual: <strong>Semana {currentWeek.num}</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="plan-timeline">
        <div className="container">
          <h2 className="section-title">Cronograma Semanal</h2>
          <div className="timeline-list">
            {weeks.map((week) => {
              const status = getWeekStatus(week.start, week.end);
              const isOpen = expanded === week.num;
              return (
                <div
                  key={week.num}
                  className={`week-card ${status} ${week.isExam ? "exam-week" : ""} ${week.isReview ? "review-week" : ""}`}
                >
                  <button
                    className="week-header"
                    onClick={() => setExpanded(isOpen ? null : week.num)}
                    aria-expanded={isOpen}
                  >
                    <div className="week-left">
                      <div className={`week-badge week-badge-${status}`}>
                        {status === "done" && "✓"}
                        {status === "current" && "▶"}
                        {status === "upcoming" && week.num}
                      </div>
                      <div className="week-info">
                        <div className="week-title">
                          {week.isExam ? "Dia da Prova" : `Semana ${week.num}`}
                          {status === "current" && <span className="current-tag">atual</span>}
                        </div>
                        <div className="week-dates">
                          {formatDate(new Date(week.start + "T12:00:00"))}
                          {week.start !== week.end && ` – ${formatDate(new Date(week.end + "T12:00:00"))}`}
                        </div>
                      </div>
                    </div>
                    <div className="week-right">
                      <span className="week-focus">{week.focus}</span>
                      <span className={`week-chevron ${isOpen ? "open" : ""}`}>›</span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="week-body">
                      <div className="week-subjects">
                        {week.subjects.map((s) => (
                          <div key={s.label} className="subject-block">
                            <div
                              className="subject-label"
                              style={{ color: s.color, borderColor: s.color + "44", background: s.color + "11" }}
                            >
                              {s.label}
                            </div>
                            <ul className="topic-list">
                              {s.topics.map((t) => (
                                <li key={t}>
                                  <span className="topic-dot" style={{ background: s.color }} />
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {week.tip && (
                        <div className="week-tip">
                          <span className="tip-icon-small">💡</span>
                          {week.tip}
                        </div>
                      )}
                      {[1, 2, 3, 4].includes(week.num) && (() => {
                        const available = isSimuladoAvailable(week.num);
                        const meta = {
                          1: {
                            title: "Simulado da Semana 1",
                            desc: "20 questões: Interpretação de Texto, Vocabulário, Conjuntos Numéricos, Frações e Decimais.",
                            dateLabel: "Disponível no domingo, 17/05/2026",
                          },
                          2: {
                            title: "Simulado da Semana 2",
                            desc: "30 questões: Classes de Palavras, Pronomes e Preposições, Potenciação, Radiciação e Notação Científica.",
                            dateLabel: "Disponível no domingo, 24/05/2026",
                          },
                          3: {
                            title: "Simulado da Semana 3",
                            desc: "30 questões: Ortografia (porquê/porque/s/z/x/ch/g/j), Acentuação Gráfica, Razão e Proporção, Regra de Três.",
                            dateLabel: "Disponível no domingo, 31/05/2026",
                          },
                          4: {
                            title: "Simulado da Semana 4",
                            desc: "30 questões: Concordância Verbal e Nominal, Porcentagem, Juros Simples e Compostos.",
                            dateLabel: "Disponível no sábado, 06/06/2026",
                          },
                        }[week.num];
                        return (
                          <div className={`simulado-semana-banner ${available ? "active" : ""}`}>
                            <div className="ssb-left">
                              <span className="ssb-icon">📝</span>
                              <div>
                                <div className="ssb-title">{meta.title}</div>
                                <div className="ssb-desc">{meta.desc}</div>
                                <div className="ssb-date">
                                  {available ? "Disponível agora! Bom estudo!" : meta.dateLabel}
                                </div>
                              </div>
                            </div>
                            <button
                              className="btn btn-primary ssb-btn"
                              disabled={!available}
                              onClick={() => onNavigate("simuladoSemanal", { weekNum: week.num })}
                            >
                              {available ? "Iniciar Simulado →" : `Disponível em ${meta.dateLabel.split(", ")[1] || "breve"}`}
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
