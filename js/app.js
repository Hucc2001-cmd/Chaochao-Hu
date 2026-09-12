/* ============================================================
   页面渲染与路由控制
   不使用任何前端框架，用最朴素的方式实现：
   - location.hash 作为路由
   - render() 根据 hash 生成对应页面的 HTML 字符串塞进 #app
   - 按钮通过内联 onclick 调用本文件里定义的全局函数
   这样写是为了让整个项目在任何环境下（本地双击打开 / 部署到
   GitHub Pages / 塞进任意静态网站空间）都能直接跑起来，不需要
   构建工具。
   ============================================================ */

const appEl = document.getElementById("app");
let currentSession = null; // 当前进行中的测试会话（不持久化）

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  if (!location.hash) location.hash = "#/";
  render();
  registerServiceWorker();
  recordVisit();
});

// 极简访问计数：整个 App 每次被打开时 +1（不是每次切页面都算）。
// 用的是一个免登录的公开计数接口，只统计"从上线这一刻起"的总次数，
// 不采集任何个人信息。失败了就静默忽略，不影响正常使用。
// 用随机字符串而不是仓库名，降低被外人猜到/直接查询这个计数接口的概率
const VISIT_COUNTER_NAMESPACE = "sab-quiz-f1a237d130cb";
const VISIT_COUNTER_KEY = "visits";
function recordVisit() {
  try {
    fetch(`https://abacus.jasoncameron.dev/hit/${VISIT_COUNTER_NAMESPACE}/${VISIT_COUNTER_KEY}`, {
      method: "GET",
      cache: "no-store",
    }).catch(() => {});
  } catch (e) {
    /* 计数失败不影响 App 正常使用 */
  }
}

function goTo(hash) {
  location.hash = hash;
}

function esc(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---------------- 路由分发 ----------------
function render() {
  const hash = location.hash || "#/";
  const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);

  let html = "";
  let activeTab = "home";

  if (parts.length === 0) {
    html = renderHome();
    activeTab = "home";
  } else if (parts[0] === "units" && !parts[1]) {
    html = renderUnitsList();
    activeTab = "units";
  } else if (parts[0] === "unit" && parts[1]) {
    html = renderUnitDetail(parts[1]);
    activeTab = "units";
  } else if (parts[0] === "glossary") {
    html = renderGlossary();
    activeTab = "glossary";
  } else if (parts[0] === "quiz" && parts[1] === "setup") {
    html = renderQuizSetup();
    activeTab = "quiz";
  } else if (parts[0] === "quiz" && parts[1] === "active") {
    html = renderQuizActive();
    activeTab = "quiz";
  } else if (parts[0] === "wrong") {
    html = renderWrongBook();
    activeTab = "wrong";
  } else {
    html = renderHome();
  }

  appEl.innerHTML = html + renderTabbar(activeTab);
  window.scrollTo(0, 0);
}

function renderTabbar(active) {
  const tabs = [
    { id: "home", icon: "🏠", label: "首页", hash: "#/" },
    { id: "units", icon: "📚", label: "单元", hash: "#/units" },
    { id: "glossary", icon: "🗂️", label: "词汇", hash: "#/glossary" },
    { id: "quiz", icon: "📝", label: "测试", hash: "#/quiz/setup" },
    { id: "wrong", icon: "❌", label: "错题", hash: "#/wrong" },
  ];
  return `
  <div class="tabbar">
    ${tabs
      .map(
        (t) => `
      <button class="tab-item ${t.id === active ? "active" : ""}" onclick="goTo('${t.hash}')">
        <span class="icon">${t.icon}</span>${t.label}
      </button>`
      )
      .join("")}
  </div>`;
}

