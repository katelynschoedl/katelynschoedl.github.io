// assets/js/gallery.js
// Renders a grid of Flickr albums from a local list (no API key needed).
// On click, injects Flickr's album embed inline (no lightbox).

const ALBUMS = [
  {
    title: "Glacier Peak",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331295201",
    cover: "https://live.staticflickr.com/65535/55025961318_61cdd4c7c8.jpg",
    alt: "Glacier Peak",
  },
  {
    title: "Mt. Rainier",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331294766",
    cover: "https://live.staticflickr.com/65535/55026067520_9686b03f13.jpg",
    alt: "Mt. Rainier",
  },
  {
    title: "Mt. Adams",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319814",
    cover: "https://live.staticflickr.com/65535/55025807346_d66a0a0ab4_z.jpg",
    alt: "Mt. Adams",
  },
  {
    title: "Mt. St. Helens",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319809",
    cover: "https://live.staticflickr.com/65535/55026061214_ff76bb572f_z.jpg",
    alt: "Mt. St. Helens",
  },
  {
    title: "Mt. Baker",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309598",
    cover: "https://live.staticflickr.com/65535/55026133890_e392bcd857_z.jpg",
    alt: "Mt. Baker",
  },
  {
    title: "Mt. Hood",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331290757",
    cover: "https://live.staticflickr.com/65535/55025700071_870f7332f9_z.jpg",
    alt: "Mt. Hood",
  },
  {
    title: "Mt. Shasta",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331291237",
    cover: "https://live.staticflickr.com/65535/55024844787_eb5ca6a991_z.jpg",
    alt: "Mt. Shasta",
  },
  {
    title: "Mt. Shuksan",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309183",
    cover: "https://live.staticflickr.com/65535/55025881098_72b051c6d3.jpg",
    alt: "Mt. Shuksan",
  },
  {
    title: "Eldorado Peak",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331284855",
    cover: "https://live.staticflickr.com/65535/55026068569_1115ef3d5c.jpg",
    alt: "Eldorado Peak",
  },
  {
    title: "Mt. Colchuck",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331284915",
    cover: "https://live.staticflickr.com/65535/55026075089_6a18374aa8_z.jpg",
    alt: "Mt. Colchuck",
  },
  {
    title: "Black Peak",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331283905",
    cover: "https://live.staticflickr.com/65535/55025988584_f09b5071a7_z.jpg",
    alt: "Black Peak",
  },
  {
    title: "Del Campo Peak",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319104",
    cover: "https://live.staticflickr.com/65535/55026061790_cebe4cb580.jpg",
    alt: "Del Campo Peak",
  },
  {
    title: "Silver Star Mountain",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331290752",
    cover: "https://live.staticflickr.com/65535/55026027040_eccfee7a18_z.jpg",
    alt: "Silver Star Mountain",
  },
  {
    title: "Chair Peak",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309778",
    cover: "https://live.staticflickr.com/65535/55025936848_ace6a4888f_z.jpg",
    alt: "Chair Peak",
  },
  {
    title: "Blueberry Buttress",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309203",
    cover: "https://live.staticflickr.com/65535/55026027030_890ffe3b43.jpg",
    alt: "Blueberry Buttress",
  },
  {
    title: "Liberty Bell",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331295741",
    cover: "https://live.staticflickr.com/65535/55026019233_0c27e07d93.jpg",
    alt: "Liberty Bell",
  },
  {
    title: "Enchantments",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331286040",
    cover: "https://live.staticflickr.com/65535/55026113943_411c6558c8.jpg",
    alt: "Enchantments",
  },
  {
    title: "Tank Lakes",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331297286",
    cover: "https://live.staticflickr.com/65535/55026169568_40f3b003a2_z.jpg",
    alt: "Tank Lakes",
  },
  {
    title: "Howe Sound Crest Trail",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319144",
    cover: "https://live.staticflickr.com/65535/55026061860_31cf430ce2_z.jpg",
    alt: "Howe Sound Crest Trail",
  },
  {
    title: "Golden Ears",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331286070",
    cover: "https://live.staticflickr.com/65535/55025935951_9718845045.jpg",
    alt: "Golden Ears",
  },
  {
    title: "High Divide and 7 Lakes Basin",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331293817",
    cover: "https://live.staticflickr.com/65535/55026234814_73be2e4c72.jpg",
    alt: "High Divide and 7 Lakes Basin",
  },
  {
    title: "Olympic South Coast Trail",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331293797",
    cover: "https://live.staticflickr.com/65535/55026163083_f3e1e2f637_z.jpg",
    alt: "Olympic South Coast Trail",
  },
  {
    title: "San Juan Islands",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331297256",
    cover: "https://live.staticflickr.com/65535/55026228849_7600df3c3b_z.jpg",
    alt: "San Juan Islands",
  },
  {
    title: "Index",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319574",
    cover: "https://live.staticflickr.com/65535/55024881572_c1b329715e.jpg",
    alt: "Index",
  },
  {
    title: "Exit 38",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331295691",
    cover: "https://live.staticflickr.com/65535/55025834021_ba4173fb8c_z.jpg",
    alt: "Exit 38",
  },
  {
    title: "Vantage",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331296286",
    cover: "https://live.staticflickr.com/65535/55026074778_15265d7824.jpg",
    alt: "Vantage",
  },
  {
    title: "Squamish",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331295216",
    cover: "https://live.staticflickr.com/65535/55025961313_ecec89a583.jpg",
    alt: "Squamish",
  },
  {
    title: "Red Rock Canyon",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331311288",
    cover: "https://live.staticflickr.com/65535/55026102153_6a9cd780fa_z.jpg",
    alt: "Red Rock Canyon",
  },
  {
    title: "Indian Creek",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331292587",
    cover: "https://live.staticflickr.com/65535/55026200035_dfd86bbc75.jpg",
    alt: "Indian Creek",
  },
  {
    title: "Lake City",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331321179",
    cover: "https://live.staticflickr.com/65535/55026137283_e7c87583ea.jpg",
    alt: "Lake City",
  },
  {
    title: "Smith Rock",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331311018",
    cover: "https://live.staticflickr.com/65535/55026067363_518945d303.jpg",
    alt: "Smith Rock",
  },
  {
    title: "Ouray",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309558",
    cover: "https://live.staticflickr.com/65535/55025736081_a2f902e301.jpg",
    alt: "Ouray",
  },
  {
    title: "Eureka",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331294911",
    cover: "https://live.staticflickr.com/65535/55025931303_86f395da24.jpg",
    alt: "Eureka",
  },
  {
    title: "Yosemite",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331309858",
    cover: "https://live.staticflickr.com/65535/55026019994_6a9a38b647_z.jpg",
    alt: "Yosemite",
  },
  {
    title: "Kalymnos",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331291247",
    cover: "https://live.staticflickr.com/65535/55025988739_08aa236a6e_z.jpg",
    alt: "Kalymnos",
  },
  {
    title: "Lake Atitlan",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331284340",
    cover: "https://live.staticflickr.com/65535/55026089165_271cbd799b.jpg",
    alt: "Lake Atitlan",
  },
  {
    title: "Silverton",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331319444",
    cover: "https://live.staticflickr.com/65535/55026015419_1d88301e24_z.jpg",
    alt: "Silverton",
  },
  {
    title: "XC Skiing",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331320509",
    cover: "https://live.staticflickr.com/65535/55026134909_9c546a50f1.jpg",
    alt: "XC Skiing",
  },
  {
    title: "Dry Tooling",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331285705",
    cover: "https://live.staticflickr.com/65535/55026218050_907cf99b5a.jpg",
    alt: "Dry Tooling",
  },
  {
    title: "Bouldering",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331311308",
    cover: "https://live.staticflickr.com/65535/55025032187_06a19ebf17_z.jpg",
    alt: "Bouldering",
  },
  {
    title: "Off Piste",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331311373",
    cover: "https://live.staticflickr.com/65535/55025925996_8992e0c038_z.jpg",
    alt: "Off Piste",
  },
  {
    title: "Touring",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331296366",
    cover: "https://live.staticflickr.com/65535/55026153334_3563e75383.jpg",
    alt: "Touring",
  },
  {
    title: "Resort Skiing",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331297036",
    cover: "https://live.staticflickr.com/65535/55026216949_437acf02fc.jpg",
    alt: "Resort Skiing",
  },
  {
    title: "WA Day Hikes",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331292682",
    cover: "https://live.staticflickr.com/65535/55025988354_25e116f387_z.jpg",
    alt: "WA Day Hikes",
  },
  {
    title: "WA Ice",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331296191",
    cover: "https://live.staticflickr.com/65535/55026075705_d049f06f56_z.jpg",
    alt: "WA Ice",
  },
  {
    title: "Racing",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331283925",
    cover: "https://live.staticflickr.com/65535/55025735766_8877dd1477.jpg",
    alt: "Racing",
  },
  {
    title: "Training",
    href: "https://www.flickr.com/photos/katelynschoedl/albums/72177720331318674",
    cover: "https://live.staticflickr.com/65535/55024810432_be34919476.jpg",
    alt: "Training",
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

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "album-panel-close";
  closeBtn.setAttribute("aria-label", "Close album");
  closeBtn.textContent = "×";
  closeBtn.addEventListener("click", () => panel.remove());

  // Header
  const header = document.createElement("div");
  header.className = "album-panel-header";

  const h2 = document.createElement("h2");
  h2.textContent = album.title;

  const link = document.createElement("a");
  link.href = album.href;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Open on Flickr";
  link.className = "album-panel-link";

  const left = document.createElement("div");
  left.appendChild(h2);

  if (album.description) {
    const desc = document.createElement("p");
    desc.className = "album-panel-desc";
    desc.textContent = album.description;
    left.appendChild(desc);
  }

  header.appendChild(left);
  header.appendChild(link);

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

  panel.appendChild(closeBtn);
  panel.appendChild(header);
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
