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

  /* ---- front page: the sheet-music pages become a page-turning viewer ---- */
  function pager() {
    if (!document.body.classList.contains('layout--home')) return;
    var host = $('.archive');
    if (!host) return;
    var imgs = $$('p[align="center"] img', host);
    if (imgs.length < 2) return;

    var view = document.createElement('div');
    view.className = 'pager';
    view.setAttribute('role', 'group');
    view.setAttribute('aria-label', 'Noder');
    view.tabIndex = 0;
    var stage = document.createElement('div');
    stage.className = 'pager__stage';
    var pages = imgs.map(function (im, i) {
      var c = document.createElement('img');
      c.src = im.src; c.alt = im.alt || ''; c.className = 'pager__page'; c.draggable = false;
      stage.appendChild(c);
      return c;
    });
    var prev = document.createElement('button');
    prev.type = 'button'; prev.className = 'pager__nav pager__nav--prev'; prev.setAttribute('aria-label', 'Forrige side');
    prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
    var next = document.createElement('button');
    next.type = 'button'; next.className = 'pager__nav pager__nav--next'; next.setAttribute('aria-label', 'Næste side');
    next.innerHTML = '<i class="fas fa-chevron-right"></i>';
    var count = document.createElement('div');
    count.className = 'pager__count';
    view.appendChild(stage); view.appendChild(prev); view.appendChild(next); view.appendChild(count);

    var first = imgs[0].closest('p');
    first.parentNode.insertBefore(view, first);
    $$('p[align="center"]', host).forEach(function (p) { p.style.display = 'none'; });

    var cur = 0;
    function render() {
      pages.forEach(function (pg, i) {
        pg.classList.toggle('is-before', i < cur);
        pg.classList.toggle('is-current', i === cur);
        pg.classList.toggle('is-after', i > cur);
        pg.setAttribute('aria-hidden', i === cur ? 'false' : 'true');
      });
      prev.disabled = cur === 0;
      next.disabled = cur === pages.length - 1;
      count.textContent = (cur + 1) + ' / ' + pages.length;
    }
    function go(n) { if (n < 0 || n >= pages.length || n === cur) return; cur = n; render(); }
    prev.addEventListener('click', function () { go(cur - 1); });
    next.addEventListener('click', function () { go(cur + 1); });
    stage.addEventListener('click', function (e) {
      var r = stage.getBoundingClientRect();
      go(e.clientX - r.left > r.width / 2 ? cur + 1 : cur - 1);
    });
    view.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { go(cur + 1); e.preventDefault(); }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { go(cur - 1); e.preventDefault(); }
    });
    var x0 = null;
    stage.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
    }, { passive: true });
    render();
  }

  /* keep sticky things (table headers, sidebar) exactly below the sticky masthead */
  function syncHeadHeight() {
    var m = $('.masthead');
    if (!m) return;
    var set = function () { root.style.setProperty('--mast-h', m.getBoundingClientRect().height + 'px'); };
    set();
    if (window.ResizeObserver) new ResizeObserver(set).observe(m);
    else window.addEventListener('resize', set);
  }

  function init() {
    syncHeadHeight();
    markActive();
    wrapTables();
    addFilter();
    singleAudio();
    addFabs();
    pager();
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
