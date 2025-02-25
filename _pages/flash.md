---
layout: archive
title: ""
permalink: /flash/
---

<!DOCTYPE html>
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
        const words = [
            { danish: "en selvforsyning", link: "https://ordnet.dk/ddo/ordbog?query=selvforsyning", pronunciation: "[ˈsεlˌfʌˌsyˀneŋ]", sound: "https://static.ordnet.dk/mp3/40003/40003894_1.mp3", english: "self-sufficiency" },
            { danish: "et hus", link: "https://ordnet.dk/ddo/ordbog?query=hus", pronunciation: "[huːs]", sound: "https://static.ordnet.dk/mp3/sample.mp3", english: "house" }
            // Add more words as needed
        ];

        let currentWord = null;
        let showDanish = true;

        function generateFlashCard() {
            currentWord = words[Math.floor(Math.random() * words.length)];
            showDanish = Math.random() < 0.5;
            document.getElementById("question").innerHTML = showDanish 
                ? `<a href="${currentWord.link}" target="_blank">${currentWord.danish}</a>`
                : currentWord.english;
            document.getElementById("answer").value = "";
        }

        function showAnswer() {
            if (!currentWord) return;
            document.getElementById("question").innerHTML += showDanish 
                ? ` → ${currentWord.english}` 
                : ` → <a href="${currentWord.link}" target="_blank">${currentWord.danish}</a>`;
        }
    </script>
</body>
</html>
