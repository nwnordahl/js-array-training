/* 
Bonus: forbedret søkefunksjon
*/

// HTML-elementer
const displayedColors = document.querySelector(".color-list");
const searchBar = document.querySelector(".search-bar");

// Array med mulige farger
const allColors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Violet",
];

// Hjelpefunksjoner

// Returnér liste med items som passer med searchTerm
function search(items, searchTerm) {
  return items.filter((item) =>
    item.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
}

// Vis items i DOM
function display(items) {
  items.forEach((item) => {
    displayedColors.innerHTML += `<li style="color: ${item}">${item}</li>`;
  });
}

// Sett i gang søk
searchBar.addEventListener("input", (e) => {
  // Tøm liste av farger som blir vist
  displayedColors.innerHTML = "";

  // Filtrer ut farger som passer med input
  let searchResults = search(allColors, e.target.value);

  // Oppdater liste av farger som blir vist
  searchResults.length > 0 || e.target.value
    ? display(searchResults)
    : display(allColors);
});

// Vis liste av alle farger (før det er noe input, og søk settes i gang)
display(allColors);
