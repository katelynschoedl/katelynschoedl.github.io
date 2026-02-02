// assets/js/gallery.js
// Renders a grid of Flickr albums from a local list (no API key needed).
// On click, injects Flickr's album embed inline (no lightbox).

const ALBUMS = [

  // ===== Fieldwork =====
  {
    title: "Fieldwork",
    category: "Fieldwork",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331815209",
    cover: "https://live.staticflickr.com/65535/55074394440_9c4d2ba7c6_c.jpg",
  },

  // ===== Peaks =====
  {
    title: "Mt. Adams",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319814",
    cover: "https://live.staticflickr.com/65535/55025807346_d66a0a0ab4.jpg",
  },
  {
    title: "Mt. Baker",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309598",
    cover: "https://live.staticflickr.com/65535/55026133890_e392bcd857.jpg",
  },
  {
    title: "Black Peak",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331283905",
    cover: "https://live.staticflickr.com/65535/55025988584_f09b5071a7.jpg",
  },

  // ===== Training =====
  {
    title: "Knots and Systems",
    category: "Training",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331327593",
    cover: "https://live.staticflickr.com/65535/55027591181_ffeaa4ea01.jpg",
  },

  // (keep adding albums below as needed — same format)

];


// -------------------------------------
// Flickr embed helper
// -------------------------------------

function ensureFlickrEmbedLoaded() {
  if (typeof window._flickr_embed_init === "function") {
    window._flickr_embed_init();
  }
}


// -------------------------------------
// Render all grids
// -------------------------------------

function renderAllGrids() {

  const grids = document.querySelectorAll(".album-grid[data-category]");
  if (!grids.length) return;

  grids.forEach(grid => {

    const category = grid.dataset.category;

    const albums = ALBUMS.filter(a => a.category === category);

    renderGrid(grid, albums);

  });
}


// -------------------------------------
// Render one grid
// -------------------------------------

function renderGrid(grid, albums) {

  grid.innerHTML = "";

  if (!albums.length) {
    grid.innerHTML = `<p style="opacity:.7">No albums yet.</p>`;
    return;
  }

  albums.forEach((album, index) => {

    const tile = document.createElement("button");

    tile.className = "album-tile";
    tile.type = "button";
    tile.dataset.index = index;

    const img = document.createElement("img");
    img.src = album.cover;
    img.alt = album.title;
    img.loading = "lazy";

    const title = document.createElement("div");
    title.className = "album-tile-title";
    title.textContent = album.title;

    tile.appendChild(img);
    tile.appendChild(title);

    tile.addEventListener("click", () => {
      openAlbum(grid, albums, index);
    });

    grid.appendChild(tile);

  });

}


// -------------------------------------
// Remove existing panel
// -------------------------------------

function removePanel(grid) {

  const existing = grid.querySelector(".album-panel");

  if (existing) existing.remove();

}


// -------------------------------------
// Open album panel
// -------------------------------------

function openAlbum(grid, albums, index) {

  const album = albums[index];
  if (!album) return;

  removePanel(grid);


  const clicked = grid.querySelector(`[data-index="${index}"]`);
  if (!clicked) return;


  const panel = document.createElement("div");
  panel.className = "album-panel";


  // ---------- Header ----------

  const header = document.createElement("div");
  header.className = "album-panel-header";


  const title = document.createElement("h2");
  title.textContent = album.title;


  const link = document.createElement("a");
  link.href = album.href;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Open on Flickr";


  const close = document.createElement("button");
  close.className = "album-panel-close";
  close.textContent = "×";
  close.setAttribute("aria-label", "Close");

  close.addEventListener("click", () => {
    panel.remove();
  });


  const actions = document.createElement("div");
  actions.className = "album-panel-actions";

  actions.appendChild(link);
  actions.appendChild(close);


  header.appendChild(title);
  header.appendChild(actions);


  panel.appendChild(header);


  // ---------- Embed ----------

  const embed = document.createElement("div");
  embed.className = "album-embed";


  const a = document.createElement("a");

  a.setAttribute("data-flickr-embed", "true");
  a.setAttribute("data-footer", "false");

  a.href = album.href;
  a.title = album.title;


  const preview = document.createElement("img");

  preview.src = album.cover;
  preview.alt = album.title;
  preview.width = 640;
  preview.height = 480;


  a.appendChild(preview);

  embed.appendChild(a);

  panel.appendChild(embed);


  // ---------- Insert under row ----------

  const top = clicked.offsetTop;

  const children = [...grid.children];

  let insertBefore = null;

  for (const child of children) {

    if (child.offsetTop > top) {
      insertBefore = child;
      break;
    }

  }

  if (insertBefore) {
    grid.insertBefore(panel, insertBefore);
  } else {
    grid.appendChild(panel);
  }


  ensureFlickrEmbedLoaded();

  panel.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


// -------------------------------------
// Escape closes all panels
// -------------------------------------

document.addEventListener("keydown", e => {

  if (e.key !== "Escape") return;

  document
    .querySelectorAll(".album-grid")
    .forEach(grid => removePanel(grid));

});


// -------------------------------------
// Init
// -------------------------------------

document.addEventListener("DOMContentLoaded", () => {

  renderAllGrids();

});
