 
/* =====================================
   INSTAVIBEZ - ANONYMOUS NAMES
   Improved Mixed Name Generator
===================================== */

(() => {
  const words = {
    boys: {
      first: [
        "The", "Shadow", "Silent", "Hidden", "Midnight",
        "Masked", "Unknown", "Alpha", "Cyber", "Neon",
        "Cosmic", "Pixel", "Phantom", "Wandering", "Lost",
        "Mystic", "Dark", "Royal", "Urban", "Vintage",
        "Lone", "Wild", "Frozen", "Broken", "Fearless",
        "Eternal", "Secret", "Invisible", "Moonlit", "Storm",
        "Rebel", "Savage", "Lonely", "Dreamy", "Nameless",
        "Infinite", "Velvet", "Toxic", "Silent", "Nocturnal",
        "Abstract", "Crimson", "Faded", "Parallel", "Mystery"
      ],
      second: [
        "Soul", "Walker", "Echo", "Vibes", "Human",
        "Thinker", "Vortex", "Ghost", "Pulse", "Drifter",
        "Rebel", "Strike", "Wolf", "Tales", "Moments",
        "Hunter", "Rider", "Legend", "Dreamer", "Warrior",
        "Explorer", "Nomad", "Vision", "Mind", "Knight",
        "Heart", "Traveler", "Creator", "Spirit", "Whisper",
        "Shadow", "Wanderer", "Phantom", "Mystery", "Story",
        "Dimension", "Horizon", "Frequency", "Soulmate",
        "Observer", "Outsider", "Escape", "Silence", "Legacy"
      ]
    },

    girls: {
      first: [
        "The", "Dreamy", "Moonlight", "Silent", "Hidden",
        "Mystic", "Midnight", "Secret", "Unknown", "Velvet",
        "Starry", "Lovely", "Cosmic", "Neon", "Pearl",
        "Lunar", "Pretty", "Eternal", "Wandering", "Masked",
        "Innocent", "Dark", "Royal", "Lost", "Angel",
        "Vintage", "Frozen", "Blossom", "Daisy", "Nameless",
        "Soft", "Mystery", "Wild", "Lonely", "Crystal",
        "Golden", "Faded", "Dream", "Nocturnal",
        "Moonlit", "Abstract", "Crimson", "Heavenly",
        "Silent", "Fairy"
      ],
      second: [
        "Soul", "Queen", "Dreamer", "Angel", "Vibes",
        "Echo", "Eyes", "Fairy", "Princess", "Doll",
        "Moon", "Star", "Heart", "Butterfly", "Rose",
        "Whisper", "Diary", "Thoughts", "Wishes", "Glow",
        "Beauty", "Mystery", "Spirit", "Shadow", "Bloom",
        "Pearl", "Dreams", "Smile", "Cloud", "Story",
        "Melody", "Charm", "Flower", "Muse", "Magic",
        "Stardust", "Midnight", "Horizon", "Silence",
        "Reflection", "Wonder", "Fantasy", "Serenity",
        "Escape", "Universe"
      ]
    }
  };

  const separators = ["_", ".", ""];
  const allNames = {};

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function generateNames(type) {
    const data = words[type];
    const names = new Set();

    // Create all possible combinations
    data.first.forEach(first => {
      data.second.forEach(second => {
        separators.forEach(separator => {
          names.add(first + separator + second);
        });
      });
    });

    // Mix all names before selecting
    const mixedNames = shuffle([...names]);

    return mixedNames.slice(0, 1000);
  }

  allNames.boys = generateNames("boys");
  allNames.girls = generateNames("girls");

  let currentType = "boys";
  let visibleCount = 20;

  const list = document.getElementById("anonymousNameList");
  const search = document.getElementById("anonymousSearch");
  const loadMore = document.getElementById("anonymousLoadMore");
  const tabs = document.querySelectorAll(".anonymous-tabs button");

  if (!list || !search || !loadMore || !tabs.length) {
    console.error("Anonymous Names section not found!");
    return;
  }

  function renderNames() {
    const query = search.value.trim().toLowerCase();

    const filtered = allNames[currentType].filter(name =>
      name.toLowerCase().includes(query)
    );

    list.innerHTML = "";

    filtered.slice(0, visibleCount).forEach(name => {
      const card = document.createElement("div");
      card.className = "anonymous-name-card";

      const nameText = document.createElement("span");
      nameText.textContent = name;

      const copyButton = document.createElement("button");
      copyButton.textContent = "Copy";
      copyButton.type = "button";

      copyButton.addEventListener("click", async () => {
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(name);
          } else {
            const textarea = document.createElement("textarea");
            textarea.value = name;
            document.body.appendChild(textarea);
            textarea.select();

            const success = document.execCommand("copy");
            textarea.remove();

            if (!success) throw new Error("Copy failed");
          }

          copyButton.textContent = "Copied!";
          copyButton.classList.add("copied");

          setTimeout(() => {
            copyButton.textContent = "Copy";
            copyButton.classList.remove("copied");
          }, 1500);

        } catch (error) {
          copyButton.textContent = "Failed!";
        }
      });

      card.appendChild(nameText);
      card.appendChild(copyButton);
      list.appendChild(card);
    });

    loadMore.style.display =
      filtered.length > visibleCount ? "inline-block" : "none";

    if (filtered.length === 0) {
      list.innerHTML =
        '<p style="grid-column:1/-1;">No names found!</p>';
    }
  }

  tabs.forEach(button => {
    button.addEventListener("click", () => {
      const type = button.dataset.type;
      if (!allNames[type]) return;

      currentType = type;
      visibleCount = 20;
      search.value = "";

      tabs.forEach(tab => tab.classList.remove("active"));
      button.classList.add("active");

      renderNames();
    });
  });

  search.addEventListener("input", () => {
    visibleCount = 20;
    renderNames();
  });

  loadMore.addEventListener("click", () => {
    visibleCount += 20;
    renderNames();
  });

  window.anonymousNames = allNames;

  renderNames();

  console.log("Boys Names:", allNames.boys.length);
  console.log("Girls Names:", allNames.girls.length);

})();
