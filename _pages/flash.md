---
layout: archive
title: ""
permalink: /flash/
---

<style>
    body {
        font-family: Arial, sans-serif;
        text-align: center;
    }
    .flashcard {
        margin: 20px auto;
        padding: 20px;
        border: 2px solid grey;
        width:100%;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .flashcard div {
        width: 100%; /* Makes each section take up most of the card */
        text-align: left;
        margin-bottom: 10px; /* Adds space between the sections */
        display: flex;
    }
    input {
        margin-top: 10px;
        text-align: center;
        display: block;
        width: 100%;
    }
    button {
        margin-top: 10px;
        padding: 10px;
        cursor: pointer;
    }
    .checkbox-container {
        display: flex;
        justify-content: center;
        gap: 50px;
    }
    .checkbox-container label {
        display: flex;
        align-items: center;
        gap: 5px;
    }
</style>

<script>
    let words = [];
    let allPages = [
        { name: "Adjektiver", url: "/dansk/ord_og_gram/adj/", id: "adj" },
        { name: "Substantiver", url: "/dansk/ord_og_gram/sub/", id: "sub" },
        { name: "Verber", url: "/dansk/ord_og_gram/verb/", id: "verb" }
    ];
    async function loadWords() {
        let allRows = [];
        let pagesToSearch = allPages.filter(page => document.getElementById(page.id).checked);
        for (const page of pagesToSearch) {
            try {
                const response = await fetch(page.url);
                const text = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, "text/html");
                const rows = doc.querySelectorAll("tr");
                rows.forEach(row => {
                    const cells = row.querySelectorAll("td");
                    if (cells.length >= 3) {
                        let EngelskIndex = (page.name === "Substantiver" || page.name === "Verber") ? cells.length - 2 : cells.length - 1;
                        allRows.push({
                            Dansk: cells[0].innerHTML,
                            Udtale: cells[1].innerHTML,
                            Engelsk: cells[EngelskIndex].innerText.trim()
                        });
                    }
                });
            } catch (error) {
                console.error(`Failed to load ${page.url}:`, error);
            }
        }
        words = allRows;
    }
    let currentWord = null;
    let displayOption = "";
    async function generateFlashCard() {
        await loadWords();
        if (words.length === 0) {
            document.getElementById("question").innerHTML = "Ingen ord tilgængelige, tjek valg af kategori!";
            return;
        }
        currentWord = words[Math.floor(Math.random() * words.length)];
        const options = ["Dansk", "Udtale", "Engelsk"];
        displayOption = options[Math.floor(Math.random() * options.length)];
        // Reset all content to blank
        document.getElementById("question").innerHTML = `
            <div><strong>Dansk:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${displayOption === "Dansk" ? currentWord.Dansk : ""}</div>
            <div><strong>Udtale:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${displayOption === "Udtale" ? currentWord.Udtale : ""}</div>
            <div><strong>Engelsk:&nbsp;&nbsp;&nbsp;</strong> ${displayOption === "Engelsk" ? currentWord.Engelsk : ""}</div>
            <input type="text" id="answer" placeholder="Skriv dit svar" onmouseenter="this.select()">
        `;
        document.getElementById("answer").value = "";
    }
    function showAnswer() {
        if (!currentWord) return;
        // Preserve the user's input
        let userAnswer = document.getElementById("answer").value;
        // Display all details
        document.getElementById("question").innerHTML = `
            <div><strong>Dansk:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${currentWord.Dansk}</div>
            <div><strong>Udtale:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${currentWord.Udtale}</div>
            <div><strong>Engelsk:&nbsp;&nbsp;&nbsp;</strong> ${currentWord.Engelsk}</div>
            <input type="text" id="answer" placeholder="Type your answer">
        `;

        // Restore the user's input
        document.getElementById("answer").value = userAnswer;
    }
    function playSound(soundId) {
        var audioElement = document.getElementById(soundId);
        if (audioElement) {
            audioElement.play();
        }
    }
    let isFlash = true;
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
    <label><input type="checkbox" id="adj" checked> Adjektiver </label>
    <label><input type="checkbox" id="sub" checked> Substantiver </label>
    <label><input type="checkbox" id="verb" checked> Verber </label>
</div>

<!-- <button onclick="generateFlashCard()">Flash</button> -->
<div class="flashcard">
    <p id="question">Klik på »Flash« for at starte</p>
</div>
<!-- <button onclick="showAnswer()">Bingo</button> -->
<button id="toggleButton" onclick="toggleFlashCard()">Flash</button>