/* ============================================================
   Academic Portfolio — script.js
   Mobile navigation, header state, scroll reveals
   ============================================================ */

(function () {
  "use strict";

  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("primaryNav");
  const navLinks = document.querySelectorAll(".nav-list a");

  function openMenu() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "true");
    navMenu.classList.add("open");
  }

  function closeMenu() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("open");
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  // Header background on scroll
  const handleScroll = function () {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 10);
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Reveal-on-scroll animations
  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });

  // Auto-update footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Reset mobile menu when resizing to desktop
  const desktopQuery = window.matchMedia("(min-width: 901px)");
  const handleChange = function () {
    if (desktopQuery.matches) closeMenu();
  };
  desktopQuery.addEventListener("change", handleChange);
})();
