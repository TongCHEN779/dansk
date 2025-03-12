---
layout: archive
title: ""
permalink: /ord_og_gram/main/
search: false
---

<!-- <style>
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
        width: 100%;
    }
    .audio-text {
        position: relative;
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
<div id="canvas-container"><canvas height="500" id="axisCanvas1" width="500"></canvas></div>
<script>
    const canvas1 = document.getElementById("axisCanvas1");
    const ctx1 = canvas1.getContext("2d");
    const sounds1 = [
        { x: .1, y: .2, text: "i", audioId: "i", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/i.mp3" },
        { x: .3, y: .4, text: "e", audioId: "e", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/e.mp3" },
        { x: .5, y: .6, text: "ε", audioId: "ε", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ε.mp3" },
        { x: .7, y: .8, text: "æ", audioId: "æ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/æ.mp3" },
        { x: .2, y: .1, text: "y", audioId: "y", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/y.mp3" },
        { x: .4, y: .3, text: "ø", audioId: "ø", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ø.mp3" },
        { x: .6, y: .5, text: "œ", audioId: "œ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/œ.mp3" },
        { x: .8, y: .7, text: "ɶ", audioId: "ɶ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ɶ.mp3" },
        { x: .9, y: .9, text: "ɑ", audioId: "ɑ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/a.mp3" },
        { x: .8, y: .3, text: "ə", audioId: "ə", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ə.mp3" },
        { x: 1.0, y: .8, text: "ʌ", audioId: "ʌ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ʌ.mp3" },
        { x: 1.0, y: .6, text: "ɒ", audioId: "ɒ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ɒ.mp3" },
        { x: 1.0, y: .45, text: "ɔ", audioId: "ɔ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ɔ.mp3" },
        { x: 1.0, y: .3, text: "o", audioId: "o", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/o.mp3" },
        { x: 1.0, y: .1, text: "u", audioId: "u", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/u.mp3" }
    ];
    function drawAxis() {
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height); 
        // Draw X and Y axis
        ctx1.beginPath();
        ctx1.moveTo(50, 450); // X-axis
        ctx1.lineTo(500, 450);
        ctx1.moveTo(50, 450); // Y-axis
        ctx1.lineTo(50, 50); 
        // X-axis arrow
        ctx1.moveTo(500, 450);
        ctx1.lineTo(490, 445);
        ctx1.moveTo(500, 450);
        ctx1.lineTo(490, 455);
        // Y-axis arrow
        ctx1.moveTo(50, 50);
        ctx1.lineTo(45, 60);
        ctx1.moveTo(50, 50);
        ctx1.lineTo(55, 60);
        ctx1.stroke();
        // Labels
        ctx1.font = "14px Arial";
        ctx1.fillText("Flat", 100, 470);
        ctx1.fillText("Round", 420, 470);
        ctx1.fillText("Closed", 0, 400);
        ctx1.fillText("Open", 10, 100);
    }
    function plotAudioText(x, y, text, audioId) {
        const xPos = 50 + x * 400; // Scale X (0 to 1)
        const yPos = 450 - y * 400; // Scale Y (0 to 1)
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
            const profileImage = document.getElementById("profile-avatar");
            if (audio && profileImage) {
                if (!audio.src || audio.readyState < 2 || audio.duration === 0 || isNaN(audio.duration)) {
                    console.warn("Invalid or empty audio source.");
                    return;
                }
                profileImage.src = "https://tongchen779.github.io/dansk/images/young_man.GIF";
                audio.play();
                audio.onended = () => {
                    profileImage.src = "https://tongchen779.github.io/dansk/images/young_man.png";
                };
            }
        };
        canvas1.parentNode.appendChild(span); // Append to canvas container
    }
    function drawDottedDiagonal() {
        ctx1.setLineDash([5, 5]); // Set dotted line pattern
        ctx1.beginPath();
        ctx1.moveTo(50, 450); // Bottom-left corner
        ctx1.lineTo(450, 50); // Top-right corner
        ctx1.stroke();
        ctx1.setLineDash([]); // Reset line dash
    }
    drawAxis();
    drawDottedDiagonal();
    sounds1.forEach(sound => {
        const audio = document.createElement("audio");
        audio.id = sound.audioId;
        audio.src = sound.audioSrc;
        audio.style.display = "none";
        document.body.appendChild(audio);
        plotAudioText(sound.x, sound.y, sound.text, sound.audioId);
    });
</script>
<div id="canvas-container"><canvas height="500" id="axisCanvas2" width="500"></canvas></div>
<script>
    const canvas2 = document.getElementById("axisCanvas2");
    const ctx2 = canvas2.getContext("2d");
    const sounds2 = [
        { x: .0, y: 1.0, text: "A", audioId: "A", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/A.mp3" },
        { x: .2, y: 1.0, text: "B", audioId: "B", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/B.mp3" },
        { x: .4, y: 1.0, text: "C", audioId: "C", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/C.mp3" },
        { x: .6, y: 1.0, text: "D", audioId: "D", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/D.mp3" },
        { x: .8, y: 1.0, text: "E", audioId: "E", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/E.mp3" },
        { x: .0, y: .8, text: "F", audioId: "F", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/F.mp3" },
        { x: .2, y: .8, text: "G", audioId: "G", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/G.mp3" },
        { x: .4, y: .8, text: "H", audioId: "H", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/H.mp3" },
        { x: .6, y: .8, text: "I", audioId: "I", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/I.mp3" },
        { x: .8, y: .8, text: "J", audioId: "J", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/J.mp3" },
        { x: .0, y: .6, text: "K", audioId: "K", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/K.mp3" },
        { x: .2, y: .6, text: "L", audioId: "L", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/L.mp3" },
        { x: .4, y: .6, text: "M", audioId: "M", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/M.mp3" },
        { x: .6, y: .6, text: "N", audioId: "N", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/N.mp3" },
        { x: .8, y: .6, text: "O", audioId: "O", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/O.mp3" },
        { x: .0, y: .4, text: "P", audioId: "P", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/P.mp3" },
        { x: .2, y: .4, text: "Q", audioId: "Q", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/Q.mp3" },
        { x: .4, y: .4, text: "R", audioId: "R", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/R.mp3" },
        { x: .6, y: .4, text: "S", audioId: "S", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/S.mp3" },
        { x: .8, y: .4, text: "T", audioId: "T", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/T.mp3" },
        { x: .0, y: .2, text: "U", audioId: "U", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/U.mp3" },
        { x: .2, y: .2, text: "V", audioId: "V", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/V.mp3" },
        { x: .4, y: .2, text: "W", audioId: "W", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/W.mp3" },
        { x: .6, y: .2, text: "X", audioId: "X", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/X.mp3" },
        { x: .8, y: .2, text: "Y", audioId: "Y", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/Y.mp3" },
        { x: .0, y: .0, text: "Z", audioId: "Z", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/Z.mp3" },
        { x: .2, y: .0, text: "Æ", audioId: "Æ", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/AE.mp3" },
        { x: .4, y: .0, text: "Ø", audioId: "Ø", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/OE.mp3" },
        { x: .6, y: .0, text: "Å", audioId: "Å", audioSrc: "https://tongchen779.github.io/dansk/files/alphabet/AO.mp3" }
    ];
    function plotAudioText(x, y, text, audioId) {
        const xPos = 50 + x * 400; // Scale X (0 to 1)
        const yPos = 450 - y * 400; // Scale Y (0 to 1)
        // Draw grey ball
        ctx2.beginPath();
        ctx2.arc(xPos, yPos, 20, 0, 2 * Math.PI);
        ctx2.fillStyle = "white";
        ctx2.fill();
        ctx2.stroke();
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
            const profileImage = document.getElementById("profile-avatar");
            if (audio && profileImage) {
                if (!audio.src || audio.readyState < 2 || audio.duration === 0 || isNaN(audio.duration)) {
                    console.warn("Invalid or empty audio source.");
                    return;
                }
                profileImage.src = "https://tongchen779.github.io/dansk/images/young_man.GIF";
                audio.play();
                audio.onended = () => {
                    profileImage.src = "https://tongchen779.github.io/dansk/images/young_man.png";
                };
            }
        };
        canvas2.parentNode.appendChild(span); // Append to canvas container
    }
    sounds2.forEach(sound => {
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
</script> -->
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
<h1 style="text-align: center;"> Dansk Alfabet </h1>
<table align="center" cellspacing="5" id="wordTable" style="text-align: left" width="100%">
<tr>
<td style="text-align: center"><audio id="A" src="https://tongchen779.github.io/dansk/files/alphabet/A.mp3" style="display: none;"></audio><span onclick="playSound('A');" style="cursor: pointer; color: blue;">A/a</span></td>
<td style="text-align: center"><audio id="B" src="https://tongchen779.github.io/dansk/files/alphabet/B.mp3" style="display: none;"></audio><span onclick="playSound('B');" style="cursor: pointer; color: blue;">B/b</span></td>
<td style="text-align: center"><audio id="C" src="https://tongchen779.github.io/dansk/files/alphabet/C.mp3" style="display: none;"></audio><span onclick="playSound('C');" style="cursor: pointer; color: blue;">C/c</span></td>
<td style="text-align: center"><audio id="D" src="https://tongchen779.github.io/dansk/files/alphabet/D.mp3" style="display: none;"></audio><span onclick="playSound('D');" style="cursor: pointer; color: blue;">D/d</span></td>
<td style="text-align: center"><audio id="E" src="https://tongchen779.github.io/dansk/files/alphabet/E.mp3" style="display: none;"></audio><span onclick="playSound('E');" style="cursor: pointer; color: blue;">E/e</span></td>
<td style="text-align: center"><audio id="F" src="https://tongchen779.github.io/dansk/files/alphabet/F.mp3" style="display: none;"></audio><span onclick="playSound('F');" style="cursor: pointer; color: blue;">F/f</span></td>
</tr>
<tr>
<td style="text-align: center"><audio id="G" src="https://tongchen779.github.io/dansk/files/alphabet/G.mp3" style="display: none;"></audio><span onclick="playSound('G');" style="cursor: pointer; color: blue;">G/g</span></td>
<td style="text-align: center"><audio id="H" src="https://tongchen779.github.io/dansk/files/alphabet/H.mp3" style="display: none;"></audio><span onclick="playSound('H');" style="cursor: pointer; color: blue;">H/h</span></td>
<td style="text-align: center"><audio id="I" src="https://tongchen779.github.io/dansk/files/alphabet/I.mp3" style="display: none;"></audio><span onclick="playSound('I');" style="cursor: pointer; color: blue;">I/i</span></td>
<td style="text-align: center"><audio id="J" src="https://tongchen779.github.io/dansk/files/alphabet/J.mp3" style="display: none;"></audio><span onclick="playSound('J');" style="cursor: pointer; color: blue;">J/j</span></td>
<td style="text-align: center"><audio id="K" src="https://tongchen779.github.io/dansk/files/alphabet/K.mp3" style="display: none;"></audio><span onclick="playSound('K');" style="cursor: pointer; color: blue;">K/k</span></td>
<td style="text-align: center"><audio id="L" src="https://tongchen779.github.io/dansk/files/alphabet/L.mp3" style="display: none;"></audio><span onclick="playSound('L');" style="cursor: pointer; color: blue;">L/l</span></td>
</tr>
<tr>
<td style="text-align: center"><audio id="M" src="https://tongchen779.github.io/dansk/files/alphabet/M.mp3" style="display: none;"></audio><span onclick="playSound('M');" style="cursor: pointer; color: blue;">M/m</span></td>
<td style="text-align: center"><audio id="N" src="https://tongchen779.github.io/dansk/files/alphabet/N.mp3" style="display: none;"></audio><span onclick="playSound('N');" style="cursor: pointer; color: blue;">N/n</span></td>
<td style="text-align: center"><audio id="O" src="https://tongchen779.github.io/dansk/files/alphabet/O.mp3" style="display: none;"></audio><span onclick="playSound('O');" style="cursor: pointer; color: blue;">O/o</span></td>
<td style="text-align: center"><audio id="P" src="https://tongchen779.github.io/dansk/files/alphabet/P.mp3" style="display: none;"></audio><span onclick="playSound('P');" style="cursor: pointer; color: blue;">P/p</span></td>
<td style="text-align: center"><audio id="Q" src="https://tongchen779.github.io/dansk/files/alphabet/Q.mp3" style="display: none;"></audio><span onclick="playSound('Q');" style="cursor: pointer; color: blue;">Q/q</span></td>
<td style="text-align: center"><audio id="R" src="https://tongchen779.github.io/dansk/files/alphabet/R.mp3" style="display: none;"></audio><span onclick="playSound('R');" style="cursor: pointer; color: blue;">R/r</span></td>
</tr>
<tr>
<td style="text-align: center"><audio id="S" src="https://tongchen779.github.io/dansk/files/alphabet/S.mp3" style="display: none;"></audio><span onclick="playSound('S');" style="cursor: pointer; color: blue;">S/s</span></td>
<td style="text-align: center"><audio id="T" src="https://tongchen779.github.io/dansk/files/alphabet/T.mp3" style="display: none;"></audio><span onclick="playSound('T');" style="cursor: pointer; color: blue;">T/t</span></td>
<td style="text-align: center"><audio id="U" src="https://tongchen779.github.io/dansk/files/alphabet/U.mp3" style="display: none;"></audio><span onclick="playSound('U');" style="cursor: pointer; color: blue;">U/u</span></td>
<td style="text-align: center"><audio id="V" src="https://tongchen779.github.io/dansk/files/alphabet/V.mp3" style="display: none;"></audio><span onclick="playSound('V');" style="cursor: pointer; color: blue;">V/v</span></td>
<td style="text-align: center"><audio id="W" src="https://tongchen779.github.io/dansk/files/alphabet/W.mp3" style="display: none;"></audio><span onclick="playSound('W');" style="cursor: pointer; color: blue;">W/w</span></td>
<td style="text-align: center"><audio id="X" src="https://tongchen779.github.io/dansk/files/alphabet/X.mp3" style="display: none;"></audio><span onclick="playSound('X');" style="cursor: pointer; color: blue;">X/x</span></td>
</tr>
<tr>
<td style="text-align: center"><audio id="Y" src="https://tongchen779.github.io/dansk/files/alphabet/Y.mp3" style="display: none;"></audio><span onclick="playSound('Y');" style="cursor: pointer; color: blue;">Y/y</span></td>
<td style="text-align: center"><audio id="Z" src="https://tongchen779.github.io/dansk/files/alphabet/Z.mp3" style="display: none;"></audio><span onclick="playSound('Z');" style="cursor: pointer; color: blue;">Z/z</span></td>
<td style="text-align: center"><audio id="Æ" src="https://tongchen779.github.io/dansk/files/alphabet/AE.mp3" style="display: none;"></audio><span onclick="playSound('Æ');" style="cursor: pointer; color: blue;">Æ/æ</span></td>
<td style="text-align: center"><audio id="Ø" src="https://tongchen779.github.io/dansk/files/alphabet/OE.mp3" style="display: none;"></audio><span onclick="playSound('Ø');" style="cursor: pointer; color: blue;">Ø/ø</span></td>
<td style="text-align: center"><audio id="Å" src="https://tongchen779.github.io/dansk/files/alphabet/AO.mp3" style="display: none;"></audio><span onclick="playSound('Å');" style="cursor: pointer; color: blue;">Å/å</span></td>
<td style="text-align: center"></td>
</tr>
</table>
<h1 style="text-align: center;"> Danske Vokaler (tv: tegn i DDO, th: nøjagtig IPA) </h1>
<table align="center" cellspacing="5" id="wordTable" style="text-align: left" width="100%">
<tr>
<td style="text-align: center"><audio id="i" src="https://tongchen779.github.io/dansk/files/vowel/i.mp3" style="display: none;"></audio><span onclick="playSound('i');" style="cursor: pointer; color: blue;">[i/i]</span></td>
<td style="text-align: center"><audio id="e" src="https://tongchen779.github.io/dansk/files/vowel/e.mp3" style="display: none;"></audio><span onclick="playSound('e');" style="cursor: pointer; color: blue;">[e/e̝]</span></td>
<td style="text-align: center"><audio id="ε" src="https://tongchen779.github.io/dansk/files/vowel/ε.mp3" style="display: none;"></audio><span onclick="playSound('ε');" style="cursor: pointer; color: blue;">[ε/e]</span></td>
<td style="text-align: center"><audio id="æ" src="https://tongchen779.github.io/dansk/files/vowel/æ.mp3" style="display: none;"></audio><span onclick="playSound('æ');" style="cursor: pointer; color: blue;">[æ/ε]</span></td>
<td style="text-align: center"><audio id="ɑ" src="https://tongchen779.github.io/dansk/files/vowel/a.mp3" style="display: none;"></audio><span onclick="playSound('ɑ');" style="cursor: pointer; color: blue;">[ɑ/ɑ̈]</span></td>
</tr>
<tr>
<td style="text-align: center"><audio id="y" src="https://tongchen779.github.io/dansk/files/vowel/y.mp3" style="display: none;"></audio><span onclick="playSound('y');" style="cursor: pointer; color: blue;">[y/y]</span></td>
<td style="text-align: center"><audio id="ø" src="https://tongchen779.github.io/dansk/files/vowel/ø.mp3" style="display: none;"></audio><span onclick="playSound('ø');" style="cursor: pointer; color: blue;">[ø/ø̞]</span></td>
<td style="text-align: center"><audio id="œ" src="https://tongchen779.github.io/dansk/files/vowel/œ.mp3" style="display: none;"></audio><span onclick="playSound('œ');" style="cursor: pointer; color: blue;">[œ/œ̝]</span></td>
<td style="text-align: center"><audio id="ɶ" src="https://tongchen779.github.io/dansk/files/vowel/ɶ.mp3" style="display: none;"></audio><span onclick="playSound('ɶ');" style="cursor: pointer; color: blue;">[ɶ/ɶ̝]</span></td>
<td style="text-align: center"><audio id="ə" src="https://tongchen779.github.io/dansk/files/vowel/ə.mp3" style="display: none;"></audio><span onclick="playSound('ə');" style="cursor: pointer; color: blue;">[ə/ə]</span></td>
</tr>
<tr>
<td style="text-align: center"><audio id="u" src="https://tongchen779.github.io/dansk/files/vowel/u.mp3" style="display: none;"></audio><span onclick="playSound('u');" style="cursor: pointer; color: blue;">[u/u]</span></td>
<td style="text-align: center"><audio id="o" src="https://tongchen779.github.io/dansk/files/vowel/o.mp3" style="display: none;"></audio><span onclick="playSound('o');" style="cursor: pointer; color: blue;">[o/o̝]</span></td>
<td style="text-align: center"><audio id="ɔ" src="https://tongchen779.github.io/dansk/files/vowel/ɔ.mp3" style="display: none;"></audio><span onclick="playSound('ɔ');" style="cursor: pointer; color: blue;">[ɔ/ɔ̟̝]</span></td>
<td style="text-align: center"><audio id="ɒ" src="https://tongchen779.github.io/dansk/files/vowel/ɒ.mp3" style="display: none;"></audio><span onclick="playSound('ɒ');" style="cursor: pointer; color: blue;">[ɒ/ɔ̞]</span></td>
<td style="text-align: center"><audio id="ʌ" src="https://tongchen779.github.io/dansk/files/vowel/ʌ.mp3" style="display: none;"></audio><span onclick="playSound('ʌ');" style="cursor: pointer; color: blue;">[ʌ/ʌ̟̞̹]</span></td>
</tr>
</table>
<h1 style="text-align: center;"> Forside &amp; Ulabialiseret </h1>
<table align="center" cellspacing="5" id="wordTable" style="text-align: left" width="100%">
<tr>
<th style="text-align: center"> Bogstav </th>
<th style="text-align: center"> Lang &amp; Åben </th>
<th style="text-align: center"> Kort &amp; Lukket </th>
<th style="text-align: center"> Foran "r" </th>
<th style="text-align: center"> Efter "r" </th>
</tr>
<tr>
<td rowspan="4" style="text-align: center">i</td>
<td style="text-align: center">[i:/i:]</td>
<td style="text-align: center">[i/i]</td>
<td style="text-align: center">[i/i]</td>
<td style="text-align: center">[i/i]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=skrive">skrive</a><audio id="skrive" src="https://static.ordnet.dk/mp3/11046/11046982_1.mp3" style="display: none;"></audio><span onclick="playSound('skrive');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=pige">pige</a><audio id="pige" src="https://static.ordnet.dk/mp3/11039/11039666_1.mp3" style="display: none;"></audio><span onclick="playSound('pige');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=time">time</a><audio id="time" src="https://static.ordnet.dk/mp3/12001/12001387_1.mp3" style="display: none;"></audio><span onclick="playSound('time');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=musik">musik</a><audio id="musik" src="https://static.ordnet.dk/mp3/11034/11034722_1.mp3" style="display: none;"></audio><span onclick="playSound('musik');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=lille">lille</a><audio id="lille" src="https://static.ordnet.dk/mp3/11030/11030488_1.mp3" style="display: none;"></audio><span onclick="playSound('lille');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=minut">minut</a><audio id="minut" src="https://static.ordnet.dk/mp3/11033/11033841_1.mp3" style="display: none;"></audio><span onclick="playSound('minut');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=cigaret">cigaret</a><audio id="cigaret" src="https://static.ordnet.dk/mp3/11007/11007786_1.mp3" style="display: none;"></audio><span onclick="playSound('cigaret');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=firma">firma</a><audio id="firma" src="https://static.ordnet.dk/mp3/11013/11013159_1.mp3" style="display: none;"></audio><span onclick="playSound('firma');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=firs">firs</a><audio id="firs" src="https://static.ordnet.dk/mp3/11013/11013169_1.mp3" style="display: none;"></audio><span onclick="playSound('firs');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ris">ris</a><audio id="ris" src="https://static.ordnet.dk/mp3/11043/11043432_1.mp3" style="display: none;"></audio><span onclick="playSound('ris');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=fri">fri</a><audio id="fri" src="https://static.ordnet.dk/mp3/11015/11015996_1.mp3" style="display: none;"></audio><span onclick="playSound('fri');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[e/e̝]</td>
<td style="text-align: center"></td>
<td style="text-align: center">[ε/e]</td>
</tr>
<tr>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ikke">ikke</a><audio id="ikke" src="https://static.ordnet.dk/mp3/11022/11022886_1.mp3" style="display: none;"></audio><span onclick="playSound('ikke');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ligge">ligge</a><audio id="ligge" src="https://static.ordnet.dk/mp3/11030/11030434_1.mp3" style="display: none;"></audio><span onclick="playSound('ligge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=vil">vil</a><audio id="vil" src="https://static.ordnet.dk/mp3/12006/12006777_2.mp3" style="display: none;"></audio><span onclick="playSound('vil');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=hvis">hvis</a><audio id="hvis" src="https://static.ordnet.dk/mp3/11021/11021968_1.mp3" style="display: none;"></audio><span onclick="playSound('hvis');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=dikke">dikke</a><audio id="dikke" src="https://static.ordnet.dk/mp3/11009/11009076_1.mp3" style="display: none;"></audio><span onclick="playSound('dikke');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=til">til</a><audio id="til" src="https://static.ordnet.dk/mp3/12001/12001012_1.mp3" style="display: none;"></audio><span onclick="playSound('til');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=briller">briller</a><audio id="briller" src="https://static.ordnet.dk/mp3/11006/11006165_1.mp3" style="display: none;"></audio><span onclick="playSound('briller');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=drikke">drikke</a><audio id="drikke" src="https://static.ordnet.dk/mp3/11009/11009686_1.mp3" style="display: none;"></audio><span onclick="playSound('drikke');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=riste">riste</a><audio id="riste" src="https://static.ordnet.dk/mp3/11043/11043461_1.mp3" style="display: none;"></audio><span onclick="playSound('riste');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td rowspan="4" style="text-align: center">e</td>
<td style="text-align: center">[e:/e̝:]</td>
<td style="text-align: center">[e/e̝]</td>
<td style="text-align: center">[e/e̝]</td>
<td style="text-align: center">[ε/e]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=mene">mene</a><audio id="mene" src="https://static.ordnet.dk/mp3/11033/11033158_1.mp3" style="display: none;"></audio><span onclick="playSound('mene');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=alene">alene</a><audio id="alene" src="https://static.ordnet.dk/mp3/11001/11001224_1.mp3" style="display: none;"></audio><span onclick="playSound('alene');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=sene">sene</a><audio id="sene" src="https://static.ordnet.dk/mp3/11045/11045537_1.mp3" style="display: none;"></audio><span onclick="playSound('sene');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=det">det</a><audio id="det" src="https://static.ordnet.dk/mp3/11008/11008911_1.mp3" style="display: none;"></audio><span onclick="playSound('det');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=en">en</a><audio id="en" src="https://static.ordnet.dk/mp3/11011/11011264_1.mp3" style="display: none;"></audio><span onclick="playSound('en');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ben">ben</a><audio id="ben" src="https://static.ordnet.dk/mp3/11004/11004055_1.mp3" style="display: none;"></audio><span onclick="playSound('ben');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=sten">sten</a><audio id="sten" src="https://static.ordnet.dk/mp3/11050/11050123_1.mp3" style="display: none;"></audio><span onclick="playSound('sten');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=her">her</a><audio id="her" src="https://static.ordnet.dk/mp3/11020/11020487_1.mp3" style="display: none;"></audio><span onclick="playSound('her');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=se">se</a><audio id="se" src="https://static.ordnet.dk/mp3/11045/11045127_1.mp3" style="display: none;"></audio><span onclick="playSound('se');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=derfor">derfor</a><audio id="derfor" src="https://static.ordnet.dk/mp3/11008/11008788_1.mp3" style="display: none;"></audio><span onclick="playSound('derfor');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tre">tre</a><audio id="tre" src="https://static.ordnet.dk/mp3/12002/12002186_1.mp3" style="display: none;"></audio><span onclick="playSound('tre');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=brev">brev</a><audio id="brev" src="https://static.ordnet.dk/mp3/11006/11006118_1.mp3" style="display: none;"></audio><span onclick="playSound('brev');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ren">ren</a><audio id="ren" src="https://static.ordnet.dk/mp3/11042/11042801_1.mp3" style="display: none;"></audio><span onclick="playSound('ren');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[ε/e]</td>
<td style="text-align: center">[æ/ε]</td>
<td style="text-align: center">[a/a]</td>
</tr>
<tr>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=elske">elske</a><audio id="elske" src="https://static.ordnet.dk/mp3/11011/11011159_1.mp3" style="display: none;"></audio><span onclick="playSound('elske');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=eller">eller</a><audio id="eller" src="https://static.ordnet.dk/mp3/11011/11011122_1.mp3" style="display: none;"></audio><span onclick="playSound('eller');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=fem">fem</a><audio id="fem" src="https://static.ordnet.dk/mp3/11012/11012688_1.mp3" style="display: none;"></audio><span onclick="playSound('fem');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ven">ven</a><audio id="ven" src="https://static.ordnet.dk/mp3/12006/12006292_1.mp3" style="display: none;"></audio><span onclick="playSound('ven');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=seng">seng</a><audio id="seng" src="https://static.ordnet.dk/mp3/11045/11045546_1.mp3" style="display: none;"></audio><span onclick="playSound('seng');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=verden">verden</a><audio id="verden" src="https://static.ordnet.dk/mp3/12006/12006391_1.mp3" style="display: none;"></audio><span onclick="playSound('verden');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=gerne">gerne</a><audio id="gerne" src="https://static.ordnet.dk/mp3/11017/11017883_1.mp3" style="display: none;"></audio><span onclick="playSound('gerne');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tretten">tretten</a><audio id="tretten" src="https://static.ordnet.dk/mp3/12002/12002305_1.mp3" style="display: none;"></audio><span onclick="playSound('tretten');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=tredive">tredive</a><audio id="tredive" src="https://static.ordnet.dk/mp3/12002/12002196_1.mp3" style="display: none;"></audio><span onclick="playSound('tredive');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ret">ret</a><audio id="ret" src="https://static.ordnet.dk/mp3/11043/11043047_1.mp3" style="display: none;"></audio><span onclick="playSound('ret');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td rowspan="4" style="text-align: center">æ</td>
<td style="text-align: center">[ε:/e:]</td>
<td style="text-align: center">[ε/e]</td>
<td style="text-align: center">[ε/e]</td>
<td style="text-align: center">[ε/e] eller[ε:/e:]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=læne">læne</a><audio id="læne" src="https://static.ordnet.dk/mp3/11031/11031619_1.mp3" style="display: none;"></audio><span onclick="playSound('læne');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=læge">læge</a><audio id="læge" src="https://static.ordnet.dk/mp3/11031/11031550_1.mp3" style="display: none;"></audio><span onclick="playSound('læge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=læse">læse</a><audio id="læse" src="https://static.ordnet.dk/mp3/11031/11031693_1.mp3" style="display: none;"></audio><span onclick="playSound('læse');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=næse">næse</a><audio id="næse" src="https://static.ordnet.dk/mp3/11036/11036561_1.mp3" style="display: none;"></audio><span onclick="playSound('næse');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=gæst">gæst</a><audio id="gæst" src="https://static.ordnet.dk/mp3/11019/11019384_1.mp3" style="display: none;"></audio><span onclick="playSound('gæst');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=næste">næste</a><audio id="næste" src="https://static.ordnet.dk/mp3/11036/11036587_1.mp3" style="display: none;"></audio><span onclick="playSound('næste');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=nær">nær</a><audio id="nær" src="https://static.ordnet.dk/mp3/11036/11036499_1.mp3" style="display: none;"></audio><span onclick="playSound('nær');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=lær">lær</a><audio id="lær" src="https://static.ordnet.dk/mp3/11031/11031523_1.mp3" style="display: none;"></audio><span onclick="playSound('lær');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=træ">træ</a><audio id="træ" src="https://static.ordnet.dk/mp3/12002/12002619_1.mp3" style="display: none;"></audio><span onclick="playSound('træ');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ræbe">ræbe</a><audio id="ræbe" src="https://static.ordnet.dk/mp3/11044/11044050_1.mp3" style="display: none;"></audio><span onclick="playSound('ræbe');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=dræbe">dræbe</a><audio id="dræbe" src="https://static.ordnet.dk/mp3/11009/11009807_1.mp3" style="display: none;"></audio><span onclick="playSound('dræbe');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kræve">kræve</a><audio id="kræve" src="https://static.ordnet.dk/mp3/11028/11028389_1.mp3" style="display: none;"></audio><span onclick="playSound('kræve');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center"></td>
<td style="text-align: center">[æ/ε]</td>
<td style="text-align: center">[a/a]</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=færdig">færdig</a><audio id="færdig" src="https://static.ordnet.dk/mp3/11016/11016703_1.mp3" style="display: none;"></audio><span onclick="playSound('færdig');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kæreste">kæreste</a><audio id="kæreste" src="https://static.ordnet.dk/mp3/11029/11029094_1.mp3" style="display: none;"></audio><span onclick="playSound('kæreste');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=trække">trække</a><audio id="trække" src="https://static.ordnet.dk/mp3/12002/12002664_1.mp3" style="display: none;"></audio><span onclick="playSound('trække');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=træffe">træffe</a><audio id="træffe" src="https://static.ordnet.dk/mp3/12002/12002639_1.mp3" style="display: none;"></audio><span onclick="playSound('træffe');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=fræk">fræk</a><audio id="fræk" src="https://static.ordnet.dk/mp3/11016/11016309_1.mp3" style="display: none;"></audio><span onclick="playSound('fræk');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=dræbt">dræbte</a><audio id="dræbt" src="https://static.ordnet.dk/mp3/11009/11009807_2.mp3" style="display: none;"></audio><span onclick="playSound('dræbt');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td rowspan="4" style="text-align: center">a</td>
<td style="text-align: center">[æ:/ε:]</td>
<td style="text-align: center">[a/a̝] (foran d, l, n, s, t)</td>
<td style="text-align: center">[ɑ/ɑ̈]</td>
<td style="text-align: center">[ɑ/ɑ̈] eller [ɑ:/ɑ̈:]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=lave">lave</a><audio id="lave" src="https://static.ordnet.dk/mp3/11029/11029912_1.mp3" style="display: none;"></audio><span onclick="playSound('lave');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=tale">tale</a><audio id="tale" src="https://static.ordnet.dk/mp3/12000/12000128_1.mp3" style="display: none;"></audio><span onclick="playSound('tale');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=dame">dame</a><audio id="dame" src="https://static.ordnet.dk/mp3/11008/11008304_1.mp3" style="display: none;"></audio><span onclick="playSound('dame');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kage">kage</a><audio id="kage" src="https://static.ordnet.dk/mp3/11024/11024957_1.mp3" style="display: none;"></audio><span onclick="playSound('kage');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=dansk">dansk</a><audio id="dansk" src="https://static.ordnet.dk/mp3/11008/11008394_1.mp3" style="display: none;"></audio><span onclick="playSound('dansk');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=glas">glas</a><audio id="glas" src="https://static.ordnet.dk/mp3/11018/11018095_1.mp3" style="display: none;"></audio><span onclick="playSound('glas');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ananas">ananas</a><audio id="ananas" src="https://static.ordnet.dk/mp3/11001/11001637_1.mp3" style="display: none;"></audio><span onclick="playSound('ananas');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=banan">banan</a><audio id="banan" src="https://static.ordnet.dk/mp3/11003/11003353_1.mp3" style="display: none;"></audio><span onclick="playSound('banan');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ja">ja</a><audio id="ja" src="https://static.ordnet.dk/mp3/11024/11024333_1.mp3" style="display: none;"></audio><span onclick="playSound('ja');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kan">kan</a><audio id="kan" src="" style="display: none;"></audio><span onclick="playSound('kan');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=barn">barn</a><audio id="barn" src="https://static.ordnet.dk/mp3/11003/11003497_1.mp3" style="display: none;"></audio><span onclick="playSound('barn');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=arabisk">arabisk</a><audio id="arabisk" src="https://static.ordnet.dk/mp3/11002/11002231_1.mp3" style="display: none;"></audio><span onclick="playSound('arabisk');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=arabisk">arabisk</a><audio id="arabisk" src="https://static.ordnet.dk/mp3/11002/11002231_1.mp3" style="display: none;"></audio><span onclick="playSound('arabisk');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=rask">rask</a><audio id="rask" src="https://static.ordnet.dk/mp3/11042/11042187_1.mp3" style="display: none;"></audio><span onclick="playSound('rask');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=krage">krage</a><audio id="krage" src="https://static.ordnet.dk/mp3/11027/11027895_1.mp3" style="display: none;"></audio><span onclick="playSound('krage');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[ɑ/ɑ̈] (foran m, f, k, p, g, nk, ng)</td>
<td style="text-align: center"></td>
<td style="text-align: center"></td>
</tr>
<tr>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=aften">aften</a><audio id="aften" src="https://static.ordnet.dk/mp3/11000/11000821_1.mp3" style="display: none;"></audio><span onclick="playSound('aften');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=mangen">mangen</a><audio id="mangen" src="https://static.ordnet.dk/mp3/11032/11032352_1.mp3" style="display: none;"></audio><span onclick="playSound('mangen');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=appelsin">appelsin</a><audio id="appelsin" src="https://static.ordnet.dk/mp3/11002/11002177_1.mp3" style="display: none;"></audio><span onclick="playSound('appelsin');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kaffe">kaffe</a><audio id="kaffe" src="https://static.ordnet.dk/mp3/11024/11024929_1.mp3" style="display: none;"></audio><span onclick="playSound('kaffe');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ham">ham</a><audio id="ham" src="https://static.ordnet.dk/mp3/11019/11019770_1.mp3" style="display: none;"></audio><span onclick="playSound('ham');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=bank">bank</a><audio id="bank" src="https://static.ordnet.dk/mp3/11003/11003403_1.mp3" style="display: none;"></audio><span onclick="playSound('bank');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=snakke">snakke</a><audio id="snakke" src="https://static.ordnet.dk/mp3/11048/11048205_1.mp3" style="display: none;"></audio><span onclick="playSound('snakke');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td></td>
<td></td>
</tr>
</table>
<h1 style="text-align: center;"> Forside &amp; Labialiseret </h1>
<table align="center" cellspacing="5" id="wordTable" style="text-align: left" width="100%">
<tr>
<th style="text-align: center"> Bogstav </th>
<th style="text-align: center"> Lang &amp; Åben </th>
<th style="text-align: center"> Kort &amp; Lukket </th>
<th style="text-align: center"> Foran "r" </th>
<th style="text-align: center"> Efter "r" </th>
</tr>
<tr>
<td rowspan="4" style="text-align: center">y</td>
<td style="text-align: center">[y:/y:]</td>
<td style="text-align: center">[y/y]</td>
<td style="text-align: center">[y/y]</td>
<td style="text-align: center">[y:/y:]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tyve">tyve</a><audio id="tyve" src="https://static.ordnet.dk/mp3/12003/12003209_1.mp3" style="display: none;"></audio><span onclick="playSound('tyve');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=syge">syge</a><audio id="syge" src="https://static.ordnet.dk/mp3/11051/11051922_1.mp3" style="display: none;"></audio><span onclick="playSound('syge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=lyse">lyse</a><audio id="lyse" src="https://static.ordnet.dk/mp3/11031/11031411_1.mp3" style="display: none;"></audio><span onclick="playSound('lyse');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=cykel">cykel</a><audio id="cykel" src="https://static.ordnet.dk/mp3/11008/11008109_1.mp3" style="display: none;"></audio><span onclick="playSound('cykel');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=syv">syv</a><audio id="syv" src="https://static.ordnet.dk/mp3/11052/11052136_1.mp3" style="display: none;"></audio><span onclick="playSound('syv');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=undskyld">undskyld</a><audio id="undskyld" src="https://static.ordnet.dk/mp3/12004/12004949_1.mp3" style="display: none;"></audio><span onclick="playSound('undskyld');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=dyr">dyr</a><audio id="dyr" src="https://static.ordnet.dk/mp3/11010/11010114_1.mp3" style="display: none;"></audio><span onclick="playSound('dyr');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=tyr">tyr</a><audio id="tyr" src="https://static.ordnet.dk/mp3/12003/12003173_1.mp3" style="display: none;"></audio><span onclick="playSound('tyr');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=syr">syr</a><audio id="syr" src="https://static.ordnet.dk/mp3/11051/11051872_1.mp3" style="display: none;"></audio><span onclick="playSound('syr');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=fryse">fryse</a><audio id="fryse" src="https://static.ordnet.dk/mp3/11016/11016297_1.mp3" style="display: none;"></audio><span onclick="playSound('fryse');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ryge">ryge</a><audio id="ryge" src="https://static.ordnet.dk/mp3/11043/11043970_1.mp3" style="display: none;"></audio><span onclick="playSound('ryge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[ø/ø̞]</td>
<td style="text-align: center"></td>
<td style="text-align: center">[œ/œ̝]</td>
</tr>
<tr>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=sytten">sytten</a><audio id="sytten" src="https://static.ordnet.dk/mp3/11052/11052129_1.mp3" style="display: none;"></audio><span onclick="playSound('sytten');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=stykke">stykke</a><audio id="stykke" src="https://static.ordnet.dk/mp3/11051/11051034_1.mp3" style="display: none;"></audio><span onclick="playSound('stykke');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=flytte">flytte</a><audio id="flytte" src="https://static.ordnet.dk/mp3/11013/11013781_1.mp3" style="display: none;"></audio><span onclick="playSound('flytte');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=synge">synge</a><audio id="synge" src="https://static.ordnet.dk/mp3/11052/11052027_1.mp3" style="display: none;"></audio><span onclick="playSound('synge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kys">kys</a><audio id="kys" src="https://static.ordnet.dk/mp3/11028/11028986_1.mp3" style="display: none;"></audio><span onclick="playSound('kys');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=trykke">trykke</a><audio id="trykke" src="https://static.ordnet.dk/mp3/12002/12002579_1.mp3" style="display: none;"></audio><span onclick="playSound('trykke');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=bryst">bryst</a><audio id="bryst" src="https://static.ordnet.dk/mp3/11006/11006447_1.mp3" style="display: none;"></audio><span onclick="playSound('bryst');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=frygte">frygte</a><audio id="frygte" src="https://static.ordnet.dk/mp3/11016/11016286_1.mp3" style="display: none;"></audio><span onclick="playSound('frygte');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td rowspan="4" style="text-align: center">ø</td>
<td style="text-align: center">[ø:/ø̞:]</td>
<td style="text-align: center">[ø/ø̞]</td>
<td style="text-align: center">[ø/ø̞] eller [ø:/ø̞:]</td>
<td style="text-align: center">[œ/œ̝] eller [œ:/œ̝:]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=købe">købe</a><audio id="købe" src="https://static.ordnet.dk/mp3/11029/11029140_1.mp3" style="display: none;"></audio><span onclick="playSound('købe');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=føle">føle</a><audio id="føle" src="https://static.ordnet.dk/mp3/11016/11016822_1.mp3" style="display: none;"></audio><span onclick="playSound('føle');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=søde">søde</a><audio id="søde" src="https://static.ordnet.dk/mp3/11052/11052303_1.mp3" style="display: none;"></audio><span onclick="playSound('søde');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=møde">møde</a><audio id="møde" src="https://static.ordnet.dk/mp3/11034/11034989_1.mp3" style="display: none;"></audio><span onclick="playSound('møde');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=søster">søster</a><audio id="søster" src="https://static.ordnet.dk/mp3/11052/11052492_1.mp3" style="display: none;"></audio><span onclick="playSound('søster');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=køkken">køkken</a><audio id="køkken" src="https://static.ordnet.dk/mp3/11029/11029209_1.mp3" style="display: none;"></audio><span onclick="playSound('køkken');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kød">kød</a><audio id="kød" src="https://static.ordnet.dk/mp3/11029/11029176_1.mp3" style="display: none;"></audio><span onclick="playSound('kød');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=køre">køre</a><audio id="køre" src="https://static.ordnet.dk/mp3/11029/11029317_1.mp3" style="display: none;"></audio><span onclick="playSound('køre');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=øre">øre</a><audio id="øre" src="" style="display: none;"></audio><span onclick="playSound('øre');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=høre">høre</a><audio id="høre" src="https://static.ordnet.dk/mp3/11022/11022493_1.mp3" style="display: none;"></audio><span onclick="playSound('høre');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=klør">klør</a><audio id="klør" src="https://static.ordnet.dk/mp3/11026/11026541_1.mp3" style="display: none;"></audio><span onclick="playSound('klør');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=røde">røde</a><audio id="røde" src="https://static.ordnet.dk/mp3/11044/11044102_1.mp3" style="display: none;"></audio><span onclick="playSound('røde');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=prøve">prøve</a><audio id="prøve" src="https://static.ordnet.dk/mp3/11041/11041366_1.mp3" style="display: none;"></audio><span onclick="playSound('prøve');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=grød">grød</a><audio id="grød" src="https://static.ordnet.dk/mp3/11018/11018946_1.mp3" style="display: none;"></audio><span onclick="playSound('grød');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=trøst">trøst</a><audio id="trøst" src="https://static.ordnet.dk/mp3/12002/12002753_1.mp3" style="display: none;"></audio><span onclick="playSound('trøst');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=brød">brød</a><audio id="brød" src="https://static.ordnet.dk/mp3/11006/11006523_1.mp3" style="display: none;"></audio><span onclick="playSound('brød');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[œ/œ̝] (foran m, n, v)</td>
<td style="text-align: center">[ɶ/ɶ̝] eller [ɶ:/ɶ̝:]</td>
<td style="text-align: center">[ɶ/ɶ̝] eller [ɶ:/ɶ̝:]</td>
</tr>
<tr>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=søn">søn</a><audio id="søn" src="https://static.ordnet.dk/mp3/11052/11052417_1.mp3" style="display: none;"></audio><span onclick="playSound('søn');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=søm">søm</a><audio id="søm" src="https://static.ordnet.dk/mp3/11052/11052395_1.mp3" style="display: none;"></audio><span onclick="playSound('søm');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=søndag">søndag</a><audio id="søndag" src="https://static.ordnet.dk/mp3/11052/11052419_1.mp3" style="display: none;"></audio><span onclick="playSound('søndag');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=tømme">tømme</a><audio id="tømme" src="https://static.ordnet.dk/mp3/12003/12003357_1.mp3" style="display: none;"></audio><span onclick="playSound('tømme');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=søvn">søvn</a><audio id="søvn" src="https://static.ordnet.dk/mp3/11052/11052513_1.mp3" style="display: none;"></audio><span onclick="playSound('søvn');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=gøre">gøre</a><audio id="gøre" src="https://static.ordnet.dk/mp3/11019/11019438_1.mp3" style="display: none;"></audio><span onclick="playSound('gøre');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=dør">dør</a><audio id="dør" src="https://static.ordnet.dk/mp3/11010/11010373_1.mp3" style="display: none;"></audio><span onclick="playSound('dør');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=lørdag">lørdag</a><audio id="lørdag" src="https://static.ordnet.dk/mp3/11031/11031858_1.mp3" style="display: none;"></audio><span onclick="playSound('lørdag');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=spørge">spørge</a><audio id="spørge" src="https://static.ordnet.dk/mp3/11049/11049635_2.mp3" style="display: none;"></audio><span onclick="playSound('spørge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=drømme">drømme</a><audio id="drømme" src="https://static.ordnet.dk/mp3/11009/11009831_1.mp3" style="display: none;"></audio><span onclick="playSound('drømme');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=grøn">grøn</a><audio id="grøn" src="https://static.ordnet.dk/mp3/11018/11018958_1.mp3" style="display: none;"></audio><span onclick="playSound('grøn');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
</table>
<h1 style="text-align: center;"> Bagside &amp; Labialiseret </h1>
<table align="center" cellspacing="5" id="wordTable" style="text-align: left" width="100%">
<tr>
<th style="text-align: center"> Bogstav </th>
<th style="text-align: center"> Lang &amp; Åben </th>
<th style="text-align: center"> Kort &amp; Lukket </th>
<th style="text-align: center"> Foran "r" </th>
<th style="text-align: center"> Efter "r" </th>
</tr>
<tr>
<td rowspan="4" style="text-align: center">u</td>
<td style="text-align: center">[u:/u:]</td>
<td style="text-align: center">[u/u]</td>
<td style="text-align: center">[u/u]</td>
<td style="text-align: center">[u/u]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=uge">uge</a><audio id="uge" src="https://static.ordnet.dk/mp3/12004/12004441_1.mp3" style="display: none;"></audio><span onclick="playSound('uge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=bruge">bruge</a><audio id="bruge" src="https://static.ordnet.dk/mp3/11006/11006313_1.mp3" style="display: none;"></audio><span onclick="playSound('bruge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ude">ude</a><audio id="ude" src="https://static.ordnet.dk/mp3/12003/12003716_1.mp3" style="display: none;"></audio><span onclick="playSound('ude');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=guld">guld</a><audio id="guld" src="https://static.ordnet.dk/mp3/11019/11019127_1.mp3" style="display: none;"></audio><span onclick="playSound('guld');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=du">du</a><audio id="du" src="https://static.ordnet.dk/mp3/11009/11009868_1.mp3" style="display: none;"></audio><span onclick="playSound('du');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ud">ud</a><audio id="ud" src="https://static.ordnet.dk/mp3/12003/12003627_1.mp3" style="display: none;"></audio><span onclick="playSound('ud');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=huske">huske</a><audio id="huske" src="https://static.ordnet.dk/mp3/11021/11021779_1.mp3" style="display: none;"></audio><span onclick="playSound('huske');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=hun">hun</a><audio id="hun" src="https://static.ordnet.dk/mp3/11021/11021625_1.mp3" style="display: none;"></audio><span onclick="playSound('hun');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ur">ur</a><audio id="ur" src="https://static.ordnet.dk/mp3/12005/12005142_1.mp3" style="display: none;"></audio><span onclick="playSound('ur');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=tur">tur</a><audio id="tur" src="https://static.ordnet.dk/mp3/12002/12002880_1.mp3" style="display: none;"></audio><span onclick="playSound('tur');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=rugbrød">rugbrød</a><audio id="rugbrød" src="https://static.ordnet.dk/mp3/11043/11043738_1.mp3" style="display: none;"></audio><span onclick="playSound('rugbrød');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[ɔ/ɔ̟̝]</td>
<td style="text-align: center"></td>
<td style="text-align: center"></td>
</tr>
<tr>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=lukke">lukke</a><audio id="lukke" src="https://static.ordnet.dk/mp3/11031/11031160_1.mp3" style="display: none;"></audio><span onclick="playSound('lukke');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=sukker">sukker</a><audio id="sukker" src="https://static.ordnet.dk/mp3/11051/11051344_1.mp3" style="display: none;"></audio><span onclick="playSound('sukker');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kun">kun</a><audio id="kun" src="https://static.ordnet.dk/mp3/11028/11028602_1.mp3" style="display: none;"></audio><span onclick="playSound('kun');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="6" style="text-align: center">o</td>
<td style="text-align: center">[o/o̝] eller [o:/o̝:]</td>
<td style="text-align: center">[o/o̝]</td>
<td style="text-align: center">[o/o̝]</td>
<td style="text-align: center">[ɔ/ɔ̟̝]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=kone">kone</a><audio id="kone" src="https://static.ordnet.dk/mp3/11027/11027246_1.mp3" style="display: none;"></audio><span onclick="playSound('kone');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=skole">skole</a><audio id="skole" src="https://static.ordnet.dk/mp3/11046/11046706_1.mp3" style="display: none;"></audio><span onclick="playSound('skole');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=sove">sove</a><audio id="sove" src="https://static.ordnet.dk/mp3/11048/11048849_1.mp3" style="display: none;"></audio><span onclick="playSound('sove');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=foto">foto</a><audio id="foto" src="https://static.ordnet.dk/mp3/11015/11015620_1.mp3" style="display: none;"></audio><span onclick="playSound('foto');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=nogen">nogen</a><audio id="nogen" src="https://static.ordnet.dk/mp3/11036/11036065_1.mp3" style="display: none;"></audio><span onclick="playSound('nogen');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=god">god</a><audio id="god" src="https://static.ordnet.dk/mp3/11018/11018326_1.mp3" style="display: none;"></audio><span onclick="playSound('god');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=olie">olie</a><audio id="olie" src="https://static.ordnet.dk/mp3/11036/11036971_1.mp3" style="display: none;"></audio><span onclick="playSound('olie');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=bopæl">bopæl</a><audio id="bopæl" src="https://static.ordnet.dk/mp3/11005/11005756_1.mp3" style="display: none;"></audio><span onclick="playSound('bopæl');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=bord">bord</a><audio id="bord" src="https://static.ordnet.dk/mp3/11005/11005762_1.mp3" style="display: none;"></audio><span onclick="playSound('bord');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=fjorten">fjorten</a><audio id="fjorten" src="https://static.ordnet.dk/mp3/11013/11013396_1.mp3" style="display: none;"></audio><span onclick="playSound('fjorten');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ord">ord</a><audio id="ord" src="https://static.ordnet.dk/mp3/11037/11037890_1.mp3" style="display: none;"></audio><span onclick="playSound('ord');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=bror">bror</a><audio id="bror" src="https://static.ordnet.dk/mp3/11006/11006263_1.mp3" style="display: none;"></audio><span onclick="playSound('bror');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=mor">mor</a><audio id="mor" src="https://static.ordnet.dk/mp3/11034/11034310_1.mp3" style="display: none;"></audio><span onclick="playSound('mor');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=sprog">sprog</a><audio id="sprog" src="https://static.ordnet.dk/mp3/11049/11049458_1.mp3" style="display: none;"></audio><span onclick="playSound('sprog');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[ɔ/ɔ̟̝]</td>
<td style="text-align: center">[ɒ/ɔ̞] eller [ɒ:/ɔ̞:]</td>
<td style="text-align: center">[ʌ/ʌ̟̞̹]</td>
</tr>
<tr>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ond">ond</a><audio id="ond" src="https://static.ordnet.dk/mp3/11037/11037286_1.mp3" style="display: none;"></audio><span onclick="playSound('ond');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ost">ost</a><audio id="ost" src="https://static.ordnet.dk/mp3/11038/11038081_1.mp3" style="display: none;"></audio><span onclick="playSound('ost');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=bombe">bombe</a><audio id="bombe" src="https://static.ordnet.dk/mp3/11005/11005676_1.mp3" style="display: none;"></audio><span onclick="playSound('bombe');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=onsdag">onsdag</a><audio id="onsdag" src="https://static.ordnet.dk/mp3/11037/11037303_1.mp3" style="display: none;"></audio><span onclick="playSound('onsdag');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=sort">sort</a><audio id="sort" src="https://static.ordnet.dk/mp3/11048/11048787_1.mp3" style="display: none;"></audio><span onclick="playSound('sort');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=vores">vores</a><audio id="vores" src="https://static.ordnet.dk/mp3/12007/12007275_1.mp3" style="display: none;"></audio><span onclick="playSound('vores');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=morgen">morgen</a><audio id="morgen" src="https://static.ordnet.dk/mp3/11034/11034356_1.mp3" style="display: none;"></audio><span onclick="playSound('morgen');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kort">kort</a><audio id="kort" src="https://static.ordnet.dk/mp3/11027/11027754_1.mp3" style="display: none;"></audio><span onclick="playSound('kort');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=trop">trop</a><audio id="trop" src="https://static.ordnet.dk/mp3/12002/12002502_1.mp3" style="display: none;"></audio><span onclick="playSound('trop');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=droppe">droppe</a><audio id="droppe" src="https://static.ordnet.dk/mp3/11009/11009764_1.mp3" style="display: none;"></audio><span onclick="playSound('droppe');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[ʌ/ʌ̟̞̹]</td>
<td style="text-align: center"></td>
<td style="text-align: center"></td>
</tr>
<tr>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=komme">komme</a><audio id="komme" src="https://static.ordnet.dk/mp3/11027/11027041_1.mp3" style="display: none;"></audio><span onclick="playSound('komme');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=godt">godt</a><audio id="godt" src="https://static.ordnet.dk/mp3/11018/11018364_1.mp3" style="display: none;"></audio><span onclick="playSound('godt');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=post">post</a><audio id="post" src="https://static.ordnet.dk/mp3/11040/11040558_1.mp3" style="display: none;"></audio><span onclick="playSound('post');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=også">også</a><audio id="også" src="https://static.ordnet.dk/mp3/11036/11036883_1.mp3" style="display: none;"></audio><span onclick="playSound('også');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=koste">koste</a><audio id="koste" src="https://static.ordnet.dk/mp3/11027/11027823_1.mp3" style="display: none;"></audio><span onclick="playSound('koste');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=klokke">klokke</a><audio id="klokke" src="https://static.ordnet.dk/mp3/11026/11026384_1.mp3" style="display: none;"></audio><span onclick="playSound('klokke');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="6" style="text-align: center">å</td>
<td style="text-align: center">[ɔ:/ɔ̟̝:]</td>
<td style="text-align: center">[ɔ/ɔ̟̝]</td>
<td style="text-align: center">[ɒ/ɔ̞]</td>
<td style="text-align: center">[ɔ/ɔ̟̝] eller [ɔ:/ɔ̟̝:]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=låne">låne</a><audio id="låne" src="https://static.ordnet.dk/mp3/11031/11031925_1.mp3" style="display: none;"></audio><span onclick="playSound('låne');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=håbe">håbe</a><audio id="håbe" src="https://static.ordnet.dk/mp3/11022/11022549_1.mp3" style="display: none;"></audio><span onclick="playSound('håbe');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=stå">stå</a><audio id="stå" src="https://static.ordnet.dk/mp3/11051/11051227_1.mp3" style="display: none;"></audio><span onclick="playSound('stå');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=gå">gå</a><audio id="gå" src="https://static.ordnet.dk/mp3/11019/11019445_1.mp3" style="display: none;"></audio><span onclick="playSound('gå');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=år">år</a><audio id="år" src="https://static.ordnet.dk/mp3/12008/12008546_1.mp3" style="display: none;"></audio><span onclick="playSound('år');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=når">når</a><audio id="når" src="https://static.ordnet.dk/mp3/11036/11036748_1.mp3" style="display: none;"></audio><span onclick="playSound('når');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=hår">hår</a><audio id="hår" src="https://static.ordnet.dk/mp3/11022/11022661_1.mp3" style="display: none;"></audio><span onclick="playSound('hår');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=råd">råd</a><audio id="råd" src="https://static.ordnet.dk/mp3/11044/11044278_1.mp3" style="display: none;"></audio><span onclick="playSound('råd');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=råbe">råbe</a><audio id="råbe" src="https://static.ordnet.dk/mp3/11044/11044273_1.mp3" style="display: none;"></audio><span onclick="playSound('råbe');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=tråd">tråd</a><audio id="tråd" src="https://static.ordnet.dk/mp3/12002/12002763_1.mp3" style="display: none;"></audio><span onclick="playSound('tråd');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[ʌ/ʌ̟̞̹]</td>
<td style="text-align: center">[ɒ/ɔ̞] eller [ɒ:/ɔ̞:]</td>
<td style="text-align: center">[ʌ/ʌ̟̞̹]</td>
</tr>
<tr>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=måtte">måtte</a><audio id="måtte" src="https://static.ordnet.dk/mp3/11035/11035202_1.mp3" style="display: none;"></audio><span onclick="playSound('måtte');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?select=s%C3%A5,3&amp;query=s%C3%A5">så</a><audio id="så" src="https://static.ordnet.dk/mp3/11052/11052531_2.mp3" style="display: none;"></audio><span onclick="playSound('så');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=dårlig">dårlig</a><audio id="dårlig" src="https://static.ordnet.dk/mp3/11010/11010436_1.mp3" style="display: none;"></audio><span onclick="playSound('dårlig');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=hård">hård</a><audio id="hård" src="https://static.ordnet.dk/mp3/11022/11022665_1.mp3" style="display: none;"></audio><span onclick="playSound('hård');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=råbte">råbte</a><audio id="råbte" src="https://static.ordnet.dk/mp3/11044/11044273_2.mp3" style="display: none;"></audio><span onclick="playSound('råbte');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
</table>
<h1 style="text-align: center;"> Diftong </h1>
<table align="center" cellspacing="5" id="wordTable" style="text-align: left" width="100%">
<tr>
<th style="text-align: center"> Bogstav </th>
<th style="text-align: center"> Lyd </th>
<th style="text-align: center"> Eksempel </th>
</tr>
<tr>
<td style="text-align: center">ej, eg, aj</td>
<td>[ɑj/ɑ̈j]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=rejse">rejse</a><audio id="rejse" src="https://static.ordnet.dk/mp3/11042/11042621_1.mp3" style="display: none;"></audio><span onclick="playSound('rejse');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=jeg">jeg</a><audio id="jeg" src="https://static.ordnet.dk/mp3/11024/11024438_1.mp3" style="display: none;"></audio><span onclick="playSound('jeg');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=maj">maj</a><audio id="maj" src="https://static.ordnet.dk/mp3/11032/11032113_1.mp3" style="display: none;"></audio><span onclick="playSound('maj');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">øg, øj</td>
<td>[ʌj/ʌ̟̞̹j]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=nøgle">nøgle</a><audio id="nøgle" src="https://static.ordnet.dk/mp3/11036/11036680_1.mp3" style="display: none;"></audio><span onclick="playSound('nøgle');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=høj">høj</a><audio id="høj" src="https://static.ordnet.dk/mp3/11022/11022307_1.mp3" style="display: none;"></audio><span onclick="playSound('høj');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">iv</td>
<td>[iw/iw]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=livlig">livlig</a><audio id="livlig" src="https://static.ordnet.dk/mp3/11030/11030651_1.mp3" style="display: none;"></audio><span onclick="playSound('livlig');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">eb</td>
<td>[ew/e̝w]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=peber">peber</a><audio id="peber" src="https://static.ordnet.dk/mp3/11039/11039221_1.mp3" style="display: none;"></audio><span onclick="playSound('peber');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">ev, æv</td>
<td>[εw/ew]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=drev">drev</a><audio id="drev" src="https://static.ordnet.dk/mp3/11009/11009649_1.mp3" style="display: none;"></audio><span onclick="playSound('drev');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=brev">brev</a><audio id="brev" src="https://static.ordnet.dk/mp3/11006/11006118_1.mp3" style="display: none;"></audio><span onclick="playSound('brev');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=evne">evne</a><audio id="evne" src="https://static.ordnet.dk/mp3/11011/11011983_1.mp3" style="display: none;"></audio><span onclick="playSound('evne');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=nævne">nævne</a><audio id="nævne" src="https://static.ordnet.dk/mp3/11036/11036612_1.mp3" style="display: none;"></audio><span onclick="playSound('nævne');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">av, af, au</td>
<td>[ɑw/ɑ̈w]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tavle">tavle</a><audio id="tavle" src="https://static.ordnet.dk/mp3/12000/12000396_1.mp3" style="display: none;"></audio><span onclick="playSound('tavle');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=aftale">aftale</a><audio id="aftale" src="" style="display: none;"></audio><span onclick="playSound('aftale');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=audio">audio</a><audio id="audio" src="https://static.ordnet.dk/mp3/11002/11002846_1.mp3" style="display: none;"></audio><span onclick="playSound('audio');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">yv</td>
<td>[yw/yw]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=syv">syv</a><audio id="syv" src="https://static.ordnet.dk/mp3/11052/11052136_1.mp3" style="display: none;"></audio><span onclick="playSound('syv');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">øv</td>
<td>[øw/ø̞w]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=øvrig">øvrig</a><audio id="øvrig" src="https://static.ordnet.dk/mp3/12008/12008439_1.mp3" style="display: none;"></audio><span onclick="playSound('øvrig');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">øv, eu</td>
<td>[œw/œ̝w]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=st%C3%B8vle">støvle</a><audio id="støvle" src="https://static.ordnet.dk/mp3/11051/11051210_1.mp3" style="display: none;"></audio><span onclick="playSound('støvle');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=neutral">neutral</a><audio id="neutral" src="https://static.ordnet.dk/mp3/11035/11035926_1.mp3" style="display: none;"></audio><span onclick="playSound('neutral');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=euro">euro</a><audio id="euro" src="https://static.ordnet.dk/mp3/11011/11011920_1.mp3" style="display: none;"></audio><span onclick="playSound('euro');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">ov, og</td>
<td>[ɒw/ɔ̞w]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=dovne">dovne</a><audio id="dovne" src="https://static.ordnet.dk/mp3/11009/11009559_1.mp3" style="display: none;"></audio><span onclick="playSound('dovne');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=vogn">vogn</a><audio id="vogn" src="https://static.ordnet.dk/mp3/12007/12007152_1.mp3" style="display: none;"></audio><span onclick="playSound('vogn');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
</table>
<h1 style="text-align: center;"> Danske Konsonanter </h1>
<table align="center" cellspacing="5" id="wordTable" style="text-align: left" width="100%">
<tr>
<th style="text-align: center"> Bogstav </th>
<th style="text-align: center"> Lyd </th>
<th style="text-align: center"> Eksempel </th>
</tr>
<tr>
<td rowspan="2" style="text-align: center">b</td>
<td>[b/b̥] (begyndelse)</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=blive">blive</a><audio id="blive" src="https://static.ordnet.dk/mp3/11005/11005152_1.mp3" style="display: none;"></audio><span onclick="playSound('blive');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=bar">bar</a><audio id="bar" src="https://static.ordnet.dk/mp3/11003/11003447_1.mp3" style="display: none;"></audio><span onclick="playSound('bar');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=begynde">begynde</a><audio id="begynde" src="https://static.ordnet.dk/mp3/11003/11003885_1.mp3" style="display: none;"></audio><span onclick="playSound('begynde');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td>[w/u̯] (vokal-"b"-vokal)</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=peber">peber</a><audio id="peber" src="https://static.ordnet.dk/mp3/11039/11039221_1.mp3" style="display: none;"></audio><span onclick="playSound('peber');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td rowspan="2" style="text-align: center">p</td>
<td>[p/b̥ʰ] (begyndelse)</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=pige">pige</a><audio id="pige" src="https://static.ordnet.dk/mp3/11039/11039666_1.mp3" style="display: none;"></audio><span onclick="playSound('pige');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=peber">peber</a><audio id="peber" src="https://static.ordnet.dk/mp3/11039/11039221_1.mp3" style="display: none;"></audio><span onclick="playSound('peber');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=pesto">pesto</a><audio id="pesto" src="https://static.ordnet.dk/mp3/11039/11039571_1.mp3" style="display: none;"></audio><span onclick="playSound('pesto');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td>[b/b̥] ("sp/pp")</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=spise">spise</a><audio id="spise" src="https://static.ordnet.dk/mp3/11049/11049249_1.mp3" style="display: none;"></audio><span onclick="playSound('spise');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=spørge">spørge</a><audio id="spørge" src="https://static.ordnet.dk/mp3/11049/11049635_2.mp3" style="display: none;"></audio><span onclick="playSound('spørge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=oppe">oppe</a><audio id="oppe" src="https://static.ordnet.dk/mp3/11037/11037602_1.mp3" style="display: none;"></audio><span onclick="playSound('oppe');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td rowspan="2" style="text-align: center">d</td>
<td>[d/d̥] (begyndelse)</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=du">du</a><audio id="du" src="https://static.ordnet.dk/mp3/11009/11009868_1.mp3" style="display: none;"></audio><span onclick="playSound('du');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=det">det</a><audio id="det" src="https://static.ordnet.dk/mp3/11008/11008911_1.mp3" style="display: none;"></audio><span onclick="playSound('det');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=diagram">diagram</a><audio id="diagram" src="https://static.ordnet.dk/mp3/11008/11008983_1.mp3" style="display: none;"></audio><span onclick="playSound('diagram');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td>[ð/ð̠ˠ̞] (vokal-"d"-vokal, vokal-"d"-ende, "dd")</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=gade">gade</a><audio id="gade" src="https://static.ordnet.dk/mp3/11016/11016995_1.mp3" style="display: none;"></audio><span onclick="playSound('gade');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=mad">mad</a><audio id="mad" src="https://static.ordnet.dk/mp3/11031/11031973_1.mp3" style="display: none;"></audio><span onclick="playSound('mad');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=hedde">hedde</a><audio id="hedde" src="https://static.ordnet.dk/mp3/11020/11020164_1.mp3" style="display: none;"></audio><span onclick="playSound('hedde');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td rowspan="3" style="text-align: center">d</td>
<td>[t/d̥͡s] (begyndelse)</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tyve">tyve</a><audio id="tyve" src="https://static.ordnet.dk/mp3/12003/12003209_1.mp3" style="display: none;"></audio><span onclick="playSound('tyve');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=tobak">tobak</a><audio id="tobak" src="https://static.ordnet.dk/mp3/12001/12001586_1.mp3" style="display: none;"></audio><span onclick="playSound('tobak');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=til">til</a><audio id="til" src="https://static.ordnet.dk/mp3/12001/12001012_1.mp3" style="display: none;"></audio><span onclick="playSound('til');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=tysk">tysk</a><audio id="tysk" src="https://static.ordnet.dk/mp3/12003/12003196_1.mp3" style="display: none;"></audio><span onclick="playSound('tysk');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td>[d/d̥] ("st/tt")</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=storm">storm</a><audio id="storm" src="https://static.ordnet.dk/mp3/11050/11050546_1.mp3" style="display: none;"></audio><span onclick="playSound('storm');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=sytten">sytten</a><audio id="sytten" src="https://static.ordnet.dk/mp3/11052/11052129_1.mp3" style="display: none;"></audio><span onclick="playSound('sytten');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td>[ð/ð̠ˠ̞] (vokal-"t"-ende)</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=etableret">etableret</a><audio id="etableret" src="https://static.ordnet.dk/mp3/11011/11011824_1.mp3" style="display: none;"></audio><span onclick="playSound('etableret');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=meget">meget</a><audio id="meget" src="https://static.ordnet.dk/mp3/11032/11032996_2.mp3" style="display: none;"></audio><span onclick="playSound('meget');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td rowspan="2" style="text-align: center">k</td>
<td>[k/g̊ʰ] (begyndelse)</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=krone">krone</a><audio id="krone" src="https://static.ordnet.dk/mp3/11028/11028194_1.mp3" style="display: none;"></audio><span onclick="playSound('krone');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kaffe">kaffe</a><audio id="kaffe" src="https://static.ordnet.dk/mp3/11024/11024929_1.mp3" style="display: none;"></audio><span onclick="playSound('kaffe');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=køb">køb</a><audio id="køb" src="https://static.ordnet.dk/mp3/11029/11029139_1.mp3" style="display: none;"></audio><span onclick="playSound('køb');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kun">kun</a><audio id="kun" src="https://static.ordnet.dk/mp3/11028/11028602_1.mp3" style="display: none;"></audio><span onclick="playSound('kun');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td>[g/g̊ʰ] ("sk/kk")</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=skal">skal</a><audio id="skal" src="https://static.ordnet.dk/mp3/11046/11046262_1.mp3" style="display: none;"></audio><span onclick="playSound('skal');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ikke">ikke</a><audio id="ikke" src="https://static.ordnet.dk/mp3/11022/11022886_1.mp3" style="display: none;"></audio><span onclick="playSound('ikke');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td rowspan="3" style="text-align: center">g</td>
<td>[g/g̊ʰ] (begyndelse)</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=gerne">gerne</a><audio id="gerne" src="https://static.ordnet.dk/mp3/11017/11017883_1.mp3" style="display: none;"></audio><span onclick="playSound('gerne');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=glas">glas</a><audio id="glas" src="https://static.ordnet.dk/mp3/11018/11018095_1.mp3" style="display: none;"></audio><span onclick="playSound('glas');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=gulv">gulv</a><audio id="gulv" src="https://static.ordnet.dk/mp3/11019/11019216_1.mp3" style="display: none;"></audio><span onclick="playSound('gulv');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=godt">godt</a><audio id="godt" src="https://static.ordnet.dk/mp3/11018/11018364_1.mp3" style="display: none;"></audio><span onclick="playSound('godt');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td>[w/u̯] ("og/ug/åg"-vokal, ord-ord, "r"-vokal-"g")</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=bog">bog</a><audio id="bog" src="https://static.ordnet.dk/mp3/11005/11005503_1.mp3" style="display: none;"></audio><span onclick="playSound('bog');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=uge">uge</a><audio id="uge" src="https://static.ordnet.dk/mp3/12004/12004441_1.mp3" style="display: none;"></audio><span onclick="playSound('uge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=dagpenge">dagpenge</a><audio id="dagpenge" src="https://static.ordnet.dk/mp3/11008/11008245_1.mp3" style="display: none;"></audio><span onclick="playSound('dagpenge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=krage">krage</a><audio id="krage" src="https://static.ordnet.dk/mp3/11027/11027895_1.mp3" style="display: none;"></audio><span onclick="playSound('krage');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td>[jə/i̯ə] ("ag/øg/yg")</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=syge">syge</a><audio id="syge" src="https://static.ordnet.dk/mp3/11051/11051922_1.mp3" style="display: none;"></audio><span onclick="playSound('syge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=dag">dag</a><audio id="dag" src="https://static.ordnet.dk/mp3/11008/11008205_1.mp3" style="display: none;"></audio><span onclick="playSound('dag');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=øge">øge</a><audio id="øge" src="" style="display: none;"></audio><span onclick="playSound('øge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=pige">pige</a><audio id="pige" src="https://static.ordnet.dk/mp3/11039/11039666_1.mp3" style="display: none;"></audio><span onclick="playSound('pige');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">z</td>
<td>[s/s]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=zambisk">zambisk</a><audio id="zambisk" src="https://static.ordnet.dk/mp3/12007/12007859_1.mp3" style="display: none;"></audio><span onclick="playSound('zambisk');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=zoo">zoo</a><audio id="zoo" src="https://static.ordnet.dk/mp3/12007/12007899_1.mp3" style="display: none;"></audio><span onclick="playSound('zoo');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">q</td>
<td>[k/g̊ʰ]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=quarterback">quarterback</a><audio id="quarterback" src="https://static.ordnet.dk/mp3/30000/30000084_1.mp3" style="display: none;"></audio><span onclick="playSound('quarterback');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">x</td>
<td>[s/s]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=xenofobi">xenofobi</a><audio id="xenofobi" src="https://static.ordnet.dk/mp3/12007/12007752_1.mp3" style="display: none;"></audio><span onclick="playSound('xenofobi');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">hj</td>
<td>[j/j]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=hjem">hjem</a><audio id="hjem" src="https://static.ordnet.dk/mp3/11020/11020846_1.mp3" style="display: none;"></audio><span onclick="playSound('hjem');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=hjørne">hjørne</a><audio id="hjørne" src="https://static.ordnet.dk/mp3/11021/11021104_1.mp3" style="display: none;"></audio><span onclick="playSound('hjørne');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">hv</td>
<td>[v/v]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=hvor">hvor</a><audio id="hvor" src="https://static.ordnet.dk/mp3/11021/11021974_1.mp3" style="display: none;"></audio><span onclick="playSound('hvor');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=hvad">hvad</a><audio id="hvad" src="https://static.ordnet.dk/mp3/11021/11021849_2.mp3" style="display: none;"></audio><span onclick="playSound('hvad');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=hvem">hvem</a><audio id="hvem" src="https://static.ordnet.dk/mp3/11021/11021871_1.mp3" style="display: none;"></audio><span onclick="playSound('hvem');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=hvornår">hvornår</a><audio id="hvornår" src="https://static.ordnet.dk/mp3/11021/11021989_1.mp3" style="display: none;"></audio><span onclick="playSound('hvornår');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">ld</td>
<td>[l/l]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=kold">kold</a><audio id="kold" src="https://static.ordnet.dk/mp3/11026/11026898_1.mp3" style="display: none;"></audio><span onclick="playSound('kold');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=bold">bold</a><audio id="bold" src="https://static.ordnet.dk/mp3/11005/11005587_1.mp3" style="display: none;"></audio><span onclick="playSound('bold');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">nd</td>
<td>[n/n]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=binde">binde</a><audio id="binde" src="https://static.ordnet.dk/mp3/11004/11004769_1.mp3" style="display: none;"></audio><span onclick="playSound('binde');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=finde">finde</a><audio id="finde" src="https://static.ordnet.dk/mp3/11013/11013016_1.mp3" style="display: none;"></audio><span onclick="playSound('finde');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">rd</td>
<td>[ɐ̯/ɐ̯]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=bord">bord</a><audio id="bord" src="https://static.ordnet.dk/mp3/11005/11005762_1.mp3" style="display: none;"></audio><span onclick="playSound('bord');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">ig</td>
<td>[i/i]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=hurtig">hurtig</a><audio id="hurtig" src="https://static.ordnet.dk/mp3/11021/11021705_1.mp3" style="display: none;"></audio><span onclick="playSound('hurtig');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=dejlig">dejlig</a><audio id="dejlig" src="https://static.ordnet.dk/mp3/11008/11008594_1.mp3" style="display: none;"></audio><span onclick="playSound('dejlig');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">ng</td>
<td>[ŋ/ŋ]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=penge">penge</a><audio id="penge" src="https://static.ordnet.dk/mp3/11039/11039302_1.mp3" style="display: none;"></audio><span onclick="playSound('penge');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=bange">bange</a><audio id="bange" src="https://static.ordnet.dk/mp3/11003/11003397_1.mp3" style="display: none;"></audio><span onclick="playSound('bange');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=mange">mange</a><audio id="mange" src="https://static.ordnet.dk/mp3/11032/11032352_1.mp3" style="display: none;"></audio><span onclick="playSound('mange');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">nk</td>
<td>[ŋg/ŋg̊]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=enke">enke</a><audio id="enke" src="https://static.ordnet.dk/mp3/11011/11011449_1.mp3" style="display: none;"></audio><span onclick="playSound('enke');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=bank">bank</a><audio id="bank" src="https://static.ordnet.dk/mp3/11003/11003403_1.mp3" style="display: none;"></audio><span onclick="playSound('bank');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">ds</td>
<td>[s/s]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=sidst">sidst</a><audio id="sidst" src="https://static.ordnet.dk/mp3/11045/11045878_1.mp3" style="display: none;"></audio><span onclick="playSound('sidst');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=bedst">bedst</a><audio id="bedst" src="https://static.ordnet.dk/mp3/11003/11003755_1.mp3" style="display: none;"></audio><span onclick="playSound('bedst');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">dt</td>
<td>[d/d̥]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=godt">godt</a><audio id="godt" src="https://static.ordnet.dk/mp3/11018/11018364_1.mp3" style="display: none;"></audio><span onclick="playSound('godt');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?select=lidt,2&amp;query=lidt">lidt</a><audio id="lidt" src="https://static.ordnet.dk/mp3/11030/11030356_1.mp3" style="display: none;"></audio><span onclick="playSound('lidt');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center">ch, tion, g, sj</td>
<td>[ɕ/ɕ]</td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=sjov">sjov</a><audio id="sjov" src="https://static.ordnet.dk/mp3/11046/11046153_1.mp3" style="display: none;"></audio><span onclick="playSound('sjov');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=chokolade">chokolade</a><audio id="chokolade" src="https://static.ordnet.dk/mp3/11007/11007752_1.mp3" style="display: none;"></audio><span onclick="playSound('chokolade');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=garage">garage</a><audio id="garage" src="https://static.ordnet.dk/mp3/11017/11017217_1.mp3" style="display: none;"></audio><span onclick="playSound('garage');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=station">station</a><audio id="station" src="https://static.ordnet.dk/mp3/11049/11049882_1.mp3" style="display: none;"></audio><span onclick="playSound('station');" style="cursor: pointer; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
</table>