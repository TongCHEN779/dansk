---
layout: archive
title: ""
permalink: /search/
---

<script>
    function playSound(soundId) {
        var audioElement = document.getElementById(soundId);
        audioElement.play();
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

<script>
    // This defines the list of pages to search, each containing a name and a URL.
    let pagesToSearch = [
        { name: "Adjektiver", url: "/dansk/ord_og_gram/adj/" },
        { name: "Adverbier", url: "/dansk/ord_og_gram/adv/" },
        { name: "Faste Udtryk", url: "/dansk/ord_og_gram/fast/" },
        { name: "Konjunktioner", url: "/dansk/ord_og_gram/konj/" },
        { name: "Præpositioner", url: "/dansk/ord_og_gram/præp/" },
        { name: "Substantiver", url: "/dansk/ord_og_gram/sub/" },
        { name: "Verber", url: "/dansk/ord_og_gram/verb/" }
    ];

    let pageContents = {};

    // Fetches the content of the pages asynchronously and extracts table data for searching.
    async function loadPages() {
        for (let page of pagesToSearch) {
            try {
                let response = await fetch(page.url);
                let text = await response.text();
                let parser = new DOMParser();
                let doc = parser.parseFromString(text, "text/html");

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

    // Filters the loaded pages based on the search term and displays up to 5 matching rows per page.
    function searchPages() {
        let input = document.getElementById("searchInput").value.toLowerCase().trim();
        let resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";

        if (!input) return;

        for (let page in pageContents) {
            let { headers, rows } = pageContents[page];
            // Limits the displayed search results to the first 5 matching rows per page.
            let matchingRows = rows.filter(row => row.text.includes(input)).slice(0, 5);

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
                });

                resultsContainer.appendChild(section);
            }
        }
    }
    // Highlights the searched term in the displayed results by wrapping matched text in a span with a highlight class.
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
    // Ensures the page data is loaded when the document is fully loaded.
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
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
</style>

<input type="text" id="searchInput" placeholder="Søg efter et ord..." onkeyup="searchPages()">
<div id="results"></div>