document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("movies-grid");
  const searchInput = document.getElementById("movie-search");
  const movieCount = document.getElementById("movie-count");

  fetch("data/movies.json")
    .then((response) => response.json())
    .then((movies) => {
      let loadedMovies = 0;

      movies.forEach((movie) => {
        const posterPath = movie.poster;
        const filePath = movie.drive;

        const card = document.createElement("article");
        card.className = "card";
        card.dataset.title = movie.name || "";

        card.innerHTML = `
          <img src="${posterPath}" alt="${movie.name}" class="card-img" />
          <div class="card-title">${movie.name}</div>

          <div class="card-actions">
            <a href="${filePath}" target="_blank" rel="noopener noreferrer">
              Watch
            </a>
          </div>
        `;

        const img = card.querySelector("img");

        img.onerror = () => card.remove();

        container.appendChild(card);
        loadedMovies++;
        movieCount.textContent = `Total Movies: ${loadedMovies}`;
      });

      // SEARCH BAR — must be OUTSIDE the loop
      searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach((card) => {
          const title = card.dataset.title.toLowerCase();
          card.style.display = title.includes(query) ? "block" : "none";
        });
      });
    })
    .catch((error) => console.error("Error loading movies:", error));
});
