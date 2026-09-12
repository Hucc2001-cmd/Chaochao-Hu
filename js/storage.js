/* ============================================================
   本地存储与游戏化状态管理
   所有学习进度都保存在浏览器 localStorage 里，不需要注册账号、
   不需要联网。清除浏览器数据会导致进度丢失，"我的"页面里也
   提供了导出/导入 JSON 的功能，方便换设备或备份。
   ============================================================ */

const STORAGE_KEY = "sab_app_state_v1";

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function defaultState() {
  return {
    xp: 0,
    streak: { count: 0, lastDate: null },
    unitProgress: {}, // { u1: { read: true, bestScore: 0.8, attempts: 3 } }
    wrongBook: {}, // { u1q1: { count: 2, lastWrong: "2026-09-01" } }
    badges: [],
    totalAnswered: 0,
    totalCorrect: 0,
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  } catch (e) {
    console.warn("读取本地存档失败，使用默认状态", e);
    return defaultState();
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("保存本地存档失败（可能是隐私模式或存储已满）", e);
  }
}

let STATE = loadState();

function getState() {
  return STATE;
}

// 每次进入 App / 完成任意学习行为时调用，用于维护连续打卡天数
function touchStreak() {
  const today = todayStr();
  if (STATE.streak.lastDate === today) return; // 今天已经记过了
  if (STATE.streak.lastDate) {
    const prev = new Date(STATE.streak.lastDate);
    const now = new Date(today);
    const diffDays = Math.round((now - prev) / 86400000);
    STATE.streak.count = diffDays === 1 ? STATE.streak.count + 1 : 1;
  } else {
    STATE.streak.count = 1;
  }
  STATE.streak.lastDate = today;
  saveState(STATE);
  checkBadges();
}

function markLessonRead(unitId) {
  const up = STATE.unitProgress[unitId] || { read: false, bestScore: 0, attempts: 0 };
  up.read = true;
  STATE.unitProgress[unitId] = up;
  touchStreak();
  saveState(STATE);
  checkBadges();
}

function addXp(amount) {
  STATE.xp += amount;
  saveState(STATE);
  checkBadges();
}

// 提交一次测试结果。results: [{id, correct: bool}]
function submitQuizResult(unitId, results) {
  const total = results.length;
  const correctCount = results.filter((r) => r.correct).length;
  const score = total ? correctCount / total : 0;

  results.forEach((r) => {
    STATE.totalAnswered += 1;
    if (r.correct) {
      STATE.totalCorrect += 1;
      // 答对了就把错题本里的记录清掉（视为已掌握）
      if (STATE.wrongBook[r.id]) delete STATE.wrongBook[r.id];
    } else {
      const w = STATE.wrongBook[r.id] || { count: 0, lastWrong: null };
      w.count += 1;
      w.lastWrong = todayStr();
      STATE.wrongBook[r.id] = w;
    }
  });

  if (unitId) {
    const up = STATE.unitProgress[unitId] || { read: false, bestScore: 0, attempts: 0 };
    up.attempts += 1;
    up.bestScore = Math.max(up.bestScore || 0, score);
    STATE.unitProgress[unitId] = up;
  }

  const xpGain = correctCount * 10 + (score === 1 && total > 0 ? 20 : 0);
  STATE.xp += xpGain;

  touchStreak();
  saveState(STATE);
  checkBadges();

  return { total, correctCount, score, xpGain };
}

function resetProgress() {
  STATE = defaultState();
  saveState(STATE);
}

function exportStateJson() {
  return JSON.stringify(STATE, null, 2);
}

function importStateJson(jsonStr) {
  const parsed = JSON.parse(jsonStr);
  STATE = Object.assign(defaultState(), parsed);
  saveState(STATE);
}

// ---------- 徽章判定 ----------
function hasBadge(id) {
  return STATE.badges.includes(id);
}

function awardBadge(id) {
  if (!hasBadge(id)) {
    STATE.badges.push(id);
    saveState(STATE);
    return true;
  }
  return false;
}

function checkBadges() {
  const newlyAwarded = [];

  const readCount = Object.values(STATE.unitProgress).filter((u) => u.read).length;
  if (readCount >= 1 && awardBadge("first_lesson")) newlyAwarded.push("first_lesson");
  if (readCount >= UNITS.length && awardBadge("all_lessons")) newlyAwarded.push("all_lessons");

  const anyPass80 = Object.values(STATE.unitProgress).some((u) => (u.bestScore || 0) >= 0.8);
  if (anyPass80 && awardBadge("first_pass")) newlyAwarded.push("first_pass");

  const anyPerfect = Object.values(STATE.unitProgress).some((u) => (u.bestScore || 0) >= 1);
  if (anyPerfect && awardBadge("perfect_score")) newlyAwarded.push("perfect_score");

  if (STATE.streak.count >= 3 && awardBadge("streak_3")) newlyAwarded.push("streak_3");
  if (STATE.streak.count >= 7 && awardBadge("streak_7")) newlyAwarded.push("streak_7");

  const hadWrongBefore = STATE.totalAnswered > 0; // 曾经答过题
  if (hadWrongBefore && Object.keys(STATE.wrongBook).length === 0 && awardBadge("wrongbook_clear")) {
    newlyAwarded.push("wrongbook_clear");
  }

  if (STATE.xp >= 500 && awardBadge("xp_500")) newlyAwarded.push("xp_500");

  return newlyAwarded;
}
