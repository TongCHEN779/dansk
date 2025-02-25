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
            width: 300px;
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        input {
            margin-top: 10px;
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

        async function loadWords() {
            const files = ["adj.md", "sub.md", "verb.md"];
            let allRows = [];
            for (const file of files) {
                const response = await fetch(file);
                const text = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, "text/html");
                const rows = doc.querySelectorAll("tr");
                rows.forEach(row => {
                    const cells = row.querySelectorAll("td");
                    if (cells.length >= 3) {
                        allRows.push({
                            danish: cells[0].innerHTML,
                            pronunciation: cells[1].innerHTML,
                            english: cells[cells.length - 1].innerText.trim()
                        });
                    }
                });
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
            const options = ["danish", "pronunciation", "english"];
            displayOption = options[Math.floor(Math.random() * options.length)];
            document.getElementById("question").innerHTML = currentWord[displayOption];
            document.getElementById("answer").value = "";
        }

        function showAnswer() {
            if (!currentWord) return;
            let answer;
            if (displayOption === "danish") {
                answer = `Pronunciation: ${currentWord.pronunciation} → English: ${currentWord.english}`;
            } else if (displayOption === "pronunciation") {
                answer = `Danish: ${currentWord.danish} → English: ${currentWord.english}`;
            } else {
                answer = `Danish: ${currentWord.danish} → Pronunciation: ${currentWord.pronunciation}`;
            }
            document.getElementById("question").innerHTML += "<br>" + answer;
        }
    </script>
</body>
</html>
