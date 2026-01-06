// assets/js/gallery.js
// Renders a grid of Flickr albums from a local list (no API key needed).
// On click, injects Flickr's album embed inline (no lightbox).

const ALBUMS = [
  // ===== Peaks =====
  {
    title: "Mt. Adams",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319814",
    cover: "https://live.staticflickr.com/65535/55025807346_d66a0a0ab4.jpg",
    alt: "Mt. Adams",
  },
  {
    title: "Mt. Baker",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309598",
    cover: "https://live.staticflickr.com/65535/55026133890_e392bcd857.jpg",
    alt: "Mt. Baker",
  },
  {
    title: "Black Peak",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331283905",
    cover: "https://live.staticflickr.com/65535/55025988584_f09b5071a7.jpg",
    alt: "Black Peak",
  },
  {
    title: "Blueberry Buttress",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309203",
    cover: "https://live.staticflickr.com/65535/55026061625_2c4a7a408d.jpg",
    alt: "Blueberry Buttress",
  },
  {
    title: "Del Campo Peak",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319104",
    cover: "https://live.staticflickr.com/65535/55026211386_831a871877.jpg",
    alt: "Del Campo Peak",
  },
  {
    title: "Chair Peak",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309778",
    cover: "https://live.staticflickr.com/65535/55025936848_ace6a4888f.jpg",
    alt: "Chair Peak",
  },
  {
    title: "Mt. Colchuck",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331284915",
    cover: "https://live.staticflickr.com/65535/55026075089_6a18374aa8.jpg",
    alt: "Mt. Colchuck",
  },
  {
    title: "Eldorado Peak",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331284855",
    cover: "https://live.staticflickr.com/65535/55026068569_1115ef3d5c.jpg",
    alt: "Eldorado Peak",
  },
  {
    title: "Glacier Peak",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331295201",
    cover: "https://live.staticflickr.com/65535/55025961318_61cdd4c7c8.jpg",
    alt: "Glacier Peak",
  },
  {
    title: "Mt. Hood",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331290757",
    cover: "https://live.staticflickr.com/65535/55025700071_870f7332f9.jpg",
    alt: "Mt. Hood",
  },
  {
    title: "Liberty Bell Mountain",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331295741",
    cover: "https://live.staticflickr.com/65535/55026019233_0c27e07d93.jpg",
    alt: "Liberty Bell Mountain",
  },
  {
    title: "Mt. Rainier",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331294766",
    cover: "https://live.staticflickr.com/65535/55026067520_9686b03f13.jpg",
    alt: "Mt. Rainier",
  },
  {
    title: "Mt. Shasta",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331291237",
    cover: "https://live.staticflickr.com/65535/55026155954_6a64619477.jpg",
    alt: "Mt. Shasta",
  },
  {
    title: "Mt. Shuksan",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309183",
    cover: "https://live.staticflickr.com/65535/55025881098_72b051c6d3.jpg",
    alt: "Mt. Shuksan",
  },
  {
    title: "Silver Star Mountain",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331290752",
    cover: "https://live.staticflickr.com/65535/55026027040_eccfee7a18.jpg",
    alt: "Silver Star Mountain",
  },
  {
    title: "Mt. St. Helens",
    category: "Peaks",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319809",
    cover: "https://live.staticflickr.com/65535/55026061214_ff76bb572f.jpg",
    alt: "Mt. St. Helens",
  },

  // ===== Ski & Ice =====
  {
    title: "Ames Ice Hose",
    category: "Ski & Ice",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331294911",
    cover: "https://live.staticflickr.com/65535/55024953787_42d55373c0.jpg",
    alt: "Ames Ice Hose",
  },
  {
    title: "Off Piste",
    category: "Ski & Ice",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331311373",
    cover: "https://live.staticflickr.com/65535/55025038257_37259d84b0.jpg",
    alt: "Off Piste",
  },
  {
    title: "Ouray",
    category: "Ski & Ice",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309558",
    cover: "https://live.staticflickr.com/65535/55026171395_64c774a1ef.jpg",
    alt: "Ouray",
  },
  {
    title: "Resort",
    category: "Ski & Ice",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331297036",
    cover: "https://live.staticflickr.com/65535/55026216949_437acf02fc.jpg",
    alt: "Resort",
  },
  {
    title: "The Ribbon",
    category: "Ski & Ice",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331310187",
    cover: "https://live.staticflickr.com/65535/55026006574_1511aa632e.jpg",
    alt: "The Ribbon",
  },
  {
    title: "Silverton",
    category: "Ski & Ice",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319444",
    cover: "https://live.staticflickr.com/65535/55026015419_1d88301e24.jpg",
    alt: "Silverton",
  },
  {
    title: "Touring",
    category: "Ski & Ice",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331296366",
    cover: "https://live.staticflickr.com/65535/55026153334_3563e75383.jpg",
    alt: "Touring",
  },
  {
    title: "WA Ice",
    category: "Ski & Ice",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331296191",
    cover: "https://live.staticflickr.com/65535/55026075705_d049f06f56.jpg",
    alt: "WA Ice",
  },
  {
    title: "XC Skiing",
    category: "Ski & Ice",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331320509",
    cover: "https://live.staticflickr.com/65535/55026134909_9c546a50f1.jpg",
    alt: "XC Skiing",
  },

  // ===== Cragging =====
  {
    title: "Bouldering",
    category: "Cragging",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331311308",
    cover: "https://live.staticflickr.com/65535/55025032187_06a19ebf17.jpg",
    alt: "Bouldering",
  },
  {
    title: "Dry Tooling",
    category: "Cragging",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331285705",
    cover: "https://live.staticflickr.com/65535/55026218050_907cf99b5a.jpg",
    alt: "Dry Tooling",
  },
  {
    title: "Exit 38",
    category: "Cragging",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331295691",
    cover: "https://live.staticflickr.com/65535/55025834021_ba4173fb8c.jpg",
    alt: "Exit 38",
  },
  {
    title: "Index",
    category: "Cragging",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319574",
    cover: "https://live.staticflickr.com/65535/55024881572_c1b329715e.jpg",
    alt: "Index",
  },
  {
    title: "Indian Creek",
    category: "Cragging",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331292587",
    cover: "https://live.staticflickr.com/65535/55026200035_dfd86bbc75.jpg",
    alt: "Indian Creek",
  },
  {
    title: "Kalymnos",
    category: "Cragging",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331291247",
    cover: "https://live.staticflickr.com/65535/55025988739_08aa236a6e.jpg",
    alt: "Kalymnos",
  },
  {
    title: "Lake City",
    category: "Cragging",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331321179",
    cover: "https://live.staticflickr.com/65535/55026137283_e7c87583ea.jpg",
    alt: "Lake City",
  },
  {
    title: "Red Rock Canyon",
    category: "Cragging",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331311288",
    cover: "https://live.staticflickr.com/65535/55026102153_6a9cd780fa.jpg",
    alt: "Red Rock Canyon",
  },
  {
    title: "Smith Rock",
    category: "Cragging",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331311018",
    cover: "https://live.staticflickr.com/65535/55026067363_518945d303.jpg",
    alt: "Smith Rock",
  },
  {
    title: "Squamish",
    category: "Cragging",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331295216",
    cover: "https://live.staticflickr.com/65535/55026128108_573256cb4e.jpg",
    alt: "Squamish",
  },
  {
    title: "Vantage",
    category: "Cragging",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331296286",
    cover: "https://live.staticflickr.com/65535/55026074778_15265d7824.jpg",
    alt: "Vantage",
  },
  {
    title: "Yosemite",
    category: "Cragging",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309858",
    cover: "https://live.staticflickr.com/65535/55026019994_6a9a38b647.jpg",
    alt: "Yosemite",
  },

  // ===== Backpacking =====
  {
    title: "The Enchantments",
    category: "Backpacking",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331286040",
    cover: "https://live.staticflickr.com/65535/55026113943_411c6558c8.jpg",
    alt: "The Enchantments",
  },
  {
    title: "Golden Ears",
    category: "Backpacking",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331286070",
    cover: "https://live.staticflickr.com/65535/55025935951_9718845045.jpg",
    alt: "Golden Ears",
  },
  {
    title: "High Divide and 7 Lakes Basin",
    category: "Backpacking",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331293817",
    cover: "https://live.staticflickr.com/65535/55026234814_73be2e4c72.jpg",
    alt: "High Divide and 7 Lakes Basin",
  },
  {
    title: "Hoh River Trail",
    category: "Backpacking",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331337709",
    cover: "https://live.staticflickr.com/65535/55027918259_41a9f84c2a.jpg",
    alt: "Hoh River Trail",
  },
  {
    title: "Howe Sound Crest Trail",
    category: "Backpacking",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319144",
    cover: "https://live.staticflickr.com/65535/55026061860_31cf430ce2.jpg",
    alt: "Howe Sound Crest Trail",
  },
  {
    title: "Olympic South Coast Trail",
    category: "Backpacking",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331293797",
    cover: "https://live.staticflickr.com/65535/55026163083_f3e1e2f637.jpg",
    alt: "Olympic South Coast Trail",
  },
  {
    title: "San Juan Islands",
    category: "Backpacking",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331297256",
    cover: "https://live.staticflickr.com/65535/55026228849_7600df3c3b.jpg",
    alt: "San Juan Islands",
  },
  {
    title: "Tank Lakes",
    category: "Backpacking",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331297286",
    cover: "https://live.staticflickr.com/65535/55026169568_40f3b003a2.jpg",
    alt: "Tank Lakes",
  },

  // ===== Training =====
  {
    title: "BoeAlps",
    category: "Training",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331318674",
    cover: "https://live.staticflickr.com/65535/55026242365_87a427eac2.jpg",
    alt: "BoeAlps",
  },
  {
    title: "Knots and Systems",
    category: "Training",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331327593",
    cover: "https://live.staticflickr.com/65535/55027591181_ffeaa4ea01.jpg",
    alt: "Knots and Systems",
  },
  {
    title: "Racing",
    category: "Training",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331283925",
    cover: "https://live.staticflickr.com/65535/55025735766_8877dd1477.jpg",
    alt: "Racing",
  },
];