// ---------------- 首页 ----------------
function renderHome() {
  const s = getState();
  const readCount = Object.values(s.unitProgress).filter((u) => u.read).length;
  const accuracy = s.totalAnswered ? Math.round((s.totalCorrect / s.totalAnswered) * 100) : 0;
  const wrongCount = Object.keys(s.wrongBook).length;

  const nextUnit = UNITS.find((u) => !(s.unitProgress[u.id] && s.unitProgress[u.id].read)) || UNITS[0];

  return `
    <div class="page-title">SAB 备考通 🇮🇹</div>
    <div class="page-sub">意大利食品饮料经营资质（SAB / 原 REC）自学小工具 · 托斯卡纳大区参考大纲</div>

    <div class="stat-row">
      <div class="stat-box"><div class="num">${s.xp}</div><div class="label">经验值 XP</div></div>
      <div class="stat-box"><div class="num">${s.streak.count}🔥</div><div class="label">连续打卡</div></div>
      <div class="stat-box"><div class="num">${accuracy}%</div><div class="label">总体正确率</div></div>
    </div>

    <div class="card tappable" onclick="goTo('#/unit/${nextUnit.id}')">
      <div class="row between">
        <div class="row">
          <div class="unit-icon">${nextUnit.icon}</div>
          <div>
            <div class="unit-title">继续学习：${esc(nextUnit.title)}</div>
            <div class="unit-sub">已完成课文 ${readCount}/${UNITS.length} 个单元</div>
          </div>
        </div>
        <div>›</div>
      </div>
      <div class="progress-bar" style="margin-top:10px;">
        <div style="width:${Math.round((readCount / UNITS.length) * 100)}%"></div>
      </div>
    </div>

    <div class="row" style="gap:10px; margin: 4px 0 14px;">
      <button class="btn" onclick="startQuickQuiz()">⏱️ 10分钟速练</button>
      <button class="btn secondary" onclick="goTo('#/quiz/setup')">📝 自选测试</button>
    </div>

    ${
      wrongCount > 0
        ? `<div class="card tappable" onclick="goTo('#/wrong')">
            <div class="row between">
              <div>❌ 错题本里还有 <b>${wrongCount}</b> 道题待攻克</div>
              <div>›</div>
            </div>
          </div>`
        : ""
    }

    <div class="section-heading">我的成就</div>
    ${renderBadgeGrid()}

    <div class="section-heading">设置</div>
    <div class="card">
      <div class="row" style="gap:8px; flex-wrap:wrap;">
        <button class="btn ghost small" onclick="handleExport()">导出学习数据</button>
        <button class="btn ghost small" onclick="document.getElementById('importFile').click()">导入学习数据</button>
        <button class="btn ghost small" onclick="handleReset()">重置全部进度</button>
      </div>
      <input type="file" id="importFile" accept="application/json" style="display:none" onchange="handleImportFile(event)" />
    </div>

    <div class="footer-note">
      本 App 为社区自制学习辅助工具，内容基于公开课程大纲整理归纳，并非官方考试原题，仅供碎片时间自测和记忆术语使用，请务必以线下课程讲义与官方资料为准。
    </div>
  `;
}

function renderBadgeGrid() {
  const s = getState();
  return `<div class="badge-grid">
    ${BADGES.map((b) => {
      const got = s.badges.includes(b.id);
      return `<div class="badge-cell ${got ? "" : "locked"}" title="${esc(b.desc)}">
        <span class="icon">${b.icon}</span>${esc(b.name)}
      </div>`;
    }).join("")}
  </div>`;
}

function handleExport() {
  const data = exportStateJson();
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "sab-progress.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function handleImportFile(evt) {
  const file = evt.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      importStateJson(reader.result);
      alert("导入成功！");
      render();
    } catch (e) {
      alert("导入失败，文件格式不正确");
    }
  };
  reader.readAsText(file);
}

function handleReset() {
  if (confirm("确定要清空全部学习进度吗？此操作无法撤销。建议先导出备份。")) {
    resetProgress();
    render();
  }
}

