async function loadGames() {
  const container = document.getElementById("games-grid");
  if (!container) return;

  try {
    const res = await fetch("data/games.json");
    const games = await res.json();

    const searchIndex = [];

    games.forEach((game) => {
      const card = document.createElement("article");
      card.className = "card";
      card.dataset.title = game.name || "";
      card.dataset.type = "game";
      card.dataset.meta = game.file || "";

      card.innerHTML = `
        <img src="${game.image}" alt="${game.name}" class="card-img" />
        <div class="card-title">${game.name}</div>
        <div class="card-meta">${game.file}</div>

        <div class="card-actions">
          <a href="${game.file}" target="_blank" rel="noopener noreferrer">
            Play
          </a>
        </div>
      `;

      container.appendChild(card);

      searchIndex.push({
        title: game.name,
        type: "game",
        meta: game.file
      });
    });

    if (typeof setGlobalSearchIndex === "function") {
      setGlobalSearchIndex(searchIndex);
    }
  } catch (err) {
    console.error("Failed to load games.json", err);
    container.innerHTML = `<p>Could not load games.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", loadGames);
