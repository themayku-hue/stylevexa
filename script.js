 
 
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

    navbar.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = "☰";
      });
    });

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

  // Live Tool Search + No Results
  const searchInput = document.getElementById("toolSearch");
  const clearButton = document.getElementById("clearToolSearch");
  const noResults = document.getElementById("noToolResults");

  if (searchInput && clearButton && noResults) {

    const toolCards = document.querySelectorAll(".tool-card");

    function searchTools() {
      const searchText = searchInput.value.toLowerCase().trim();
      let visibleCount = 0;

      toolCards.forEach(function (card) {
        const matches = card.textContent.toLowerCase().includes(searchText);

        card.style.display = matches ? "" : "none";

        if (matches) {
          visibleCount++;
        }
      });

      noResults.style.display =
        visibleCount === 0 ? "block" : "none";
    }

    searchInput.addEventListener("input", searchTools);

    clearButton.addEventListener("click", function () {
      searchInput.value = "";
      searchTools();
      searchInput.focus();
    });

    searchTools();
  }

});
