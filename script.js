
/* =================================
   InstaVibez - Main JavaScript
================================= */

document.addEventListener("DOMContentLoaded", function () {

  // Automatic Copyright Year
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Feature Carousel
  const track = document.querySelector(".tools-track");

  if (track) {
    const originalCards = Array.from(
      track.querySelectorAll(":scope > .tool-card")
    );

    if (originalCards.length > 0) {

      // Original cards group
      const originalGroup = document.createElement("div");
      originalGroup.className = "tools-group";

      originalCards.forEach(function (card) {
        originalGroup.appendChild(card);
      });

      track.appendChild(originalGroup);

      // Duplicate group for seamless movement
      const duplicateGroup = originalGroup.cloneNode(true);
      duplicateGroup.className = "tools-group";
      duplicateGroup.setAttribute("aria-hidden", "true");

      duplicateGroup.querySelectorAll("a").forEach(function (link) {
        link.setAttribute("tabindex", "-1");
      });

      track.appendChild(duplicateGroup);

      // Live Tool Search
      const searchInput = document.getElementById("toolSearch");
      const clearButton = document.getElementById("clearToolSearch");
      const noResults = document.getElementById("noToolResults");

      if (searchInput && clearButton && noResults) {

        const duplicateCards = Array.from(
          duplicateGroup.querySelectorAll(".tool-card")
        );

        function searchTools() {
          const searchText = searchInput.value.toLowerCase().trim();
          let visibleCount = 0;

          originalCards.forEach(function (card, index) {
            const matches = card.textContent
              .toLowerCase()
              .includes(searchText);

            card.style.display = matches ? "" : "none";
            duplicateCards[index].style.display = matches ? "" : "none";

            if (matches) {
              visibleCount++;
            }
          });

          noResults.style.display =
            visibleCount === 0 ? "block" : "none";

          track.classList.toggle("is-searching", searchText !== "");
        }

        searchInput.addEventListener("input", searchTools);

        clearButton.addEventListener("click", function () {
          searchInput.value = "";
          searchTools();
          searchInput.focus();
        });

        searchTools();
      }
    }
  }

});
