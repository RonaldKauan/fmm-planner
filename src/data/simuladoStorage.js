// Persiste resultados dos simulados semanais no localStorage

const STORAGE_KEY = "fmm_historico";

export function getHistorico() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveResult(result) {
  const historico = getHistorico();
  historico.unshift(result); // mais recente primeiro
  localStorage.setItem(STORAGE_KEY, JSON.stringify(historico));
}

export function clearHistorico() {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Agrega todos os resultados e retorna tópicos com pior desempenho.
 * @param {number} threshold — percentual abaixo do qual o tópico é considerado deficiente (padrão 60)
 */
export function getWeakTopics(threshold = 60) {
  const historico = getHistorico();
  const agg = {}; // topic → { total, correct }

  historico.forEach((r) => {
    Object.entries(r.byTopic || {}).forEach(([topic, data]) => {
      if (!agg[topic]) agg[topic] = { total: 0, correct: 0, subject: data.subject };
      agg[topic].total += data.total;
      agg[topic].correct += data.correct;
    });
  });

  return Object.entries(agg)
    .map(([topic, data]) => ({
      topic,
      subject: data.subject,
      total: data.total,
      correct: data.correct,
      pct: Math.round((data.correct / data.total) * 100),
    }))
    .filter((t) => t.pct < threshold)
    .sort((a, b) => a.pct - b.pct); // pior primeiro
}

/**
 * Constrói o objeto de resultado a partir das respostas do simulado.
 */
export function buildResult({ weekNum, title, questions, answers, timeUsed }) {
  const total = questions.length;
  const correct = questions.filter((q) => answers[q.id] === q.answer).length;
  const score = Math.round((correct / total) * 100);

  const bySubject = {};
  const byTopic = {};

  questions.forEach((q) => {
    const ok = answers[q.id] === q.answer;

    // por matéria
    if (!bySubject[q.subject]) bySubject[q.subject] = { total: 0, correct: 0 };
    bySubject[q.subject].total++;
    if (ok) bySubject[q.subject].correct++;

    // por tópico
    if (q.topic) {
      if (!byTopic[q.topic]) byTopic[q.topic] = { total: 0, correct: 0, subject: q.subject };
      byTopic[q.topic].total++;
      if (ok) byTopic[q.topic].correct++;
    }
  });

  // calcula percentual
  Object.values(bySubject).forEach((s) => {
    s.pct = Math.round((s.correct / s.total) * 100);
  });
  Object.values(byTopic).forEach((t) => {
    t.pct = Math.round((t.correct / t.total) * 100);
  });

  return {
    id: `ws${weekNum}_${Date.now()}`,
    weekNum,
    title,
    completedAt: new Date().toISOString(),
    score,
    correct,
    total,
    timeUsed: timeUsed ?? null,
    bySubject,
    byTopic,
  };
}
