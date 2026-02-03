---
layout: default
title: Gallery
---

<h1 id="top">Gallery</h1>
<p>Click an album to browse. <a href="#bottom" style="color: #93c5fd; text-decoration: none;">Click to scroll to bottom.</a></p>

<details class="gallery-section" open>
  <summary class="gallery-summary">Fieldwork</summary>
  <div class="album-grid" data-category="Fieldwork"></div>
</details>

<details class="gallery-section" open>
  <summary class="gallery-summary">Peaks</summary>
  <div class="album-grid" data-category="Peaks"></div>
</details>

<details class="gallery-section" open>
  <summary class="gallery-summary">Ski and Ice</summary>
  <div class="album-grid" data-category="Ski and Ice"></div>
</details>

<details class="gallery-section" open>
  <summary class="gallery-summary">Cragging</summary>
  <div class="album-grid" data-category="Cragging"></div>
</details>

<details class="gallery-section" open>
  <summary class="gallery-summary">Backpacking</summary>
  <div class="album-grid" data-category="Backpacking"></div>
</details>

<details class="gallery-section" open>
  <summary class="gallery-summary">Hikes and Scrambles</summary>
  <div class="album-grid" data-category="Hikes and Scrambles"></div>
</details>

<details class="gallery-section" open>
  <summary class="gallery-summary">Training</summary>
  <div class="album-grid" data-category="Training"></div>
</details>

<script src="{{ site.baseurl }}/assets/js/gallery.js"></script>
<script async src="https://embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<hr style="border: none; border-top: 1px solid rgba(255,255,255,0.18); margin: 2rem 0;">

<div id="bottom" class="embed-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:16px; margin-top:16px; margin-bottom:16px; align-items:start;">

  <!-- Mountain Project -->
  <div class="card" style="padding:16px; border-radius:16px; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.03);">
    <h2 style="margin:0 0 8px 0;">Mountain Project</h2>
    <p style="margin:0 0 14px 0; color:rgba(255,255,255,0.75);">
      Ticks, routes, and climbing history.
    </p>
    <p style="margin:0;">
      <a class="button" style="display:inline-flex; align-items:center; padding:8px 12px; border-radius:12px; border:1px solid rgba(255,255,255,0.18); background:rgba(255,255,255,0.06); color:#fff; text-decoration:none; font-size:0.95rem;"
         href="https://www.mountainproject.com/user/201701798/katelyn-schoedl" target="_blank" rel="noopener">
        View my Mountain Project profile →
      </a>
    </p>
  </div>

  <!-- Strava -->
  <div class="card" style="padding:16px; border-radius:16px; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.03);">
    <h2 style="margin:0 0 8px 0;">Strava</h2>
    <p style="margin:0 0 14px 0; color:rgba(255,255,255,0.75);">
      Latest public activity.
    </p>
    <p style="margin:0;">
      <a class="button" style="display:inline-flex; align-items:center; padding:8px 12px; border-radius:12px; border:1px solid rgba(255,255,255,0.18); background:rgba(255,255,255,0.06); color:#fff; text-decoration:none; font-size:0.95rem;"
         href="https://www.strava.com/athletes/64982141" target="_blank" rel="noopener">
        View my Strava profile →
      </a>
    </p>
  </div>

</div>

<p style="margin-top: 1.5rem; text-align: center;">
  <a href="#top" style="color: #93c5fd; text-decoration: none;">Click to scroll to top.</a>
</p>

<style>
/* === SECTION SEPARATORS: match resume (single bottom line) === */
.gallery-section{
  padding: 1.2rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.18);
}
.gallery-section:last-of-type{
  border-bottom: none;
}

/* === SECTION TITLES === */
.gallery-summary{
  font-size: 1.18rem;
  font-weight: 700;
  cursor: pointer;
  margin: 0;
  transition: color 0.18s ease, text-shadow 0.18s ease;

  /* IMPORTANT: makes summary behave consistently */
  list-style: none;
  display: block;
}

/* Optional hover glow */
.gallery-section:hover .gallery-summary{
  color:#fff;
  text-shadow:
    0 0 10px rgba(255,255,255,0.18),
    0 0 22px rgba(255,255,255,0.10);
}

/* === CARETS BACK (custom ▾ / ▸) === */
/* Hide browser default marker */
.gallery-summary::-webkit-details-marker{ display:none; }
.gallery-summary::marker{ display:none; }

/* Custom caret */
.gallery-summary::before{
  content:"▾";
  display:inline-block;
  margin-right:10px;
  opacity:0.7;
  transform: translateY(-1px);
  transition: opacity 0.18s ease;
}

/* Closed state */
.gallery-section:not([open]) .gallery-summary::before{
  content:"▸";
}

/* === Album tile hover grow === */
.album-grid{ margin-top: 14px; }

.album-tile{
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  transition: transform 0.18s ease;
}

.album-tile img{
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  will-change: transform;
  transform-origin: center;
}

.album-tile:hover img{
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.3);
}

.album-tile:hover{
  transform: translateY(-1px);
}

/* === Center the Flickr carousel/embed inside the panel === */
.album-embed{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}

/* Flickr injects iframe/content; keep centered */
.album-embed > a,
.album-embed iframe{
  max-width: 100%;
  box-shadow: 0 0 30px rgba(0,0,0,0.6), 0 0 60px rgba(0,0,0,0.4);
  border-radius: 8px;
}

/* Optional: prevents weird overflow from embeds */
.album-panel{ overflow: hidden; }

/* === Make Fieldwork album larger === */
.album-grid[data-category="Fieldwork"] .album-tile{
  grid-column: span 2; /* takes up 2 columns */
}

.album-grid[data-category="Fieldwork"] .album-tile img{
  height: 280px; /* taller than default */
  object-fit: cover;
}

/* Hide the Fieldwork title caption */
.album-grid[data-category="Fieldwork"] .album-tile-title{
  display: none;
}

/* Mobile: reset to normal size */
@media (max-width: 640px){
  .album-grid[data-category="Fieldwork"] .album-tile{
    grid-column: span 1;
  }
  .album-grid[data-category="Fieldwork"] .album-tile img{
    height: auto;
  }
}

</style>