function ensureFlickrEmbedLoaded() {
  if (typeof window._flickr_embed_init === "function") {
    window._flickr_embed_init();
  }
}

function renderAlbumGrid() {
  const grid = document.getElementById("album-grid");
  if (!grid) return;

  grid.innerHTML = "";

  ALBUMS.forEach((a, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "album-tile";
    btn.dataset.albumIndex = String(idx);
    btn.setAttribute("aria-label", `Open album: ${a.title}`);

    const img = document.createElement("img");
    img.src = a.cover;
    img.alt = a.alt || a.title;
    img.loading = "lazy";

    const title = document.createElement("div");
    title.className = "album-tile-title";
    title.textContent = a.title;

    btn.appendChild(img);
    btn.appendChild(title);

    btn.addEventListener("click", () => openAlbumUnderRow(idx));

    grid.appendChild(btn);
  });
}

function removeExistingPanel() {
  const existing = document.getElementById("album-panel");
  if (existing) existing.remove();
}

function openAlbumUnderRow(albumIndex) {
  const grid = document.getElementById("album-grid");
  if (!grid) return;

  const album = ALBUMS[albumIndex];
  if (!album) return;

  // Remove old panel if it exists
  removeExistingPanel();

  // Find the clicked tile element
  const clickedTile = grid.querySelector(`.album-tile[data-album-index="${albumIndex}"]`);
  if (!clickedTile) return;

  // Create the panel
  const panel = document.createElement("div");
  panel.id = "album-panel";
  panel.className = "album-panel";


  // Header
  const header = document.createElement("div");
  header.className = "album-panel-header";

  // Left side: title + optional description
  const left = document.createElement("div");
  left.className = "album-panel-left";

  const h2 = document.createElement("h2");
  h2.textContent = album.title;
  left.appendChild(h2);

  if (album.description) {
    const desc = document.createElement("p");
    desc.className = "album-panel-desc";
    desc.textContent = album.description;
    left.appendChild(desc);
  }

  // Button link
  const link = document.createElement("a");
  link.className = "album-panel-link";
  link.href = album.href;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Open on Flickr";

  // Close button (X)
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "album-panel-close";
  closeBtn.setAttribute("aria-label", "Close album");
  closeBtn.textContent = "×";
  closeBtn.addEventListener("click", () => panel.remove());

  // Actions cluster (right side)
  const actions = document.createElement("div");
  actions.className = "album-panel-actions";
  actions.appendChild(link);
  actions.appendChild(closeBtn);

  header.appendChild(left);
  header.appendChild(actions);

  panel.appendChild(header);


  
  // Embed container
  const embed = document.createElement("div");
  embed.className = "album-embed";

  const a = document.createElement("a");
  a.setAttribute("data-flickr-embed", "true");
  a.setAttribute("data-footer", "false");
  a.href = album.href;
  a.title = album.title;

  const previewImg = document.createElement("img");
  previewImg.src = album.cover;
  previewImg.alt = album.alt || album.title;
  previewImg.width = 640;
  previewImg.height = 480;

  a.appendChild(previewImg);
  embed.appendChild(a);

  panel.appendChild(embed);

  // Insert panel *beneath the row that contains the clicked tile*
  //
  // We do this by finding the first element AFTER the clicked tile whose offsetTop is greater
  // (meaning it’s in the next row). Insert the panel right before that.
  const clickedTop = clickedTile.offsetTop;
  const children = Array.from(grid.children);

  let insertBefore = null;
  for (const child of children) {
    if (child === clickedTile) continue;
    if (child.offsetTop > clickedTop) {
      insertBefore = child;
      break;
    }
  }

  if (insertBefore) {
    grid.insertBefore(panel, insertBefore);
  } else {
    grid.appendChild(panel);
  }

  // Kick Flickr embed to render
  ensureFlickrEmbedLoaded();

  // Scroll so the panel is visible without jumping too hard
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Optional: close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") removeExistingPanel();
});

document.addEventListener("DOMContentLoaded", () => {
  renderAlbumGrid();
});
