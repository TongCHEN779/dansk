/* Dansk – interaction layer. Adds behaviour only; never edits page text. */
(function () {
  'use strict';

  var root = document.documentElement;
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }

  /* ---- theme (light / dark) ---- */
  function currentTheme() {
    return root.getAttribute('data-theme') ||
      (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  /* ---- masthead shadow on scroll + back-to-top visibility ---- */
  function onScroll() {
    var y = window.pageYOffset;
    var m = $('.masthead');
    if (m) m.classList.toggle('is-scrolled', y > 4);
    var t = $('#to-top');
    if (t) t.classList.toggle('show', y > 600);
  }

  /* ---- mark the current page in the top nav and sidebar ---- */
  function markActive() {
    var path = location.pathname.replace(/index\.html$/, '');
    function norm(a) { try { return new URL(a.href, location.href).pathname.replace(/index\.html$/, ''); } catch (e) { return ''; } }
    $$('.greedy-nav .visible-links a, .greedy-nav .hidden-links a').forEach(function (a) {
      var p = norm(a);
      var section = p.replace(/\/main\/$/, '/');
      if (p === path || (section !== p && path.indexOf(section) === 0)) {
        a.classList.add('is-active');
      }
    });
    $$('.sidebar .nav__items a').forEach(function (a) {
      if (norm(a) === path) {
        a.classList.add('is-active');
        a.setAttribute('aria-current', 'page');
        var sb = $('.sidebar');
        if (sb && sb.scrollHeight > sb.clientHeight) {
          var off = a.offsetTop - sb.clientHeight / 2;
          sb.scrollTop = Math.max(0, off);
        }
      }
    });
  }

  /* ---- tables: scroll wrapper on small screens ---- */
  function wrapTables() {
    $$('#main table').forEach(function (t) {
      if (t.closest('.table-wrap')) return;
      var w = document.createElement('div');
      w.className = 'table-wrap' + (t.querySelector('th') ? '' : ' no-head');
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
      function measure() {
        w.classList.remove('is-wide', 'has-fade');
        if (w.scrollWidth > w.clientWidth + 1) w.classList.add('is-wide');
        fade();
      }
      function fade() {
        w.classList.toggle('has-fade', w.scrollWidth - w.clientWidth - w.scrollLeft > 4);
      }
      w.addEventListener('scroll', fade, { passive: true });
      window.addEventListener('resize', measure);
      window.addEventListener('load', measure);
      measure();
    });
  }

  /* ---- tables: live filter ---- */
  function addFilter() {
    var tables = $$('#main table');
    var rows = [];
    tables.forEach(function (t) {
      $$('tr', t).forEach(function (r) { if (!$('th', r)) rows.push(r); });
    });
    if (rows.length < 10) return;

    var first = tables[0].closest('.table-wrap') || tables[0];
    var box = document.createElement('div');
    box.className = 'table-filter';
    box.innerHTML = '<input type="search" id="table-filter-input" placeholder="Filtrer…  ( / )" aria-label="Filter" autocomplete="off"><span class="count"></span>';
    first.parentNode.insertBefore(box, first);

    var input = $('input', box), count = $('.count', box);
    var texts = rows.map(function (r) { return r.textContent.toLowerCase(); });

    function run() {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      rows.forEach(function (r, i) {
        var hit = !q || texts[i].indexOf(q) !== -1;
        r.classList.toggle('is-filtered-out', !hit);
        if (hit) shown++;
      });
      count.textContent = q ? shown + ' / ' + rows.length : '';
    }
    input.addEventListener('input', run);
    input.addEventListener('keydown', function (e) { if (e.key === 'Escape') { input.value = ''; run(); input.blur(); } });

    document.addEventListener('keydown', function (e) {
      if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
      var tag = (document.activeElement || {}).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      e.preventDefault();
      input.focus();
      input.select();
    });
  }

  /* ---- only one audio at a time ---- */
  function singleAudio() {
    document.addEventListener('play', function (e) {
      if (!e.target || e.target.tagName !== 'AUDIO') return;
      $$('audio').forEach(function (a) { if (a !== e.target && !a.paused) a.pause(); });
    }, true);
  }

  /* ---- floating controls ---- */
  function addFabs() {
    var wrap = document.createElement('div');
    wrap.className = 'fab-stack';
    wrap.innerHTML =
      '<button type="button" id="to-top" aria-label="Til toppen" title="Til toppen"><i class="fas fa-arrow-up"></i></button>' +
      '<button type="button" id="theme-toggle" aria-label="Skift tema" title="Lys / mørk"><i class="fas fa-moon"></i></button>';
    document.body.appendChild(wrap);

    var tt = $('#theme-toggle', wrap), icon = $('i', tt);
    function sync() { icon.className = currentTheme() === 'dark' ? 'fas fa-sun' : 'fas fa-moon'; }
    tt.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      store('theme', next);
      sync();
    });
    sync();

    $('#to-top', wrap).addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function init() {
    markActive();
    wrapTables();
    addFilter();
    singleAudio();
    addFabs();
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
