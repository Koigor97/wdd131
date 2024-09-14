"use strict";

const year = new Date().getFullYear();
document.querySelector("#year").textContent = year;

document.querySelector("#lastModified").textContent =
  new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

document.getElementById("menu").addEventListener("click", function () {
  this.classList.toggle("open"); // Toggle the 'open' class on the menu button
  document.querySelector(".navigation").classList.toggle("open"); // Toggle the 'open' class on the navigation
});
