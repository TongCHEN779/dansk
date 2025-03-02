---
layout: archive
title: ""
permalink: /search/
---

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
    .checkbox-container {
        display: flex;
        justify-content: center;
        gap: 50px;
    }
    .checkbox-container label {
        display: flex;
        align-items: center;
        gap: 5px;
    }
</style>

<script>
    function playSound(soundId) {
        var audioElement = document.getElementById(soundId);
        audioElement.play();
    }
    // This defines the list of pages to search, each containing a name and a URL.
    let pagesToSearch = [
        { name: "Adjektiver", url: "/dansk/ord_og_gram/adj/", id: "adj" },
        { name: "Substantiver", url: "/dansk/ord_og_gram/sub/", id: "sub" },
        { name: "Verber", url: "/dansk/ord_og_gram/verb/", id: "verb" },
        { name: "Adverbier", url: "/dansk/ord_og_gram/adv/", id: "adv" },
        { name: "Konjunktioner", url: "/dansk/ord_og_gram/konj/", id: "konj" },
        { name: "Pronominer", url: "/dansk/ord_og_gram/pron/", id: "pron" },
        { name: "Præpositioner", url: "/dansk/ord_og_gram/præp/", id: "præp" },
        { name: "Faste Udtryk", url: "/dansk/ord_og_gram/fast/", id: "fast" }
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
                let tables = Array.from(doc.querySelectorAll("table")); // Get all tables on the page
                let tableData = [];
                tables.forEach((table, index) => {
                    let headers = table.querySelector("tr") ? table.querySelector("tr").innerHTML : null;
                    let rows = Array.from(table.querySelectorAll("tr")).slice(1);
                    if (headers && rows.length > 0) {
                        let rowData = rows.map(row => {
                            let tdText = Array.from(row.querySelectorAll("td")).map(td => td.innerText.toLowerCase()).join(" ");
                            return { html: row.outerHTML, text: tdText };
                        });
                        tableData.push({ headers, rows: rowData });
                    }
                });
                if (tableData.length > 0) {
                    pageContents[page.name] = tableData;
                }
            } catch (error) {
                console.error(`Failed to load ${page.url}:`, error);
            }
        }
    }
    // Ensures the page data is loaded when the document is fully loaded.
    document.addEventListener("DOMContentLoaded", loadPages);
    // Filters the loaded pages based on the search term and displays up to 5 matching rows per page.
    async function searchPages() {
        await loadPages();
        let input = document.getElementById("searchInput").value.toLowerCase().trim();
        let resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";
        if (!input) return;
        let selectedPages = pagesToSearch.filter(page => document.getElementById(page.id).checked);
        for (let page of selectedPages) {
            let tableData = pageContents[page.name];
            if (!tableData) continue;
            let section = document.createElement("div");
            section.innerHTML = `<h3>${page.name}</h3>`;
            let found = false;
            tableData.forEach((table, index) => {
                let { headers, rows } = table;
                let matchingRows = rows.filter(row => row.text.includes(input)).slice(0, 10);
                if (matchingRows.length > 0) {
                    found = true;
                    let tableElement = document.createElement("table");
                    tableElement.innerHTML = `<tr>${headers}</tr>`;
                    matchingRows.forEach(rowData => {
                        let row = document.createElement("tr");
                        row.innerHTML = rowData.html;
                        highlightMatchesInElement(row, input);
                        tableElement.appendChild(row);
                    });
                    section.appendChild(tableElement);
                }
            });
            if (found) {
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
</script>

<div class="checkbox-container">
    <label><input type="checkbox" id="adj" checked> Adj. </label>
    <label><input type="checkbox" id="sub" checked> Sub. </label>
    <label><input type="checkbox" id="verb" checked> Verb. </label>
    <label><input type="checkbox" id="adv" checked> Adv. </label>
    <label><input type="checkbox" id="konj" checked> Konj. </label>
    <label><input type="checkbox" id="pron" checked> Pron. </label>
    <label><input type="checkbox" id="præp" checked> Præp. </label>
    <label><input type="checkbox" id="fast" checked> Udtryk </label>
</div>

<input type="text" id="searchInput" placeholder="Søg efter et ord..." onkeyup="searchPages()">
<div id="results"></div>