 
/* =====================================
   InstaVibez - Common JavaScript
   Shared functionality for all pages
===================================== */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {

    // 1. Automatic copyright year
    document.querySelectorAll("#currentYear").forEach(function (element) {
      element.textContent = new Date().getFullYear();
    });

    // 2. Mobile navigation
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

      function closeMenu() {
        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
      }

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.addEventListener("click", function () {
        const isOpen = navbar.classList.toggle("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });

      navbar.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
      });

      document.addEventListener("click", function (event) {
        if (
          !navbar.contains(event.target) &&
          !menuToggle.contains(event.target)
        ) {
          closeMenu();
        }
      });
    }

    // 3. Highlight current navigation link
    const currentPage = window.location.pathname
      .split("/")
      .pop() || "index.html";

    document.querySelectorAll(".navbar a").forEach(function (link) {
      const linkPage = link.getAttribute("href");

      if (linkPage === currentPage) {
        link.classList.add("active-link");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active-link");
        link.removeAttribute("aria-current");
      }
    });

    // 4. Safe clipboard helper
    window.InstaVibez = window.InstaVibez || {};

    window.InstaVibez.copyText = async function (text) {
      if (!text) {
        return false;
      }

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
          return true;
        }

        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";

        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        const success = document.execCommand("copy");
        textarea.remove();

        return success;

      } catch (error) {
        console.error("InstaVibez clipboard error:", error);
        return false;
      }
    };

  });

})();
