document.addEventListener("DOMContentLoaded", function () {
  // Hamburger toggle functionality
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  // Set current year dynamically
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // Set last modified date dynamically
  document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
});
