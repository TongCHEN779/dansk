---
layout: archive
title: ""
permalink: /search/
---

<script>
    // List of files to search
    const filesToSearch = [
        { name: "Adjektiver", url: "/ord_og_gram/adj/" },
        { name: "Substantiver", url: "/ord_og_gram/sub/" },
        // Add more files as needed
    ];

    // Function to fetch content from a file
    async function fetchContent(url) {
        const response = await fetch(url);
        const text = await response.text();
        return text;
    }

    // Function to search through the content
    async function searchTable() {
        const input = document.getElementById("searchInput").value.toLowerCase();
        const resultsContainer = document.getElementById("searchResults");
        resultsContainer.innerHTML = ""; // Clear previous results

        for (const file of filesToSearch) {
            const content = await fetchContent(file.url);
            const lines = content.split('\n');

            lines.forEach((line, index) => {
                if (line.toLowerCase().includes(input)) {
                    const resultItem = document.createElement("div");
                    resultItem.innerHTML = `<strong>${file.name}</strong>: ${line}`;
                    resultsContainer.appendChild(resultItem);
                }
            });
        }
    }
</script>

<style>
    input {
        margin-bottom: 10px;
        padding: 5px;
        width: 100%;
    }
    #searchResults {
        margin-top: 20px;
    }
</style>

<input type="text" id="searchInput" placeholder="Search for a word..." onkeyup="searchTable()">
<div id="searchResults"></div>