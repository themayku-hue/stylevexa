 
/* =====================================
   InstaVibez - Language System
===================================== */

(function () {
  "use strict";

  const translations = {
    en: {
      home: "Home",
      bio: "Bio",
      username: "Username",
      fonts: "Fonts",
      guide: "Guide",
      privacy: "Privacy Policy",
      welcome: "Welcome to InstaVibez",
      heroTitle: "Make Your Instagram More Stylish",
      heroDescription: "Create stylish bios, unique usernames, cool nicknames, fancy fonts and amazing captions in seconds.",
      createBio: "Create Bio",
      generateUsername: "Generate Username",
      exploreTools: "Explore Our Tools",
      uniqueProfile: "Make Your Profile Unique ✨"
    },

    hi: {
      home: "होम",
      bio: "बायो",
      username: "यूजरनेम",
      fonts: "फॉन्ट",
      guide: "गाइड",
      privacy: "प्राइवेसी पॉलिसी",
      welcome: "InstaVibez में आपका स्वागत है",
      heroTitle: "अपने Instagram को और स्टाइलिश बनाएं",
      heroDescription: "कुछ ही सेकंड में स्टाइलिश बायो, यूनिक यूजरनेम और शानदार फॉन्ट बनाएं।",
      createBio: "बायो बनाएं",
      generateUsername: "यूजरनेम बनाएं",
      exploreTools: "हमारे टूल्स देखें",
      uniqueProfile: "अपनी प्रोफाइल को खास बनाएं ✨"
    }
  };

  function applyLanguage(language) {
    const selectedLanguage = translations[language]
      ? language
      : "en";

    document.documentElement.lang = selectedLanguage;

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      const key = element.getAttribute("data-i18n");

      if (translations[selectedLanguage][key]) {
        element.textContent = translations[selectedLanguage][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
      const key = element.getAttribute("data-i18n-placeholder");

      if (translations[selectedLanguage][key]) {
        element.placeholder = translations[selectedLanguage][key];
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (element) {
      const key = element.getAttribute("data-i18n-title");

      if (translations[selectedLanguage][key]) {
        element.title = translations[selectedLanguage][key];
      }
    });

    document.querySelectorAll("[data-language]").forEach(function (button) {
      button.classList.toggle(
        "active",
        button.getAttribute("data-language") === selectedLanguage
      );
    });
  }

  document.addEventListener("DOMContentLoaded", function () {

    const languageButtons = document.querySelectorAll("[data-language]");

    languageButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const language = button.getAttribute("data-language");

        applyLanguage(language);
      });
    });

    applyLanguage("en");

  });

  window.InstaVibezLanguage = {
    change: applyLanguage,
    translations: translations
  };

})();
