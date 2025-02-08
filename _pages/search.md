---
layout: archive
title: ""
permalink: /search/
---

<script>
    let pagesToSearch = [
        { name: "Adjektiver", url: "/dansk/ord_og_gram/adj/" },
        { name: "Verber", url: "/dansk/ord_og_gram/verb/" },
        { name: "Substantiver", url: "/dansk/ord_og_gram/sub/" }
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
                    let rowData = rows.map(row => row.outerHTML); // Store full row HTML
                    pageContents[page.name] = { headers, rows: rowData };
                }
            } catch (error) {
                console.error(`Failed to load ${page.url}:`, error);
            }
        }
    }

    function highlightMatch(text, searchTerm) {
        let regex = new RegExp(`(${searchTerm})`, "gi");
        return text.replace(regex, `<span class="highlight">$1</span>`);
    }

    function searchPages() {
        let input = document.getElementById("searchInput").value.toLowerCase();
        let resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";

        if (!input) return;

        for (let page in pageContents) {
            let { headers, rows } = pageContents[page];

            let matchingRows = rows.filter(rowHTML => rowHTML.toLowerCase().includes(input));

            if (matchingRows.length > 0) {
                let section = document.createElement("div");
                
                // Process rows to highlight only text-based content, while keeping the audio elements intact
                let processedRows = matchingRows.map(rowHTML => {
                    let tempDiv = document.createElement("div");
                    tempDiv.innerHTML = rowHTML;
                    
                    let cells = tempDiv.querySelectorAll("td, th");
                    cells.forEach(cell => {
                        if (!cell.innerHTML.includes("<audio>") && !cell.innerHTML.includes("onclick")) {
                            cell.innerHTML = highlightMatch(cell.innerHTML, input);
                        }
                    });

                    return tempDiv.innerHTML;
                });

                section.innerHTML = `<h3>${page}</h3>
                                     <table border="1" cellspacing="5" style="width:100%">
                                         <tr>${headers}</tr>
                                         ${processedRows.join("")}
                                     </table>`;
                resultsContainer.appendChild(section);
            }
        }
    }

    function playSound(soundId) {
        let audioElement = document.getElementById(soundId);
        if (audioElement) {
            audioElement.play();
        }
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
    span[onclick] {
        cursor: pointer;
        text-decoration: underline;
        color: blue;
    }
</style>

<input type="text" id="searchInput" placeholder="Search for a word..." onkeyup="searchPages()">
<div id="results"></div>