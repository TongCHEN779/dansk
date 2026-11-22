---
layout: archive
title: ""
permalink: /leaderboard/
classes: wide lb-page
---

<style>
    .lb { max-width: 46rem; margin: 0 auto; }
    .lb [hidden] { display: none !important; }
    .checkbox-container { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
    .checkbox-container label { display: flex; align-items: center; gap: 5px; }
    .lb-intro { text-align: center; margin: .4rem 0 1rem; }
    .lb-start { display: flex; gap: .6rem; justify-content: center; align-items: center; flex-wrap: wrap; margin: .8rem 0 1.2rem; }
    .lb-start input { width: min(100%, 18rem); margin: 0; }
    .lb-msg { text-align: center; min-height: 1.4em; margin: .2rem 0 .6rem; font-size: .9em; }

    /* ── game card ── */
    .lb-card { padding: 1.2rem 1.4rem 1.4rem; margin: 0 auto 1.6rem; }
    .lb-top { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: .6rem; font-weight: 600; }
    .lb-lives { letter-spacing: .15em; }
    .lb-timer { height: 8px; border-radius: 99px; overflow: hidden; margin-bottom: 1.1rem; }
    .lb-timer > div { height: 100%; width: 100%; transform-origin: left; }
    .lb-tag { text-align: center; font-size: .72rem; letter-spacing: .08em; text-transform: uppercase; }
    .lb-prompt { text-align: center; font-size: 1.5em; line-height: 1.35; margin: .3rem 0 1.1rem; min-height: 2.8em; display: flex; align-items: center; justify-content: center; overflow-wrap: anywhere; }
    .lb-options { display: grid; grid-template-columns: 1fr 1fr; gap: .7rem; }
    @media (max-width: 40em) { .lb-options { grid-template-columns: 1fr; } }
    .lb-opt { display: flex; align-items: center; gap: .7rem; text-align: left; width: 100%; min-height: 3.6rem; padding: .6rem .9rem; border-radius: 14px; line-height: 1.3; overflow-wrap: anywhere; }
    .lb-opt .k { flex: none; display: grid; place-items: center; width: 1.6rem; height: 1.6rem; border-radius: 50%; font-size: .78rem; font-weight: 700; }
    .lb-feedback { text-align: center; min-height: 1.6em; margin-top: .9rem; font-weight: 600; }

    /* ── end screen ── */
    .lb-end { text-align: center; padding: 1.4rem; margin: 0 auto 1.6rem; }
    .lb-end .big { font-size: 3rem; font-weight: 700; line-height: 1.1; }

    /* ── boards ── */
    .lb-boards { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-top: 1rem; max-width: 60rem; margin-left: auto; margin-right: auto; }
    @media (max-width: 40em) { .lb-boards { grid-template-columns: 1fr; } }
    .lb-boards h2 { text-align: center; margin: 0 0 .5rem; }
    .lb-boards table { margin: 0; }
    .lb-boards td.rank { width: 2.6rem; text-align: center; }
    .lb-boards td.pts { width: 4rem; text-align: right; font-weight: 700; }
    .lb-boards tr.me td { font-weight: 700; }
    .lb-scope { text-align: center; font-size: .8em; margin-top: 1rem; }
</style>

<div class="lb">
    <p class="lb-intro" id="lbIntro">Vælg niveau, skriv dit navn og start. Højst 3 fejl – 10 sekunder pr. spørgsmål.</p>

    <div class="checkbox-container" id="lbLevels">
        <label><input type="checkbox" id="lvA" checked> A1-A2 </label>
        <label><input type="checkbox" id="lvB" checked> B1-B2 </label>
    </div>

    <div class="lb-start" id="lbStart">
        <input type="text" id="lbName" maxlength="40" placeholder="Brugernavn" autocomplete="off" aria-label="Brugernavn">
        <button id="lbStartBtn" onclick="lbStart()">Start</button>
    </div>
    <div class="lb-msg" id="lbMsg"></div>

    <div class="lb-card" id="lbCard" hidden>
        <div class="lb-top"><span id="lbScore">Point: 0</span><span class="lb-lives" id="lbLives"></span><span id="lbLeft"></span></div>
        <div class="lb-timer" id="lbTimer"><div id="lbTimerBar"></div></div>
        <div class="lb-tag" id="lbTag"></div>
        <div class="lb-prompt" id="lbPrompt"></div>
        <div class="lb-options" id="lbOptions"></div>
        <div class="lb-feedback" id="lbFeedback"></div>
    </div>

    <div class="lb-end" id="lbEnd" hidden>
        <div id="lbEndTitle"></div>
        <div class="big" id="lbEndScore"></div>
        <p id="lbEndInfo"></p>
        <button onclick="lbReset()">Spil igen</button>
    </div>
</div>

<div class="lb-boards">
    <div>
        <h2>A1-A2</h2>
        <table id="lbBoardA"><thead><tr><th>#</th><th>Navn</th><th>Point</th></tr></thead><tbody></tbody></table>
    </div>
    <div>
        <h2>B1-B2</h2>
        <table id="lbBoardB"><thead><tr><th>#</th><th>Navn</th><th>Point</th></tr></thead><tbody></tbody></table>
    </div>
</div>
<p class="lb-scope" id="lbScope"></p>

<script>
    const INDEX_URL   = "/dansk/vocabulary-index.json";
    const REMOTE_URL  = "{{ site.leaderboard.endpoint | default: '' }}".replace(/\/+$/, "");
    const LOCAL_KEY   = "dkLeaderboardV1";
    const NAME_KEY    = "dkLeaderboardName";
    const TYPES       = ["adj", "sub", "verb"];
    const MAX_MISTAKES = 3;
    const TIME_MS     = 10000;
    const TOP_N       = 10;
    const LEVEL_KEY   = { "A1-A2": "A", "B1-B2": "B" };

    let allWords = [];
    let byType   = {};
    let pool     = [];
    let cur      = null;
    let score = 0, mistakes = 0, asked = 0, total = 0;
    let running = false, locked = false;
    let playerName = "", playedLevels = [];
    let timerId = null, deadline = 0, nextId = null;

    const $ = id => document.getElementById(id);

    /* ── helpers ── */
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    function setMsg(t, kind) {
        const m = $("lbMsg");
        m.textContent = t || "";
        m.style.color = kind === "err" ? "var(--lb-bad)" : "";
    }
    function checkedLevels() {
        return ["A1-A2", "B1-B2"].filter((l, i) => $(i ? "lvB" : "lvA").checked);
    }

    async function loadWords() {
        if (allWords.length) return;
        const res = await fetch(INDEX_URL);
        const all = await res.json();
        allWords = all.filter(w => TYPES.includes(w.type) && w.niveau && w.engelsk && w.dansk);
        byType = {};
        allWords.forEach(w => (byType[w.type] = byType[w.type] || []).push(w));
    }

    /* ── question building ── */
    function field(w, lang) {              // lang: "en" | "zh"
        return lang === "zh" && w.kinesisk ? w.kinesisk : w.engelsk;
    }
    function buildQuestion(w) {
        const toDanish = Math.random() < 0.5;                    // prompt in English/Chinese, answer Danish
        const lang     = (w.kinesisk && Math.random() < 0.5) ? "zh" : "en";
        const textOf   = x => toDanish ? x.dansk : field(x, lang);
        const correct  = textOf(w);
        const promptTx = toDanish ? field(w, lang) : w.dansk;

        const used = new Set([correct.toLowerCase()]);
        const cands = shuffle(byType[w.type].slice());
        const wrong = [];
        for (const x of cands) {
            if (x === w) continue;
            const t = textOf(x), p = toDanish ? field(x, lang) : x.dansk;
            if (!t || used.has(t.toLowerCase())) continue;
            if (toDanish && p.toLowerCase() === promptTx.toLowerCase()) continue;   // same meaning → ambiguous
            used.add(t.toLowerCase());
            wrong.push(t);
            if (wrong.length === 3) break;
        }
        if (wrong.length < 3) return null;
        const options = shuffle([correct, ...wrong]);
        return {
            word: w, prompt: promptTx, options, answer: options.indexOf(correct), correct,
            tag: toDanish ? (lang === "zh" ? "中文 → Dansk" : "English → Dansk") : (lang === "zh" ? "Dansk → 中文" : "Dansk → English")
        };
    }

    /* ── game flow ── */
    async function lbStart() {
        if (running) return;
        const name = $("lbName").value.trim();
        if (!name) { setMsg("Skriv et brugernavn først.", "err"); $("lbName").focus(); return; }
        const levels = checkedLevels();
        if (!levels.length) { setMsg("Vælg mindst ét niveau.", "err"); return; }
        setMsg("Henter ord …");
        try { await loadWords(); } catch (e) { setMsg("Kunne ikke hente ordlisten.", "err"); return; }
        pool = shuffle(allWords.filter(w => levels.includes(w.niveau)));     // sampling without replacement
        if (pool.length < 4) { setMsg("For få ord på det valgte niveau.", "err"); return; }
        try { localStorage.setItem(NAME_KEY, name); } catch (e) {}
        playerName = name; playedLevels = levels;
        total = pool.length; score = 0; mistakes = 0; asked = 0;
        running = true;
        setMsg("");
        $("lbStart").hidden = true; $("lbEnd").hidden = true; $("lbCard").hidden = false;
        $("lbIntro").hidden = true;
        $("lvA").disabled = $("lvB").disabled = true;
        nextQuestion();
    }

    function renderLives() {
        let s = "";
        for (let i = 0; i < MAX_MISTAKES; i++) s += i < MAX_MISTAKES - mistakes ? "♥" : "♡";
        $("lbLives").textContent = s;
        $("lbScore").textContent = "Point: " + score;
        $("lbLeft").textContent = (total - asked) + " tilbage";
    }

    function nextQuestion() {
        nextId = null;
        if (mistakes >= MAX_MISTAKES || !pool.length) return finish(!pool.length && mistakes < MAX_MISTAKES);
        let q = null;
        while (pool.length && !q) { q = buildQuestion(pool.pop()); asked++; }     // a word that cannot get 3 distractors is skipped
        if (!q) return finish(true);
        cur = q; locked = false;
        $("lbTag").textContent = q.tag;
        $("lbPrompt").textContent = q.prompt;
        $("lbFeedback").textContent = "";
        $("lbFeedback").style.color = "";
        const box = $("lbOptions");
        box.innerHTML = "";
        q.options.forEach((t, i) => {
            const b = document.createElement("button");
            b.type = "button"; b.className = "lb-opt";
            const k = document.createElement("span"); k.className = "k"; k.textContent = i + 1;
            const s = document.createElement("span"); s.textContent = t;
            b.appendChild(k); b.appendChild(s);
            b.onclick = () => answer(i);
            box.appendChild(b);
        });
        renderLives();
        startTimer();
    }

    function startTimer() {
        clearInterval(timerId);
        deadline = Date.now() + TIME_MS;
        const bar = $("lbTimerBar");
        const tick = () => {
            const left = Math.max(0, deadline - Date.now());
            bar.style.transform = "scaleX(" + (left / TIME_MS) + ")";
            bar.classList.toggle("urgent", left < 3000);
            if (left <= 0) { clearInterval(timerId); answer(-1); }
        };
        tick();
        timerId = setInterval(tick, 50);
    }

    function answer(i) {
        if (locked || !running) return;
        locked = true;
        clearInterval(timerId);
        const ok = i === cur.answer;
        const btns = [...document.querySelectorAll("#lbOptions .lb-opt")];
        btns.forEach(b => b.disabled = true);
        btns[cur.answer].classList.add("is-correct");
        const fb = $("lbFeedback");
        if (ok) {
            score++;
            fb.textContent = "Rigtigt!";
            fb.style.color = "var(--lb-ok)";
        } else {
            mistakes++;
            if (i >= 0) btns[i].classList.add("is-wrong");
            fb.textContent = (i < 0 ? "Tiden er gået" : "Forkert") + " – rigtigt svar: " + cur.correct;
            fb.style.color = "var(--lb-bad)";
        }
        renderLives();
        nextId = setTimeout(nextQuestion, ok ? 1200 : 2400);
    }

    document.addEventListener("keydown", e => {
        if (!running || locked || e.target.tagName === "INPUT") return;
        const n = parseInt(e.key, 10);
        if (n >= 1 && n <= 4) answer(n - 1);
    });

    async function finish(cleared) {
        running = false; locked = true;
        clearInterval(timerId); clearTimeout(nextId);
        $("lbCard").hidden = true; $("lbEnd").hidden = false;
        $("lbEndTitle").textContent = cleared ? "Du har klaret alle ord!" : "Spillet er slut";
        $("lbEndScore").textContent = score + " point";
        $("lbEndInfo").textContent = "Gemmer …";
        let info = [];
        if (score === 0) {                                   // nothing to rank
            $("lbEndInfo").textContent = playerName + " – ingen point, resultatet gemmes ikke.";
            renderBoards(playerName);
            return;
        }
        for (const level of playedLevels) {
            const key = LEVEL_KEY[level];
            try {
                const rank = await submitScore(key, playerName, score);
                info.push(level + ": " + (rank ? "plads " + rank : "ikke på top " + TOP_N));
            } catch (e) { info.push(level + ": kunne ikke gemme"); }
        }
        $("lbEndInfo").textContent = playerName + " – " + info.join(" · ");
        renderBoards(playerName);
    }

    function lbReset() {
        $("lbEnd").hidden = true; $("lbStart").hidden = false; $("lbIntro").hidden = false;
        $("lvA").disabled = $("lvB").disabled = false;
        setMsg("");
    }

    /* ── leaderboard storage: shared (Firebase Realtime Database REST) when configured, otherwise this browser only ── */
    function normalize(v) {
        if (!v) return [];
        const arr = Array.isArray(v) ? v : Object.values(v);
        return arr.filter(x => x && typeof x.name === "string" && Number.isFinite(+x.score))
                  .map(x => ({ name: x.name, score: +x.score, t: +x.t || 0 }));
    }
    async function loadBoard(key) {
        if (REMOTE_URL) {
            const res = await fetch(REMOTE_URL + "/leaderboard/" + key + ".json", { cache: "no-store" });
            if (!res.ok) throw new Error("load");
            return normalize(await res.json());
        }
        try { return normalize(JSON.parse(localStorage.getItem(LOCAL_KEY + key) || "[]")); } catch (e) { return []; }
    }
    async function saveBoard(key, list) {
        if (REMOTE_URL) {
            const res = await fetch(REMOTE_URL + "/leaderboard/" + key + ".json", {
                method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(list)
            });
            if (!res.ok) throw new Error("save");
        } else {
            localStorage.setItem(LOCAL_KEY + key, JSON.stringify(list));
        }
    }
    function topEntries(list) {
        const best = new Map();                       // one row per user name: the best score
        list.forEach(x => {
            const k = x.name.toLowerCase();
            const o = best.get(k);
            if (!o || x.score > o.score) best.set(k, x);
        });
        return [...best.values()].sort((a, b) => b.score - a.score || a.t - b.t).slice(0, TOP_N);
    }
    /* returns the rank (1-based) or 0 if the score did not make the list */
    async function submitScore(key, name, sc) {
        const entry = { name, score: sc, t: Date.now() };
        const next  = topEntries([...(await loadBoard(key)), entry]);
        await saveBoard(key, next);
        const i = next.findIndex(x => x.name.toLowerCase() === name.toLowerCase() && x.score === sc);
        return i < 0 ? 0 : i + 1;
    }

    async function renderBoards(me) {
        for (const key of ["A", "B"]) {
            const tb = document.querySelector("#lbBoard" + key + " tbody");
            let list = [];
            try { list = topEntries(await loadBoard(key)); } catch (e) { tb.innerHTML = ""; const r = tb.insertRow(); const c = r.insertCell(); c.colSpan = 3; c.textContent = "Kunne ikke hente listen."; continue; }
            tb.innerHTML = "";
            if (!list.length) { const r = tb.insertRow(); const c = r.insertCell(); c.colSpan = 3; c.textContent = "Ingen resultater endnu."; continue; }
            list.forEach((x, i) => {
                const r = tb.insertRow();
                if (me && x.name.toLowerCase() === me.toLowerCase()) r.className = "me";
                const a = r.insertCell(); a.className = "rank"; a.textContent = i + 1;
                const b = r.insertCell(); b.textContent = x.name;               // textContent: names are never interpreted as HTML
                const c = r.insertCell(); c.className = "pts"; c.textContent = x.score;
            });
        }
        $("lbScope").textContent = REMOTE_URL ? "" : "Listen gemmes kun i denne browser.";
    }

    try { $("lbName").value = localStorage.getItem(NAME_KEY) || ""; } catch (e) {}
    $("lbName").addEventListener("keydown", e => { if (e.key === "Enter") lbStart(); });
    renderBoards();
</script>
