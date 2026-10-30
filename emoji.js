
(() => {
  // =====================================
  // INSTAVIBEZ - ALL EMOJI GENERATOR
  // =====================================

  const countryData = [
    ["IN","India"],["US","United States"],["GB","United Kingdom"],["CA","Canada"],
    ["AU","Australia"],["NZ","New Zealand"],["JP","Japan"],["CN","China"],
    ["KR","South Korea"],["KP","North Korea"],["PK","Pakistan"],["BD","Bangladesh"],
    ["NP","Nepal"],["BT","Bhutan"],["LK","Sri Lanka"],["MV","Maldives"],
    ["AF","Afghanistan"],["RU","Russia"],["UA","Ukraine"],["FR","France"],
    ["DE","Germany"],["IT","Italy"],["ES","Spain"],["PT","Portugal"],
    ["NL","Netherlands"],["BE","Belgium"],["CH","Switzerland"],["AT","Austria"],
    ["SE","Sweden"],["NO","Norway"],["DK","Denmark"],["FI","Finland"],
    ["IS","Iceland"],["IE","Ireland"],["GR","Greece"],["TR","Turkey"],
    ["SA","Saudi Arabia"],["AE","United Arab Emirates"],["QA","Qatar"],
    ["KW","Kuwait"],["BH","Bahrain"],["OM","Oman"],["YE","Yemen"],
    ["IL","Israel"],["JO","Jordan"],["LB","Lebanon"],["IQ","Iraq"],
    ["IR","Iran"],["SY","Syria"],["EG","Egypt"],["ZA","South Africa"],
    ["NG","Nigeria"],["KE","Kenya"],["GH","Ghana"],["ET","Ethiopia"],
    ["MA","Morocco"],["DZ","Algeria"],["TN","Tunisia"],["LY","Libya"],
    ["SD","Sudan"],["SS","South Sudan"],["UG","Uganda"],["TZ","Tanzania"],
    ["RW","Rwanda"],["SN","Senegal"],["CM","Cameroon"],["CI","Ivory Coast"],
    ["CD","DR Congo"],["CG","Republic of the Congo"],["ZM","Zambia"],
    ["ZW","Zimbabwe"],["BW","Botswana"],["NA","Namibia"],["MZ","Mozambique"],
    ["MG","Madagascar"],["MU","Mauritius"],["SC","Seychelles"],
    ["BR","Brazil"],["AR","Argentina"],["MX","Mexico"],["CL","Chile"],
    ["CO","Colombia"],["PE","Peru"],["VE","Venezuela"],["UY","Uruguay"],
    ["PY","Paraguay"],["BO","Bolivia"],["EC","Ecuador"],["GY","Guyana"],
    ["SR","Suriname"],["CR","Costa Rica"],["PA","Panama"],["CU","Cuba"],
    ["JM","Jamaica"],["HT","Haiti"],["DO","Dominican Republic"],
    ["GT","Guatemala"],["HN","Honduras"],["SV","El Salvador"],
    ["NI","Nicaragua"],["BZ","Belize"],["BS","Bahamas"],["BB","Barbados"],
    ["TT","Trinidad and Tobago"],["GD","Grenada"],["LC","Saint Lucia"],
    ["VC","Saint Vincent and the Grenadines"],["AG","Antigua and Barbuda"],
    ["KN","Saint Kitts and Nevis"],["DM","Dominica"],
    ["TH","Thailand"],["VN","Vietnam"],["MY","Malaysia"],["SG","Singapore"],
    ["ID","Indonesia"],["PH","Philippines"],["MM","Myanmar"],["KH","Cambodia"],
    ["LA","Laos"],["BN","Brunei"],["TL","Timor-Leste"],
    ["KZ","Kazakhstan"],["UZ","Uzbekistan"],["TM","Turkmenistan"],
    ["KG","Kyrgyzstan"],["TJ","Tajikistan"],["MN","Mongolia"],
    ["AZ","Azerbaijan"],["AM","Armenia"],["GE","Georgia"],
    ["PL","Poland"],["CZ","Czechia"],["SK","Slovakia"],["HU","Hungary"],
    ["RO","Romania"],["BG","Bulgaria"],["HR","Croatia"],["SI","Slovenia"],
    ["RS","Serbia"],["BA","Bosnia and Herzegovina"],["ME","Montenegro"],
    ["AL","Albania"],["MK","North Macedonia"],["XK","Kosovo"],
    ["MD","Moldova"],["BY","Belarus"],["LT","Lithuania"],
    ["LV","Latvia"],["EE","Estonia"],["LU","Luxembourg"],
    ["MT","Malta"],["CY","Cyprus"],["MC","Monaco"],["AD","Andorra"],
    ["SM","San Marino"],["VA","Vatican City"],["LI","Liechtenstein"],
    ["FJ","Fiji"],["PG","Papua New Guinea"],["WS","Samoa"],
    ["TO","Tonga"],["VU","Vanuatu"],["SB","Solomon Islands"],
    ["KI","Kiribati"],["TV","Tuvalu"],["NR","Nauru"],
    ["FM","Micronesia"],["MH","Marshall Islands"],["PW","Palau"]
  ];

  function makeFlag(code) {
    return String.fromCodePoint(
      ...code.split("").map(char => 127397 + char.charCodeAt(0))
    );
  }

  const flagEmojis = countryData.map(([code, name]) => ({
    emoji: makeFlag(code),
    name: name
  }));

  // =====================================
  // 20 EMOJI CATEGORIES
  // =====================================

  const categories = [
    {
      name: "All Country Flags",
      icon: "🌍",
      items: flagEmojis
    },
    {
      name: "Animals",
      icon: "🐶",
      items: ["🐶","🐕","🐩","🐺","🦊","🐱","🐈","🦁","🐯","🐅",
      "🐆","🐴","🦄","🫎","🐮","🐷","🐗","🐭","🐹","🐰",
      "🐻","🐻‍❄️","🐨","🐼","🐸","🐵","🙈","🙉","🙊","🐒",
      "🦍","🦧","🐔","🐓","🐣","🐤","🐥","🐦","🦅","🦆",
      "🦉","🦚","🦜","🦢","🦩","🦃","🦤","🪿","🐧","🐦‍⬛",
      "🐘","🦣","🦛","🦏","🐪","🐫","🦒","🦘","🦬","🐃",
      "🐂","🐄","🐎","🐖","🐏","🐑","🐐","🦌","🐕‍🦺","🦮",
      "🐈‍⬛","🦝","🦨","🦡","🦫","🦦","🦥","🐿️","🦔","🦇"]
    },
    {
      name: "Smileys & Faces",
      icon: "😀",
      items: ["😀","😃","😄","😁","😆","😅","😂","🤣","🥲","🥹",
      "😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗",
      "😙","😚","😋","😛","😜","🤪","😝","🤑","🤗","🤭",
      "🫢","🫣","🤫","🤔","🫡","🤐","🤨","😐","😑","😶",
      "🫥","😏","😒","🙄","😬","😮‍💨","🤥","😌","😔","😪",
      "🤤","😴","😷","🤒","🤕","🤢","🤮","🥵","🥶","🥴",
      "😵","🤯","🥳","😎","🤓","🧐","😕","🫤","😟","🙁",
      "☹️","😮","😯","😲","😳","🥺","😦","😧","😨","😰"]
    },
    {
      name: "Love & Hearts",
      icon: "❤️",
      items: ["❤️","🩷","🧡","💛","💚","💙","🩵","💜","🤎","🖤",
      "🩶","🤍","💔","❤️‍🔥","❤️‍🩹","💕","💞","💓","💗","💖",
      "💘","💝","💟","❣️","💌","💋","😘","😍","🥰","💑",
      "💏","👩‍❤️‍👨","👨‍❤️‍👨","👩‍❤️‍👩","💐","🌹","🌷","🫶","💍","💎"]
    },
    {
      name: "Flowers & Nature",
      icon: "🌸",
      items: ["🌸","🌺","🌻","🌼","🌷","🌹","🥀","💐","🪷","🪻",
      "🌱","🌿","☘️","🍀","🍃","🍂","🍁","🌾","🌵","🌴",
      "🌳","🌲","🪴","🌍","🌎","🌏","🌕","🌖","🌗","🌘",
      "🌑","🌒","🌓","🌔","🌙","🌛","🌜","🌝","🌞","⭐",
      "🌟","✨","⚡","☀️","🌤️","⛅","🌥️","☁️","🌧️","⛈️",
      "🌩️","🌨️","❄️","☃️","⛄","🌈","🌊","💧","💦","🔥"]
    },
    {
      name: "Food & Fruits",
      icon: "🍕",
      items: ["🍎","🍏","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🫐",
      "🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑",
      "🥦","🥬","🥒","🌶️","🫑","🌽","🥕","🧄","🧅","🥔",
      "🍠","🥐","🥯","🍞","🥖","🧀","🥚","🍳","🧈","🥞",
      "🧇","🥓","🥩","🍗","🍖","🌭","🍔","🍟","🍕","🥪",
      "🌮","🌯","🥙","🧆","🍝","🍜","🍲","🍛","🍣","🍱",
      "🍤","🍙","🍚","🍘","🍥","🥮","🍢","🍡","🍦","🍧",
      "🍨","🍩","🍪","🎂","🍰","🧁","🍫","🍬","🍭","🍮"]
    },
    {
      name: "Birds & Insects",
      icon: "🦋",
      items: ["🦋","🐝","🐞","🐜","🪲","🪳","🦟","🪰","🪱","🦗",
      "🕷️","🕸️","🦂","🐌","🐛","🪹","🪺","🦅","🦆","🦉",
      "🦚","🦜","🦢","🦩","🦤","🪿","🐦","🐧","🐥","🐤",
      "🐣","🐓","🐔","🦃","🕊️","🦇","🪶","🦜","🦉","🦢"]
    },
    {
      name: "Sea Animals",
      icon: "🐬",
      items: ["🐬","🐳","🐋","🦈","🐟","🐠","🐡","🦭","🦦","🦀",
      "🦞","🦐","🦑","🐙","🪼","🪸","🐚","🪸","🦪","🦆",
      "🐢","🐊","🦎","🐍","🐸","🦭","🐧","🦩","🐬","🐳"]
    },
    {
      name: "Royal & Luxury",
      icon: "👑",
      items: ["👑","💎","💍","💰","💵","💴","💶","💷","🪙","🏆",
      "🥇","🥈","🥉","🎖️","🏅","⚜️","♛","♕","♚","♔",
      "🛍️","👠","👜","⌚","🕶️","🚘","🏰","🪄","✨","💫"]
    },
    {
      name: "Aesthetic & Cute",
      icon: "✨",
      items: ["✨","💫","🌟","⭐","🌙","☁️","🌈","🦋","🌸","🩷",
      "🎀","🧸","🪞","🕯️","🧚","🧜","🧝","🪷","🪻","🫧",
      "୨୧","♡","ღ","❀","✿","☾","☽","✧","✦","༄"]
    },
    {
      name: "Travel & Places",
      icon: "✈️",
      items: ["🚗","🚕","🚙","🚌","🚎","🏎️","🚓","🚑","🚒","🚚",
      "🚜","🛵","🏍️","🚲","🛴","🚂","🚆","🚄","✈️","🛫",
      "🛬","🚀","🛸","🚁","⛵","🚢","🛳️","🏖️","🏝️","🏕️",
      "🏜️","🏔️","⛰️","🌋","🗻","🏰","🏯","🏟️","🗽","🗼",
      "🕌","⛩️","🕍","⛪","🏛️","🏠","🏡","🏢","🏙️","🌉"]
    },
    {
      name: "Sports & Games",
      icon: "⚽",
      items: ["⚽","🏀","🏈","⚾","🥎","🎾","🏐","🏉","🥏","🎱",
      "🪀","🏓","🏸","🏒","🏑","🥍","🏏","🪃","🥅","⛳",
      "🪁","🏹","🎣","🤿","🥊","🥋","🎽","🛹","🛼","🛷",
      "⛸️","🥌","🎿","⛷️","🏂","🏋️","🤼","🤸","⛹️","🤺",
      "🏆","🥇","🥈","🥉","🎮","🕹️","🎯","🎳","🎲","♟️"]
    },
    {
      name: "Music & Instruments",
      icon: "🎵",
      items: ["🎵","🎶","🎼","🎤","🎧","🎹","🥁","🪘","🎷","🎺",
      "🪗","🎸","🪕","🎻","🪇","🪈","📻","💿","📀","🎙️",
      "🎚️","🎛️","🔊","🔉","🔈","🔇","🎵","🎶","🎤","🎧"]
    },
    {
      name: "Fashion & Style",
      icon: "👗",
      items: ["👗","👚","👕","👔","👖","🩳","🩱","👙","🧥","🥼",
      "🦺","🥻","🩲","🧦","🧤","🧣","🎩","🧢","👒","⛑️",
      "👑","💍","💎","👠","👡","👢","👞","👟","🥿","👜",
      "👝","🎒","🧳","🌂","☂️","🕶️","👓","🥽","⌚","💄"]
    },
    {
      name: "Fire & Energy",
      icon: "🔥",
      items: ["🔥","⚡","💥","💫","✨","☄️","🌟","🌪️","🌋","💨",
      "💦","💧","🌊","❄️","☀️","🌩️","⛈️","🌈","🧨","🎇",
      "🎆","🔆","🔅","♨️","🚨","💣","🔋","🪫","🔌","⚙️"]
    },
    {
      name: "Birthday & Party",
      icon: "🎂",
      items: ["🎂","🎉","🎊","🎁","🎈","🪅","🪩","🎀","🎆","🎇",
      "🧨","🥳","🍰","🧁","🍬","🍭","🍫","🥂","🍾","🍻",
      "🎶","🎵","🎤","🎸","🎹","🎺","🎷","🎻","🏆","🎖️"]
    },
    {
      name: "Hand Gestures",
      icon: "👋",
      items: ["👋","🤚","🖐️","✋","🖖","🫱","🫲","🫳","🫴","👌",
      "🤌","🤏","✌️","🤞","🫰","🤟","🤘","🤙","👈","👉",
      "👆","👇","☝️","🫵","👍","👎","✊","👊","🤛","🤜",
      "👏","🙌","👐","🤲","🤝","🙏","✍️","💅","🫶","💪"]
    },
    {
      name: "Symbols & Signs",
      icon: "💯",
      items: ["💯","🔴","🟠","🟡","🟢","🔵","🟣","⚫","⚪","🟤",
      "🔺","🔻","🔸","🔹","🔶","🔷","▪️","▫️","◾","◽",
      "♈","♉","♊","♋","♌","♍","♎","♏","♐","♑",
      "♒","♓","☮️","☯️","✝️","☪️","✡️","⚛️","♻️","⚜️",
      "✅","❌","❓","❗","‼️","⁉️","➕","➖","➗","✖️"]
    },
    {
      name: "Objects & Technology",
      icon: "📱",
      items: ["📱","📲","💻","🖥️","🖨️","⌨️","🖱️","🖲️","💽","💾",
      "💿","📀","📷","📸","📹","🎥","📞","☎️","📺","📻",
      "🔋","🔌","💡","🔦","🕯️","🧯","🛠️","🔧","🔨","⚒️",
      "🧰","🪛","🔩","⚙️","🧲","🔬","🔭","📡","🛰️","⏰"]
    },
    {
      name: "People & Expressions",
      icon: "🕺",
      items: ["👶","🧒","👦","👧","🧑","👨","👩","🧔","👴","👵",
      "🧓","👮","🕵️","💂","🥷","👷","🫅","🤴","👸","👳",
      "👲","🧕","👰","🤵","🧑‍⚕️","🧑‍🎓","🧑‍🏫","🧑‍🍳","🧑‍🚀","🧑‍🚒",
      "🧑‍💻","🧑‍🎤","🧑‍🎨","🧑‍🔬","🧑‍🔧","🧑‍🌾","🧑‍⚖️","🧑‍✈️","💃","🕺",
      "🧍","🧎","🚶","🏃","🧘","🛀","🛌","🤸","🤹","🧗"]
    }
  ];

  // =====================================
  // HTML ELEMENTS
  // =====================================

  const categoryList = document.getElementById("emojiCategoryList");
  const results = document.getElementById("emojiResults");
  const search = document.getElementById("emojiSearch");

  const picker = document.getElementById("emojiPicker");
  const selectedBox = document.getElementById("selectedEmojis");
  const createButton = document.getElementById("createEmojiMix");
  const mixResults = document.getElementById("emojiMixResults");
  const mixerButtons = document.querySelectorAll(
    ".emoji-mixer-options button"
  );

  if (!categoryList || !results || !search ||
      !picker || !selectedBox || !createButton || !mixResults) {
    console.error("Emoji Generator: HTML elements nahi mile.");
    return;
  }

  // =====================================
  // COPY HELPER
  // =====================================

  async function copyText(value, label) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const temp = document.createElement("textarea");
        temp.value = value;
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.select();
        const success = document.execCommand("copy");
        temp.remove();

        if (!success) throw new Error("Copy failed");
      }

      label.textContent = "Copied!";
      return true;
    } catch (error) {
      label.textContent = "Copy failed";
      return false;
    }
  }

  // =====================================
  // CATEGORY DISPLAY
  // =====================================

  function showCategories(filter = "") {
    categoryList.innerHTML = "";
    results.innerHTML = "";

    const filtered = categories.filter(category =>
      category.name.toLowerCase().includes(filter.toLowerCase()) ||
      category.items.some(item => {
        const value = typeof item === "string" ? item : item.name;
        return value.toLowerCase().includes(filter.toLowerCase());
      })
    );

    filtered.forEach(category => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "emoji-category-card";

      const icon = document.createElement("span");
      icon.className = "emoji-category-icon";
      icon.textContent = category.icon;

      const name = document.createElement("span");
      name.textContent = category.name;

      const count = document.createElement("small");
      count.textContent = category.items.length + " Emojis";

      card.append(icon, name, count);

      card.addEventListener("click", () => {
        showEmojis(category);
      });

      categoryList.appendChild(card);
    });

    if (!filtered.length) {
      categoryList.textContent = "No matching categories found.";
    }
  }

  // =====================================
  // EMOJI DISPLAY
  // =====================================

  function showEmojis(category) {
    categoryList.innerHTML = "";
    results.innerHTML = "";

    const back = document.createElement("button");
    back.type = "button";
    back.className = "emoji-category-card";
    back.textContent = "← All Categories";

    back.addEventListener("click", () => {
      search.value = "";
      showCategories();
    });

    categoryList.appendChild(back);

    const heading = document.createElement("h3");
    heading.textContent = category.name + " (" + category.items.length + ")";
    heading.style.gridColumn = "1 / -1";
    results.appendChild(heading);

    category.items.forEach(item => {
      const emoji = typeof item === "string" ? item : item.emoji;
      const name = typeof item === "string" ? "Copy" : item.name;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "emoji-item";

      const emojiText = document.createElement("span");
      emojiText.textContent = emoji;

      const label = document.createElement("small");
      label.textContent = name;

      button.append(emojiText, label);

      button.addEventListener("click", async () => {
        const success = await copyText(emoji, label);
        if (success) button.classList.add("copied");

        setTimeout(() => {
          label.textContent = name;
          button.classList.remove("copied");
        }, 1200);
      });

      results.appendChild(button);
    });
  }

  search.addEventListener("input", () => {
    showCategories(search.value.trim());
  });

  // =====================================
  // EMOJI MIXER
  // =====================================

  let requiredCount = 2;
  let selectedEmojis = [];

  const mixerEmojis = [
    ...new Set(
      categories
        .filter(category => category.name !== "All Country Flags")
        .flatMap(category =>
          category.items.map(item =>
            typeof item === "string" ? item : item.emoji
          )
        )
    )
  ].slice(0, 180);

  function updateSelection() {
    selectedBox.textContent = selectedEmojis.length
      ? selectedEmojis.join(" ")
      : "Select your emojis";

    selectedBox.setAttribute(
      "aria-label",
      selectedEmojis.length + " emojis selected"
    );

    picker.querySelectorAll(".emoji-pick-item").forEach(button => {
      button.classList.toggle(
        "selected",
        selectedEmojis.includes(button.dataset.emoji)
      );
    });
  }

  function showPicker() {
    picker.innerHTML = "";

    mixerEmojis.forEach(emoji => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "emoji-pick-item";
      button.textContent = emoji;
      button.dataset.emoji = emoji;

      button.addEventListener("click", () => {
        if (selectedEmojis.includes(emoji)) {
          selectedEmojis = selectedEmojis.filter(item => item !== emoji);
        } else if (selectedEmojis.length < requiredCount) {
          selectedEmojis.push(emoji);
        }

        updateSelection();
      });

      picker.appendChild(button);
    });

    updateSelection();
  }

  mixerButtons.forEach(button => {
    button.addEventListener("click", () => {
      requiredCount = Number(button.dataset.count);
      selectedEmojis = [];
      mixResults.innerHTML = "";

      mixerButtons.forEach(item => item.classList.remove("active"));
      button.classList.add("active");

      updateSelection();
    });
  });

  mixerButtons[0].classList.add("active");

  createButton.addEventListener("click", () => {
    mixResults.innerHTML = "";

    if (selectedEmojis.length !== requiredCount) {
      mixResults.textContent =
        "Please select exactly " + requiredCount + " emojis.";
      return;
    }

    let combinations = [];

    if (requiredCount === 4) {
      combinations = [
        selectedEmojis.slice(0, 2).join(""),
        selectedEmojis.slice(2, 4).join("")
      ];
    } else {
      combinations = [selectedEmojis.join("")];
    }

    combinations.forEach((combination, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "emoji-mix-result";

      const emojiText = document.createElement("span");
      emojiText.textContent = combination;

      const label = document.createElement("small");
      label.textContent = "Copy";

      button.append(emojiText, label);

      button.addEventListener("click", async () => {
        await copyText(combination, label);
      });

      mixResults.appendChild(button);
    });
  });

  showPicker();
  showCategories();

  console.log("InstaVibez: All Emoji Generator Loaded!");

})();
