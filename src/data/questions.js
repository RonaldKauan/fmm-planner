export const questions = [
  // ─── LÍNGUA PORTUGUESA ───────────────────────────────────────────────────────
  {
    id: 1,
    subject: "portugues",
    topic: "Interpretação de Texto",
    year: 2023,
    difficulty: "média",
    question:
      'Leia o trecho a seguir:\n\n"A floresta amazônica, patrimônio natural do Brasil e do mundo, vem sendo devastada em ritmo acelerado. Cada hectare perdido representa não apenas árvores derrubadas, mas espécies extintas, povos desalojados e um clima cada vez mais instável."\n\nQual é a ideia central do texto?',
    options: [
      "A Amazônia é o maior patrimônio econômico do Brasil.",
      "O desmatamento da Amazônia provoca consequências além da perda de árvores.",
      "As espécies animais da Amazônia estão em extinção por causa do clima.",
      "Os povos da Amazônia devem ser realocados para preservar a floresta.",
      "O Brasil é responsável por preservar a Amazônia sozinho.",
    ],
    answer: 1,
    explanation:
      'O texto enfatiza que a devastação da Amazônia vai além da perda de árvores, afetando espécies, povos e o clima. A palavra-chave "não apenas... mas" indica que o autor amplia as consequências do desmatamento.',
  },
  {
    id: 2,
    subject: "portugues",
    topic: "Classes de Palavras",
    year: 2022,
    difficulty: "alta",
    question:
      'Na frase "Ela chegou cansada, mas ainda assim sorriu para todos", a palavra "mas" é:',
    options: [
      "Preposição",
      "Advérbio de contraste",
      "Conjunção coordenativa adversativa",
      "Conjunção subordinativa concessiva",
      "Pronome relativo",
    ],
    answer: 2,
    explanation:
      '"Mas" é uma conjunção coordenativa adversativa, pois liga duas orações independentes expressando oposição ou contraste. As conjunções adversativas mais comuns são: mas, porém, contudo, entretanto, todavia.',
  },
  {
    id: 3,
    subject: "portugues",
    topic: "Concordância",
    year: 2023,
    difficulty: "alta",
    question: "Assinale a alternativa em que a concordância verbal está CORRETA:",
    options: [
      "Fazem dois anos que não vejo meu amigo.",
      "Houveram muitos problemas na reunião.",
      "Existem várias soluções para esse problema.",
      "Havia muitas pessoas esperando na fila.",
      "Faz dez anos que eles se formou.",
    ],
    answer: 2,
    explanation:
      '"Existem" concorda corretamente com "várias soluções" (sujeito no plural). Os verbos "fazer", "haver" e "existir" com sentido de existência são impessoais — exceto "existir", que admite concordância com o sujeito. "Houveram" está errado; o correto é "Houve". "Havia muitas pessoas" também está correto (alternativa D).',
  },
  {
    id: 4,
    subject: "portugues",
    topic: "Figuras de Linguagem",
    year: 2022,
    difficulty: "média",
    question:
      'Identifique a figura de linguagem presente em: "O tempo é um ladrão que rouba nossa juventude."',
    options: [
      "Metonímia",
      "Hipérbole",
      "Personificação (Prosopopeia)",
      "Metáfora",
      "Eufemismo",
    ],
    answer: 3,
    explanation:
      'A frase atribui ao "tempo" (elemento abstrato/inanimado) a característica de ladrão, comparando-o a um ser humano que pratica um ato. Isso é metáfora — uma comparação implícita, sem "como". Se fosse "O tempo é COMO um ladrão", seria comparação (símile).',
  },
  {
    id: 5,
    subject: "portugues",
    topic: "Acentuação Gráfica",
    year: 2024,
    difficulty: "média",
    question:
      "Assinale a alternativa em que TODAS as palavras estão corretamente acentuadas:",
    options: [
      "saúde, júri, heroína, jóia",
      "saúde, júri, heroína, joia",
      "saúde, juri, heroína, joia",
      "saude, júri, heroína, joia",
      "saúde, júri, heroina, joia",
    ],
    answer: 1,
    explanation:
      'Pelo Acordo Ortográfico de 2009: "joia" perdeu o acento (ditongo aberto em paroxítonas). "saúde" é acentuada por ser proparoxítona; "júri" é oxítona terminada em i; "heroína" tem hiato (he-ro-í-na). "Jóia" com acento está errado desde 2009.',
  },
  {
    id: 6,
    subject: "portugues",
    topic: "Crase",
    year: 2023,
    difficulty: "alta",
    question: "Em qual das frases o emprego da crase está CORRETO?",
    options: [
      "Vou à São Paulo amanhã.",
      "Ele se referiu à mim durante o discurso.",
      "Entregamos o presente à ela.",
      "A professora se dirigiu à turma com respeito.",
      "Assistimos à um filme emocionante.",
    ],
    answer: 3,
    explanation:
      '"À turma" está correto: verbo "dirigir-se" exige preposição "a" + artigo "a" antes de substantivo feminino. Não ocorre crase: antes de pronomes pessoais (mim, ela), antes de artigo indefinido (um/uma), antes de nomes de cidades sem artigo (São Paulo não tem artigo).',
  },

  // ─── MATEMÁTICA ──────────────────────────────────────────────────────────────
  {
    id: 7,
    subject: "matematica",
    topic: "Equações do 2º Grau",
    year: 2024,
    difficulty: "alta",
    question:
      "Determine as raízes da equação x² − 5x + 6 = 0 e calcule a soma delas:",
    options: ["4", "5", "6", "3", "7"],
    answer: 1,
    explanation:
      "Usando a Fórmula de Bhaskara: Δ = 25 − 24 = 1. x = (5 ± 1)/2 → x₁ = 3 e x₂ = 2. Soma = 3 + 2 = 5. Pela relação de Girard: soma das raízes = −b/a = 5/1 = 5.",
  },
  {
    id: 8,
    subject: "matematica",
    topic: "Geometria Plana",
    year: 2023,
    difficulty: "alta",
    question:
      "Um triângulo retângulo tem catetos medindo 6 cm e 8 cm. Qual é a medida da hipotenusa?",
    options: ["12 cm", "14 cm", "10 cm", "9 cm", "11 cm"],
    answer: 2,
    explanation:
      "Pelo Teorema de Pitágoras: h² = 6² + 8² = 36 + 64 = 100. h = √100 = 10 cm. Este é o famoso triângulo pitagórico 3-4-5 multiplicado por 2.",
  },
  {
    id: 9,
    subject: "matematica",
    topic: "Porcentagem",
    year: 2022,
    difficulty: "média",
    question:
      "Uma camiseta custa R$ 120,00. Numa promoção, ela recebe um desconto de 15%. Qual é o novo preço?",
    options: ["R$ 100,00", "R$ 102,00", "R$ 105,00", "R$ 108,00", "R$ 110,00"],
    answer: 1,
    explanation:
      "Desconto = 15% de 120 = 0,15 × 120 = 18. Novo preço = 120 − 18 = R$ 102,00. Também pode usar o fator multiplicativo: 120 × 0,85 = 102.",
  },
  {
    id: 10,
    subject: "matematica",
    topic: "Progressão Aritmética",
    year: 2023,
    difficulty: "alta",
    question:
      "Em uma PA, o primeiro termo é 3 e a razão é 4. Qual é o 10º termo?",
    options: ["39", "40", "43", "36", "47"],
    answer: 0,
    explanation:
      "Fórmula do termo geral da PA: aₙ = a₁ + (n−1)·r. a₁₀ = 3 + (10−1)·4 = 3 + 36 = 39.",
  },
  {
    id: 11,
    subject: "matematica",
    topic: "Funções",
    year: 2024,
    difficulty: "alta",
    question:
      "Uma função afim é definida por f(x) = 2x − 4. Para qual valor de x temos f(x) = 0?",
    options: ["x = 1", "x = 2", "x = 4", "x = −2", "x = 0"],
    answer: 1,
    explanation:
      "f(x) = 0 → 2x − 4 = 0 → 2x = 4 → x = 2. Este ponto (x = 2) é a raiz da função, onde o gráfico cruza o eixo x.",
  },
  {
    id: 12,
    subject: "matematica",
    topic: "Potenciação e Radiciação",
    year: 2022,
    difficulty: "média",
    question: "Simplifique: √(75) + √(27) − √(12)",
    options: ["5√3", "6√3", "4√3", "8√3", "3√3"],
    answer: 1,
    explanation:
      "√75 = √(25·3) = 5√3; √27 = √(9·3) = 3√3; √12 = √(4·3) = 2√3. Resultado: 5√3 + 3√3 − 2√3 = 6√3.",
  },
  {
    id: 13,
    subject: "matematica",
    topic: "Regra de Três",
    year: 2023,
    difficulty: "média",
    question:
      "Se 5 operários constroem um muro em 12 dias, quantos dias levarão 10 operários para construir o mesmo muro?",
    options: ["8 dias", "10 dias", "6 dias", "4 dias", "24 dias"],
    answer: 2,
    explanation:
      "Grandezas inversamente proporcionais: mais operários → menos dias. 5 × 12 = 10 × x → x = 60/10 = 6 dias.",
  },
  {
    id: 14,
    subject: "matematica",
    topic: "Geometria Plana",
    year: 2024,
    difficulty: "média",
    question:
      "Calcule a área de um círculo com raio de 7 cm. Use π ≈ 3,14.",
    options: [
      "153,86 cm²",
      "43,96 cm²",
      "49 cm²",
      "21,98 cm²",
      "98 cm²",
    ],
    answer: 0,
    explanation:
      "Área do círculo = π·r² = 3,14 × 7² = 3,14 × 49 = 153,86 cm².",
  },

  // ─── CIÊNCIAS NATURAIS ────────────────────────────────────────────────────────
  {
    id: 15,
    subject: "ciencias",
    topic: "Biologia – Ecologia",
    year: 2024,
    difficulty: "média",
    question:
      "Em uma cadeia alimentar: Capim → Gafanhoto → Sapo → Cobra → Gavião. Qual dos organismos é considerado produtor?",
    options: ["Gafanhoto", "Sapo", "Capim", "Cobra", "Gavião"],
    answer: 2,
    explanation:
      "O capim é o produtor (autótrofo), pois realiza fotossíntese transformando energia solar em energia química. Os demais são consumidores (heterótrofos) que dependem de outros organismos para obter energia.",
  },
  {
    id: 16,
    subject: "ciencias",
    topic: "Química – Átomo e Tabela Periódica",
    year: 2023,
    difficulty: "alta",
    question:
      "Um elemento tem número atômico 17 e massa atômica 35. Quantos nêutrons possui seu núcleo?",
    options: ["17", "35", "18", "52", "16"],
    answer: 2,
    explanation:
      "Nêutrons = Massa Atômica − Número Atômico = 35 − 17 = 18 nêutrons. O número atômico (Z = 17) indica o número de prótons. Este elemento é o Cloro (Cl).",
  },
  {
    id: 17,
    subject: "ciencias",
    topic: "Física – Cinemática",
    year: 2023,
    difficulty: "alta",
    question:
      "Um carro percorre 180 km em 2 horas com velocidade constante. Qual é sua velocidade média em m/s?",
    options: ["90 m/s", "25 m/s", "50 m/s", "30 m/s", "45 m/s"],
    answer: 1,
    explanation:
      "v = d/t = 180 km / 2 h = 90 km/h. Convertendo: 90 km/h × (1000 m / 3600 s) = 25 m/s.",
  },
  {
    id: 18,
    subject: "ciencias",
    topic: "Biologia – Genética",
    year: 2024,
    difficulty: "alta",
    question:
      "Um casal, onde ambos são portadores (heterozigotos) de uma doença autossômica recessiva, tem filhos. Qual é a probabilidade de um filho ser doente?",
    options: ["75%", "50%", "100%", "0%", "25%"],
    answer: 4,
    explanation:
      "Cruzamento Aa × Aa: descendentes = 1AA : 2Aa : 1aa. Somente aa manifesta a doença = 1/4 = 25% de probabilidade.",
  },
  {
    id: 19,
    subject: "ciencias",
    topic: "Química – Funções Inorgânicas",
    year: 2022,
    difficulty: "média",
    question: "O hidróxido de sódio (NaOH) é classificado como:",
    options: ["Ácido forte", "Sal solúvel", "Base forte", "Óxido básico", "Ácido fraco"],
    answer: 2,
    explanation:
      "NaOH é uma base (álcali) pois libera íons OH⁻ em solução aquosa. É classificada como base forte pois se ioniza completamente em água. Também é conhecida como soda cáustica.",
  },
  {
    id: 20,
    subject: "ciencias",
    topic: "Física – Dinâmica",
    year: 2024,
    difficulty: "alta",
    question:
      "Uma força de 20 N é aplicada a um objeto de massa 4 kg. Qual é a aceleração produzida? (Desconsidere o atrito.)",
    options: ["80 m/s²", "0,2 m/s²", "5 m/s²", "16 m/s²", "24 m/s²"],
    answer: 2,
    explanation:
      "Pela 2ª Lei de Newton: F = m·a → a = F/m = 20/4 = 5 m/s².",
  },
  {
    id: 21,
    subject: "ciencias",
    topic: "Biologia – Citologia",
    year: 2022,
    difficulty: "alta",
    question:
      "Qual organela celular é responsável pela produção de energia (ATP) nas células eucarióticas?",
    options: [
      "Ribossomo",
      "Retículo endoplasmático",
      "Mitocôndria",
      "Complexo de Golgi",
      "Lisossomo",
    ],
    answer: 2,
    explanation:
      "A mitocôndria é o local da respiração celular aeróbica, processo que converte glicose e oxigênio em ATP (adenosina trifosfato), água e gás carbônico. É chamada de \"usina de energia\" da célula.",
  },
  {
    id: 22,
    subject: "ciencias",
    topic: "Química – Reações",
    year: 2023,
    difficulty: "alta",
    question:
      "Na reação: H₂ + Cl₂ → 2HCl, quantas moléculas de HCl são formadas a partir de 3 moléculas de H₂?",
    options: ["3", "6", "2", "9", "4"],
    answer: 1,
    explanation:
      "Pela estequiometria: 1 mol H₂ → 2 mol HCl. Portanto 3 moléculas H₂ → 6 moléculas HCl. A proporção é 1:2 entre H₂ e HCl.",
  },
  {
    id: 23,
    subject: "ciencias",
    topic: "Biologia – Ecologia",
    year: 2024,
    difficulty: "média",
    question:
      "O relacionamento entre o piolho e o ser humano, no qual o piolho se beneficia e o humano é prejudicado, é chamado de:",
    options: [
      "Mutualismo",
      "Comensalismo",
      "Parasitismo",
      "Protocooperação",
      "Predatismo",
    ],
    answer: 2,
    explanation:
      "Parasitismo: um organismo (parasita) se beneficia à custa de outro (hospedeiro), causando-lhe prejuízo sem matá-lo imediatamente. O piolho se alimenta do sangue humano (benefício) enquanto causa coceira e pode transmitir doenças (prejuízo).",
  },
  {
    id: 24,
    subject: "ciencias",
    topic: "Física – Termologia",
    year: 2022,
    difficulty: "média",
    question:
      "A temperatura de ebulição da água ao nível do mar é 100°C. Convertendo para Kelvin, temos:",
    options: ["373 K", "173 K", "273 K", "473 K", "100 K"],
    answer: 0,
    explanation:
      "Conversão de Celsius para Kelvin: K = °C + 273. K = 100 + 273 = 373 K. A escala Kelvin (absoluta) não tem valores negativos, sendo 0 K o zero absoluto (−273°C).",
  },
];
