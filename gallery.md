---
layout: default
title: Gallery
---

<h1>Gallery</h1>
<p>Albums are hosted on Flickr. Click an album to browse.</p>

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

<div class="embed-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:16px; margin-top:16px; align-items:start;">

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
