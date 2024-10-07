const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Kinshasa Democratic Republic of the Congo",
    location: "Kinshasa, Democratic Republic of the Congo",
    dedicated: "2019, April, 14",
    area: 12500,
    imageUrl:
      "https://churchofjesuschrist.org/imgs/8cae06798bb811ec8827eeeeac1ee76df4b07c85/full/320%2C/0/default",
  },
  {
    templeName: "Kyiv Ukraine",
    location: "Kyiv, Ukraine",
    dedicated: "2010, August, 29",
    area: 22700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/800x500/kyiv-ukraine-lds-temple-1129616-wallpaper.jpg",
  },
  {
    templeName: "Freetown Sierra Leone",
    location: "Freetown, Sierra Leone",
    dedicated: "Under construction",
    area: 10456,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/freetown-sierra-leone-temple/freetown-sierra-leone-temple-24087-main.jpg",
  },
];

// Dynamically generate temple cards
function displayTemples(templeList) {
  const container = document.getElementById("temple-cards-container");
  container.innerHTML = ""; // Clear previous cards
  templeList.forEach((temple) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area} sq ft</p>
      <figure>
         <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
          <figcaption>${temple.templeName}</figcaption>
        </figure>
      
    `;
    container.appendChild(card);
  });
}

// Initial load of all temples
displayTemples(temples);

// Filter functions
document.getElementById("old").addEventListener("click", () => {
  const filtered = temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() < 1900
  );
  displayTemples(filtered);
});

document.getElementById("new").addEventListener("click", () => {
  const filtered = temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() > 2000
  );
  displayTemples(filtered);
});

document.getElementById("large").addEventListener("click", () => {
  const filtered = temples.filter((temple) => temple.area > 90000);
  displayTemples(filtered);
});

document.getElementById("small").addEventListener("click", () => {
  const filtered = temples.filter((temple) => temple.area < 10000);
  displayTemples(filtered);
});

document.getElementById("home").addEventListener("click", () => {
  displayTemples(temples);
});

// Footer date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
