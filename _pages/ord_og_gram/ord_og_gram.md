---
layout: archive
title: ""
permalink: /ord_og_gram/main/
search: false
---

<style>
    body {
        margin: 0;
        padding: 0;
        position: relative;
    }
    canvas {
        display: block; /* Prevent extra spacing */
        position: absolute;
        left: 0;
        top: 0;
    }
    .audio-text {
        position: absolute;
        cursor: pointer;
        text-decoration: underline;
        color: blue;
        font-size: 30px;
        text-align: center;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<canvas id="axisCanvas" width="600" height="500"></canvas>
<script>
    const canvas = document.getElementById("axisCanvas");
    const ctx = canvas.getContext("2d");
    const sounds = [
        { x: 0.1, y: 0.2, text: "i", audioId: "i", audioSrc: "https://tongchen779.github.io/dansk/files/i.mp3" },
        { x: 0.3, y: 0.4, text: "e", audioId: "e", audioSrc: "https://tongchen779.github.io/dansk/files/e.mp3" },
        { x: 0.5, y: 0.6, text: "ε", audioId: "ε", audioSrc: "https://tongchen779.github.io/dansk/files/ε.mp3" },
        { x: 0.7, y: 0.8, text: "æ", audioId: "æ", audioSrc: "https://tongchen779.github.io/dansk/files/æ.mp3" },
        { x: 0.2, y: 0.1, text: "y", audioId: "y", audioSrc: "https://tongchen779.github.io/dansk/files/y.mp3" },
        { x: 0.4, y: 0.3, text: "ø", audioId: "ø", audioSrc: "https://tongchen779.github.io/dansk/files/ø.mp3" },
        { x: 0.6, y: 0.5, text: "œ", audioId: "œ", audioSrc: "https://tongchen779.github.io/dansk/files/œ.mp3" },
        { x: 0.8, y: 0.7, text: "ɶ", audioId: "ɶ", audioSrc: "https://tongchen779.github.io/dansk/files/ɶ.mp3" },
        { x: 0.9, y: 0.9, text: "a", audioId: "a", audioSrc: "https://tongchen779.github.io/dansk/files/a.mp3" },
        { x: 0.8, y: 0.3, text: "ə", audioId: "ə", audioSrc: "https://tongchen779.github.io/dansk/files/ə.mp3" },
        { x: 1.0, y: 0.8, text: "ʌ", audioId: "ʌ", audioSrc: "https://tongchen779.github.io/dansk/files/ʌ.mp3" },
        { x: 1.0, y: 0.6, text: "ɒ", audioId: "ɒ", audioSrc: "https://tongchen779.github.io/dansk/files/ɒ.mp3" },
        { x: 1.0, y: 0.45, text: "ɔ", audioId: "ɔ", audioSrc: "https://tongchen779.github.io/dansk/files/ɔ.mp3" },
        { x: 1.0, y: 0.3, text: "o", audioId: "o", audioSrc: "https://tongchen779.github.io/dansk/files/o.mp3" },
        { x: 1.0, y: 0.1, text: "u", audioId: "u", audioSrc: "https://tongchen779.github.io/dansk/files/u.mp3" }
    ];
    function drawAxis() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        // Draw X and Y axis
        ctx.beginPath();
        ctx.moveTo(50, 450); // X-axis
        ctx.lineTo(500, 450);
        ctx.moveTo(50, 450); // Y-axis
        ctx.lineTo(50, 50); 
        // X-axis arrow
        ctx.moveTo(500, 450);
        ctx.lineTo(490, 445);
        ctx.moveTo(500, 450);
        ctx.lineTo(490, 455);
        // Y-axis arrow
        ctx.moveTo(50, 50);
        ctx.lineTo(45, 60);
        ctx.moveTo(50, 50);
        ctx.lineTo(55, 60);
        ctx.stroke();
        // Labels
        ctx.font = "14px Arial";
        ctx.fillText("Flat", 100, 470);
        ctx.fillText("Round", 420, 470);
        ctx.fillText("Closed", 0, 400);
        ctx.fillText("Open", 10, 100);
    }
    function plotAudioText(x, y, text, audioId) {
        const canvasRect = canvas.getBoundingClientRect(); // Get canvas position
        const xPos = canvasRect.left + 50 + x * 400; // Adjust X relative to canvas
        const yPos = canvasRect.top + 450 - y * 400; // Adjust Y relative to canvas
        // Draw grey ball
        ctx.beginPath();
        ctx.arc(xPos - canvasRect.left, yPos - canvasRect.top, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        // Add clickable text centered in the ball
        const span = document.createElement("span");
        span.innerText = text;
        span.className = "audio-text";
        // Position relative to canvas
        span.style.position = "absolute";
        span.style.left = `${xPos}px`;
        span.style.top = `${yPos}px`;
        span.style.transform = "translate(-50%, -50%)"; // Center text inside the ball
        span.onclick = () => document.getElementById(audioId).play();
        document.body.appendChild(span); // Keep appending to body, but now with correct position
    }
    function drawDottedDiagonal() {
        ctx.setLineDash([5, 5]); // Set dotted line pattern
        ctx.beginPath();
        ctx.moveTo(50, 450); // Bottom-left corner
        ctx.lineTo(450, 50); // Top-right corner
        ctx.stroke();
        ctx.setLineDash([]); // Reset line dash
    }
    drawAxis();
    drawDottedDiagonal();
    sounds.forEach(sound => {
        const audio = document.createElement("audio");
        audio.id = sound.audioId;
        audio.src = sound.audioSrc;
        audio.style.display = "none";
        document.body.appendChild(audio);
        plotAudioText(sound.x, sound.y, sound.text, sound.audioId);
    });
</script>