/**
 * nav.js
 * Handles mobile navigation drawer open/close behaviour.
 */

(function () {
  'use strict';

  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeNavBtn  = document.getElementById('mobile-nav-close');
  const mobileNav    = document.getElementById('mobile-nav');
  const navLinks     = mobileNav ? mobileNav.querySelectorAll('.mobile-nav__link') : [];

  /** Open the drawer */
  function openNav() {
    mobileNav.classList.add('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileNav.removeAttribute('aria-hidden');
  }

  /** Close the drawer */
  function closeNav() {
    mobileNav.classList.remove('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openNav);
  if (closeNavBtn)  closeNavBtn.addEventListener('click', closeNav);

  // Close when any nav link is tapped (smooth scroll then close)
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Close when clicking outside the drawer
  document.addEventListener('click', function (e) {
    if (
      mobileNav &&
      mobileNav.classList.contains('is-open') &&
      !mobileNav.contains(e.target) &&
      !hamburgerBtn.contains(e.target)
    ) {
      closeNav();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('is-open')) {
      closeNav();
      hamburgerBtn.focus();
    }
  });
})();
