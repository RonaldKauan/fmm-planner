// Listas de exercícios em PDF organizadas por assunto
// Fontes: institutos federais (IFMG, IFSC, IFSP, IFRS, IFRN), UFSC, CECIERJ, etc.
// Todos os PDFs são públicos e de acesso gratuito

export const exerciseLists = {
  // ─── MATEMÁTICA ──────────────────────────────────────────────────────────────
  m1: [
    {
      title: "Apostila — Conjuntos e Conjuntos Numéricos",
      source: "IFMG — Instituto Federal de Minas Gerais",
      description: "Teoria completa sobre N, Z, Q, I e R com exercícios resolvidos. 62 páginas.",
      pages: 62,
      url: "http://edumat.ouropreto.ifmg.edu.br/wp-content/uploads/sites/12/2016/06/apostila-matematica-1-01-CONJUNTOS-E-CONJUNTOS-NUM%C3%89RICOS-cassio.pdf",
    },
    {
      title: "Lista 2 — Conjuntos Numéricos",
      source: "IFRN — Instituto Federal do Rio Grande do Norte",
      description: "Lista de exercícios focada em classificação e operações com conjuntos numéricos.",
      pages: null,
      url: "https://docente.ifrn.edu.br/marcelosilva/disciplinas/matematica-i/teoria-dos-conjuntos/lista-2-conjuntos-numericos/view",
    },
  ],

  m2: [
    {
      title: "Lista 1 — Frações: Adições e Subtrações",
      source: "PUC Goiás",
      description: "Exercícios de adição, subtração, multiplicação e divisão de frações. Com gabarito.",
      pages: null,
      url: "https://professor.pucgoias.edu.br/SiteDocente/admin/arquivosUpload/16536/material/lista01.pdf",
    },
    {
      title: "Coletânea de Exercícios de Matemática Básica",
      source: "UFSC — Universidade Federal de Santa Catarina",
      description: "Coletânea de 34 páginas cobrindo frações, decimais, equações e muito mais. Licença CC.",
      pages: 34,
      url: "https://precalculojlle.paginas.ufsc.br/files/2018/11/Coletanea_Exercicios_Matematica_Basica.pdf",
    },
  ],

  m3: [
    {
      title: "Lista — Potenciação e Radiciação (com Gabarito)",
      source: "Projeto Medicina",
      description: "9 páginas com exercícios de potenciação, radiciação e propriedades. Gabarito incluso.",
      pages: 9,
      url: "https://projetomedicina.com.br/site/attachments/article/525/matematica_exercicios_gabarito_potenciacao_radiciacao_basica.pdf",
    },
    {
      title: "Atividade — Potenciação, Radiciação e Notação Científica",
      source: "Secretaria de Educação do Estado de Goiás",
      description: "Atividade escolar com exercícios de potenciação, radiciação e notação científica para 9º ano.",
      pages: null,
      url: "https://portal.educacao.go.gov.br/wp-content/uploads/2021/06/ATIVIDADE-10-9o-ano-Mat-Potenciacao-e-radiciacao-Notacao-Cientifica.pdf",
    },
  ],

  m4: [
    {
      title: "Exercícios de Razão e Proporção",
      source: "IFSP — Instituto Federal de São Paulo",
      description: "Lista de exercícios de razão, proporção e aplicações. Material do campus São Paulo.",
      pages: null,
      url: "https://eadcampus.spo.ifsp.edu.br/pluginfile.php/29901/mod_resource/content/1/Exerc%C3%ADcios%20de%20raz%C3%A3o%20e%20propor%C3%A7%C3%A3o.pdf",
    },
    {
      title: "Apostila — Razão, Proporção, Regra de Três e Porcentagem",
      source: "IFMG — Instituto Federal de Minas Gerais",
      description: "Apostila completa de matemática financeira cobrindo razão, proporção, regra de três e porcentagem.",
      pages: null,
      url: "http://edumat.ouropreto.ifmg.edu.br/wp-content/uploads/sites/12/2016/06/apostila-matematica-financeira-01-RAZ%C3%83O-PROPOR%C3%87%C3%83O-REGRAS-DE-TRES-e-PORCENTAGEM-cassio.pdf",
    },
  ],

  m5: [
    {
      title: "Apostila — Razão, Proporção, Regra de Três e Porcentagem",
      source: "IFMG — Instituto Federal de Minas Gerais",
      description: "Cobre porcentagem, juros simples e compostos com exercícios resolvidos e lista para praticar.",
      pages: null,
      url: "http://edumat.ouropreto.ifmg.edu.br/wp-content/uploads/sites/12/2016/06/apostila-matematica-financeira-01-RAZ%C3%83O-PROPOR%C3%87%C3%83O-REGRAS-DE-TRES-e-PORCENTAGEM-cassio.pdf",
    },
    {
      title: "Coletânea de Exercícios de Matemática Básica",
      source: "UFSC — Universidade Federal de Santa Catarina",
      description: "Inclui seção de porcentagem e números decimais com exercícios contextualizados.",
      pages: 34,
      url: "https://precalculojlle.paginas.ufsc.br/files/2018/11/Coletanea_Exercicios_Matematica_Basica.pdf",
    },
  ],

  m6: [
    {
      title: "Lista — Equações do 1º e 2º Grau",
      source: "IFSC — Instituto Federal de Santa Catarina",
      description: "11 páginas com teoria e exercícios de equações do 1º e 2º grau, inequações e sistemas.",
      pages: 11,
      url: "https://docente.ifsc.edu.br/jeremias.stein/std/CALA/Aula2.pdf",
    },
    {
      title: "Coletânea de Exercícios de Matemática Básica",
      source: "UFSC — Universidade Federal de Santa Catarina",
      description: "Coletânea com seções específicas de equações do 1º e 2º grau e sistemas lineares.",
      pages: 34,
      url: "https://precalculojlle.paginas.ufsc.br/files/2018/11/Coletanea_Exercicios_Matematica_Basica.pdf",
    },
  ],

  m7: [
    {
      title: "Apostila — Função do 1º Grau (111 questões)",
      source: "IFMG — Instituto Federal de Minas Gerais",
      description: "24 páginas com teoria e exercícios de função afim: gráficos, raízes, inequações e mais.",
      pages: 24,
      url: "http://edumat.ouropreto.ifmg.edu.br/wp-content/uploads/sites/12/2016/08/apostila-matematica-1-03-FUN%C3%87%C3%83O-DO-1%C2%BA-GRAU-SEM-ESPA%C3%87O-cassio.pdf",
    },
    {
      title: "Lista — Função do 2º Grau (Quadrática)",
      source: "IFSC — Instituto Federal de Santa Catarina",
      description: "Lista de exercícios sobre função quadrática: parábola, vértice, raízes e análise do gráfico.",
      pages: null,
      url: "https://wiki.ifsc.edu.br/mediawiki/images/7/73/Lista_1.1.pdf",
    },
  ],

  m8: [
    {
      title: "Oficina de Geometria Plana",
      source: "IFRS — Instituto Federal do Rio Grande do Sul",
      description: "Material didático com exercícios de áreas, perímetros, ângulos e figuras planas.",
      pages: null,
      url: "https://ifrs.edu.br/bento/wp-content/uploads/sites/13/2019/12/Oficia-de-Geometria-Plana.pdf",
    },
  ],

  m9: [
    {
      title: "Geometria Espacial: Prismas e Cilindros",
      source: "CECIERJ — Centro de Ciências e Educação Superior a Distância do RJ",
      description: "Material completo sobre prismas e cilindros: definições, fórmulas de área e volume.",
      pages: null,
      url: "https://canal.cecierj.edu.br/012016/8552282a2a5c888333e4950659b8cf3b.pdf",
    },
  ],

  m10: [
    {
      title: "Lista de Exercícios sobre Progressões",
      source: "IFRN — Instituto Federal do Rio Grande do Norte",
      description: "Lista com exercícios de PA e PG: termo geral, soma dos termos e aplicações.",
      pages: null,
      url: "https://docentes.ifrn.edu.br/julianaschivani/disciplinas/matematica-ii/sequencias-e-progressoes/lista-de-exercicios-sobre-progressoes/view",
    },
    {
      title: "Coletânea de Exercícios de Matemática Básica",
      source: "UFSC — Universidade Federal de Santa Catarina",
      description: "Coletânea com exercícios de sequências e progressões aritméticas e geométricas.",
      pages: 34,
      url: "https://precalculojlle.paginas.ufsc.br/files/2018/11/Coletanea_Exercicios_Matematica_Basica.pdf",
    },
  ],

  m11: [
    {
      title: "Apostila de Introdução à Estatística",
      source: "IFMG — Instituto Federal de Minas Gerais",
      description: "7 páginas cobrindo média, moda, mediana, tabelas e gráficos com exercícios.",
      pages: 7,
      url: "https://www.ifmg.edu.br/conselheirolafaiete/noticias/anexos-noticias/apostila-introducao-a-estatistica-ifmg-cl.pdf",
    },
    {
      title: "Exercícios sobre Mediana e Moda",
      source: "IFSP — Instituto Federal de São Paulo",
      description: "Lista focada em cálculo de mediana e moda com situações-problema contextualizadas.",
      pages: null,
      url: "https://eadcampus.spo.ifsp.edu.br/pluginfile.php/29909/mod_resource/content/1/Exercicios_Sobre_Mediana_e_Moda.pdf",
    },
  ],

  // ─── LÍNGUA PORTUGUESA ───────────────────────────────────────────────────────
  p1: [
    {
      title: "Exercícios de Interpretação Textual — ENEM e Vestibulares",
      source: "Secretaria de Educação de Mato Grosso",
      description: "Atividades de interpretação de texto com textos variados e questões no estilo ENEM.",
      pages: null,
      url: "https://www.aprendizagemconectada.mt.gov.br/documents/14069491/15548486/3%C2%B0ANO_MAT_EM_atividades+escolares_Outubro.pdf/a9696721-18a1-1c20-4833-0936f3fa4b0a",
    },
  ],

  // ─── CIÊNCIAS NATURAIS ───────────────────────────────────────────────────────
  c6: [
    {
      title: "Atividades — Sequências e Problemas de Física",
      source: "UFPR — Universidade Federal do Paraná",
      description: "Material de cálculo e exercícios aplicados a problemas de física: sequências e fórmulas.",
      pages: null,
      url: "https://docs.ufpr.br/~mbrito/Ensino/Sequencias%20CM310.pdf",
    },
  ],
};
