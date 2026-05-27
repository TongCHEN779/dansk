---
layout: archive
title: ""
permalink: /search/
---

{% include table-style.html %}
{% include audio-script.html %}

<style>
    input { margin-bottom: 10px; padding: 5px; width: 100%; }
    h3 { margin-top: 20px; color: #0077cc; }
    .highlight { background-color: yellow; font-weight: bold; }
    .checkbox-container {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-bottom: 10px;
    }
    .checkbox-container label { display: flex; align-items: center; gap: 5px; }
</style>

<script>
    const INDEX_URL = "/dansk/vocabulary-index.json";
    let allWords = [];
    let loaded = false;

    async function loadIndex() {
        if (loaded) return;
        const res = await fetch(INDEX_URL);
        allWords = await res.json();
        loaded = true;
    }

    function getCheckedTypes() {
        return ["adj","sub","verb","adv","konj","præp","fast"]
            .filter(t => document.getElementById(t).checked);
    }

    function highlightText(text, term) {
        const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    function renderRow(e, term) {
        const dansk = highlightText(e.dansk || "", term);
        const ipa   = e.mp3
            ? `<audio id="s_${e.audio_id}" src="${e.mp3}" style="display:none;"></audio>` +
              `<span onclick="playSound('s_${e.audio_id}');" style="cursor:pointer;color:blue;">${e.ipa}</span>`
            : (e.ipa || "");
        const eng  = highlightText(e.engelsk || "", term);
        const ext  = highlightText(e.extra   || "", term);
        return `<tr><td>${dansk}</td><td>${ipa}</td><td>${eng}</td>${ext ? `<td>${ext}</td>` : ""}</tr>`;
    }

    async function searchPages() {
        await loadIndex();
        const term   = document.getElementById("searchInput").value.toLowerCase().trim();
        const types  = getCheckedTypes();
        const results = document.getElementById("results");
        results.innerHTML = "";
        if (!term) return;

        const byType = {};
        for (const e of allWords) {
            if (!types.includes(e.type)) continue;
            const searchText = (e.dansk + " " + e.engelsk + " " + (e.extra || "")).toLowerCase();
            if (!searchText.includes(term)) continue;
            if (!byType[e.type]) byType[e.type] = { label: e.label, entries: [] };
            byType[e.type].entries.push(e);
        }

        for (const [type, group] of Object.entries(byType)) {
            const section = document.createElement("div");
            const hasExtra = group.entries.some(e => e.extra);
            section.innerHTML = `<h3>${group.label}</h3>
                <table><tr><th>Dansk</th><th>Udtale</th><th>Engelsk</th>${hasExtra ? "<th>Mere</th>" : ""}</tr>
                ${group.entries.slice(0, 10).map(e => renderRow(e, term)).join("")}
                </table>`;
            results.appendChild(section);
        }
    }

    document.addEventListener("DOMContentLoaded", () => loadIndex());
</script>

<div class="checkbox-container">
    <label><input type="checkbox" id="adj"  checked> Adj. </label>
    <label><input type="checkbox" id="sub"  checked> Sub. </label>
    <label><input type="checkbox" id="verb" checked> Verb. </label>
    <label><input type="checkbox" id="adv"  checked> Adv. </label>
    <label><input type="checkbox" id="konj" checked> Konj. </label>
    <label><input type="checkbox" id="præp" checked> Præp. </label>
    <label><input type="checkbox" id="fast" checked> Udtryk </label>
</div>

<input type="text" id="searchInput" placeholder="Søg efter et ord..." onkeyup="searchPages()" onmouseenter="this.select()">
<div id="results"></div>
