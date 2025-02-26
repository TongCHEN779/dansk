---
layout: archive
title: ""
permalink: /flash/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flash Card Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        .flashcard {
            margin: 20px auto;
            padding: 20px;
            border: 2px solid black;
            width: 1000px;
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
            width: 80%;
        }
        button {
            margin-top: 10px;
            padding: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <button onclick="generateFlashCard()">Flash</button>
    <div class="flashcard">
        <p id="question">Click "Flash" to start</p>
        <input type="text" id="answer" placeholder="Type your answer">
    </div>
    <button onclick="showAnswer()">Bingo</button>

    <script>
        let words = [];
        let pagesToSearch = [
            { name: "Adjektiver", url: "/dansk/ord_og_gram/adj/" },
            { name: "Substantiver", url: "/dansk/ord_og_gram/sub/" },
            { name: "Verber", url: "/dansk/ord_og_gram/verb/" }
        ];

        async function loadWords() {
            let allRows = [];
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
            if (words.length === 0) {
                await loadWords();
            }
            currentWord = words[Math.floor(Math.random() * words.length)];
            const options = ["Dansk", "Udtale", "Engelsk"];
            displayOption = options[Math.floor(Math.random() * options.length)];
            document.getElementById("question").innerHTML = `${displayOption}: ${currentWord[displayOption]}`;
            document.getElementById("answer").value = "";
        }

        function showAnswer() {
            if (!currentWord) return;
            let answer;
            if (displayOption === "Dansk") {
                answer = `Udtale: ${currentWord.Udtale} <br> Engelsk: ${currentWord.Engelsk}`;
            } else if (displayOption === "Udtale") {
                answer = `Dansk: ${currentWord.Dansk} <br> Engelsk: ${currentWord.Engelsk}`;
            } else {
                answer = `Dansk: ${currentWord.Dansk} <br> Udtale: ${currentWord.Udtale}`;
            }
            document.getElementById("question").innerHTML += "<br>" + answer;
        }

        async function generateFlashCard() {
            if (words.length === 0) {
                await loadWords();
            }
            currentWord = words[Math.floor(Math.random() * words.length)];
            const options = ["Dansk", "Udtale", "Engelsk"];
            displayOption = options[Math.floor(Math.random() * options.length)];

            // Reset all content to blank
            document.getElementById("question").innerHTML = `
                <div><strong>Dansk:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${displayOption === "Dansk" ? currentWord.Dansk : ""}</div>
                <div><strong>Udtale:&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${displayOption === "Udtale" ? currentWord.Udtale : ""}</div>
                <div><strong>Engelsk:&nbsp;&nbsp;&nbsp;</strong> ${displayOption === "Engelsk" ? currentWord.Engelsk : ""}</div>
            `;
            document.getElementById("answer").value = "";
        }

        function showAnswer() {
            if (!currentWord) return;
            // Display all details
            document.getElementById("question").innerHTML = `
                <div><strong>Dansk:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${currentWord.Dansk}</div>
                <div><strong>Udtale:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> ${currentWord.Udtale}</div>
                <div><strong>Engelsk:&nbsp;&nbsp;&nbsp;</strong> ${currentWord.Engelsk}</div>
            `;
        }

        function playSound(soundId) {
            var audioElement = document.getElementById(soundId);
            if (audioElement) {
                audioElement.play();
            }
        }
    </script>
</body>
</html>
