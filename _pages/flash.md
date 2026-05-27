---
layout: archive
title: ""
permalink: /flash/
---

{% include audio-script.html %}

<style>
    .flashcard {
        margin: 20px auto;
        padding: 20px;
        border: 2px solid grey;
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .flashcard div { width: 100%; text-align: left; margin-bottom: 10px; display: flex; }
    input { margin-top: 10px; text-align: center; display: block; width: 100%; }
    button { margin: 10px auto; padding: 10px; cursor: pointer; text-align: center; display: block; }
    .checkbox-container { display: flex; justify-content: center; gap: 50px; }
    .checkbox-container label { display: flex; align-items: center; gap: 5px; }
</style>

<script>
    const INDEX_URL = "/dansk/vocabulary-index.json";
    let allWords = [];
    let loaded   = false;
    let currentWord  = null;
    let displayField = "";
    let isFlash = true;

    async function loadIndex() {
        if (loaded) return;
        const res = await fetch(INDEX_URL);
        allWords = await res.json();
        loaded = true;
    }

    function getCheckedTypes() {
        return ["adj","sub","verb"]
            .filter(t => document.getElementById(t).checked);
    }

    async function generateFlashCard() {
        await loadIndex();
        const types = getCheckedTypes();
        const pool  = allWords.filter(e => types.includes(e.type));
        if (pool.length === 0) {
            document.getElementById("question").innerHTML = "Ingen ord tilgængelige, tjek valg af kategori!";
            return;
        }
        currentWord  = pool[Math.floor(Math.random() * pool.length)];
        const fields = ["dansk","ipa","engelsk"];
        displayField = fields[Math.floor(Math.random() * fields.length)];
        document.getElementById("question").innerHTML = `
            <div><strong>Dansk:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${displayField === "dansk"  ? currentWord.dansk   : ""}</div>
            <div><strong>Udtale:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${displayField === "ipa"    ? currentWord.ipa     : ""}</div>
            <div><strong>Engelsk:&nbsp;&nbsp;&nbsp;</strong> ${displayField === "engelsk" ? currentWord.engelsk : ""}</div>
            <input type="text" id="answer" placeholder="Skriv dit svar" onmouseenter="this.select()">
        `;
    }

    function showAnswer() {
        if (!currentWord) return;
        const userAnswer = document.getElementById("answer")?.value || "";
        const audioHTML = currentWord.mp3
            ? `<audio id="fc_${currentWord.audio_id}" src="${currentWord.mp3}" style="display:none;"></audio>` +
              `<span onclick="playSound('fc_${currentWord.audio_id}');" style="cursor:pointer;color:blue;">${currentWord.ipa}</span>`
            : currentWord.ipa;
        document.getElementById("question").innerHTML = `
            <div><strong>Dansk:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${currentWord.dansk}</div>
            <div><strong>Udtale:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${audioHTML}</div>
            <div><strong>Engelsk:&nbsp;&nbsp;&nbsp;</strong> ${currentWord.engelsk}</div>
            <input type="text" id="answer" placeholder="Skriv dit svar">
        `;
        document.getElementById("answer").value = userAnswer;
    }

    async function toggleFlashCard() {
        const button = document.getElementById("toggleButton");
        if (isFlash) {
            await generateFlashCard();
            button.innerText = "Bingo";
        } else {
            showAnswer();
            button.innerText = "Flash";
        }
        isFlash = !isFlash;
    }
</script>

<div class="checkbox-container">
    <label><input type="checkbox" id="adj"  checked> Adjektiver </label>
    <label><input type="checkbox" id="sub"  checked> Substantiver </label>
    <label><input type="checkbox" id="verb" checked> Verber </label>
</div>

<div class="flashcard">
    <p id="question">Klik på »Flash« for at starte</p>
</div>
<button id="toggleButton" onclick="toggleFlashCard()">Flash</button>
