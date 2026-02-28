let globalSearchIndex = [];

function setGlobalSearchIndex(items) {
  globalSearchIndex = items;
}

function filterCards(query) {
  const q = query.trim().toLowerCase();
  const cards = document.querySelectorAll(".card");

  if (!q) {
    cards.forEach((c) => (c.style.display = ""));
    return;
  }

  cards.forEach((card) => {
    const title = card.dataset.title || "";
    const type = card.dataset.type || "";
    const meta = card.dataset.meta || "";

    const haystack = `${title} ${type} ${meta}`.toLowerCase();
    card.style.display = haystack.includes(q) ? "" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const inputInterval = setInterval(() => {
    const input = document.getElementById("global-search");
    if (!input) return;

    input.addEventListener("input", (e) => {
      filterCards(e.target.value);
    });

    clearInterval(inputInterval);
  }, 100);
});
