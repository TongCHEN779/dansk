---
layout: archive
title: ""
permalink: /flash/
---

{% include audio-script.html %}

<style>
    /* ── layout ── */
    .checkbox-container { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
    .checkbox-container label { display: flex; align-items: center; gap: 5px; }
    .btn-row { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin: 8px 0; }

    /* ── flashcard ── */
    .flashcard {
        margin: 16px auto;
        padding: 20px;
        border: 2px solid grey;
        width: 100%;
        min-height: 220px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .flashcard div { width: 100%; text-align: left; margin-bottom: 8px; display: flex; }
    .flashcard input { margin-top: 10px; text-align: center; display: block; width: 100%; }

    /* ── buttons ── */
    button {
        padding: 8px 18px;
        cursor: pointer;
        border: 1px solid #aaa;
        border-radius: 4px;
        background: #f8f8f8;
        font-size: 14px;
    }
    button:hover { background: #e8e8e8; }
    button:disabled { opacity: 0.4; cursor: default; }
    #markBtn.marked { background: #fff3cd; border-color: #f0ad4e; }

    /* ── bank panel ── */
    #bankPanel { margin-top: 28px; }
    #bankPanel h3 { margin-bottom: 8px; }
    #bankPanel table { border-collapse: collapse; width: 100%; }
    #bankPanel tr:nth-child(even) { background: #f2f2f2; }
    #bankPanel th, #bankPanel td { border: 1px solid #ddd; padding: 7px; text-align: left; font-size: 13px; }
    #bankPanel td:last-child { text-align: center; width: 36px; }
    .remove-btn { background: none; border: none; color: #c00; font-size: 16px;
                  padding: 0; cursor: pointer; line-height: 1; }
    #emptyMsg { color: #888; font-style: italic; }
    #bankCount { font-size: 12px; color: #666; margin-left: 8px; }
</style>

<script>
    const INDEX_URL = "/dansk/vocabulary-index.json";
    const BANK_KEY  = "flashBankV1";

    let allWords    = [];
    let loaded      = false;
    let currentWord = null;
    let displayField = "";
    let isFlash     = true;          // true = show Flash, false = show Bingo
    let useBankOnly = false;

    /* ── storage ── */
    function loadBank() {
        try { return JSON.parse(localStorage.getItem(BANK_KEY) || "[]"); }
        catch { return []; }
    }
    function saveBank(bank) {
        localStorage.setItem(BANK_KEY, JSON.stringify(bank));
    }
    function bankKey(word) { return word.type + "|" + word.dansk; }
    function isInBank(word) {
        return loadBank().some(w => bankKey(w) === bankKey(word));
    }
    function addToBank(word) {
        const bank = loadBank();
        if (!bank.some(w => bankKey(w) === bankKey(word))) {
            bank.push(word);
            saveBank(bank);
        }
    }
    function removeFromBank(key) {
        saveBank(loadBank().filter(w => bankKey(w) !== key));
        renderBank();
        updateMarkButton();
    }
    function clearBank() {
        if (!confirm("Ryd hele banken?")) return;
        saveBank([]);
        renderBank();
        updateMarkButton();
    }

    /* ── index ── */
    async function loadIndex() {
        if (loaded) return;
        const res = await fetch(INDEX_URL);
        allWords = await res.json();
        loaded = true;
    }

    function getCheckedTypes() {
        return ["adj","sub","verb"].filter(t => document.getElementById(t).checked);
    }

    function getPool() {
        if (useBankOnly) {
            const bank = loadBank();
            const types = getCheckedTypes();
            return bank.filter(w => types.includes(w.type));
        }
        const types = getCheckedTypes();
        return allWords.filter(e => types.includes(e.type));
    }

    /* ── flashcard ── */
    async function generateFlashCard() {
        await loadIndex();
        const pool = getPool();
        if (pool.length === 0) {
            document.getElementById("question").innerHTML =
                useBankOnly ? "Ingen ord i banken for valgte kategorier — tilføj ord med ★-knappen!"
                            : "Ingen ord tilgængelige, tjek valg af kategori!";
            return;
        }
        currentWord  = pool[Math.floor(Math.random() * pool.length)];
        const fields = ["dansk", "ipa", "engelsk"];
        displayField = fields[Math.floor(Math.random() * fields.length)];
        document.getElementById("question").innerHTML = `
            <div><strong>Dansk:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${displayField === "dansk"   ? currentWord.dansk   : ""}</div>
            <div><strong>Udtale:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${displayField === "ipa"     ? currentWord.ipa     : ""}</div>
            <div><strong>Engelsk:&nbsp;&nbsp;&nbsp;</strong> ${displayField === "engelsk" ? currentWord.engelsk : ""}</div>
            <input type="text" id="answer" placeholder="Skriv dit svar" onmouseenter="this.select()">
        `;
        updateMarkButton();
    }

    function showAnswer() {
        if (!currentWord) return;
        const userAnswer = document.getElementById("answer")?.value || "";
        const audioHTML  = currentWord.mp3
            ? `<audio id="fc_${currentWord.audio_id}" src="${currentWord.mp3}" style="display:none;"></audio>` +
              `<span onclick="playSound('fc_${currentWord.audio_id}');" style="cursor:pointer;color:blue;">${currentWord.ipa}</span>`
            : (currentWord.ipa || "—");
        document.getElementById("question").innerHTML = `
            <div><strong>Dansk:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${currentWord.dansk}</div>
            <div><strong>Udtale:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${audioHTML}</div>
            <div><strong>Engelsk:&nbsp;&nbsp;&nbsp;</strong> ${currentWord.engelsk}</div>
            <input type="text" id="answer" placeholder="Skriv dit svar">
        `;
        document.getElementById("answer").value = userAnswer;
        updateMarkButton();
    }

    async function toggleFlashCard() {
        const btn = document.getElementById("toggleButton");
        if (isFlash) {
            await generateFlashCard();
            btn.innerText = "Bingo";
        } else {
            showAnswer();
            btn.innerText = "Flash";
        }
        isFlash = !isFlash;
    }

    /* ── mark ── */
    function updateMarkButton() {
        const btn = document.getElementById("markBtn");
        if (!currentWord) { btn.disabled = true; return; }
        btn.disabled = false;
        const inBank = isInBank(currentWord);
        btn.textContent = inBank ? "★ Gemt" : "☆ Gem";
        btn.classList.toggle("marked", inBank);
    }

    function toggleMark() {
        if (!currentWord) return;
        if (isInBank(currentWord)) {
            removeFromBank(bankKey(currentWord));
        } else {
            addToBank(currentWord);
            renderBank();
            updateMarkButton();
        }
    }

    /* ── bank mode toggle ── */
    function toggleBankMode() {
        useBankOnly = document.getElementById("bankModeCheck").checked;
        // Reset card when switching mode
        currentWord = null;
        isFlash = true;
        document.getElementById("toggleButton").innerText = "Flash";
        document.getElementById("question").innerHTML = useBankOnly
            ? "Øver ord fra banken — klik »Flash« for at starte"
            : "Klik på »Flash« for at starte";
        updateMarkButton();
    }

    /* ── bank panel ── */
    function renderBank() {
        const bank = loadBank();
        const tbody = document.getElementById("bankBody");
        const empty = document.getElementById("emptyMsg");
        const count = document.getElementById("bankCount");
        count.textContent = bank.length ? `(${bank.length})` : "";
        if (bank.length === 0) {
            empty.style.display = "block";
            tbody.innerHTML = "";
            return;
        }
        empty.style.display = "none";
        tbody.innerHTML = bank.map(w => {
            const key = (bankKey(w)).replace(/'/g, "\\'");
            const audioHTML = w.mp3
                ? `<audio id="bk_${w.audio_id}" src="${w.mp3}" style="display:none;"></audio>` +
                  `<span onclick="playSound('bk_${w.audio_id}');" style="cursor:pointer;color:blue;">${w.ipa}</span>`
                : (w.ipa || "");
            return `<tr>
                <td>${w.dansk}</td>
                <td>${audioHTML}</td>
                <td>${w.engelsk}</td>
                <td><button class="remove-btn" onclick="removeFromBank('${key}')" title="Fjern">✕</button></td>
            </tr>`;
        }).join("");
    }

    document.addEventListener("DOMContentLoaded", () => {
        updateMarkButton();
        renderBank();
    });
</script>

<!-- category checkboxes -->
<div class="checkbox-container">
    <label><input type="checkbox" id="adj"  checked> Adjektiver </label>
    <label><input type="checkbox" id="sub"  checked> Substantiver </label>
    <label><input type="checkbox" id="verb" checked> Verber </label>
</div>

<!-- mode toggle -->
<div style="text-align:center; margin: 6px 0; font-size:14px;">
    <label style="cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
        <input type="checkbox" id="bankModeCheck" onchange="toggleBankMode()" style="display:inline; width:auto; margin:0;">
        Øv kun ord fra min bank
    </label>
</div>

<!-- flashcard -->
<div class="flashcard">
    <p id="question">Klik på »Flash« for at starte</p>
</div>

<!-- action buttons -->
<div class="btn-row">
    <button id="toggleButton" onclick="toggleFlashCard()">Flash</button>
    <button id="markBtn" onclick="toggleMark()" disabled>☆ Gem</button>
</div>

<!-- word bank panel -->
<div id="bankPanel">
    <h3>📚 Min Ordbank <span id="bankCount"></span></h3>
    <p id="emptyMsg">Banken er tom. Klik »☆ Gem« under et flashkort for at tilføje ord.</p>
    <table id="bankTable">
        <thead>
            <tr>
                <th>Dansk</th>
                <th>Udtale</th>
                <th>Engelsk</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="bankBody"></tbody>
    </table>
    <div class="btn-row" style="margin-top:8px;">
        <button onclick="clearBank()" style="font-size:12px; padding:5px 12px;">🗑 Ryd bank</button>
    </div>
</div>
