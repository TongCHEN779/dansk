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
        { x: .3, y: .4, text: "e/e̝", audioId: "e", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/e.mp3" },
        { x: .5, y: .6, text: "ε/e", audioId: "ε", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ε.mp3" },
        { x: .7, y: .8, text: "æ/ε", audioId: "æ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/æ.mp3" },
        { x: .2, y: .1, text: "y", audioId: "y", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/y.mp3" },
        { x: .4, y: .3, text: "ø/ø̞", audioId: "ø", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ø.mp3" },
        { x: .6, y: .5, text: "œ/œ̝", audioId: "œ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/œ.mp3" },
        { x: .8, y: .7, text: "ɶ/ɶ̝", audioId: "ɶ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ɶ.mp3" },
        { x: .9, y: .9, text: "ɑ/ɑ̈", audioId: "ɑ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/a.mp3" },
        { x: .8, y: .3, text: "ə", audioId: "ə", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ə.mp3" },
        { x: 1.0, y: .8, text: "ʌ/ʌ̟̞̹", audioId: "ʌ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ʌ.mp3" },
        { x: 1.0, y: .6, text: "ɒ/ɔ̞", audioId: "ɒ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ɒ.mp3" },
        { x: 1.0, y: .45, text: "ɔ/ɔ̟̝", audioId: "ɔ", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/ɔ.mp3" },
        { x: 1.0, y: .3, text: "o/o̝", audioId: "o", audioSrc: "https://tongchen779.github.io/dansk/files/vowel/o.mp3" },
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
        // Draw grey ball
        ctx1.beginPath();
        ctx1.arc(xPos, yPos, 20, 0, 2 * Math.PI);
        ctx1.fillStyle = "white";
        ctx1.fill();
        ctx1.stroke();
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
            if (audio && profileImage) {
                const profileImage = document.getElementById("profile-avatar");
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
        { x: .0, y: 1.0, text: "A", audioId: "A", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/A.mp3" },
        { x: .2, y: 1.0, text: "B", audioId: "B", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/B.mp3" },
        { x: .4, y: 1.0, text: "C", audioId: "C", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/C.mp3" },
        { x: .6, y: 1.0, text: "D", audioId: "D", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/D.mp3" },
        { x: .8, y: 1.0, text: "E", audioId: "E", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/E.mp3" },
        { x: .0, y: .8, text: "F", audioId: "F", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/F.mp3" },
        { x: .2, y: .8, text: "G", audioId: "G", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/G.mp3" },
        { x: .4, y: .8, text: "H", audioId: "H", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/H.mp3" },
        { x: .6, y: .8, text: "I", audioId: "I", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/I.mp3" },
        { x: .8, y: .8, text: "J", audioId: "J", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/J.mp3" },
        { x: .0, y: .6, text: "K", audioId: "K", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/K.mp3" },
        { x: .2, y: .6, text: "L", audioId: "L", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/L.mp3" },
        { x: .4, y: .6, text: "M", audioId: "M", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/M.mp3" },
        { x: .6, y: .6, text: "N", audioId: "N", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/N.mp3" },
        { x: .8, y: .6, text: "O", audioId: "O", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/O.mp3" },
        { x: .0, y: .4, text: "P", audioId: "P", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/P.mp3" },
        { x: .2, y: .4, text: "Q", audioId: "Q", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/Q.mp3" },
        { x: .4, y: .4, text: "R", audioId: "R", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/R.mp3" },
        { x: .6, y: .4, text: "S", audioId: "S", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/S.mp3" },
        { x: .8, y: .4, text: "T", audioId: "T", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/T.mp3" },
        { x: .0, y: .2, text: "U", audioId: "U", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/U.mp3" },
        { x: .2, y: .2, text: "V", audioId: "V", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/V.mp3" },
        { x: .4, y: .2, text: "W", audioId: "W", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/W.mp3" },
        { x: .6, y: .2, text: "X", audioId: "X", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/X.mp3" },
        { x: .8, y: .2, text: "Y", audioId: "Y", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/Y.mp3" },
        { x: .0, y: .0, text: "Z", audioId: "Z", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/Z.mp3" },
        { x: .2, y: .0, text: "Æ", audioId: "Æ", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/AE.mp3" },
        { x: .4, y: .0, text: "Ø", audioId: "Ø", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/OE.mp3" },
        { x: .6, y: .0, text: "Å", audioId: "Å", audioSrc: "https://tongchen779.github.io/dansk/files/Alphabet/AO.mp3" }
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
            if (audio && profileImage) {
                const profileImage = document.getElementById("profile-avatar");
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
<h1 style="text-align: center;"> Front &amp; Unlabialized </h1>
<table align="center" cellspacing="5" id="wordTable" style="text-align: left" width="100%">
<tr>
<th style="text-align: center"> Letter </th>
<th style="text-align: center"> Long &amp; Open </th>
<th style="text-align: center"> Short &amp; Closed </th>
<th style="text-align: center"> Before "r" </th>
<th style="text-align: center"> After "r" </th>
</tr>
<tr>
<td rowspan="4" style="text-align: center">i</td>
<td style="text-align: center">[i:]</td>
<td style="text-align: center">[i]</td>
<td style="text-align: center">[i]</td>
<td style="text-align: center">[i]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=skrive">skrive</a><audio id="skrive" src="https://static.ordnet.dk/mp3/11046/11046982_1.mp3" style="display: none;"></audio><span onclick="playSound('skrive');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=pige">pige</a><audio id="pige" src="https://static.ordnet.dk/mp3/11039/11039666_1.mp3" style="display: none;"></audio><span onclick="playSound('pige');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=time">time</a><audio id="time" src="https://static.ordnet.dk/mp3/12001/12001387_1.mp3" style="display: none;"></audio><span onclick="playSound('time');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=musik">musik</a><audio id="musik" src="https://static.ordnet.dk/mp3/11034/11034722_1.mp3" style="display: none;"></audio><span onclick="playSound('musik');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=lille">lille</a><audio id="lille" src="https://static.ordnet.dk/mp3/11030/11030488_1.mp3" style="display: none;"></audio><span onclick="playSound('lille');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=minut">minut</a><audio id="minut" src="https://static.ordnet.dk/mp3/11033/11033841_1.mp3" style="display: none;"></audio><span onclick="playSound('minut');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=cigaret">cigaret</a><audio id="cigaret" src="https://static.ordnet.dk/mp3/11007/11007786_1.mp3" style="display: none;"></audio><span onclick="playSound('cigaret');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=firma">firma</a><audio id="firma" src="https://static.ordnet.dk/mp3/11013/11013159_1.mp3" style="display: none;"></audio><span onclick="playSound('firma');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=firs">firs</a><audio id="firs" src="https://static.ordnet.dk/mp3/11013/11013169_1.mp3" style="display: none;"></audio><span onclick="playSound('firs');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ris">ris</a><audio id="ris" src="https://static.ordnet.dk/mp3/11043/11043432_1.mp3" style="display: none;"></audio><span onclick="playSound('ris');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=fri">fri</a><audio id="fri" src="https://static.ordnet.dk/mp3/11015/11015996_1.mp3" style="display: none;"></audio><span onclick="playSound('fri');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[e/e̝]</td>
<td style="text-align: center"></td>
<td style="text-align: center">[ε/e]</td>
</tr>
<tr>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ikke">ikke</a><audio id="ikke" src="https://static.ordnet.dk/mp3/11022/11022886_1.mp3" style="display: none;"></audio><span onclick="playSound('ikke');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ligge">ligge</a><audio id="ligge" src="https://static.ordnet.dk/mp3/11030/11030434_1.mp3" style="display: none;"></audio><span onclick="playSound('ligge');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=vil">vil</a><audio id="vil" src="https://static.ordnet.dk/mp3/12006/12006777_2.mp3" style="display: none;"></audio><span onclick="playSound('vil');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=hvis">hvis</a><audio id="hvis" src="https://static.ordnet.dk/mp3/11021/11021968_1.mp3" style="display: none;"></audio><span onclick="playSound('hvis');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=dikke">dikke</a><audio id="dikke" src="https://static.ordnet.dk/mp3/11009/11009076_1.mp3" style="display: none;"></audio><span onclick="playSound('dikke');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=briller">briller</a><audio id="briller" src="https://static.ordnet.dk/mp3/11006/11006165_1.mp3" style="display: none;"></audio><span onclick="playSound('briller');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=drikke">drikke</a><audio id="drikke" src="https://static.ordnet.dk/mp3/11009/11009686_1.mp3" style="display: none;"></audio><span onclick="playSound('drikke');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=riste">riste</a><audio id="riste" src="https://static.ordnet.dk/mp3/11043/11043461_1.mp3" style="display: none;"></audio><span onclick="playSound('riste');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td rowspan="4" style="text-align: center">e</td>
<td style="text-align: center">[e:/e̝:]</td>
<td style="text-align: center">[e/e̝]</td>
<td style="text-align: center">[e/e̝]</td>
<td style="text-align: center">[ε/e]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=mene">mene</a><audio id="mene" src="https://static.ordnet.dk/mp3/11033/11033158_1.mp3" style="display: none;"></audio><span onclick="playSound('mene');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=alene">alene</a><audio id="alene" src="https://static.ordnet.dk/mp3/11001/11001224_1.mp3" style="display: none;"></audio><span onclick="playSound('alene');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=sene">sene</a><audio id="sene" src="https://static.ordnet.dk/mp3/11045/11045537_1.mp3" style="display: none;"></audio><span onclick="playSound('sene');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=det">det</a><audio id="det" src="https://static.ordnet.dk/mp3/11008/11008911_1.mp3" style="display: none;"></audio><span onclick="playSound('det');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=en">en</a><audio id="en" src="https://static.ordnet.dk/mp3/11011/11011264_1.mp3" style="display: none;"></audio><span onclick="playSound('en');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ben">ben</a><audio id="ben" src="https://static.ordnet.dk/mp3/11004/11004055_1.mp3" style="display: none;"></audio><span onclick="playSound('ben');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=sten">sten</a><audio id="sten" src="https://static.ordnet.dk/mp3/11050/11050123_1.mp3" style="display: none;"></audio><span onclick="playSound('sten');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=her">her</a><audio id="her" src="https://static.ordnet.dk/mp3/11020/11020487_1.mp3" style="display: none;"></audio><span onclick="playSound('her');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=se">se</a><audio id="se" src="https://static.ordnet.dk/mp3/11045/11045127_1.mp3" style="display: none;"></audio><span onclick="playSound('se');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=derfor">derfor</a><audio id="derfor" src="https://static.ordnet.dk/mp3/11008/11008788_1.mp3" style="display: none;"></audio><span onclick="playSound('derfor');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tre">tre</a><audio id="tre" src="https://static.ordnet.dk/mp3/12002/12002186_1.mp3" style="display: none;"></audio><span onclick="playSound('tre');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=brev">brev</a><audio id="brev" src="https://static.ordnet.dk/mp3/11006/11006118_1.mp3" style="display: none;"></audio><span onclick="playSound('brev');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ren">ren</a><audio id="ren" src="https://static.ordnet.dk/mp3/11042/11042801_1.mp3" style="display: none;"></audio><span onclick="playSound('ren');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[ε/e]</td>
<td style="text-align: center">[æ/ε]</td>
<td style="text-align: center">[a]</td>
</tr>
<tr>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=elske">elske</a><audio id="elske" src="https://static.ordnet.dk/mp3/11011/11011159_1.mp3" style="display: none;"></audio><span onclick="playSound('elske');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=eller">eller</a><audio id="eller" src="https://static.ordnet.dk/mp3/11011/11011122_1.mp3" style="display: none;"></audio><span onclick="playSound('eller');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=fem">fem</a><audio id="fem" src="https://static.ordnet.dk/mp3/11012/11012688_1.mp3" style="display: none;"></audio><span onclick="playSound('fem');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ven">ven</a><audio id="ven" src="https://static.ordnet.dk/mp3/12006/12006292_1.mp3" style="display: none;"></audio><span onclick="playSound('ven');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=seng">seng</a><audio id="seng" src="https://static.ordnet.dk/mp3/11045/11045546_1.mp3" style="display: none;"></audio><span onclick="playSound('seng');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=verden">verden</a><audio id="verden" src="https://static.ordnet.dk/mp3/12006/12006391_1.mp3" style="display: none;"></audio><span onclick="playSound('verden');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=gerne">gerne</a><audio id="gerne" src="https://static.ordnet.dk/mp3/11017/11017883_1.mp3" style="display: none;"></audio><span onclick="playSound('gerne');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tretten">tretten</a><audio id="tretten" src="https://static.ordnet.dk/mp3/12002/12002305_1.mp3" style="display: none;"></audio><span onclick="playSound('tretten');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=tredive">tredive</a><audio id="tredive" src="https://static.ordnet.dk/mp3/12002/12002196_1.mp3" style="display: none;"></audio><span onclick="playSound('tredive');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ret">ret</a><audio id="ret" src="https://static.ordnet.dk/mp3/11043/11043047_1.mp3" style="display: none;"></audio><span onclick="playSound('ret');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td rowspan="4" style="text-align: center">æ</td>
<td style="text-align: center">[ε:/e:]</td>
<td style="text-align: center">[ε/e]</td>
<td style="text-align: center">[ε/e]</td>
<td style="text-align: center">[ε/e] eller[ε:/e:]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=læne">læne</a><audio id="læne" src="https://static.ordnet.dk/mp3/11031/11031619_1.mp3" style="display: none;"></audio><span onclick="playSound('læne');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=læge">læge</a><audio id="læge" src="https://static.ordnet.dk/mp3/11031/11031550_1.mp3" style="display: none;"></audio><span onclick="playSound('læge');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=læse">læse</a><audio id="læse" src="https://static.ordnet.dk/mp3/11031/11031693_1.mp3" style="display: none;"></audio><span onclick="playSound('læse');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=næse">næse</a><audio id="næse" src="https://static.ordnet.dk/mp3/11036/11036561_1.mp3" style="display: none;"></audio><span onclick="playSound('næse');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=gæst">gæst</a><audio id="gæst" src="https://static.ordnet.dk/mp3/11019/11019384_1.mp3" style="display: none;"></audio><span onclick="playSound('gæst');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=næste">næste</a><audio id="næste" src="https://static.ordnet.dk/mp3/11036/11036587_1.mp3" style="display: none;"></audio><span onclick="playSound('næste');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=nær">nær</a><audio id="nær" src="https://static.ordnet.dk/mp3/11036/11036499_1.mp3" style="display: none;"></audio><span onclick="playSound('nær');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=lær">lær</a><audio id="lær" src="https://static.ordnet.dk/mp3/11031/11031523_1.mp3" style="display: none;"></audio><span onclick="playSound('lær');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=træ">træ</a><audio id="træ" src="https://static.ordnet.dk/mp3/12002/12002619_1.mp3" style="display: none;"></audio><span onclick="playSound('træ');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ræbe">ræbe</a><audio id="ræbe" src="https://static.ordnet.dk/mp3/11044/11044050_1.mp3" style="display: none;"></audio><span onclick="playSound('ræbe');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=dræbe">dræbe</a><audio id="dræbe" src="https://static.ordnet.dk/mp3/11009/11009807_1.mp3" style="display: none;"></audio><span onclick="playSound('dræbe');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kræve">kræve</a><audio id="kræve" src="https://static.ordnet.dk/mp3/11028/11028389_1.mp3" style="display: none;"></audio><span onclick="playSound('kræve');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center"></td>
<td style="text-align: center">[æ/ε]</td>
<td style="text-align: center">[a]</td>
</tr>
<tr>
<td></td>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=færdig">færdig</a><audio id="færdig" src="https://static.ordnet.dk/mp3/11016/11016703_1.mp3" style="display: none;"></audio><span onclick="playSound('færdig');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kæreste">kæreste</a><audio id="kæreste" src="https://static.ordnet.dk/mp3/11029/11029094_1.mp3" style="display: none;"></audio><span onclick="playSound('kæreste');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=trække">trække</a><audio id="trække" src="https://static.ordnet.dk/mp3/12002/12002664_1.mp3" style="display: none;"></audio><span onclick="playSound('trække');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=træffe">træffe</a><audio id="træffe" src="https://static.ordnet.dk/mp3/12002/12002639_1.mp3" style="display: none;"></audio><span onclick="playSound('træffe');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=fræk">fræk</a><audio id="fræk" src="https://static.ordnet.dk/mp3/11016/11016309_1.mp3" style="display: none;"></audio><span onclick="playSound('fræk');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=dræbt">dræbte</a><audio id="dræbt" src="https://static.ordnet.dk/mp3/11009/11009807_2.mp3" style="display: none;"></audio><span onclick="playSound('dræbt');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td rowspan="4" style="text-align: center">a</td>
<td style="text-align: center">[æ:/ε:]</td>
<td style="text-align: center">[a/a̝] (before d, l, n, s, t)</td>
<td style="text-align: center">[ɑ/ɑ̈]</td>
<td style="text-align: center">[ɑ/ɑ̈] eller [ɑ:/ɑ̈:]</td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=lave">lave</a><audio id="lave" src="https://static.ordnet.dk/mp3/11029/11029912_1.mp3" style="display: none;"></audio><span onclick="playSound('lave');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=tale">tale</a><audio id="tale" src="https://static.ordnet.dk/mp3/12000/12000128_1.mp3" style="display: none;"></audio><span onclick="playSound('tale');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=dame">dame</a><audio id="dame" src="https://static.ordnet.dk/mp3/11008/11008304_1.mp3" style="display: none;"></audio><span onclick="playSound('dame');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kage">kage</a><audio id="kage" src="https://static.ordnet.dk/mp3/11024/11024957_1.mp3" style="display: none;"></audio><span onclick="playSound('kage');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=dansk">dansk</a><audio id="dansk" src="https://static.ordnet.dk/mp3/11008/11008394_1.mp3" style="display: none;"></audio><span onclick="playSound('dansk');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=glas">glas</a><audio id="glas" src="https://static.ordnet.dk/mp3/11018/11018095_1.mp3" style="display: none;"></audio><span onclick="playSound('glas');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ananas">ananas</a><audio id="ananas" src="https://static.ordnet.dk/mp3/11001/11001637_1.mp3" style="display: none;"></audio><span onclick="playSound('ananas');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=banan">banan</a><audio id="banan" src="https://static.ordnet.dk/mp3/11003/11003353_1.mp3" style="display: none;"></audio><span onclick="playSound('banan');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ja">ja</a><audio id="ja" src="https://static.ordnet.dk/mp3/11024/11024333_1.mp3" style="display: none;"></audio><span onclick="playSound('ja');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kan">kan</a><audio id="kan" src="" style="display: none;"></audio><span onclick="playSound('kan');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=barn">barn</a><audio id="barn" src="https://static.ordnet.dk/mp3/11003/11003497_1.mp3" style="display: none;"></audio><span onclick="playSound('barn');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=arabisk">arabisk</a><audio id="arabisk" src="https://static.ordnet.dk/mp3/11002/11002231_1.mp3" style="display: none;"></audio><span onclick="playSound('arabisk');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=arabisk">arabisk</a><audio id="arabisk" src="https://static.ordnet.dk/mp3/11002/11002231_1.mp3" style="display: none;"></audio><span onclick="playSound('arabisk');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=rask">rask</a><audio id="rask" src="https://static.ordnet.dk/mp3/11042/11042187_1.mp3" style="display: none;"></audio><span onclick="playSound('rask');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=krage">krage</a><audio id="krage" src="https://static.ordnet.dk/mp3/11027/11027895_1.mp3" style="display: none;"></audio><span onclick="playSound('krage');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
</tr>
<tr>
<td style="text-align: center"></td>
<td style="text-align: center">[ɑ/ɑ̈] (before m, f, k, p, g, nk, ng)</td>
<td style="text-align: center"></td>
<td style="text-align: center"></td>
</tr>
<tr>
<td></td>
<td><a href="https://ordnet.dk/ddo/ordbog?query=aften">aften</a><audio id="aften" src="https://static.ordnet.dk/mp3/11000/11000821_1.mp3" style="display: none;"></audio><span onclick="playSound('aften');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=mangen">mangen</a><audio id="mangen" src="https://static.ordnet.dk/mp3/11032/11032352_1.mp3" style="display: none;"></audio><span onclick="playSound('mangen');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=appelsin">appelsin</a><audio id="appelsin" src="https://static.ordnet.dk/mp3/11002/11002177_1.mp3" style="display: none;"></audio><span onclick="playSound('appelsin');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=kaffe">kaffe</a><audio id="kaffe" src="https://static.ordnet.dk/mp3/11024/11024929_1.mp3" style="display: none;"></audio><span onclick="playSound('kaffe');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=ham">ham</a><audio id="ham" src="https://static.ordnet.dk/mp3/11019/11019770_1.mp3" style="display: none;"></audio><span onclick="playSound('ham');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=bank">bank</a><audio id="bank" src="https://static.ordnet.dk/mp3/11003/11003403_1.mp3" style="display: none;"></audio><span onclick="playSound('bank');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span>, <a href="https://ordnet.dk/ddo/ordbog?query=snakke">snakke</a><audio id="snakke" src="https://static.ordnet.dk/mp3/11048/11048205_1.mp3" style="display: none;"></audio><span onclick="playSound('snakke');" style="cursor: pointer; text-decoration: underline; color: blue;"> <i class="fas fa-play"></i></span></td>
<td></td>
<td></td>
</tr>
</table>