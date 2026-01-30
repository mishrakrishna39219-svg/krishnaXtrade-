/*******************************************************
 * KrishnaXTrade | Professional Quant Dashboard Script
 * Handles:
 * - Multi-language support (EN / HI)
 * - Dynamic profile image
 * - Dynamic reports loading
 * - Future extension for charts or other sections
 *******************************************************/

/***********************
 * CONFIGURATIONS
 ***********************/
const CONFIG = {
  profileImage: "assets/profile.jpg", // Profile photo path
  reportsFolder: "assets/reports/",    // Folder path for PDF reports
  reports: ["sample-report.pdf", "report2.pdf"], // Add more PDFs here
  defaultLang: "en",                   // Default language
  languages: ["en", "hi"]              // Supported languages
};

/***********************
 * LANGUAGE CONTENT
 ***********************/
let contentData = {}; // Will store content.json

// Fetch content.json and store globally
fetch('assets/content.json')
  .then(res => res.json())
  .then(data => {
    contentData = data;
    setLanguage(CONFIG.defaultLang); // Load default language
  })
  .catch(err => console.error("Error loading content.json:", err));

/***********************
 * SET LANGUAGE FUNCTION
 ***********************/
function setLanguage(lang) {
  if (!contentData[lang]) return console.warn(`Language ${lang} not found!`);

  // Update About section
  const about = contentData[lang];
  document.getElementById("aboutTitle").innerText = about.aboutTitle;
  document.getElementById("aboutText").innerText = about.aboutText;

  // Update Connect section
  document.getElementById("connectTitle").innerText = about.connectTitle;
}

/***********************
 * PROFILE IMAGE
 ***********************/
function loadProfileImage() {
  const img = document.getElementById("profileImg");
  if (img) img.src = CONFIG.profileImage;
}

/***********************
 * LOAD REPORTS DYNAMICALLY
 ***********************/
function loadReports() {
  const reportList = document.getElementById("reportList");
  if (!reportList) return;

  reportList.innerHTML = ""; // Clear previous

  CONFIG.reports.forEach(file => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = CONFIG.reportsFolder + file;
    a.target = "_blank";
    a.innerText = file.replace(".pdf", "");
    li.appendChild(a);
    reportList.appendChild(li);
  });
}

/***********************
 * INITIALIZE WEBSITE
 ***********************/
function initWebsite() {
  loadProfileImage();
  loadReports();
  setLanguage(CONFIG.defaultLang); // Ensure default language applied
}

/***********************
 * EVENT LISTENERS
 ***********************/
// Language buttons (EN / HI)
document.addEventListener("DOMContentLoaded", () => {
  initWebsite();
  CONFIG.languages.forEach(lang => {
    const btn = document.getElementById(`lang-${lang}`);
    if (btn) {
      btn.addEventListener("click", () => setLanguage(lang));
    }
  });
});
