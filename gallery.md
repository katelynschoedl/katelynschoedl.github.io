---
layout: default
title: Gallery
---

<h1>Gallery</h1>

<p>Albums are hosted on Flickr. Click an album to browse.</p>

<div id="album-grid" class="album-grid"></div>

<section id="album-view" class="album-view" hidden>
  <div class="album-view-header">
    <h2 id="album-title"></h2>
    <a id="album-link" href="#" target="_blank" rel="noopener">Open on Flickr</a>
  </div>

  <div id="album-embed" class="album-embed"></div>
</section>

<script src="/assets/js/gallery.js"></script>

<!-- Load Flickr embedr ONCE -->
<script async src="https://embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