// ---------------- 单元列表 ----------------
function renderUnitsList() {
  const s = getState();
  return `
    <div class="page-title">单元学习</div>
    <div class="page-sub">建议按顺序学习，每个单元读完课文再做单元测试</div>
    ${UNITS.map((u) => {
      const up = s.unitProgress[u.id];
      const read = up && up.read;
      const best = up ? Math.round((up.bestScore || 0) * 100) : null;
      return `
      <div class="card tappable" onclick="goTo('#/unit/${u.id}')">
        <div class="row between">
          <div class="row">
            <div class="unit-icon">${u.icon}</div>
            <div>
              <div class="unit-title">${esc(u.title)}</div>
              <div class="unit-sub">${esc(u.titleIt)}</div>
            </div>
          </div>
          <div class="row" style="gap:6px;">
            ${read ? `<span class="badge-pill">已读</span>` : ""}
            ${best !== null ? `<span class="badge-pill">最佳 ${best}%</span>` : ""}
          </div>
        </div>
      </div>`;
    }).join("")}
  `;
}

// ---------------- 单元详情（课文 + 词汇） ----------------
function renderUnitDetail(unitId) {
  const unit = UNITS.find((u) => u.id === unitId);
  if (!unit) return `<div class="empty-hint">未找到该单元</div>`;
  const lesson = LESSONS[unitId];

  markLessonRead(unitId);

  return `
    <button class="btn ghost small" style="width:auto; margin-bottom:10px;" onclick="goTo('#/units')">‹ 返回单元列表</button>
    <div class="page-title">${unit.icon} ${esc(unit.title)}</div>
    <div class="page-sub">${esc(unit.titleIt)}</div>

    <div class="card">
      <div style="font-size:14px; line-height:1.6;">${esc(lesson.intro)}</div>
    </div>

    <div class="card">
      ${lesson.sections
        .map(
          (sec) => `
        <div class="section-heading">${esc(sec.heading)}</div>
        <ul class="points">
          ${sec.points.map((p) => `<li>${esc(p)}</li>`).join("")}
        </ul>`
        )
        .join("")}
    </div>

    <div class="section-heading">🗂️ 本单元术语卡片（${lesson.glossary.length}）</div>
    ${lesson.glossary
      .map(
        (g) => `
      <div class="glossary-card">
        <div class="glossary-term">${esc(g.term)}</div>
        ${g.full && g.full !== "—" ? `<div class="glossary-full">${esc(g.full)}</div>` : ""}
        <div class="glossary-zh">${esc(g.zh)}</div>
      </div>`
      )
      .join("")}

    <button class="btn" style="margin-top:12px;" onclick="startUnitQuiz('${unitId}')">📝 开始本单元测试（${QUESTIONS[unitId].length}题）</button>
  `;
}

// ---------------- 词汇表（跨单元搜索） ----------------
function renderGlossary(keyword) {
  keyword = (keyword || "").trim().toLowerCase();
  const all = [];
  UNITS.forEach((u) => {
    LESSONS[u.id].glossary.forEach((g) => all.push({ ...g, unit: u }));
  });
  const filtered = keyword
    ? all.filter(
        (g) =>
          g.term.toLowerCase().includes(keyword) ||
          (g.full && g.full.toLowerCase().includes(keyword)) ||
          g.zh.toLowerCase().includes(keyword)
      )
    : all;

  return `
    <div class="page-title">🗂️ 术语速查卡片</div>
    <div class="page-sub">全部 ${all.length} 个专业词汇，输入意大利语或中文关键词即可搜索</div>
    <input class="search-input" placeholder="搜索术语，例如 HACCP / 酒精 / SCIA" value="${esc(keyword)}"
      oninput="onGlossarySearch(this.value)" />
    <div id="glossaryResults">
      ${
        filtered.length
          ? filtered
              .map(
                (g) => `
        <div class="glossary-card">
          <div class="row between">
            <div class="glossary-term">${esc(g.term)}</div>
            <span class="tag">${g.unit.icon} ${esc(g.unit.title)}</span>
          </div>
          ${g.full && g.full !== "—" ? `<div class="glossary-full">${esc(g.full)}</div>` : ""}
          <div class="glossary-zh">${esc(g.zh)}</div>
        </div>`
              )
              .join("")
          : `<div class="empty-hint">没有找到匹配的词汇，换个关键词试试～</div>`
      }
    </div>
  `;
}

