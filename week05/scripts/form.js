const products = [
  { id: "fc-1888", name: "Flux Capacitor", avgRating: 4.5 },
  { id: "fc-2050", name: "Power Laces", avgRating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", avgRating: 3.5 },
  { id: "ac-2000", name: "Low Voltage Reactor", avgRating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", avgRating: 5.0 },
];

// Populate the select element with product options
document.addEventListener("DOMContentLoaded", function () {
  const productSelect = document.getElementById("product");
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  // Footer date updates
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modified: ${document.lastModified}`;
});

// Review counter with localStorage
if (window.location.pathname.includes("review.html")) {
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);
  document.getElementById("reviewCount").textContent = reviewCount;
}
