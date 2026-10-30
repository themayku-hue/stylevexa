 
(() => {
  // 8 decorative styles
  const frames = [
    ["꧁", "꧂"],
    ["༺", "༻"],
    ["『", "』"],
    ["「", "」"],
    ["【", "】"],
    ["〔", "〕"],
    ["〘", "〙"],
    ["✦", "✦"]
  ];

  // Har category ke 10 basic symbols se 90 symbols bante hain:
  // 10 original + 80 decorative combinations
  function make90(core) {
    const symbols = [];

    core.forEach(symbol => {
      symbols.push(symbol);

      frames.forEach(([left, right]) => {
        symbols.push(left + symbol + right);
      });
    });

    return [...new Set(symbols)];
  }

  const categoryData = [
    {
      name: "Crown Symbols", icon: "👑",
      core: ["♛", "♕", "♚", "♔", "👑", "♜", "♝", "♞", "♖", "♘"]
    },
    {
      name: "Heart Symbols", icon: "❤️",
      core: ["♡", "♥", "ღ", "❥", "დ", "❣", "❤", "💕", "💗", "💖"]
    },
    {
      name: "Star Symbols", icon: "⭐",
      core: ["★", "☆", "✦", "✧", "✩", "✪", "✫", "✬", "✭", "✯"]
    },
    {
      name: "Flower Symbols", icon: "🌸",
      core: ["❀", "✿", "❁", "❃", "✾", "❋", "❊", "🌸", "🌺", "🌼"]
    },
    {
      name: "Butterfly Symbols", icon: "🦋",
      core: ["🦋", "ʚɞ", "ƸӜƷ", "Ƹ̵̡Ӝ̵̨̄Ʒ", "𓆩", "𓆪", "༄", "࿐", "ᦋ", "ᦌ"]
    },
    {
      name: "Gaming Symbols", icon: "🎮",
      core: ["亗", "ツ", "么", "〆", "彡", "乂", "メ", "刁", "卍", "々"]
    },
    {
      name: "Royal Symbols", icon: "♛",
      core: ["♛", "♚", "♜", "♝", "♞", "♕", "♔", "♖", "♗", "♘"]
    },
    {
      name: "Japanese Style", icon: "『』",
      core: ["『", "』", "「", "」", "【", "】", "〘", "〙", "〚", "〛"]
    },
    {
      name: "Decorative Brackets", icon: "꧁",
      core: ["꧁", "꧂", "༺", "༻", "〔", "〕", "〘", "〙", "〚", "〛"]
    },
    {
      name: "Arrow Symbols", icon: "➤",
      core: ["➤", "➜", "➳", "➵", "➺", "➻", "➼", "➽", "➸", "➲"]
    },
    {
      name: "Music Symbols", icon: "🎵",
      core: ["♪", "♫", "♬", "♩", "♭", "♮", "♯", "𝄞", "𝄢", "🎵"]
    },
    {
      name: "Moon & Sun", icon: "🌙",
      core: ["☾", "☽", "☀", "☼", "☯", "🌙", "🌛", "🌜", "🌞", "🌚"]
    },
    {
      name: "Cross Symbols", icon: "✝",
      core: ["✝", "✞", "✟", "☦", "✠", "†", "‡", "✚", "✜", "✛"]
    },
    {
      name: "Spiritual Symbols", icon: "☯",
      core: ["ॐ", "☮", "☯", "✡", "☪", "☸", "♆", "⚛", "۞", "࿔"]
    },
    {
      name: "Circle Symbols", icon: "⭕",
      core: ["●", "○", "◉", "◎", "◌", "◍", "◐", "◑", "◒", "◓"]
    },
    {
      name: "Diamond Symbols", icon: "💎",
      core: ["◆", "◇", "♦", "♢", "💎", "◈", "◊", "❖", "⬖", "⬗"]
    },
    {
      name: "Aesthetic Symbols", icon: "✨",
      core: ["༄", "༆", "࿐", "༒", "࿔", "✧", "✦", "❦", "❧", "※"]
    },
    {
      name: "Divider Symbols", icon: "➖",
      core: ["─", "━", "═", "│", "║", "┄", "┅", "┈", "┉", "╌"]
    },
    {
      name: "Cute Symbols", icon: "୨୧",
      core: ["୨୧", "ʚɞ", "ෆ", "꒰ა", "໒꒱", "♡", "ღ", "❀", "૮₍", "₎ა"]
    },
    {
      name: "Special Symbols", icon: "※",
      core: ["※", "⁂", "⁕", "۞", "࿓", "§", "¶", "†", "‡", "⁑"]
    }
  ];

  const symbolCategories = categoryData.map(category => ({
    name: category.name,
    icon: category.icon,
    symbols: make90(category.core)
  }));

  const categoryList = document.getElementById("symbolCategoryList");
  const results = document.getElementById("symbolResults");
  const search = document.getElementById("symbolSearch");

  if (!categoryList || !results || !search) {
    console.error("Symbols Generator: HTML elements nahi mile.");
    return;
  }

  function showCategories(filter = "") {
    results.innerHTML = "";
    categoryList.innerHTML = "";

    const filtered = symbolCategories.filter(category =>
      category.name.toLowerCase().includes(filter.toLowerCase()) ||
      category.symbols.some(symbol => symbol.includes(filter))
    );

    filtered.forEach(category => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "symbol-category-card";

      const icon = document.createElement("span");
      icon.className = "symbol-category-icon";
      icon.textContent = category.icon;

      const name = document.createElement("span");
      name.textContent = category.name;

      const count = document.createElement("small");
      count.textContent = category.symbols.length + " Symbols";

      card.append(icon, name, count);
      card.addEventListener("click", () => showSymbols(category));

      categoryList.appendChild(card);
    });

    if (filtered.length === 0) {
      categoryList.textContent = "No matching categories found.";
    }
  }

  function showSymbols(category) {
    categoryList.innerHTML = "";
    results.innerHTML = "";

    const backButton = document.createElement("button");
    backButton.type = "button";
    backButton.className = "symbol-category-card";
    backButton.textContent = "← All Categories";

    backButton.addEventListener("click", () => {
      search.value = "";
      showCategories();
    });

    categoryList.appendChild(backButton);

    const heading = document.createElement("h3");
    heading.textContent =
      category.name + " (" + category.symbols.length + " Symbols)";
    heading.style.gridColumn = "1 / -1";

    results.appendChild(heading);

    category.symbols.forEach(symbol => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "symbol-item";

      const symbolText = document.createElement("span");
      symbolText.textContent = symbol;

      const label = document.createElement("small");
      label.textContent = "Copy";

      button.append(symbolText, label);

      button.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(symbol);

          label.textContent = "Copied!";
          button.classList.add("copied");

          setTimeout(() => {
            label.textContent = "Copy";
            button.classList.remove("copied");
          }, 1200);
        } catch (error) {
          label.textContent = "Copy failed";
        }
      });

      results.appendChild(button);
    });
  }

  search.addEventListener("input", () => {
    showCategories(search.value.trim());
  });

  showCategories();

  console.log("InstaVibez: 20 categories loaded!");

})();
