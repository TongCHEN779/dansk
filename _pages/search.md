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
</style> -->

<input type="text" id="searchInput" placeholder="Search for a word..." onkeyup="searchSite()">
<table id="searchResultsTable" style="width: 100%; border-collapse: collapse; display: none;">
    <thead>
        <tr>
            <th>N-form (ental)</th>
            <th>Udtale</th>
            <th>T-form (ental)</th>
            <th>E-form (flertal og bestemt form)</th>
            <th>Komparativ (ental)</th>
            <th>Superlativ (ental)</th>
            <th>Engelsk</th>
        </tr>
    </thead>
    <tbody id="searchResults"></tbody>
</table>

<script>
    let pages = [];

    // Fetch the JSON index when the page loads
    fetch('/search.json')
        .then(response => response.json())
        .then(data => pages = data);

    function searchSite() {
        let input = document.getElementById("searchInput").value.toLowerCase();
        let resultsContainer = document.getElementById("searchResults");
        let resultsTable = document.getElementById("searchResultsTable");
        
        resultsContainer.innerHTML = ""; // Clear previous results

        if (input.length < 2) {
            resultsTable.style.display = "none"; // Hide table if no search
            return;
        }

        let results = pages.flatMap(page => 
            page.rows.filter(row => row.toLowerCase().includes(input))
                .map(row => ({ row: row, url: page.url })) // Keep URL reference
        );

        if (results.length > 0) {
            resultsTable.style.display = "table"; // Show table if results exist
        } else {
            resultsTable.style.display = "none"; // Hide if no results
        }

        results.forEach(result => {
            let row = document.createElement("tr");
            row.innerHTML = `<td colspan="7"><a href="${result.url}">${result.row}</a></td>`;
            resultsContainer.appendChild(row);
        });
    }
</script>