function onGlossarySearch(value) {
  // 只替换搜索结果区域，避免重绘整页导致输入框失焦
  const wrapper = document.createElement("div");
  wrapper.innerHTML = renderGlossary(value);
  const newResults = wrapper.querySelector("#glossaryResults");
  const oldResults = document.getElementById("glossaryResults");
  if (oldResults && newResults) {
    oldResults.innerHTML = newResults.innerHTML;
  }
}

// ---------------- 测试设置页 ----------------
function renderQuizSetup() {
  const s = getState();
  const wrongCount = Object.keys(s.wrongBook).length;
  return `
    <div class="page-title">📝 开始测试</div>
    <div class="page-sub">选择一种练习方式，答完立即自动评分并给出中文讲解</div>

    <div class="section-heading">按单元测试</div>
    ${UNITS.map(
      (u) => `
      <div class="card tappable" onclick="startUnitQuiz('${u.id}')">
        <div class="row between">
          <div class="row"><div class="unit-icon">${u.icon}</div><div class="unit-title">${esc(u.title)}</div></div>
          <span class="badge-pill">${QUESTIONS[u.id].length}题</span>
        </div>
      </div>`
    ).join("")}

    <div class="section-heading">混合模式</div>
    <div class="row" style="gap:10px;">
      <button class="btn secondary" onclick="startMixedQuiz(10)">随机10题</button>
      <button class="btn secondary" onclick="startMixedQuiz(20)">随机20题</button>
    </div>
    <div style="height:10px;"></div>
    <button class="btn secondary" onclick="startMixedQuiz(9999)">全部题目大乱斗（${allQuestionsFlat().length}题）</button>

    <div class="section-heading">错题重测</div>
    <button class="btn ${wrongCount ? "" : "ghost"}" ${wrongCount ? "" : "disabled"} onclick="startWrongQuiz()">
      ❌ 只做错题本里的题（${wrongCount}题）
    </button>
  `;
}

function startUnitQuiz(unitId) {
  currentSession = createQuizSession("unit", { unitId });
  goTo("#/quiz/active");
}

function startMixedQuiz(count) {
  currentSession = createQuizSession("mixed", { count });
  goTo("#/quiz/active");
}

function startQuickQuiz() {
  currentSession = createQuizSession("quick", { count: 10 });
  goTo("#/quiz/active");
}

function startWrongQuiz() {
  const s = getState();
  if (Object.keys(s.wrongBook).length === 0) {
    alert("错题本是空的，先去做几道题吧！");
    return;
  }
  currentSession = createQuizSession("wrong");
  goTo("#/quiz/active");
}

// ---------------- 测试进行中 / 结果页 ----------------
function renderQuizActive() {
  if (!currentSession) {
    return `<div class="empty-hint">还没有开始的测试<br/><br/>
      <button class="btn" style="width:auto;" onclick="goTo('#/quiz/setup')">去选一个测试</button>
    </div>`;
  }

  const session = currentSession;

  if (session.index >= session.questions.length) {
    return renderQuizResult(session);
  }

  const q = currentQuestion(session);
  const answered = session.results.length > session.index;
  const lastResult = answered ? session.results[session.index] : null;

  return `
    <div class="quiz-progress">第 ${session.index + 1} / ${session.questions.length} 题　·　已答对 ${session.results.filter((r) => r.correct).length} 题</div>
    <div class="progress-bar" style="margin-bottom:16px;"><div style="width:${Math.round((session.index / session.questions.length) * 100)}%"></div></div>

    <div class="card">
      <div class="quiz-question">${esc(q.q)}</div>
      ${q.options
        .map((opt, i) => {
          let cls = "";
          if (answered) {
            if (i === q.answer) cls = "correct";
            else if (i === lastResult.chosenIndex) cls = "wrong";
          }
          return `<button class="option-btn ${cls}" ${answered ? "disabled" : ""} onclick="handleAnswer(${i})">${esc(opt)}</button>`;
        })
        .join("")}

      ${
        answered
          ? `<div class="explain-box"><b>💡 讲解：</b>${esc(q.explain)}</div>
             <button class="btn" onclick="handleNextQuestion()">${session.index + 1 >= session.questions.length ? "查看成绩" : "下一题 ›"}</button>`
          : ""
      }
    </div>
  `;
}

