// Questões com figuras — FMM e ADE SEMED estilo
// O campo "image" é passado como props para o componente QuestionImage

export const imageQuestions = [
  // ── GEOMETRIA PLANA ─────────────────────────────────────────────────────────
  {
    id: "img_1",
    subject: "matematica",
    topic: "Geometria Plana",
    topicId: "m8",
    source: "FMM",
    year: "FMM 2018",
    difficulty: "média",
    image: {
      type: "right_triangle",
      props: { a: "6 cm", b: "?", c: "10 cm", labelA: "base", labelB: "altura", labelC: "hipotenusa" },
      caption: "Triângulo retângulo ABC — ângulo reto em C",
    },
    question:
      "No triângulo retângulo da figura, a base mede 6 cm e a hipotenusa mede 10 cm. Qual é a medida da altura?",
    options: ["6 cm", "7 cm", "8 cm", "9 cm", "4 cm"],
    answer: 2,
    explanation:
      "Pelo Teorema de Pitágoras: altura² = hipotenusa² − base² = 10² − 6² = 100 − 36 = 64. Altura = √64 = 8 cm. (Tripla pitagórica 6-8-10, derivada de 3-4-5 × 2)",
  },
  {
    id: "img_2",
    subject: "matematica",
    topic: "Geometria Plana",
    topicId: "m8",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "média",
    image: {
      type: "trapezoid",
      props: { B: "14 cm", b: "8 cm", h: "6 cm" },
      caption: "Figura: trapézio com bases e altura indicadas",
    },
    question:
      "Calcule a área do trapézio representado na figura, sabendo que a base maior mede 14 cm, a base menor mede 8 cm e a altura é 6 cm.",
    options: ["66 cm²", "72 cm²", "88 cm²", "96 cm²", "56 cm²"],
    answer: 0,
    explanation:
      "Área do trapézio = (B + b) × h ÷ 2 = (14 + 8) × 6 ÷ 2 = 22 × 3 = 66 cm².",
  },
  {
    id: "img_3",
    subject: "matematica",
    topic: "Geometria Plana",
    topicId: "m8",
    source: "FMM",
    year: "FMM 2021",
    difficulty: "média",
    image: {
      type: "circle",
      props: { r: "7 cm", showSector: false },
      caption: "Círculo com raio r = 7 cm",
    },
    question:
      "O círculo da figura tem raio de 7 cm. Qual é a medida de sua circunferência? (Use π ≈ 3,14)",
    options: ["21,98 cm", "43,96 cm", "153,86 cm", "78,5 cm", "49 cm"],
    answer: 1,
    explanation:
      "Circunferência = 2 × π × r = 2 × 3,14 × 7 = 43,96 cm. (Não confundir com área: πr² = 153,86 cm²)",
  },
  {
    id: "img_4",
    subject: "matematica",
    topic: "Geometria Plana",
    topicId: "m8",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "alta",
    image: {
      type: "circle",
      props: { r: "10 cm", showSector: true, sectorDeg: 90 },
      caption: "Setor circular de 90° com raio 10 cm",
    },
    question:
      "A figura mostra um setor circular de 90° com raio de 10 cm. Qual é a área desse setor? (Use π ≈ 3,14)",
    options: ["31,4 cm²", "62,8 cm²", "78,5 cm²", "314 cm²", "157 cm²"],
    answer: 2,
    explanation:
      "Área do setor = (ângulo/360°) × π × r² = (90/360) × 3,14 × 100 = 0,25 × 314 = 78,5 cm².",
  },

  // ── GEOMETRIA ESPACIAL ───────────────────────────────────────────────────────
  {
    id: "img_5",
    subject: "matematica",
    topic: "Geometria Espacial",
    topicId: "m9",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "baixa",
    image: {
      type: "cube",
      props: { side: "4 cm" },
      caption: "Cubo com aresta de 4 cm",
    },
    question:
      "O cubo da figura tem aresta de 4 cm. Qual é o seu volume?",
    options: ["16 cm³", "32 cm³", "48 cm³", "64 cm³", "96 cm³"],
    answer: 3,
    explanation:
      "Volume do cubo = aresta³ = 4³ = 4 × 4 × 4 = 64 cm³.",
  },
  {
    id: "img_6",
    subject: "matematica",
    topic: "Geometria Espacial",
    topicId: "m9",
    source: "FMM",
    year: "FMM 2022",
    difficulty: "média",
    image: {
      type: "cylinder",
      props: { r: "3 cm", h: "10 cm" },
      caption: "Cilindro com raio 3 cm e altura 10 cm",
    },
    question:
      "Calcule o volume do cilindro representado na figura, com raio de 3 cm e altura de 10 cm. (Use π ≈ 3,14)",
    options: ["94,2 cm³", "188,4 cm³", "282,6 cm³", "314 cm³", "376,8 cm³"],
    answer: 2,
    explanation:
      "Volume = π × r² × h = 3,14 × 3² × 10 = 3,14 × 9 × 10 = 282,6 cm³.",
  },

  // ── FUNÇÕES ─────────────────────────────────────────────────────────────────
  {
    id: "img_7",
    subject: "matematica",
    topic: "Funções",
    topicId: "m7",
    source: "FMM",
    year: "FMM 2023",
    difficulty: "média",
    image: {
      type: "linear_graph",
      props: { a: 2, b: -3 },
      caption: "Gráfico da função f(x) = 2x − 3",
    },
    question:
      "O gráfico representa a função f(x) = 2x − 3. Para qual valor de x a função intercepta o eixo x (zero da função)?",
    options: ["x = −3", "x = 1", "x = 1,5", "x = 2", "x = 3"],
    answer: 2,
    explanation:
      "Zero da função: f(x) = 0 → 2x − 3 = 0 → 2x = 3 → x = 1,5. No gráfico, é o ponto onde a reta cruza o eixo horizontal.",
  },
  {
    id: "img_8",
    subject: "matematica",
    topic: "Funções",
    topicId: "m7",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "alta",
    image: {
      type: "quadratic_graph",
      props: { a: 1, b: -2, c: -3 },
      caption: "Gráfico da função f(x) = x² − 2x − 3",
    },
    question:
      "O gráfico mostra a parábola f(x) = x² − 2x − 3. Quais são as raízes (zeros) dessa função?",
    options: [
      "x = −1 e x = 3",
      "x = 1 e x = −3",
      "x = 2 e x = −1",
      "x = −2 e x = 3",
      "x = 1 e x = 3",
    ],
    answer: 0,
    explanation:
      "Raízes: Δ = 4 + 12 = 16. x = (2 ± 4)/2. x₁ = 3 e x₂ = −1. No gráfico, são os pontos onde a parábola corta o eixo x.",
  },
  {
    id: "img_9",
    subject: "matematica",
    topic: "Funções",
    topicId: "m7",
    source: "FMM",
    year: "FMM 2024",
    difficulty: "alta",
    image: {
      type: "quadratic_graph",
      props: { a: -1, b: 4, c: 0 },
      caption: "Gráfico da função f(x) = −x² + 4x",
    },
    question:
      "A parábola da figura representa f(x) = −x² + 4x. Qual é o valor máximo que a função atinge?",
    options: ["2", "3", "4", "5", "8"],
    answer: 2,
    explanation:
      "Vértice (valor máximo): Xv = −b/(2a) = −4/(−2) = 2. f(2) = −4 + 8 = 4. O ponto mais alto da parábola é (2, 4).",
  },

  // ── ESTATÍSTICA ─────────────────────────────────────────────────────────────
  {
    id: "img_10",
    subject: "matematica",
    topic: "Estatística e Probabilidade",
    topicId: "m11",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "baixa",
    image: {
      type: "bar_chart",
      props: {
        title: "Notas na ADE — Turma 9º A",
        data: [
          { label: "Nota 5", value: 3 },
          { label: "Nota 6", value: 7 },
          { label: "Nota 7", value: 12 },
          { label: "Nota 8", value: 8 },
          { label: "Nota 9", value: 4 },
          { label: "Nota 10", value: 1 },
        ],
      },
    },
    question:
      "O gráfico de barras mostra a distribuição de notas de uma turma na ADE. Quantos alunos tiraram nota maior ou igual a 8?",
    options: ["8", "10", "12", "13", "14"],
    answer: 3,
    explanation:
      "Nota 8: 8 alunos + Nota 9: 4 alunos + Nota 10: 1 aluno = 13 alunos com nota ≥ 8.",
  },
  {
    id: "img_11",
    subject: "matematica",
    topic: "Estatística e Probabilidade",
    topicId: "m11",
    source: "FMM",
    year: "FMM 2022",
    difficulty: "média",
    image: {
      type: "pie_chart",
      props: {
        slices: [
          { label: "Fute.", value: 40 },
          { label: "Vôlei", value: 25 },
          { label: "Nat.", value: 20 },
          { label: "Outro", value: 15 },
        ],
      },
      caption: "Esporte preferido — 200 alunos",
    },
    question:
      "O gráfico representa os esportes preferidos de 200 alunos de uma escola de Manaus. Quantos alunos preferem natação?",
    options: ["30", "35", "40", "45", "50"],
    answer: 2,
    explanation:
      "Natação = 20% de 200 = 0,20 × 200 = 40 alunos.",
  },
  {
    id: "img_12",
    subject: "matematica",
    topic: "Estatística e Probabilidade",
    topicId: "m11",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    image: {
      type: "data_table",
      props: {
        caption: "Temperatura em Manaus (°C) — Janeiro",
        headers: ["Dia", "Temp. Mín.", "Temp. Máx."],
        rows: [
          ["Segunda", "24", "32"],
          ["Terça", "25", "34"],
          ["Quarta", "23", "31"],
          ["Quinta", "26", "35"],
          ["Sexta", "24", "33"],
        ],
      },
    },
    question:
      "A tabela mostra as temperaturas registradas em Manaus durante uma semana. Qual foi a temperatura máxima MÉDIA ao longo dos 5 dias?",
    options: ["31°C", "32°C", "33°C", "34°C", "35°C"],
    answer: 2,
    explanation:
      "Soma das máximas: 32 + 34 + 31 + 35 + 33 = 165. Média = 165 ÷ 5 = 33°C.",
  },

  // ── PROGRESSÕES ─────────────────────────────────────────────────────────────
  {
    id: "img_13",
    subject: "matematica",
    topic: "Progressões (PA e PG)",
    topicId: "m10",
    source: "FMM",
    year: "FMM 2019",
    difficulty: "média",
    image: {
      type: "bar_chart",
      props: {
        title: "Livros arrecadados — Campanha escolar",
        data: [
          { label: "1ª sem.", value: 10 },
          { label: "2ª sem.", value: 20 },
          { label: "3ª sem.", value: 30 },
          { label: "4ª sem.", value: 40 },
        ],
      },
    },
    question:
      "O gráfico mostra a quantidade de livros arrecadados por semana em uma campanha escolar. Seguindo o padrão observado, quantos livros serão arrecadados na 6ª semana?",
    options: ["50", "55", "60", "65", "70"],
    answer: 2,
    explanation:
      "Formam uma PA com a₁ = 10 e razão r = 10. a₆ = 10 + (6−1)×10 = 10 + 50 = 60 livros.",
  },

  // ── PORCENTAGEM ─────────────────────────────────────────────────────────────
  {
    id: "img_14",
    subject: "matematica",
    topic: "Porcentagem",
    topicId: "m5",
    source: "ADE SEMED",
    year: "ADE 2022",
    difficulty: "média",
    image: {
      type: "pie_chart",
      props: {
        slices: [
          { label: "Port.", value: 45 },
          { label: "Mat.", value: 30 },
          { label: "Ciên.", value: 25 },
        ],
      },
      caption: "Distribuição de questões — Prova modelo",
    },
    question:
      "O gráfico mostra a distribuição de questões em uma prova com 80 questões no total. Quantas questões são de Matemática?",
    options: ["20", "24", "25", "36", "40"],
    answer: 1,
    explanation:
      "Matemática = 30% de 80 = 0,30 × 80 = 24 questões.",
  },

  // ── ÁLGEBRA ─────────────────────────────────────────────────────────────────
  {
    id: "img_15",
    subject: "matematica",
    topic: "Álgebra e Equações",
    topicId: "m6",
    source: "FMM",
    year: "FMM 2023",
    difficulty: "alta",
    image: {
      type: "data_table",
      props: {
        caption: "Relação entre x e f(x)",
        headers: ["x", "f(x)"],
        rows: [
          ["0", "5"],
          ["1", "8"],
          ["2", "11"],
          ["3", "14"],
        ],
      },
    },
    question:
      "A tabela mostra valores de uma função do 1º grau f(x) = ax + b. Com base nos dados, qual é a lei dessa função?",
    options: [
      "f(x) = 2x + 5",
      "f(x) = 3x + 5",
      "f(x) = 3x + 2",
      "f(x) = 5x + 3",
      "f(x) = 2x + 3",
    ],
    answer: 1,
    explanation:
      "De x=0: b = 5. De x=1: a + 5 = 8 → a = 3. Lei: f(x) = 3x + 5. Verificando x=2: 6+5=11 ✓ e x=3: 9+5=14 ✓.",
  },
];
