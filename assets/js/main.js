/**
 * main.js
 * Entry point — initialises AOS scroll animations and sets the footer year.
 * Import order in index.html: main.js should load last (after nav.js, typed-init.js).
 */

(function () {
  'use strict';

  /* ── AOS (Animate On Scroll) ─────────────────────────────────────────── */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,  // ms
      once:     true, // animate only on first scroll into view
      offset:   60,   // px from element bottom before triggering
    });
  }

  /* ── Footer: current year ────────────────────────────────────────────── */
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
