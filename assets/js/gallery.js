// assets/js/gallery.js

async function loadGallery() {
  const container = document.getElementById("gallery-grid");
  if (!container) return;

  try {
    const response = await fetch("/assets/data/gallery.json");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const photos = await response.json();

    photos.forEach((photo) => {
      const item = document.createElement("div");
      item.className = "gallery-item";

      const figure = document.createElement("figure");

      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.alt || photo.title || "";
      img.loading = "lazy";

      const caption = document.createElement("figcaption");

      const title = document.createElement("strong");
      title.textContent = photo.title || "";

      caption.appendChild(title);

      if (photo.location || photo.year) {
        const meta = document.createElement("div");
        meta.className = "gallery-meta";
        if (photo.location) {
          const loc = document.createElement("span");
          loc.textContent = photo.location;
          meta.appendChild(loc);
        }
        if (photo.year) {
          const year = document.createElement("span");
          year.textContent = photo.year;
          meta.appendChild(year);
        }
        caption.appendChild(meta);
      }

      figure.appendChild(img);
      figure.appendChild(caption);
      item.appendChild(figure);
      container.appendChild(item);
    });
  } catch (err) {
    console.error("Error loading gallery:", err);
    container.innerHTML = "<p>Couldn’t load gallery right now.</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadGallery);
