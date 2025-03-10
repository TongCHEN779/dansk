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
    #canvas-container {
        position: relative; /* Now, text will be positioned relative to this */
        display: inline-block; /* Ensures the div only takes up needed space */
    }
    canvas {
        display: block; /* Prevents extra spacing */
        position: relative; /* Keeps canvas correctly positioned */
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
<div id="canvas-container"><canvas id="axisCanvas" width="1000" height="500"></canvas></div>
<script>
    const canvas = document.getElementById("axisCanvas");
    const ctx = canvas.getContext("2d");
    const sounds = [
        { x: 0.1, y: 0.2, text: "i", audioId: "i", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/i.mp3" },
        { x: 0.3, y: 0.4, text: "e", audioId: "e", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/e.mp3" },
        { x: 0.5, y: 0.6, text: "ε", audioId: "ε", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ε.mp3" },
        { x: 0.7, y: 0.8, text: "æ", audioId: "æ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/æ.mp3" },
        { x: 0.2, y: 0.1, text: "y", audioId: "y", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/y.mp3" },
        { x: 0.4, y: 0.3, text: "ø", audioId: "ø", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ø.mp3" },
        { x: 0.6, y: 0.5, text: "œ", audioId: "œ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/œ.mp3" },
        { x: 0.8, y: 0.7, text: "ɶ", audioId: "ɶ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ɶ.mp3" },
        { x: 0.9, y: 0.9, text: "a", audioId: "a", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/a.mp3" },
        { x: 0.8, y: 0.3, text: "ə", audioId: "ə", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ə.mp3" },
        { x: 1.0, y: 0.8, text: "ʌ", audioId: "ʌ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ʌ.mp3" },
        { x: 1.0, y: 0.6, text: "ɒ", audioId: "ɒ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ɒ.mp3" },
        { x: 1.0, y: 0.45, text: "ɔ", audioId: "ɔ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ɔ.mp3" },
        { x: 1.0, y: 0.3, text: "o", audioId: "o", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/o.mp3" },
        { x: 1.0, y: 0.1, text: "u", audioId: "u", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/u.mp3" },
        { x: 1.3, y: 1.0, text: "A", audioId: "A", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/A.mp3" },
        { x: 1.5, y: 1.0, text: "B", audioId: "B", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/B.mp3" },
        { x: 1.7, y: 1.0, text: "C", audioId: "C", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/C.mp3" },
        { x: 1.9, y: 1.0, text: "D", audioId: "D", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/D.mp3" },
        { x: 2.1, y: 1.0, text: "E", audioId: "E", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/E.mp3" },
        { x: 1.3, y: 0.8, text: "F", audioId: "F", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/F.mp3" },
        { x: 1.5, y: 0.8, text: "G", audioId: "G", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/G.mp3" },
        { x: 1.7, y: 0.8, text: "H", audioId: "H", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/H.mp3" },
        { x: 1.9, y: 0.8, text: "I", audioId: "I", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/I.mp3" },
        { x: 2.1, y: 0.8, text: "J", audioId: "J", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/J.mp3" },
        { x: 1.3, y: 0.6, text: "K", audioId: "K", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/K.mp3" },
        { x: 1.5, y: 0.6, text: "L", audioId: "L", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/L.mp3" },
        { x: 1.7, y: 0.6, text: "M", audioId: "M", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/M.mp3" },
        { x: 1.9, y: 0.6, text: "N", audioId: "N", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/N.mp3" },
        { x: 2.1, y: 0.6, text: "O", audioId: "O", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/O.mp3" },
        { x: 1.3, y: 0.4, text: "P", audioId: "P", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/P.mp3" },
        { x: 1.5, y: 0.4, text: "Q", audioId: "Q", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/Q.mp3" },
        { x: 1.7, y: 0.4, text: "R", audioId: "R", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/R.mp3" },
        { x: 1.9, y: 0.4, text: "S", audioId: "S", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/S.mp3" },
        { x: 2.1, y: 0.4, text: "T", audioId: "T", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/T.mp3" },
        { x: 1.3, y: 0.2, text: "U", audioId: "U", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/U.mp3" },
        { x: 1.5, y: 0.2, text: "V", audioId: "V", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/V.mp3" },
        { x: 1.7, y: 0.2, text: "W", audioId: "W", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/W.mp3" },
        { x: 1.9, y: 0.2, text: "X", audioId: "X", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/X.mp3" },
        { x: 2.1, y: 0.2, text: "Y", audioId: "Y", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/Y.mp3" },
        { x: 1.3, y: 0.0, text: "Z", audioId: "Z", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/Z.mp3" },
        { x: 1.5, y: 0.0, text: "Æ", audioId: "Æ", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/AE.mp3" },
        { x: 1.7, y: 0.0, text: "Ø", audioId: "Ø", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/OE.mp3" },
        { x: 1.9, y: 0.0, text: "Å", audioId: "Å", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/AO.mp3" },
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
        // Centering fix:
        span.style.position = "absolute";
        span.style.left = `${xPos}px`;
        span.style.top = `${yPos-5}px`;
        span.style.transform = "translate(-50%, -50%)"; // Centers text in the circle
        span.onclick = () => {
            const audio = document.getElementById(audioId);
            if (audio) {
                const profileImage = document.getElementById("profile-avatar");
                if (profileImage) {
                    profileImage.src = "https://tongchen779.github.io/dansk/images/young_man.GIF";
                }
                audio.play();
                audio.onended = () => {
                    if (profileImage) {
                        profileImage.src = "https://tongchen779.github.io/dansk/images/young_man.png";
                    }
                };
            }
        };
        canvas.parentNode.appendChild(span); // Append to canvas container
    }
    function drawDottedDiagonal() {
        ctx.setLineDash([5, 5]); // Set dotted line pattern
        ctx.beginPath();
        ctx.moveTo(50, 450); // Bottom-left corner
        ctx.lineTo(450, 50); // Top-right corner
        ctx.stroke();
        ctx.setLineDash([]); // Reset line dash
        ctx.setLineDash([5, 5]); // Set dotted line pattern
        ctx.beginPath();
        ctx.moveTo(520, 450); // Bottom-left corner
        ctx.lineTo(520, 50); // Top-right corner
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

<script>
    function playSound(soundId) {
        var audioElement = document.getElementById(soundId);
        var profileImage = document.getElementById("profile-avatar");
        if (audioElement && profileImage) {
            // Check if the audio has valid content
            if (!audioElement.src || audioElement.readyState < 2 || audioElement.duration === 0 || isNaN(audioElement.duration)) {
                console.warn("Invalid or empty audio source.");
                return;
            }
            // Change image to "speaking" version
            profileImage.src = "https://tongchen779.github.io/dansk/images/young_man.GIF";
            // Play audio
            audioElement.play();
            // When audio ends, revert image back
            audioElement.onended = function () {
                profileImage.src = "https://tongchen779.github.io/dansk/images/young_man.png";
            };
        }
    }
</script>
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2; /* Light gray background for even rows */
    }
    tr:nth-child(odd) {
        background-color: #ffffff; /* White background for odd rows */
    }
    th, td {
        border: 1px solid #dddddd;
        padding: 8px;
        text-align: left;
    }
</style>

<h1 style="text-align: center;"> Front & Unlabialized </h1>
<table align="center" cellspacing="5" id="wordTable" style="text-align: left" width="100%">
<tr>
<th> Letter </th>
<th> Long & Open </th>
<th> Short & Closed </th>
<th> Before "r" </th>
<th> After "r" </th>
</tr>
<tr>
<td rowspan="4" style="text-align: center">i</td>
<td style="text-align: center">[i:]</td>
<td style="text-align: center">[i]</td>
<td style="text-align: center">[i]</td>
<td style="text-align: center">[i]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=skrive">skrive</a><audio id="skrive" src="https://static.ordnet.dk/mp3/11046/11046982_1.mp3" style="display: none;"></audio><span onclick="playSound('skrive');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, pige, time </td>
<td> musik, lille, minut, cifaret </td>
<td> firma, firs </td>
<td> ris, fri, riste </td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[e]</td>
<td style="text-align: center">[ε]</td>
<td style="text-align: center"></td>
</tr>
<tr>
<td></td>
<td> ikke, ligge, vil, hvis </td>
<td></td>
<td> briller, dikke </td>
</tr>
</table>