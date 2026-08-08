/* Minimal progressive enhancement:
   1. Mark that JS is available (enables the collapsible mobile menu + reveals).
   2. Accessible mobile menu: toggle, aria-expanded, Escape to close, close on
      link click and on resize to desktop.
   3. Scroll reveal (skipped when the user prefers reduced motion).
   4. Current year in the footer.
   All content is fully usable if this script never runs. */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    root.classList.add("js-reveal");
  }

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");
  var mq = window.matchMedia("(max-width: 960px)");

  function isMobile() {
    return mq.matches;
  }

  function closeMenu() {
    if (!toggle || !menu) return;
    if (isMobile()) menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    if (!menu || !toggle) return;
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  }

  function syncMenuForViewport() {
    if (!menu) return;
    // On desktop the menu is always visible; on mobile it starts collapsed.
    menu.hidden = isMobile();
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && menu) {
    syncMenuForViewport();

    toggle.addEventListener("click", function () {
      if (menu.hidden) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    menu.addEventListener("click", function (e) {
      if (e.target.closest("a") && isMobile()) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isMobile() && !menu.hidden) {
        closeMenu();
        toggle.focus();
      }
    });

    // Keep state consistent when crossing the breakpoint.
    if (mq.addEventListener) {
      mq.addEventListener("change", syncMenuForViewport);
    } else if (mq.addListener) {
      mq.addListener(syncMenuForViewport);
    }
  }

  /* ---- Scroll reveal ---- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealEls = document.querySelectorAll(".reveal");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
