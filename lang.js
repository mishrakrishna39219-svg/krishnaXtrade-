// ================================
// KrishnaXTrade | Language System
// ================================

const translations = {
  en: {
    aboutTitle: "About Me",
    aboutText:
      "I am an independent Quantitative Market Analyst focusing on Global Macro, Correlation, Yield Curves, FX, Crypto and Risk Management.",
    connect: "Connect With Me",
    reports: "Research Reports"
  },

  hi: {
    aboutTitle: "मेरे बारे में",
    aboutText:
      "मैं एक स्वतंत्र Quantitative Market Analyst हूँ जो Global Macro, Correlation, Yield Curve, FX, Crypto और Risk Management पर काम करता हूँ।",
    connect: "मुझसे जुड़ें",
    reports: "रिसर्च रिपोर्ट"
  }
};

// default language
let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;

  document.getElementById("aboutTitle").innerText =
    translations[lang].aboutTitle;

  document.getElementById("aboutText").innerText =
    translations[lang].aboutText;

  document.getElementById("connectTitle").innerText =
    translations[lang].connect;

  document.getElementById("reportTitle").innerText =
    translations[lang].reports;
}
