/* ============================================================
   测试引擎：负责抽题、乱序、答题会话状态管理
   与页面渲染逻辑（app.js）分离，方便以后替换 UI 或复用逻辑。
   ============================================================ */

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function allQuestionsFlat() {
  const list = [];
  Object.keys(QUESTIONS).forEach((unitId) => {
    QUESTIONS[unitId].forEach((q) => list.push({ ...q, unitId }));
  });
  return list;
}

function findQuestionById(id) {
  return allQuestionsFlat().find((q) => q.id === id) || null;
}

/**
 * 创建一个测试会话
 * mode: 'unit' | 'mixed' | 'wrong' | 'quick'
 * opts: { unitId, count }
 */
function createQuizSession(mode, opts = {}) {
  let pool = [];

  if (mode === "unit") {
    pool = QUESTIONS[opts.unitId].map((q) => ({ ...q, unitId: opts.unitId }));
  } else if (mode === "wrong") {
    const wrongIds = Object.keys(getState().wrongBook);
    pool = wrongIds.map(findQuestionById).filter(Boolean);
  } else if (mode === "mixed" || mode === "quick") {
    pool = shuffle(allQuestionsFlat());
    const count = opts.count || (mode === "quick" ? 10 : 20);
    pool = pool.slice(0, Math.min(count, pool.length));
  }

  // 给每道题的选项也做乱序，同时记录正确答案对应的新下标
  const questions = pool.map((q) => {
    const optionOrder = shuffle(q.options.map((_, i) => i));
    const newAnswerIndex = optionOrder.indexOf(q.answer);
    return {
      id: q.id,
      unitId: q.unitId,
      q: q.q,
      explain: q.explain,
      options: optionOrder.map((i) => q.options[i]),
      answer: newAnswerIndex,
    };
  });

  return {
    mode,
    unitId: opts.unitId || null,
    questions,
    index: 0,
    results: [], // { id, correct, chosenIndex }
  };
}

function currentQuestion(session) {
  return session.questions[session.index];
}

function isLastQuestion(session) {
  return session.index >= session.questions.length - 1;
}

function answerCurrentQuestion(session, chosenIndex) {
  const q = currentQuestion(session);
  const correct = chosenIndex === q.answer;
  session.results.push({ id: q.id, correct, chosenIndex });
  return correct;
}

function advanceQuestion(session) {
  session.index += 1;
}
