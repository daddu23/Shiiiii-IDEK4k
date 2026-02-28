document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link
  const page = document.body.dataset.page;
  const checkInterval = setInterval(() => {
    const navLinks = document.querySelectorAll(".nav a");
    if (!navLinks.length) return;
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;
      if (page && href.includes(page)) {
        link.classList.add("active");
      }
    });
    clearInterval(checkInterval);
  }, 100);
});
