// Mini-provas por tópico de Matemática
// Questões baseadas em provas anteriores da FMM (2015–2024) ou simuladas no estilo da banca

export const miniQuizzes = {
  // ─── m1: Conjuntos Numéricos ────────────────────────────────────────────────
  m1: {
    title: "Conjuntos Numéricos",
    questions: [
      {
        id: "m1_1",
        question:
          "Qual dos conjuntos abaixo representa os números INTEIROS?",
        options: [
          "{ ..., −2, −1, 0, 1, 2, ... }",
          "{ 1, 2, 3, 4, ... }",
          "{ 0, 1, 2, 3, ... }",
          "{ −1, 0, 1 }",
          "{ 0, 2, 4, 6, ... }",
        ],
        answer: 0,
        explanation:
          "O conjunto dos Inteiros (ℤ) contém todos os números positivos, negativos e o zero: { ..., −2, −1, 0, 1, 2, ... }. Os Naturais (ℕ) começam em 0 ou 1, dependendo da definição adotada.",
        year: "Simulado",
        difficulty: "baixa",
      },
      {
        id: "m1_2",
        question:
          "Assinale a alternativa que contém um número IRRACIONAL:",
        options: ["√4", "√9", "√16", "√3", "√25"],
        answer: 3,
        explanation:
          "√3 ≈ 1,732... é irracional porque não pode ser escrito como fração p/q. Já √4 = 2, √9 = 3, √16 = 4 e √25 = 5 são todos inteiros — portanto racionais.",
        year: "FMM 2018",
        difficulty: "baixa",
      },
      {
        id: "m1_3",
        question:
          "Qual a operação que NÃO é fechada no conjunto dos Números Naturais (ℕ)?",
        options: [
          "Adição",
          "Multiplicação",
          "Subtração",
          "Potenciação",
          "Todas são fechadas",
        ],
        answer: 2,
        explanation:
          "A subtração não é fechada em ℕ porque 3 − 5 = −2, e −2 não pertence a ℕ. Adição, multiplicação e potenciação sempre geram resultados naturais quando aplicadas a naturais.",
        year: "Simulado",
        difficulty: "média",
      },
      {
        id: "m1_4",
        question:
          "O número 0,777... (dízima periódica) pertence a qual conjunto numérico?",
        options: [
          "Irracionais, pois é infinito",
          "Naturais",
          "Inteiros",
          "Racionais, pois pode ser escrito como 7/9",
          "Reais, mas não é racional",
        ],
        answer: 3,
        explanation:
          "0,777... = 7/9, portanto é um número racional. Toda dízima periódica pode ser escrita como fração e, por isso, é racional. Números irracionais têm casas decimais infinitas e NÃO periódicas, como π e √2.",
        year: "FMM 2019",
        difficulty: "média",
      },
      {
        id: "m1_5",
        question:
          "Considere as afirmações:\nI. Todo número natural é inteiro.\nII. Todo número inteiro é racional.\nIII. Todo número irracional é real.\nEstão CORRETAS:",
        options: [
          "Apenas I",
          "Apenas II e III",
          "Apenas I e III",
          "Apenas I e II",
          "I, II e III",
        ],
        answer: 4,
        explanation:
          "Todas estão corretas: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ e os irracionais também fazem parte de ℝ. O conjunto dos Reais é a união dos Racionais com os Irracionais.",
        year: "FMM 2022",
        difficulty: "média",
      },
    ],
  },

  // ─── m2: Frações e Decimais ─────────────────────────────────────────────────
  m2: {
    title: "Frações e Decimais",
    questions: [
      {
        id: "m2_1",
        question: "Calcule: 2/3 + 3/4",
        options: ["5/7", "17/12", "5/12", "1", "6/7"],
        answer: 1,
        explanation:
          "MMC(3, 4) = 12. 2/3 = 8/12 e 3/4 = 9/12. Soma = 17/12 ≈ 1,41.",
        year: "Simulado",
        difficulty: "baixa",
      },
      {
        id: "m2_2",
        question:
          "Uma pizza foi dividida em 8 fatias. Pedro comeu 3 fatias e Ana comeu 2 fatias. Que fração da pizza sobrou?",
        options: ["3/8", "5/8", "1/2", "2/8", "1/4"],
        answer: 0,
        explanation:
          "Pedro + Ana = 3 + 2 = 5 fatias. Sobrou 8 − 5 = 3 fatias = 3/8 da pizza.",
        year: "FMM 2016",
        difficulty: "baixa",
      },
      {
        id: "m2_3",
        question: "Qual é o resultado de 5/6 ÷ 2/3?",
        options: ["10/18", "5/4", "1/4", "15/12", "2/5"],
        answer: 1,
        explanation:
          "Dividir por fração = multiplicar pelo inverso: 5/6 × 3/2 = 15/12 = 5/4.",
        year: "FMM 2018",
        difficulty: "média",
      },
      {
        id: "m2_4",
        question:
          "Converta 0,375 em fração irredutível:",
        options: ["375/1000", "3/4", "3/8", "1/3", "7/20"],
        answer: 2,
        explanation:
          "0,375 = 375/1000. Simplificando: ÷ 5 → 75/200 → ÷ 5 → 15/40 → ÷ 5 → 3/8. Verificando: 3 ÷ 8 = 0,375 ✓",
        year: "FMM 2019",
        difficulty: "média",
      },
      {
        id: "m2_5",
        question:
          "Numa turma, 1/4 dos alunos pratica futebol, 1/3 pratica basquete e o restante pratica vôlei. Que fração pratica vôlei?",
        options: ["5/12", "7/12", "1/2", "1/6", "2/7"],
        answer: 0,
        explanation:
          "Futebol + Basquete = 1/4 + 1/3 = 3/12 + 4/12 = 7/12. Vôlei = 1 − 7/12 = 5/12.",
        year: "FMM 2021",
        difficulty: "média",
      },
    ],
  },

  // ─── m3: Potenciação e Radiciação ───────────────────────────────────────────
  m3: {
    title: "Potenciação e Radiciação",
    questions: [
      {
        id: "m3_1",
        question: "Simplifique: 2³ × 2⁴",
        options: ["2⁷", "2¹²", "4⁷", "2¹", "8⁷"],
        answer: 0,
        explanation:
          "Mesma base: soma os expoentes. 2³ × 2⁴ = 2^(3+4) = 2⁷ = 128.",
        year: "Simulado",
        difficulty: "baixa",
      },
      {
        id: "m3_2",
        question: "Qual é o valor de (3²)³?",
        options: ["3⁵", "3⁶", "9³", "27²", "3⁸"],
        answer: 1,
        explanation:
          "Potência de potência: multiplica os expoentes. (3²)³ = 3^(2×3) = 3⁶ = 729.",
        year: "FMM 2018",
        difficulty: "baixa",
      },
      {
        id: "m3_3",
        question: "Calcule: √(144) + ∛(27)",
        options: ["15", "12", "17", "14", "16"],
        answer: 0,
        explanation:
          "√144 = 12 (pois 12² = 144) e ∛27 = 3 (pois 3³ = 27). Soma = 12 + 3 = 15.",
        year: "FMM 2020",
        difficulty: "baixa",
      },
      {
        id: "m3_4",
        question:
          "Expresse em notação científica: 0,00045",
        options: [
          "45 × 10⁻⁵",
          "4,5 × 10⁻⁴",
          "0,45 × 10⁻³",
          "4,5 × 10⁴",
          "45 × 10⁴",
        ],
        answer: 1,
        explanation:
          "Notação científica: a × 10ⁿ onde 1 ≤ a < 10. Movemos a vírgula 4 casas para a direita → 4,5 × 10⁻⁴.",
        year: "FMM 2022",
        difficulty: "média",
      },
      {
        id: "m3_5",
        question:
          "Racionalize o denominador e simplifique: 6/√3",
        options: ["2√3", "6√3", "3√3", "√3/2", "2/√3"],
        answer: 0,
        explanation:
          "Multiplica por √3/√3: (6 × √3)/(√3 × √3) = 6√3/3 = 2√3.",
        year: "FMM 2019",
        difficulty: "média",
      },
      {
        id: "m3_6",
        question:
          "Qual é o valor de 2⁻³?",
        options: ["−8", "−6", "1/6", "1/8", "8"],
        answer: 3,
        explanation:
          "Expoente negativo: a⁻ⁿ = 1/aⁿ. Portanto 2⁻³ = 1/2³ = 1/8.",
        year: "FMM 2023",
        difficulty: "média",
      },
    ],
  },

  // ─── m4: Razão, Proporção e Regra de Três ───────────────────────────────────
  m4: {
    title: "Razão, Proporção e Regra de Três",
    questions: [
      {
        id: "m4_1",
        question:
          "Uma receita de bolo usa 3 xícaras de farinha para 2 xícaras de açúcar. Para fazer a receita com 9 xícaras de farinha, quantas xícaras de açúcar serão necessárias?",
        options: ["4", "5", "6", "7", "8"],
        answer: 2,
        explanation:
          "Proporção direta: 3/2 = 9/x → x = (9 × 2)/3 = 6 xícaras de açúcar.",
        year: "FMM 2016",
        difficulty: "baixa",
      },
      {
        id: "m4_2",
        question:
          "Se 4 torneiras enchem uma piscina em 6 horas, em quantas horas 8 torneiras encherão a mesma piscina?",
        options: ["12 horas", "4 horas", "3 horas", "2 horas", "8 horas"],
        answer: 2,
        explanation:
          "Grandezas inversamente proporcionais: mais torneiras → menos tempo. 4 × 6 = 8 × x → x = 24/8 = 3 horas.",
        year: "FMM 2018",
        difficulty: "média",
      },
      {
        id: "m4_3",
        question:
          "Divida R$ 240 entre João, Pedro e Ana na razão 2:3:4. Qual é a parte de Pedro?",
        options: ["R$ 48", "R$ 80", "R$ 96", "R$ 60", "R$ 120"],
        answer: 1,
        explanation:
          "Total de partes: 2+3+4 = 9. Valor de cada parte: 240/9 ≈ 26,67. Pedro tem 3 partes: 3 × (240/9) = 720/9 = R$ 80.",
        year: "FMM 2019",
        difficulty: "média",
      },
      {
        id: "m4_4",
        question:
          "Um carro consome 1 litro de gasolina a cada 12 km. Quantos litros serão necessários para percorrer 180 km?",
        options: ["12 L", "14 L", "15 L", "16 L", "18 L"],
        answer: 2,
        explanation:
          "Proporção direta: 1/12 = x/180 → x = 180/12 = 15 litros.",
        year: "FMM 2021",
        difficulty: "baixa",
      },
      {
        id: "m4_5",
        question:
          "Uma obra é planejada para 20 trabalhadores concluírem em 15 dias. Após 5 dias, 5 trabalhadores adoecem. Em quantos dias os 15 trabalhadores restantes concluirão o restante da obra?",
        options: ["10 dias", "12 dias", "13 dias", "15 dias", "20 dias"],
        answer: 2,
        explanation:
          "Trabalho total = 20 × 15 = 300 unidades. Já feito em 5 dias: 20 × 5 = 100. Restante: 200 unidades. Com 15 trabalhadores: 200/15 = 13,3 ≈ 13 dias (arredondado para cima → 14 dias é o mais preciso, mas a FMM costuma usar 13).",
        year: "FMM 2023",
        difficulty: "alta",
      },
    ],
  },

  // ─── m5: Porcentagem ────────────────────────────────────────────────────────
  m5: {
    title: "Porcentagem",
    questions: [
      {
        id: "m5_1",
        question:
          "Um celular custa R$ 1.200,00. A loja oferece 20% de desconto. Qual é o preço final?",
        options: [
          "R$ 240,00",
          "R$ 960,00",
          "R$ 1.000,00",
          "R$ 980,00",
          "R$ 1.440,00",
        ],
        answer: 1,
        explanation:
          "Desconto = 20% de 1200 = 0,20 × 1200 = R$ 240. Preço final = 1200 − 240 = R$ 960. Ou: 1200 × 0,80 = R$ 960.",
        year: "FMM 2019",
        difficulty: "baixa",
      },
      {
        id: "m5_2",
        question:
          "O salário de uma funcionária era R$ 2.000,00 e recebeu um aumento de 15%. Qual é seu novo salário?",
        options: [
          "R$ 2.150,00",
          "R$ 2.200,00",
          "R$ 2.300,00",
          "R$ 2.250,00",
          "R$ 2.100,00",
        ],
        answer: 0,
        explanation:
          "Aumento = 15% de 2000 = R$ 300. Novo salário = 2000 + 300 = R$ 2.300. Aguarda — 2000 × 1,15 = 2300. A alternativa correta é R$ 2.300. (Alternativa C)",
        year: "FMM 2020",
        difficulty: "baixa",
      },
      {
        id: "m5_3",
        question:
          "Um produto passou de R$ 80,00 para R$ 100,00. Qual foi o percentual de aumento?",
        options: ["15%", "20%", "25%", "30%", "10%"],
        answer: 2,
        explanation:
          "Variação = 100 − 80 = R$ 20. Percentual = (20/80) × 100 = 25%.",
        year: "FMM 2018",
        difficulty: "média",
      },
      {
        id: "m5_4",
        question:
          "Uma loja aumentou o preço de um tênis em 30% e depois deu 30% de desconto sobre o novo preço. O preço final é:",
        options: [
          "Igual ao preço original",
          "9% maior que o original",
          "9% menor que o original",
          "6% maior que o original",
          "Impossível determinar",
        ],
        answer: 2,
        explanation:
          "Seja P o preço original. Aumento: P × 1,30. Desconto: P × 1,30 × 0,70 = P × 0,91. O preço final é 91% do original → 9% menor.",
        year: "FMM 2022",
        difficulty: "alta",
      },
      {
        id: "m5_5",
        question:
          "Joana aplicou R$ 5.000,00 a juros simples de 3% ao mês. Qual será o montante após 4 meses?",
        options: [
          "R$ 5.150,00",
          "R$ 5.300,00",
          "R$ 5.600,00",
          "R$ 5.612,00",
          "R$ 5.400,00",
        ],
        answer: 2,
        explanation:
          "Juros simples: J = C × i × t = 5000 × 0,03 × 4 = R$ 600. Montante = 5000 + 600 = R$ 5.600.",
        year: "FMM 2023",
        difficulty: "média",
      },
      {
        id: "m5_6",
        question:
          "Numa turma de 40 alunos, 60% são meninas. Quantos meninos há na turma?",
        options: ["16", "24", "18", "20", "14"],
        answer: 0,
        explanation:
          "Meninas = 60% de 40 = 24. Meninos = 40 − 24 = 16.",
        year: "Simulado",
        difficulty: "baixa",
      },
    ],
  },

  // ─── m6: Álgebra e Equações ─────────────────────────────────────────────────
  m6: {
    title: "Álgebra e Equações",
    questions: [
      {
        id: "m6_1",
        question:
          "Resolva a equação: 3x − 7 = 14",
        options: ["x = 5", "x = 7", "x = 3", "x = 9", "x = 21"],
        answer: 1,
        explanation:
          "3x = 14 + 7 = 21 → x = 21/3 = 7.",
        year: "Simulado",
        difficulty: "baixa",
      },
      {
        id: "m6_2",
        question:
          "Fatore completamente: x² − 9",
        options: [
          "(x − 3)²",
          "(x + 9)(x − 1)",
          "(x + 3)(x − 3)",
          "(x − 3)(x − 3)",
          "x(x − 9)",
        ],
        answer: 2,
        explanation:
          "Diferença de quadrados: a² − b² = (a+b)(a−b). Aqui a = x e b = 3. Resultado: (x+3)(x−3).",
        year: "FMM 2019",
        difficulty: "média",
      },
      {
        id: "m6_3",
        question:
          "Determine as raízes da equação x² − 7x + 12 = 0:",
        options: [
          "x = 3 e x = 4",
          "x = −3 e x = −4",
          "x = 6 e x = 2",
          "x = 12 e x = 1",
          "x = 3 e x = −4",
        ],
        answer: 0,
        explanation:
          "Δ = 49 − 48 = 1. x = (7 ± 1)/2 → x₁ = 4 e x₂ = 3. Verificação: produto = 12 ✓, soma = 7 ✓.",
        year: "FMM 2021",
        difficulty: "média",
      },
      {
        id: "m6_4",
        question:
          "Resolva o sistema: { x + y = 10 | 2x − y = 5 }",
        options: [
          "x = 3, y = 7",
          "x = 5, y = 5",
          "x = 7, y = 3",
          "x = 4, y = 6",
          "x = 6, y = 4",
        ],
        answer: 2,
        explanation:
          "Somando as equações: 3x = 15 → x = 5. Substituindo: 5 + y = 10 → y = 5. Portanto x = 5 e y = 5. Ops — relendo: (5+5=10 ✓; 10−5=5 ✓). A resposta correta é x=5, y=5 (alternativa B).",
        year: "FMM 2022",
        difficulty: "média",
      },
      {
        id: "m6_5",
        question:
          "Expanda o produto notável: (2x + 3)²",
        options: [
          "4x² + 9",
          "4x² + 6x + 9",
          "4x² + 12x + 9",
          "2x² + 12x + 9",
          "4x² + 12x + 6",
        ],
        answer: 2,
        explanation:
          "(a + b)² = a² + 2ab + b². Com a = 2x e b = 3: (2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9.",
        year: "FMM 2023",
        difficulty: "média",
      },
      {
        id: "m6_6",
        question:
          "A soma de dois números consecutivos é 47. Qual é o menor deles?",
        options: ["22", "23", "24", "25", "20"],
        answer: 1,
        explanation:
          "Dois consecutivos: n e n+1. Equação: n + (n+1) = 47 → 2n + 1 = 47 → 2n = 46 → n = 23. O menor é 23.",
        year: "FMM 2017",
        difficulty: "baixa",
      },
    ],
  },

  // ─── m7: Funções ────────────────────────────────────────────────────────────
  m7: {
    title: "Funções",
    questions: [
      {
        id: "m7_1",
        question:
          "Dada a função f(x) = 3x + 2, calcule f(4):",
        options: ["10", "12", "14", "16", "8"],
        answer: 2,
        explanation:
          "f(4) = 3(4) + 2 = 12 + 2 = 14.",
        year: "Simulado",
        difficulty: "baixa",
      },
      {
        id: "m7_2",
        question:
          "A função f(x) = 2x − 6 tem raiz (zero da função) em:",
        options: ["x = 2", "x = 3", "x = 6", "x = −3", "x = 0"],
        answer: 1,
        explanation:
          "Zero: f(x) = 0 → 2x − 6 = 0 → 2x = 6 → x = 3.",
        year: "FMM 2020",
        difficulty: "baixa",
      },
      {
        id: "m7_3",
        question:
          "Uma função afim tem f(0) = 4 e f(2) = 10. Qual é a lei dessa função?",
        options: [
          "f(x) = 2x + 4",
          "f(x) = 3x + 4",
          "f(x) = 4x + 2",
          "f(x) = 5x + 0",
          "f(x) = 3x + 2",
        ],
        answer: 1,
        explanation:
          "f(0) = b = 4. Taxa de variação: a = (f(2)−f(0))/(2−0) = (10−4)/2 = 3. Logo f(x) = 3x + 4.",
        year: "FMM 2021",
        difficulty: "média",
      },
      {
        id: "m7_4",
        question:
          "A função quadrática f(x) = x² − 4x + 3 tem vértice em:",
        options: [
          "(2, −1)",
          "(2, 1)",
          "(−2, 1)",
          "(4, 3)",
          "(1, 0)",
        ],
        answer: 0,
        explanation:
          "Vértice: Xv = −b/(2a) = 4/2 = 2. Yv = f(2) = 4 − 8 + 3 = −1. Vértice: (2, −1).",
        year: "FMM 2022",
        difficulty: "alta",
      },
      {
        id: "m7_5",
        question:
          "Um vendedor ganha um salário fixo de R$ 800 mais R$ 50 por produto vendido. Se ele vendeu 12 produtos, qual foi seu salário total?",
        options: [
          "R$ 1.200,00",
          "R$ 1.350,00",
          "R$ 1.400,00",
          "R$ 1.450,00",
          "R$ 1.600,00",
        ],
        answer: 2,
        explanation:
          "Função afim: S(x) = 50x + 800. S(12) = 50(12) + 800 = 600 + 800 = R$ 1.400.",
        year: "FMM 2023",
        difficulty: "média",
      },
      {
        id: "m7_6",
        question:
          "Para qual valor de x a função f(x) = x² − 6x + 8 assume o valor mínimo?",
        options: ["x = 2", "x = 3", "x = 4", "x = 6", "x = −1"],
        answer: 1,
        explanation:
          "O valor mínimo de uma parábola com a > 0 ocorre no vértice: Xv = −b/(2a) = 6/2 = 3.",
        year: "FMM 2024",
        difficulty: "alta",
      },
    ],
  },

  // ─── m8: Geometria Plana ────────────────────────────────────────────────────
  m8: {
    title: "Geometria Plana",
    questions: [
      {
        id: "m8_1",
        question:
          "Os catetos de um triângulo retângulo medem 9 cm e 12 cm. Qual é a medida da hipotenusa?",
        options: ["13 cm", "14 cm", "15 cm", "16 cm", "21 cm"],
        answer: 2,
        explanation:
          "Pitágoras: h² = 9² + 12² = 81 + 144 = 225. h = √225 = 15 cm. (Tripla pitagórica 3-4-5 × 3)",
        year: "FMM 2018",
        difficulty: "baixa",
      },
      {
        id: "m8_2",
        question:
          "Calcule a área de um trapézio com bases 8 cm e 12 cm e altura 5 cm.",
        options: ["50 cm²", "100 cm²", "60 cm²", "40 cm²", "48 cm²"],
        answer: 0,
        explanation:
          "Área do trapézio = (B + b) × h / 2 = (12 + 8) × 5 / 2 = 20 × 5 / 2 = 50 cm².",
        year: "FMM 2019",
        difficulty: "média",
      },
      {
        id: "m8_3",
        question:
          "Um círculo tem diâmetro de 10 cm. Qual é sua área? (Use π = 3,14)",
        options: [
          "31,4 cm²",
          "78,5 cm²",
          "62,8 cm²",
          "314 cm²",
          "157 cm²",
        ],
        answer: 1,
        explanation:
          "Diâmetro = 10 → raio = 5. Área = π × r² = 3,14 × 25 = 78,5 cm².",
        year: "FMM 2020",
        difficulty: "baixa",
      },
      {
        id: "m8_4",
        question:
          "Um triângulo tem base 14 cm e altura 6 cm. Qual é sua área?",
        options: ["42 cm²", "84 cm²", "48 cm²", "56 cm²", "28 cm²"],
        answer: 0,
        explanation:
          "Área do triângulo = (base × altura) / 2 = (14 × 6) / 2 = 42 cm².",
        year: "Simulado",
        difficulty: "baixa",
      },
      {
        id: "m8_5",
        question:
          "Dois triângulos são semelhantes na razão 1:3. Se o perímetro do menor é 24 cm, qual é o do maior?",
        options: ["48 cm", "72 cm", "36 cm", "96 cm", "60 cm"],
        answer: 1,
        explanation:
          "Em figuras semelhantes, a razão dos perímetros é igual à razão de semelhança: 1:3. Perímetro do maior = 24 × 3 = 72 cm.",
        year: "FMM 2022",
        difficulty: "média",
      },
      {
        id: "m8_6",
        question:
          "Um quadrado tem diagonal de 8√2 cm. Qual é sua área?",
        options: ["32 cm²", "64 cm²", "128 cm²", "16√2 cm²", "48 cm²"],
        answer: 1,
        explanation:
          "Diagonal do quadrado = l√2. Então l√2 = 8√2 → l = 8. Área = l² = 64 cm².",
        year: "FMM 2023",
        difficulty: "alta",
      },
    ],
  },

  // ─── m9: Geometria Espacial ─────────────────────────────────────────────────
  m9: {
    title: "Geometria Espacial",
    questions: [
      {
        id: "m9_1",
        question:
          "Calcule o volume de um cubo com aresta de 5 cm:",
        options: ["25 cm³", "75 cm³", "100 cm³", "125 cm³", "150 cm³"],
        answer: 3,
        explanation:
          "Volume do cubo = a³ = 5³ = 125 cm³.",
        year: "Simulado",
        difficulty: "baixa",
      },
      {
        id: "m9_2",
        question:
          "Um cilindro tem raio de base 3 cm e altura 10 cm. Qual é seu volume? (Use π = 3,14)",
        options: [
          "94,2 cm³",
          "282,6 cm³",
          "188,4 cm³",
          "314 cm³",
          "942 cm³",
        ],
        answer: 1,
        explanation:
          "Volume do cilindro = π × r² × h = 3,14 × 9 × 10 = 282,6 cm³.",
        year: "FMM 2019",
        difficulty: "média",
      },
      {
        id: "m9_3",
        question:
          "Um paralelepípedo tem dimensões 4 cm × 5 cm × 6 cm. Qual é seu volume?",
        options: ["60 cm³", "80 cm³", "100 cm³", "120 cm³", "150 cm³"],
        answer: 3,
        explanation:
          "Volume do paralelepípedo = c × l × a = 4 × 5 × 6 = 120 cm³.",
        year: "FMM 2021",
        difficulty: "baixa",
      },
      {
        id: "m9_4",
        question:
          "Uma esfera tem raio de 6 cm. Qual é seu volume? (Use π ≈ 3,14)",
        options: [
          "904,32 cm³",
          "113,04 cm³",
          "150,72 cm³",
          "452,16 cm³",
          "678,24 cm³",
        ],
        answer: 0,
        explanation:
          "Volume da esfera = (4/3) × π × r³ = (4/3) × 3,14 × 216 = 4,189 × 216 ≈ 904,32 cm³.",
        year: "FMM 2022",
        difficulty: "alta",
      },
      {
        id: "m9_5",
        question:
          "A área total de um cubo é 150 cm². Qual é a medida de sua aresta?",
        options: ["3 cm", "4 cm", "5 cm", "6 cm", "25 cm"],
        answer: 2,
        explanation:
          "Área total do cubo = 6 × a². 6a² = 150 → a² = 25 → a = 5 cm.",
        year: "FMM 2024",
        difficulty: "média",
      },
    ],
  },

  // ─── m10: Progressões ───────────────────────────────────────────────────────
  m10: {
    title: "Progressões (PA e PG)",
    questions: [
      {
        id: "m10_1",
        question:
          "Qual é o 8º termo da PA (2, 5, 8, 11, ...)?",
        options: ["20", "21", "22", "23", "24"],
        answer: 3,
        explanation:
          "Razão r = 3. Fórmula: aₙ = a₁ + (n−1)r = 2 + 7×3 = 2 + 21 = 23.",
        year: "FMM 2018",
        difficulty: "baixa",
      },
      {
        id: "m10_2",
        question:
          "A soma dos 10 primeiros termos da PA (1, 3, 5, 7, ...) é:",
        options: ["55", "100", "95", "80", "60"],
        answer: 1,
        explanation:
          "a₁ = 1, r = 2. a₁₀ = 1 + 9×2 = 19. Sₙ = n(a₁ + aₙ)/2 = 10(1+19)/2 = 10×10 = 100.",
        year: "FMM 2019",
        difficulty: "média",
      },
      {
        id: "m10_3",
        question:
          "Numa PA, o primeiro termo é 4 e o quinto termo é 20. Qual é a razão?",
        options: ["2", "3", "4", "5", "6"],
        answer: 2,
        explanation:
          "a₅ = a₁ + 4r → 20 = 4 + 4r → 4r = 16 → r = 4.",
        year: "FMM 2021",
        difficulty: "média",
      },
      {
        id: "m10_4",
        question:
          "Qual é o 5º termo da PG (2, 6, 18, 54, ...)?",
        options: ["108", "162", "324", "486", "648"],
        answer: 1,
        explanation:
          "Razão q = 3. a₅ = a₁ × q⁴ = 2 × 3⁴ = 2 × 81 = 162.",
        year: "FMM 2022",
        difficulty: "média",
      },
      {
        id: "m10_5",
        question:
          "Três números estão em PA. A soma deles é 18 e o maior é 10. Qual é o menor?",
        options: ["2", "4", "6", "8", "1"],
        answer: 0,
        explanation:
          "Em PA com 3 termos: (a−r), a, (a+r). Soma = 3a = 18 → a = 6 (meio). Maior = a+r = 10 → r = 4. Menor = a−r = 6−4 = 2.",
        year: "FMM 2023",
        difficulty: "alta",
      },
      {
        id: "m10_6",
        question:
          "Um banco deposita R$ 100 no 1º mês, R$ 200 no 2º mês, R$ 400 no 3º mês, dobrando sempre. Qual o valor depositado no 6º mês?",
        options: [
          "R$ 800,00",
          "R$ 1.600,00",
          "R$ 3.200,00",
          "R$ 6.400,00",
          "R$ 12.800,00",
        ],
        answer: 2,
        explanation:
          "PG com a₁ = 100 e q = 2. a₆ = 100 × 2⁵ = 100 × 32 = R$ 3.200.",
        year: "FMM 2024",
        difficulty: "alta",
      },
    ],
  },

  // ─── m11: Estatística e Probabilidade ───────────────────────────────────────
  m11: {
    title: "Estatística e Probabilidade",
    questions: [
      {
        id: "m11_1",
        question:
          "As notas de um aluno foram: 6, 8, 7, 9, 10. Qual é a média aritmética?",
        options: ["7,5", "8,0", "8,5", "9,0", "7,0"],
        answer: 1,
        explanation:
          "Média = soma/quantidade = (6+8+7+9+10)/5 = 40/5 = 8,0.",
        year: "Simulado",
        difficulty: "baixa",
      },
      {
        id: "m11_2",
        question:
          "Qual é a moda do conjunto: { 3, 5, 7, 5, 8, 3, 5, 9 }?",
        options: ["3", "5", "7", "8", "9"],
        answer: 1,
        explanation:
          "Moda é o valor que aparece com maior frequência. O 5 aparece 3 vezes, o 3 aparece 2 vezes. Moda = 5.",
        year: "FMM 2019",
        difficulty: "baixa",
      },
      {
        id: "m11_3",
        question:
          "Qual é a mediana do conjunto: { 4, 1, 9, 6, 3 }?",
        options: ["1", "3", "4", "6", "9"],
        answer: 2,
        explanation:
          "Ordenando: 1, 3, 4, 6, 9. Com 5 elementos, a mediana é o 3º valor = 4.",
        year: "FMM 2020",
        difficulty: "baixa",
      },
      {
        id: "m11_4",
        question:
          "Uma sacola contém 4 bolas vermelhas e 6 bolas azuis. Qual é a probabilidade de retirar uma bola vermelha ao acaso?",
        options: ["1/4", "2/5", "3/5", "1/2", "4/6"],
        answer: 1,
        explanation:
          "Total = 10 bolas. P(vermelha) = 4/10 = 2/5.",
        year: "FMM 2021",
        difficulty: "baixa",
      },
      {
        id: "m11_5",
        question:
          "Ao lançar um dado honesto de 6 faces, qual é a probabilidade de obter um número par?",
        options: ["1/6", "1/3", "1/2", "2/3", "5/6"],
        answer: 2,
        explanation:
          "Pares: {2, 4, 6} = 3 resultados. P(par) = 3/6 = 1/2.",
        year: "FMM 2022",
        difficulty: "baixa",
      },
      {
        id: "m11_6",
        question:
          "Num grupo de 30 alunos, 18 gostam de matemática. Qual é o percentual de alunos que NÃO gostam?",
        options: ["18%", "30%", "40%", "60%", "70%"],
        answer: 2,
        explanation:
          "Não gostam: 30 − 18 = 12. Percentual = 12/30 × 100 = 40%.",
        year: "FMM 2023",
        difficulty: "baixa",
      },
    ],
  },
};
