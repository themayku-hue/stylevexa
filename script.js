 
 
/* =================================
   InstaVibez - Main JavaScript
================================= */

document.addEventListener("DOMContentLoaded", function () {

   

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
