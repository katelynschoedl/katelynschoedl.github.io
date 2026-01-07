---
layout: default
title: Gallery
---

<h1>Gallery</h1>
<p>Albums are hosted on Flickr. Click an album to browse.</p>

<!-- Peaks (open by default) -->
<details class="gallery-section" open>
  <summary class="gallery-summary">Peaks</summary>
  <div id="album-grid-peaks" class="album-grid" data-category="Peaks"></div>
</details>

<!-- Ski and Ice (open by default) -->
<details class="gallery-section" open>
  <summary class="gallery-summary">Ski and Ice</summary>
  <div id="album-grid-ski-ice" class="album-grid" data-category="Ski and Ice"></div>
</details>

<!-- Cragging (open by default) -->
<details class="gallery-section" open>
  <summary class="gallery-summary">Cragging</summary>
  <div id="album-grid-cragging" class="album-grid" data-category="Cragging"></div>
</details>

<!-- Backpacking (closed by default) -->
<details class="gallery-section">
  <summary class="gallery-summary">Backpacking</summary>
  <div id="album-grid-backpacking" class="album-grid" data-category="Backpacking"></div>
</details>

<!-- Hikes and Scrambles (closed by default) -->
<details class="gallery-section">
  <summary class="gallery-summary">Hikes and Scrambles</summary>
  <div id="album-grid-hikes-scrambles" class="album-grid" data-category="Hikes and Scrambles"></div>
</details>

<!-- Training (closed by default) -->
<details class="gallery-section">
  <summary class="gallery-summary">Training</summary>
  <div id="album-grid-training" class="album-grid" data-category="Training"></div>
</details>

<script src="{{ '/assets/js/gallery.js' | relative_url }}"></script>
<script async src="https://embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
