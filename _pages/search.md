---
layout: archive
title: ""
permalink: /search/
---

<!-- <script>
    function searchTable() {
        let input = document.getElementById("searchInput").value.toLowerCase();
        let table = document.getElementById("wordTable");
        let rows = table.getElementsByTagName("tr");
        let firstMatch = null;
        for (let i = 1; i < rows.length; i++) {
            let rowText = rows[i].innerText.toLowerCase();
            if (rowText.includes(input)) {
                rows[i].style.display = "";
                if (!firstMatch) firstMatch = rows[i]; // Save first matching row
            } else {
                rows[i].style.display = "table-row"; // Ensure row is not hidden
            }
        }
        // Scroll to the first matching row
        if (firstMatch) {
            setTimeout(() => {
                firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 100); // Delay to ensure rendering
        }
    }
    // Function to scroll to the first row that contains the search word.
    function jumpToRow() {
        // Get the search word in lowercase.
        let input = document.getElementById("searchInput").value.toLowerCase();
        // Get the table and its rows.
        let table = document.getElementById("wordTable");
        let rows = table.getElementsByTagName("tr");
        // Loop through each row (skipping the header row).
        for (let i = 1; i < rows.length; i++) {
            let rowText = rows[i].innerText.toLowerCase();
            if (rowText.includes(input)) {
                // Scroll the first matching row into view.
                rows[i].scrollIntoView({ behavior: "smooth", block: "center" });
                break; // Stop after scrolling to the first match.
            }
        }
    }
</script>
<style>
    input {
        margin-bottom: 10px;
        padding: 5px;
        width: 100%;
    }
</style>

<input type="text" id="searchInput" placeholder="Search for a word..." onkeyup="searchTable()"> -->


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

                // Extract table headers
                let table = doc.querySelector("table");
                let headers = table ? table.querySelector("tr") : null;
                let rows = table ? table.querySelectorAll("tr") : [];

                if (headers && rows.length > 1) {
                    let headersHTML = headers.innerHTML; // Preserve headers
                    let rowData = Array.from(rows).slice(1).map(row => row.outerHTML); // Store full row HTML
                    pageContents[page.name] = { headers: headersHTML, rows: rowData };
                }
            } catch (error) {
                console.error(`Failed to load ${page.url}:`, error);
            }
        }
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
                section.innerHTML = `<h3>${page}</h3>
                                     <table border="1" cellspacing="5" style="width:100%">
                                         <tr>${headers}</tr>
                                         ${matchingRows.join("")}
                                     </table>`;
                resultsContainer.appendChild(section);
            }
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
</style>

<input type="text" id="searchInput" placeholder="Search for a word..." onkeyup="searchPages()">
<div id="results"></div>