---
layout: archive
title: ""
permalink: /search/
---

<script>
    let pagesToSearch = [
        { name: "Adjektiver", url: "/dansk/ord_og_gram/adj/" },
        { name: "Substantiver", url: "/dansk/ord_og_gram/sub/" },
        { name: "Verber", url: "/dansk/ord_og_gram/verb/" }
    ];

    let pageContents = {};

    async function loadPages() {
        for (let page of pagesToSearch) {
            try {
                let response = await fetch(page.url);
                let text = await response.text();
                let parser = new DOMParser();
                let doc = parser.parseFromString(text, "text/html");

                // Extract table headers and rows
                let table = doc.querySelector("table");
                let headers = table ? table.querySelector("tr").innerHTML : null;
                let rows = table ? Array.from(table.querySelectorAll("tr")).slice(1) : [];

                if (headers && rows.length > 0) {
                    let rowData = rows.map(row => {
                        let tdText = Array.from(row.querySelectorAll("td")).map(td => td.innerText.toLowerCase()).join(" ");
                        return { html: row.outerHTML, text: tdText };
                    });
                    pageContents[page.name] = { headers, rows: rowData };
                }
            } catch (error) {
                console.error(`Failed to load ${page.url}:`, error);
            }
        }
    }

    function searchPages() {
        let input = document.getElementById("searchInput").value.toLowerCase().trim();
        let resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = ""; // Clear previous results

        if (!input) return;

        let audioElements = new Set(); // Keep track of relevant audio elements

        for (let page in pageContents) {
            let { headers, rows } = pageContents[page];

            let matchingRows = rows.filter(row => row.text.includes(input));

            if (matchingRows.length > 0) {
                let section = document.createElement("div");
                section.innerHTML = `<h3>${page}</h3>
                                    <table border="1" cellspacing="5" style="width:100%">
                                        <tr>${headers}</tr>
                                    </table>`;

                let table = section.querySelector("table");

                matchingRows.forEach(rowData => {
                    let row = document.createElement("tr");
                    row.innerHTML = rowData.html;
                    highlightMatchesInElement(row, input);
                    table.appendChild(row);

                    // Collect audio IDs from the newly displayed rows
                    row.querySelectorAll("span[data-audio-id]").forEach(span => {
                        audioElements.add(span.getAttribute("data-audio-id"));
                    });
                });

                resultsContainer.appendChild(section);
            }
        }

        cleanupAudioElements(audioElements); // Remove unused audio elements
        attachAudioEventListeners();
    }

    function cleanupAudioElements(validAudioIds) {
        document.querySelectorAll("audio").forEach(audio => {
            if (!validAudioIds.has(audio.id)) {
                audio.remove(); // Remove audio elements that are not in the current results
            }
        });
    }


    function highlightMatchesInElement(element, searchTerm) {
        let regex = new RegExp(`(${searchTerm})`, "gi");

        function highlightNode(node) {
            if (node.nodeType === 3) {
                let matches = node.nodeValue.match(regex);
                if (matches) {
                    let span = document.createElement("span");
                    span.innerHTML = node.nodeValue.replace(regex, `<span class="highlight">$1</span>`);
                    node.replaceWith(span);
                }
            } else {
                node.childNodes.forEach(highlightNode);
            }
        }

        highlightNode(element);
    }

    function playSound(soundId) {
        var audioElement = document.getElementById(soundId);
        if (audioElement) {
            audioElement.play();
        } else {
            console.error("Audio element not found:", soundId);
        }
    }

    function attachAudioEventListeners() {
        document.querySelectorAll("span[data-audio-id]").forEach(span => {
            span.onclick = function() {
                let soundId = this.getAttribute("data-audio-id");
                playSound(soundId);
            };
        });
    }

    document.addEventListener("DOMContentLoaded", loadPages);
</script>

