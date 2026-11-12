(function () {
  'use strict';

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Light / dark theme toggle (remembers the choice)
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var root = document.documentElement;
      var current = root.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Project filters
  var chips = document.querySelectorAll('.filters .chip');
  var cards = document.querySelectorAll('.project-grid .card');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.classList.toggle('active', c === chip); });
      cards.forEach(function (card) {
        var cats = (card.getAttribute('data-cat') || '').split(' ');
        card.hidden = !(f === 'all' || cats.indexOf(f) !== -1);
      });
    });
  });

  // Highlight the current section in the nav
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = [];
  navAnchors.forEach(function (a) {
    var s = document.querySelector(a.getAttribute('href'));
    if (s) sections.push({ a: a, s: s });
  });
  function onScroll() {
    var y = window.scrollY + 90;
    var current = null;
    sections.forEach(function (x) { if (x.s.offsetTop <= y) current = x; });
    sections.forEach(function (x) { x.a.classList.toggle('active', x === current); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
