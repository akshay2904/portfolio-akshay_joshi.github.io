/**
 * typed-init.js
 * Initialises Typed.js for the hero role animation.
 * Depends on: Typed.js (loaded via CDN in index.html)
 */

(function () {
  'use strict';

  var typedEl = document.getElementById('typed-role');
  if (!typedEl || typeof Typed === 'undefined') return;

  new Typed('#typed-role', {
    strings: [
      'Senior Data Engineer',
      'BI Engineer',
      'Data Scientist',
      'ML Engineer',
    ],
    typeSpeed:  60,
    backSpeed:  40,
    startDelay: 500,
    backDelay:  2000,
    loop:       true,
    showCursor: true,
    cursorChar: '|',
  });
})();
