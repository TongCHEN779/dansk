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

<script>
    let pages = [];

    // Fetch the JSON index when the page loads
    fetch('/search.json')
        .then(response => response.json())
        .then(data => pages = data);

    function searchSite() {
        let input = document.getElementById("searchInput").value.toLowerCase();
        let resultsContainer = document.getElementById("searchResults");
        resultsContainer.innerHTML = ""; // Clear previous results

        if (input.length < 2) return; // Avoid unnecessary searches

        let results = pages.filter(page => 
            page.title.toLowerCase().includes(input) || 
            page.content.toLowerCase().includes(input)
        );

        results.forEach(page => {
            let listItem = document.createElement("li");
            let link = document.createElement("a");
            link.href = page.url;
            link.textContent = page.title;
            listItem.appendChild(link);
            resultsContainer.appendChild(listItem);
        });
    }
</script>

<input type="text" id="searchInput" placeholder="Search for a word..." onkeyup="searchSite()">
<ul id="searchResults"></ul>