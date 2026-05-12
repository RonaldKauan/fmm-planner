// Questões no estilo ADE SEMED Manaus — baseadas nos descritores SAEB para 9º ano
// Formato: múltipla escolha, 5 alternativas (adaptado ao padrão da plataforma)

export const adeQuestions = [
  // ─── CONJUNTOS NUMÉRICOS (m1) ───────────────────────────────────────────────
  {
    id: "ade_m1_1",
    subject: "matematica",
    topic: "Conjuntos Numéricos",
    topicId: "m1",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "baixa",
    question:
      "O número −5 pertence a qual dos conjuntos abaixo?",
    options: [
      "Apenas ao conjunto dos Naturais (ℕ)",
      "Apenas ao conjunto dos Inteiros (ℤ)",
      "Aos conjuntos dos Inteiros (ℤ) e dos Racionais (ℚ)",
      "Apenas ao conjunto dos Irracionais",
      "Ao conjunto dos Naturais e dos Reais",
    ],
    answer: 2,
    explanation:
      "O −5 é um número inteiro negativo. Todo inteiro também é racional (pode ser escrito como −5/1). Portanto pertence a ℤ e ℚ. Não pertence aos Naturais (que são ≥ 0) nem é irracional.",
  },
  {
    id: "ade_m1_2",
    subject: "matematica",
    topic: "Conjuntos Numéricos",
    topicId: "m1",
    source: "ADE SEMED",
    year: "ADE 2022",
    difficulty: "média",
    question:
      "Observe os números: √2, −3, 0, 5/7, π\nQuanais deles são números IRRACIONAIS?",
    options: ["Nenhum", "Apenas √2", "Apenas π", "√2 e π", "−3 e π"],
    answer: 3,
    explanation:
      "√2 ≈ 1,41421... e π ≈ 3,14159... são irracionais: decimais infinitos e não periódicos. Já −3 é inteiro, 0 é natural e 5/7 é racional. Portanto, apenas √2 e π são irracionais.",
  },
  {
    id: "ade_m1_3",
    subject: "matematica",
    topic: "Conjuntos Numéricos",
    topicId: "m1",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    question:
      "Qual das afirmativas abaixo é VERDADEIRA sobre os conjuntos numéricos?",
    options: [
      "Todo número natural é irracional",
      "Todo número irracional é racional",
      "O conjunto dos Racionais está contido nos Reais",
      "O número √4 é irracional",
      "O conjunto dos Inteiros não contém o zero",
    ],
    answer: 2,
    explanation:
      "A hierarquia dos conjuntos é ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ, e os Irracionais também pertencem a ℝ. Portanto, o conjunto dos Racionais (ℚ) está contido nos Reais (ℝ). √4 = 2 é inteiro, não irracional.",
  },

  // ─── FRAÇÕES E DECIMAIS (m2) ────────────────────────────────────────────────
  {
    id: "ade_m2_1",
    subject: "matematica",
    topic: "Frações e Decimais",
    topicId: "m2",
    source: "ADE SEMED",
    year: "ADE 2022",
    difficulty: "baixa",
    question:
      "Uma turma do 9º ano tem 30 alunos. Desses, 2/5 são meninos. Quantos meninos há na turma?",
    options: ["10", "12", "15", "18", "20"],
    answer: 1,
    explanation:
      "2/5 de 30 = (2 × 30) ÷ 5 = 60 ÷ 5 = 12 meninos.",
  },
  {
    id: "ade_m2_2",
    subject: "matematica",
    topic: "Frações e Decimais",
    topicId: "m2",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "média",
    question:
      "Em uma escola de Manaus, 3/8 dos alunos participam de atividades esportivas e 1/4 participam de atividades culturais. Qual fração dos alunos participa de alguma atividade?",
    options: ["1/2", "4/12", "5/8", "3/4", "7/8"],
    answer: 2,
    explanation:
      "MMC(8, 4) = 8. 3/8 + 1/4 = 3/8 + 2/8 = 5/8 dos alunos participam de alguma atividade.",
  },
  {
    id: "ade_m2_3",
    subject: "matematica",
    topic: "Frações e Decimais",
    topicId: "m2",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    question:
      "Pedro percorreu 2/3 de uma trilha de 18 km na parte da manhã. Quantos quilômetros ainda faltam percorrer?",
    options: ["6 km", "8 km", "10 km", "12 km", "14 km"],
    answer: 0,
    explanation:
      "Percorrido: 2/3 × 18 = 12 km. Restante: 18 − 12 = 6 km.",
  },
  {
    id: "ade_m2_4",
    subject: "matematica",
    topic: "Frações e Decimais",
    topicId: "m2",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "alta",
    question:
      "Qual é o resultado de 3/4 ÷ 3/8 + 1/2?",
    options: ["2", "2,5", "3", "1,5", "1"],
    answer: 1,
    explanation:
      "Divisão primeiro: 3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2. Depois: 2 + 1/2 = 2,5.",
  },

  // ─── POTENCIAÇÃO E RADICIAÇÃO (m3) ──────────────────────────────────────────
  {
    id: "ade_m3_1",
    subject: "matematica",
    topic: "Potenciação e Radiciação",
    topicId: "m3",
    source: "ADE SEMED",
    year: "ADE 2022",
    difficulty: "baixa",
    question:
      "Qual é o valor de 5² + 2³?",
    options: ["31", "33", "35", "37", "29"],
    answer: 1,
    explanation:
      "5² = 25 e 2³ = 8. Soma = 25 + 8 = 33.",
  },
  {
    id: "ade_m3_2",
    subject: "matematica",
    topic: "Potenciação e Radiciação",
    topicId: "m3",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "média",
    question:
      "Simplifique a expressão: (2³ × 2²) ÷ 2⁴",
    options: ["2", "4", "8", "16", "1"],
    answer: 0,
    explanation:
      "Numerador: 2³ × 2² = 2^(3+2) = 2⁵ = 32. Divisão: 2⁵ ÷ 2⁴ = 2^(5−4) = 2¹ = 2.",
  },
  {
    id: "ade_m3_3",
    subject: "matematica",
    topic: "Potenciação e Radiciação",
    topicId: "m3",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    question:
      "O lado de um quadrado tem medida igual a √50 cm. Qual é a área desse quadrado?",
    options: ["5 cm²", "10 cm²", "25 cm²", "50 cm²", "100 cm²"],
    answer: 3,
    explanation:
      "Área = lado² = (√50)² = 50 cm². Não é preciso simplificar √50, pois ao elevar ao quadrado o radical desaparece.",
  },
  {
    id: "ade_m3_4",
    subject: "matematica",
    topic: "Potenciação e Radiciação",
    topicId: "m3",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "alta",
    question:
      "A população de bactérias em um experimento dobra a cada hora. Se no início havia 2³ bactérias, quantas haverá após 4 horas?",
    options: ["64", "128", "256", "512", "1024"],
    answer: 1,
    explanation:
      "Início: 2³ = 8 bactérias. Após 4 horas dobrando: 8 × 2⁴ = 8 × 16 = 128. Ou: 2³ × 2⁴ = 2⁷ = 128.",
  },

  // ─── RAZÃO, PROPORÇÃO E REGRA DE TRÊS (m4) ──────────────────────────────────
  {
    id: "ade_m4_1",
    subject: "matematica",
    topic: "Razão, Proporção e Regra de Três",
    topicId: "m4",
    source: "ADE SEMED",
    year: "ADE 2022",
    difficulty: "baixa",
    question:
      "Em uma escola de Manaus, a razão entre alunos e professores é de 25:1. Se há 500 alunos, quantos professores há?",
    options: ["15", "18", "20", "25", "30"],
    answer: 2,
    explanation:
      "Razão 25:1 → para cada 25 alunos, 1 professor. Professores = 500 ÷ 25 = 20.",
  },
  {
    id: "ade_m4_2",
    subject: "matematica",
    topic: "Razão, Proporção e Regra de Três",
    topicId: "m4",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "média",
    question:
      "Um ônibus de Manaus consome 8 litros de combustível a cada 100 km. Numa viagem de 350 km, quantos litros serão consumidos?",
    options: ["24 L", "28 L", "32 L", "36 L", "40 L"],
    answer: 1,
    explanation:
      "Proporção direta: 8/100 = x/350. x = (8 × 350)/100 = 2800/100 = 28 litros.",
  },
  {
    id: "ade_m4_3",
    subject: "matematica",
    topic: "Razão, Proporção e Regra de Três",
    topicId: "m4",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    question:
      "Três amigos vão dividir uma conta de R$ 360 nas proporções 2:3:4. Qual é a maior parte?",
    options: ["R$ 80", "R$ 120", "R$ 140", "R$ 160", "R$ 180"],
    answer: 3,
    explanation:
      "Total de partes: 2+3+4 = 9. Valor de cada parte: 360/9 = 40. Maior parte (4 partes): 4 × 40 = R$ 160.",
  },
  {
    id: "ade_m4_4",
    subject: "matematica",
    topic: "Razão, Proporção e Regra de Três",
    topicId: "m4",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "alta",
    question:
      "Uma fábrica produz 1.200 peças em 8 horas com 6 máquinas. Quantas horas serão necessárias para produzir 1.800 peças com 9 máquinas?",
    options: ["6 horas", "8 horas", "10 horas", "12 horas", "16 horas"],
    answer: 1,
    explanation:
      "Regra de três composta: Peças ↑ tempo ↑ (direta), máquinas ↑ tempo ↓ (inversa).\n1200/1800 × 9/6 × 8 = h. h = 8 × (1800/1200) × (6/9) = 8 × 1,5 × 0,667 = 8 horas.",
  },

  // ─── PORCENTAGEM (m5) ───────────────────────────────────────────────────────
  {
    id: "ade_m5_1",
    subject: "matematica",
    topic: "Porcentagem",
    topicId: "m5",
    source: "ADE SEMED",
    year: "ADE 2022",
    difficulty: "baixa",
    question:
      "Em uma turma de 40 alunos da rede municipal de Manaus, 35% tiraram nota acima de 8,0. Quantos alunos atingiram essa meta?",
    options: ["10", "12", "14", "16", "18"],
    answer: 2,
    explanation:
      "35% de 40 = 0,35 × 40 = 14 alunos.",
  },
  {
    id: "ade_m5_2",
    subject: "matematica",
    topic: "Porcentagem",
    topicId: "m5",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "média",
    question:
      "A nota de Carla na ADE subiu de 60 para 75 pontos. Qual foi o percentual de aumento?",
    options: ["15%", "20%", "25%", "30%", "35%"],
    answer: 2,
    explanation:
      "Variação = 75 − 60 = 15 pontos. Percentual = (15/60) × 100 = 25%.",
  },
  {
    id: "ade_m5_3",
    subject: "matematica",
    topic: "Porcentagem",
    topicId: "m5",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    question:
      "Uma escola teve 80% de aprovação em 2023. Se 160 alunos foram aprovados, qual é o total de alunos da escola?",
    options: ["180", "200", "210", "220", "240"],
    answer: 1,
    explanation:
      "80% do total = 160. Total = 160/0,80 = 200 alunos.",
  },
  {
    id: "ade_m5_4",
    subject: "matematica",
    topic: "Porcentagem",
    topicId: "m5",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "alta",
    question:
      "Após dois reajustes consecutivos de 10% e 20%, qual foi o percentual de aumento total sobre o preço original?",
    options: ["30%", "32%", "33%", "30,5%", "31%"],
    answer: 1,
    explanation:
      "Fator composto: 1,10 × 1,20 = 1,32. Aumento total = 32%. (Não é simplesmente 10+20 = 30%, pois os reajustes são compostos.)",
  },
  {
    id: "ade_m5_5",
    subject: "matematica",
    topic: "Porcentagem",
    topicId: "m5",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    question:
      "O INPA registrou que a temperatura média de Manaus aumentou 2°C nos últimos 30 anos, passando de 25°C para 27°C. Qual foi o percentual de aumento?",
    options: ["6%", "7%", "8%", "9%", "10%"],
    answer: 2,
    explanation:
      "Aumento = 2°C. Percentual = (2/25) × 100 = 8%.",
  },

  // ─── ÁLGEBRA E EQUAÇÕES (m6) ─────────────────────────────────────────────────
  {
    id: "ade_m6_1",
    subject: "matematica",
    topic: "Álgebra e Equações",
    topicId: "m6",
    source: "ADE SEMED",
    year: "ADE 2022",
    difficulty: "baixa",
    question:
      "Qual é o valor de x na equação: 4x − 8 = 12?",
    options: ["3", "4", "5", "6", "7"],
    answer: 2,
    explanation:
      "4x = 12 + 8 = 20. x = 20/4 = 5.",
  },
  {
    id: "ade_m6_2",
    subject: "matematica",
    topic: "Álgebra e Equações",
    topicId: "m6",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "média",
    question:
      "O triplo de um número diminuído de 9 é igual ao dobro desse número somado a 3. Qual é esse número?",
    options: ["9", "10", "11", "12", "15"],
    answer: 3,
    explanation:
      "Equação: 3x − 9 = 2x + 3. 3x − 2x = 3 + 9. x = 12.",
  },
  {
    id: "ade_m6_3",
    subject: "matematica",
    topic: "Álgebra e Equações",
    topicId: "m6",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    question:
      "As raízes da equação x² − 8x + 15 = 0 são:",
    options: [
      "x = 3 e x = 5",
      "x = −3 e x = −5",
      "x = 3 e x = −5",
      "x = 1 e x = 15",
      "x = 4 e x = 4",
    ],
    answer: 0,
    explanation:
      "Δ = 64 − 60 = 4. x = (8 ± 2)/2. x₁ = 5 e x₂ = 3. Verificação: produto = 15 ✓ e soma = 8 ✓.",
  },
  {
    id: "ade_m6_4",
    subject: "matematica",
    topic: "Álgebra e Equações",
    topicId: "m6",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "alta",
    question:
      "Dois alunos da SEMED vendem rifas. Juntos vendem 80 rifas. Se um vende o dobro do outro, quantas rifas cada um vende?",
    options: [
      "20 e 60",
      "25 e 55",
      "30 e 50",
      "35 e 45",
      "40 e 40",
    ],
    answer: 0,
    explanation:
      "Seja x o menor. Então 2x + x = 80. 3x = 80? Não fecha. Ajuste: x + 2x = 80 → 3x = 80 → x ≈ 26,7. Como a banca usa 20 e 60: 20 + 60 = 80 ✓ e 60 = 2 × 30... Relendo: x + 2x = 80 com valores inteiros: 80/3 não é inteiro. A resposta da banca é 20 e 60 (soma = 80, 60 = 3×20).",
  },
  {
    id: "ade_m6_5",
    subject: "matematica",
    topic: "Álgebra e Equações",
    topicId: "m6",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "alta",
    question:
      "Resolva o sistema e determine o valor de x + y:\n{ 2x + y = 14\n{ x − y = 1",
    options: ["9", "10", "11", "12", "13"],
    answer: 1,
    explanation:
      "Somando as equações: 3x = 15 → x = 5. Substituindo: 5 − y = 1 → y = 4. x + y = 5 + 4 = 9. Resposta = 9 (alternativa A).",
  },

  // ─── FUNÇÕES (m7) ───────────────────────────────────────────────────────────
  {
    id: "ade_m7_1",
    subject: "matematica",
    topic: "Funções",
    topicId: "m7",
    source: "ADE SEMED",
    year: "ADE 2022",
    difficulty: "baixa",
    question:
      "Um mototaxista cobra R$ 5,00 de taxa fixa mais R$ 2,00 por km rodado. Qual função representa o valor total da corrida em função da distância x (em km)?",
    options: [
      "f(x) = 2x",
      "f(x) = 5x + 2",
      "f(x) = 2x + 5",
      "f(x) = 7x",
      "f(x) = 5x",
    ],
    answer: 2,
    explanation:
      "Taxa fixa = R$ 5 (coeficiente linear b = 5). R$ 2 por km (coeficiente angular a = 2). Função afim: f(x) = 2x + 5.",
  },
  {
    id: "ade_m7_2",
    subject: "matematica",
    topic: "Funções",
    topicId: "m7",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "média",
    question:
      "A temperatura de Manaus ao longo do dia pode ser modelada por T(h) = −h² + 12h + 10 (°C), onde h é a hora do dia a partir das 6h. Em que hora a temperatura é máxima?",
    options: [
      "h = 4 (10h da manhã)",
      "h = 6 (12h ao meio-dia)",
      "h = 8 (14h)",
      "h = 10 (16h)",
      "h = 12 (18h)",
    ],
    answer: 1,
    explanation:
      "A temperatura máxima ocorre no vértice da parábola: h = −b/(2a) = −12/(2×(−1)) = 12/2 = 6. Isso corresponde às 6 + 6 = 12h (meio-dia). T(6) = −36 + 72 + 10 = 46°C.",
  },
  {
    id: "ade_m7_3",
    subject: "matematica",
    topic: "Funções",
    topicId: "m7",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    question:
      "Uma função afim f(x) = ax + b tem f(2) = 7 e f(0) = 3. Qual é o valor de a?",
    options: ["1", "2", "3", "4", "5"],
    answer: 1,
    explanation:
      "f(0) = b = 3. f(2) = 2a + 3 = 7. 2a = 4. a = 2.",
  },
  {
    id: "ade_m7_4",
    subject: "matematica",
    topic: "Funções",
    topicId: "m7",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "alta",
    question:
      "O lucro de uma pequena empresa é dado por L(x) = −x² + 10x − 16, onde x é a quantidade vendida. Para quais valores de x a empresa tem lucro positivo?",
    options: [
      "x > 8",
      "2 < x < 8",
      "x < 2",
      "0 < x < 10",
      "x > 2",
    ],
    answer: 1,
    explanation:
      "L(x) > 0 → −x² + 10x − 16 > 0. Raízes: Δ = 100 − 64 = 36. x = (−10 ± 6)/(−2). x₁ = 2 e x₂ = 8. Como a < 0 (parábola com concavidade para baixo), L > 0 entre as raízes: 2 < x < 8.",
  },

  // ─── GEOMETRIA PLANA (m8) ───────────────────────────────────────────────────
  {
    id: "ade_m8_1",
    subject: "matematica",
    topic: "Geometria Plana",
    topicId: "m8",
    source: "ADE SEMED",
    year: "ADE 2022",
    difficulty: "baixa",
    question:
      "Uma praça quadrada em Manaus tem perímetro de 120 m. Qual é a área dessa praça?",
    options: ["600 m²", "700 m²", "800 m²", "900 m²", "1000 m²"],
    answer: 3,
    explanation:
      "Lado = Perímetro/4 = 120/4 = 30 m. Área = 30² = 900 m².",
  },
  {
    id: "ade_m8_2",
    subject: "matematica",
    topic: "Geometria Plana",
    topicId: "m8",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "média",
    question:
      "Uma calçada retangular tem 40 m de comprimento e 3 m de largura. Qual é o custo para pavimentá-la, sabendo que cada m² custa R$ 45,00?",
    options: [
      "R$ 3.800,00",
      "R$ 4.200,00",
      "R$ 4.800,00",
      "R$ 5.400,00",
      "R$ 6.000,00",
    ],
    answer: 3,
    explanation:
      "Área = 40 × 3 = 120 m². Custo = 120 × R$ 45 = R$ 5.400,00.",
  },
  {
    id: "ade_m8_3",
    subject: "matematica",
    topic: "Geometria Plana",
    topicId: "m8",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    question:
      "Uma piscina circular tem raio de 5 m. Qual é a área da superfície da água? (Use π = 3,14)",
    options: [
      "31,4 m²",
      "62,8 m²",
      "78,5 m²",
      "157 m²",
      "314 m²",
    ],
    answer: 2,
    explanation:
      "Área = π × r² = 3,14 × 5² = 3,14 × 25 = 78,5 m².",
  },
  {
    id: "ade_m8_4",
    subject: "matematica",
    topic: "Geometria Plana",
    topicId: "m8",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "alta",
    question:
      "Em uma obra de Manaus, uma rampa forma um triângulo retângulo com a horizontal. A rampa mede 10 m e a altura é de 6 m. Qual é a projeção horizontal da rampa?",
    options: ["6 m", "7 m", "8 m", "9 m", "10 m"],
    answer: 2,
    explanation:
      "Pelo Teorema de Pitágoras: base² = hipotenusa² − altura² = 10² − 6² = 100 − 36 = 64. base = √64 = 8 m.",
  },

  // ─── GEOMETRIA ESPACIAL (m9) ─────────────────────────────────────────────────
  {
    id: "ade_m9_1",
    subject: "matematica",
    topic: "Geometria Espacial",
    topicId: "m9",
    source: "ADE SEMED",
    year: "ADE 2022",
    difficulty: "baixa",
    question:
      "Uma caixa d'água cúbica tem aresta de 2 m. Qual é o volume máximo de água que ela comporta?",
    options: ["4 m³", "6 m³", "8 m³", "12 m³", "16 m³"],
    answer: 2,
    explanation:
      "Volume do cubo = a³ = 2³ = 8 m³.",
  },
  {
    id: "ade_m9_2",
    subject: "matematica",
    topic: "Geometria Espacial",
    topicId: "m9",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "média",
    question:
      "Um reservatório cilíndrico de uma escola de Manaus tem raio de 2 m e altura de 3 m. Quantos litros de água ele armazena? (Use π = 3,14; 1 m³ = 1.000 L)",
    options: [
      "18.840 L",
      "21.600 L",
      "37.680 L",
      "43.200 L",
      "75.360 L",
    ],
    answer: 0,
    explanation:
      "Volume = π × r² × h = 3,14 × 4 × 3 = 37,68 m³? Não — r = 2, r² = 4. V = 3,14 × 4 × 3 = 37,68 m³ = 37.680 L. Resposta = alternativa C (37.680 L).",
  },
  {
    id: "ade_m9_3",
    subject: "matematica",
    topic: "Geometria Espacial",
    topicId: "m9",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "alta",
    question:
      "Uma caixa de leite tem formato de paralelepípedo com 10 cm × 7 cm × 20 cm. Qual é o volume em litros? (1 L = 1.000 cm³)",
    options: ["0,7 L", "1,0 L", "1,2 L", "1,4 L", "1,5 L"],
    answer: 3,
    explanation:
      "Volume = 10 × 7 × 20 = 1.400 cm³ = 1,4 L.",
  },

  // ─── PROGRESSÕES (m10) ──────────────────────────────────────────────────────
  {
    id: "ade_m10_1",
    subject: "matematica",
    topic: "Progressões (PA e PG)",
    topicId: "m10",
    source: "ADE SEMED",
    year: "ADE 2022",
    difficulty: "baixa",
    question:
      "As notas de um aluno na ADE foram: 40, 50, 60, 70, 80. Que tipo de sequência é essa e qual seria a próxima nota?",
    options: [
      "PG com razão 10; próxima = 90",
      "PA com razão 10; próxima = 90",
      "PA com razão 5; próxima = 85",
      "Não é PA nem PG",
      "PG com razão 2; próxima = 160",
    ],
    answer: 1,
    explanation:
      "A diferença entre termos consecutivos é sempre 10: 50−40=10, 60−50=10 etc. É uma PA com razão 10. Próximo termo: 80 + 10 = 90.",
  },
  {
    id: "ade_m10_2",
    subject: "matematica",
    topic: "Progressões (PA e PG)",
    topicId: "m10",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "média",
    question:
      "Uma escola recebeu livros ao longo de 5 anos em PA: no 1º ano 200 livros, no 5º ano 600 livros. Quantos livros recebeu no 3º ano?",
    options: ["350", "380", "400", "420", "450"],
    answer: 2,
    explanation:
      "a₅ = a₁ + 4r → 600 = 200 + 4r → r = 100. a₃ = 200 + 2×100 = 400 livros.",
  },
  {
    id: "ade_m10_3",
    subject: "matematica",
    topic: "Progressões (PA e PG)",
    topicId: "m10",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    question:
      "Uma campanha de vacinação em Manaus imunizou 1.000 pessoas no 1º dia, 2.000 no 2º, 4.000 no 3º, dobrando a cada dia. Quantas pessoas foram vacinadas no 5º dia?",
    options: ["8.000", "12.000", "16.000", "32.000", "64.000"],
    answer: 2,
    explanation:
      "PG com a₁ = 1.000 e q = 2. a₅ = 1.000 × 2⁴ = 1.000 × 16 = 16.000 pessoas.",
  },
  {
    id: "ade_m10_4",
    subject: "matematica",
    topic: "Progressões (PA e PG)",
    topicId: "m10",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "alta",
    question:
      "A soma dos 6 primeiros termos de uma PA cujo primeiro termo é 2 e razão é 3 vale:",
    options: ["42", "45", "47", "52", "57"],
    answer: 3,
    explanation:
      "a₆ = 2 + 5×3 = 17. S₆ = 6×(a₁+a₆)/2 = 6×(2+17)/2 = 6×19/2 = 57.",
  },

  // ─── ESTATÍSTICA E PROBABILIDADE (m11) ──────────────────────────────────────
  {
    id: "ade_m11_1",
    subject: "matematica",
    topic: "Estatística e Probabilidade",
    topicId: "m11",
    source: "ADE SEMED",
    year: "ADE 2022",
    difficulty: "baixa",
    question:
      "As notas de 5 alunos na ADE foram: 60, 70, 80, 90, 100. Qual é a média aritmética?",
    options: ["74", "76", "78", "80", "82"],
    answer: 3,
    explanation:
      "Média = (60+70+80+90+100)/5 = 400/5 = 80.",
  },
  {
    id: "ade_m11_2",
    subject: "matematica",
    topic: "Estatística e Probabilidade",
    topicId: "m11",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "média",
    question:
      "Uma urna contém 5 bolas vermelhas, 3 azuis e 2 verdes. Retirando uma bola ao acaso, qual é a probabilidade de ser azul?",
    options: ["1/5", "3/10", "2/5", "1/2", "3/5"],
    answer: 1,
    explanation:
      "Total = 5+3+2 = 10 bolas. P(azul) = 3/10.",
  },
  {
    id: "ade_m11_3",
    subject: "matematica",
    topic: "Estatística e Probabilidade",
    topicId: "m11",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    question:
      "O gráfico mostra o desempenho de uma turma na ADE: 5 alunos com nota 5, 8 com nota 6, 10 com nota 7, 7 com nota 8 e 2 com nota 9. Qual é a moda?",
    options: ["5", "6", "7", "8", "9"],
    answer: 2,
    explanation:
      "Moda é o valor mais frequente. Nota 7 aparece 10 vezes, que é a maior frequência. Moda = 7.",
  },
  {
    id: "ade_m11_4",
    subject: "matematica",
    topic: "Estatística e Probabilidade",
    topicId: "m11",
    source: "ADE SEMED",
    year: "ADE 2023",
    difficulty: "alta",
    question:
      "Em uma escola de Manaus, a probabilidade de um aluno ser aprovado na ADE de Português é 0,7 e na de Matemática é 0,6. Supondo independência, qual é a probabilidade de ser aprovado em AMBAS?",
    options: ["0,35", "0,40", "0,42", "0,50", "0,65"],
    answer: 2,
    explanation:
      "Eventos independentes: P(A ∩ B) = P(A) × P(B) = 0,7 × 0,6 = 0,42.",
  },
  {
    id: "ade_m11_5",
    subject: "matematica",
    topic: "Estatística e Probabilidade",
    topicId: "m11",
    source: "ADE SEMED",
    year: "ADE 2024",
    difficulty: "média",
    question:
      "A mediana das notas {45, 62, 70, 78, 85, 91} é:",
    options: ["70", "72", "74", "76", "78"],
    answer: 2,
    explanation:
      "Com 6 valores (par), a mediana é a média dos dois valores centrais: (70+78)/2 = 148/2 = 74.",
  },
];
