document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the current review count from localStorage
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  document.getElementById("reviewCount").textContent = reviewCount;

  // Footer date updates
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modified: ${document.lastModified}`;
});
