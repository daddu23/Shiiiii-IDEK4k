async function loadComponent(id, url) {
  const container = document.getElementById(id);
  if (!container) return;
  try {
    const res = await fetch(url);
    const html = await res.text();
    container.innerHTML = html;
  } catch (err) {
    console.error(`Failed to load component ${url}`, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header-placeholder", "/components/header.html");
  loadComponent("footer-placeholder", "/components/footer.html");
});