function handleAnswer(chosenIndex) {
  const session = currentSession;
  if (session.results.length > session.index) return; // 已经答过了
  answerCurrentQuestion(session, chosenIndex);
  render();
}

function handleNextQuestion() {
  advanceQuestion(currentSession);
  if (currentSession.index >= currentSession.questions.length) {
    // 提交结果
    const summary = submitQuizResult(currentSession.unitId, currentSession.results);
    currentSession.summary = summary;
  }
  render();
}

function renderQuizResult(session) {
  const summary = session.summary || { total: session.results.length, correctCount: session.results.filter((r) => r.correct).length, xpGain: 0 };
  const pct = Math.round((summary.correctCount / summary.total) * 100);
  const wrongResults = session.results
    .map((r, i) => ({ ...r, q: session.questions[i] }))
    .filter((r) => !r.correct);

  let emoji = "💪";
  if (pct === 100) emoji = "🏆";
  else if (pct >= 80) emoji = "🎉";
  else if (pct < 50) emoji = "📖";

  return `
    <div class="card">
      <div class="result-score">
        <div style="font-size:38px;">${emoji}</div>
        <div class="big">${pct}%</div>
        <div class="page-sub" style="margin-bottom:0;">答对 ${summary.correctCount} / ${summary.total} 题　·　获得 ${summary.xpGain} XP</div>
      </div>
    </div>

    ${
      wrongResults.length
        ? `<div class="section-heading">本次答错的题目</div>
          ${wrongResults
            .map(
              (r) => `
            <div class="wrong-item">
              <div class="q">${esc(r.q.q)}</div>
              <div class="meta">✅ 正确答案：${esc(r.q.options[r.q.answer])}</div>
            </div>`
            )
            .join("")}`
        : `<div class="empty-hint">🎉 全部答对，太棒了！</div>`
    }

    <div class="row" style="gap:10px; margin-top: 12px;">
      <button class="btn secondary" onclick="goTo('#/quiz/setup')">再来一组</button>
      <button class="btn" onclick="goTo('#/')">返回首页</button>
    </div>
  `;
}

// ---------------- 错题本 ----------------
function renderWrongBook() {
  const s = getState();
  const ids = Object.keys(s.wrongBook);
  const items = ids.map((id) => ({ ...s.wrongBook[id], q: findQuestionById(id) })).filter((x) => x.q);

  return `
    <div class="page-title">❌ 错题本</div>
    <div class="page-sub">答对一次就会自动从错题本移除，坚持刷完它！</div>

    <button class="btn ${items.length ? "" : "ghost"}" ${items.length ? "" : "disabled"} onclick="startWrongQuiz()" style="margin-bottom:14px;">
      🔁 立即重测全部错题（${items.length}题）
    </button>

    ${
      items.length
        ? items
            .map(
              (it) => `
        <div class="wrong-item">
          <div class="q">${esc(it.q.q)}</div>
          <div class="meta">✅ ${esc(it.q.options[it.q.answer])}　·　错过 ${it.count} 次</div>
        </div>`
            )
            .join("")
        : `<div class="empty-hint">错题本是空的，继续保持！🎉</div>`
    }
  `;
}

// ---------------- PWA：注册离线缓存 ----------------
function registerServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}