<style>
    input {
        margin-bottom: 10px;
        padding: 5px;
        width: 100%;
    }
    h3 {
        margin-top: 20px;
        color: #0077cc;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tr:nth-child(odd) {
        background-color: #ffffff;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
    span[data-audio-id] {
        cursor: pointer;
        text-decoration: underline;
        color: blue;
    }
</style>

<input type="text" id="searchInput" placeholder="Search for a word..." onkeyup="searchPages()">
<div id="results"></div>

<!-- ---
layout: archive
title: ""
permalink: /search/
---

<script>
    let pagesToSearch = [
        { name: "Adjektiver", url: "/dansk/ord_og_gram/adj/" },
        { name: "Substantiver", url: "/dansk/ord_og_gram/sub/" },
        { name: "Verber", url: "/dansk/ord_og_gram/verb/" }
    ];

    let pageContents = {};

    async function loadPages() {
        for (let page of pagesToSearch) {
            try {
                let response = await fetch(page.url);
                let text = await response.text();
                let parser = new DOMParser();
                let doc = parser.parseFromString(text, "text/html");

                // Extract table headers and rows
                let table = doc.querySelector("table");
                let headers = table ? table.querySelector("tr").innerHTML : null;
                let rows = table ? Array.from(table.querySelectorAll("tr")).slice(1) : [];

                if (headers && rows.length > 0) {
                    let rowData = rows.map(row => {
                        let tdText = Array.from(row.querySelectorAll("td")).map(td => td.innerText.toLowerCase()).join(" ");
                        return { html: row.outerHTML, text: tdText };
                    });
                    pageContents[page.name] = { headers, rows: rowData };
                }
            } catch (error) {
                console.error(`Failed to load ${page.url}:`, error);
            }
        }
    }

    function searchPages() {
        let input = document.getElementById("searchInput").value.toLowerCase().trim();
        let resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";

        if (!input) return;

        for (let page in pageContents) {
            let { headers, rows } = pageContents[page];

            let matchingRows = rows.filter(row => row.text.includes(input));

            if (matchingRows.length > 0) {
                let section = document.createElement("div");
                section.innerHTML = `<h3>${page}</h3>
                                    <table border="1" cellspacing="5" style="width:100%">
                                        <tr>${headers}</tr>
                                    </table>`;

                let table = section.querySelector("table");

                matchingRows.forEach(rowData => {
                    let row = document.createElement("tr");
                    row.innerHTML = rowData.html;
                    highlightMatchesInElement(row, input);
                    table.appendChild(row);

                    // Ensure audio elements are NOT duplicated
                    let audioElements = row.querySelectorAll("audio");
                    audioElements.forEach(audio => {
                        let existingAudio = document.getElementById(audio.id);
                        if (!existingAudio) {
                            document.body.appendChild(audio); // Move it to a common container
                        } else {
                            audio.remove(); // Avoid duplicates
                        }
                    });
                });

                resultsContainer.appendChild(section);
            }
        }

        attachAudioEventListeners();
    }


    function highlightMatchesInElement(element, searchTerm) {
        let regex = new RegExp(`(${searchTerm})`, "gi");

        function highlightNode(node) {
            if (node.nodeType === 3) {
                let matches = node.nodeValue.match(regex);
                if (matches) {
                    let span = document.createElement("span");
                    span.innerHTML = node.nodeValue.replace(regex, `<span class="highlight">$1</span>`);
                    node.replaceWith(span);
                }
            } else {
                node.childNodes.forEach(highlightNode);
            }
        }

        highlightNode(element);
    }

    function playSound(soundId) {
        var audioElement = document.getElementById(soundId);
        if (audioElement) {
            audioElement.play();
        } else {
            console.error("Audio element not found:", soundId);
        }
    }

    function attachAudioEventListeners() {
        document.querySelectorAll("span[data-audio-id]").forEach(span => {
            if (!span.hasAttribute("data-listener")) {
                span.setAttribute("data-listener", "true");
                span.addEventListener("click", function () {
                    let soundId = this.getAttribute("data-audio-id");
                    playSound(soundId);
                });
            }
        });
    }


    document.addEventListener("DOMContentLoaded", loadPages);
</script>

<style>
    input {
        margin-bottom: 10px;
        padding: 5px;
        width: 100%;
    }
    h3 {
        margin-top: 20px;
        color: #0077cc;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tr:nth-child(odd) {
        background-color: #ffffff;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
    span[data-audio-id] {
        cursor: pointer;
        text-decoration: underline;
        color: blue;
    }
</style>

<input type="text" id="searchInput" placeholder="Søg efter et ord..." onkeyup="searchPages()">
<div id="results"></div> -->