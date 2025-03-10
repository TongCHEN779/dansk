---
layout: archive
title: ""
permalink: /ord_og_gram/main/
search: false
---

<style>
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
        { x: 0.1, y: 0.2, text: "i", audioId: "i", audioSrc: "" },
        { x: 0.3, y: 0.4, text: "e", audioId: "i", audioSrc: "" },
        { x: 0.5, y: 0.6, text: "ε", audioId: "i", audioSrc: "" },
        { x: 0.7, y: 0.8, text: "ɔ", audioId: "i", audioSrc: "" },
        { x: 0.9, y: 1.0, text: "æ", audioId: "i", audioSrc: "" },
        { x: 0.2, y: 0.1, text: "y", audioId: "i", audioSrc: "" },
        { x: 0.4, y: 0.3, text: "ø", audioId: "i", audioSrc: "" },
        { x: 0.6, y: 0.5, text: "œ", audioId: "i", audioSrc: "" },
        { x: 0.8, y: 0.7, text: "ɶ", audioId: "i", audioSrc: "" },
        { x: 1.0, y: 0.9, text: "a", audioId: "i", audioSrc: "" },
        { x: 0.8, y: 0.3, text: "ə", audioId: "i", audioSrc: "" },
        { x: 1.1, y: 0.8, text: "ʌ", audioId: "i", audioSrc: "" },
        { x: 1.1, y: 0.6, text: "ɒ", audioId: "i", audioSrc: "" },
        { x: 1.1, y: 0.45, text: "ɔ", audioId: "i", audioSrc: "" },
        { x: 1.1, y: 0.3, text: "o", audioId: "i", audioSrc: "" },
        { x: 1.1, y: 0.1, text: "u", audioId: "i", audioSrc: "" }
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
        const xPos = 50 + x * 400; // Scale X (0 to 1)
        const yPos = 450 - y * 400; // Scale Y (0 to 1)
        // Draw grey ball
        ctx.beginPath();
        ctx.arc(xPos, yPos, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        // Add clickable text centered in the ball
        const span = document.createElement("span");
        span.innerText = text;
        span.className = "audio-text";
        span.style.left = `${xPos}px`;
        span.style.top = `${yPos-5}px`;
        span.onclick = () => document.getElementById(audioId).play();
        document.body.appendChild(span);
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