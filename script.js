 
/* =================================
   InstaVibez - Main JavaScript
================================= */

document.addEventListener("DOMContentLoaded", function () {

  // Mobile Navigation
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");

      const isOpen = navbar.classList.contains("active");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.innerHTML = isOpen ? "✕" : "☰";
    });

    // Close menu after clicking a link
    navbar.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = "☰";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !navbar.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        navbar.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = "☰";
      }
    });
  }

  // Automatic Copyright Year
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

});
