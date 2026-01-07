---
layout: default
title: Alpine
permalink: /alpine
---

# Alpine

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


  <!-- iNaturalist -->
  <div class="card" style="padding:16px; border-radius:16px; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.03); grid-column: 1 / -1;">
    <!-- <h2 style="margin:0 0 8px 0;">iNaturalist</h2>
    <p style="margin:0 0 14px 0; color:rgba(255,255,255,0.75);">
      Recent observations.
    </p> -->
  <!-- width constraint to match Strava + Mountain Project row -->
    <div style="max-width:1100px; margin:0 auto;">

<style>
  /* --- iNaturalist overrides for your site --- */

  /* let the widget use the full width of the card */
  .inat-widget { padding: 0 !important; line-height: 1.2 !important; }

  /* remove the table-row layout spacing so we can grid the thumbs */
  .inat-widget table { width: 100% !important; border-collapse: collapse !important; }
  .inat-widget td { padding: 0 !important; vertical-align: top !important; }

  /* the "layout=small" widget uses this class on thumb blocks */
  .inat-widget-small .inat-observation-image {
    float: none !important;
    display: block !important;
    margin: 0 !important;
    height: auto !important;
    width: auto !important;
  }

  /* force thumbs into a 6-column grid */
  .inat-widget-small .inat-observations {
    display: grid !important;
    grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
    gap: 10px !important;
    align-items: stretch !important;
  }

  /* if the widget doesn’t have .inat-observations, fall back:
     turn the main table row into a grid-ish wrap */
  .inat-widget-small table { display: block !important; }
  .inat-widget-small tbody { display: block !important; }
  .inat-widget-small tr { display: block !important; }
  .inat-widget-small td { display: block !important; }

  /* images: fill each grid cell nicely */
  .inat-observation-image img {
    max-width: 100% !important;
    width: 100% !important;
    height: 110px !important;          /* tweak: bigger = taller */
    object-fit: cover !important;
    border-radius: 10px !important;
    display: block !important;
  }

  /* hide text columns so only thumbs show (clean gallery look) */
  .inat-observation-body,
  .inat-meta,
  .inat-label,
  .inat-value:not(.inat-footer .inat-value) {
    display: none !important;
  }

  /* responsive: fewer columns on small screens */
  @media (max-width: 900px) {
    .inat-widget-small .inat-observations { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
  }
  @media (max-width: 520px) {
    .inat-widget-small .inat-observations { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
  }
</style>

    
    <!-- BEGIN iNaturalist widget -->
    <style type="text/css" media="screen">
      .inat-widget { font-family: Georgia, serif; padding: 10px; line-height: 1;}
      .inat-widget-header {margin-bottom: 10px;}
      .inat-widget td {vertical-align: top; padding-bottom: 10px;}
      .inat-label { color: #888; }
      .inat-meta { font-size: smaller; margin-top: 3px; line-height: 1.2;}
      .inat-observation-body, .inat-user-body { padding-left: 10px; }
      .inat-observation-image {text-align: center;}
      .inat-observation-image, .inat-user-image { width: 48px; display: inline-block; }
      .inat-observation-image img, .inat-user-image img { max-width: 48px; }
      .inat-observation-image img { vertical-align: middle; }
      .inat-widget-small .inat-observation-image { display:block; float: left; margin: 0 3px 3px 0; height:48px;}
      .inat-label, .inat-value, .inat-user { font-family: "Trebuchet MS", Arial, sans-serif; }
      .inat-user-body {vertical-align: middle;}
      .inat-widget td.inat-user-body {vertical-align: middle;}
      .inat-widget .inat-footer td.inat-value {vertical-align: middle; padding-left: 10px;}
    </style>

    <div class="inat-widget">
      <div class="inat-widget-header">
        <a href="https://www.inaturalist.org">
          <img alt="iNaturalist" src="https://www.inaturalist.org/assets/logo-small-white.png" />
        </a>
      </div>

      <script type="text/javascript" charset="utf-8"
        src="https://www.inaturalist.org/observations/kschoedl.widget?layout=small&limit=12&order=desc&order_by=observed_on"></script>

<div style="margin-top:12px;">
  <a class="button"
     style="display:inline-flex; align-items:center; padding:8px 12px; border-radius:12px; border:1px solid rgba(255,255,255,0.18); background:rgba(255,255,255,0.06); color:#fff; text-decoration:none; font-size:0.95rem;"
     href="https://www.inaturalist.org/observations/kschoedl"
     target="_blank" rel="noopener">
    View my recent observations →
  </a>
</div>

    </div>
    <!-- END iNaturalist widget -->
  </div>
  </div>

  <!-- Where I Climb (onX map) -->
  <div class="card" style="padding:16px; border-radius:16px; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.03); grid-column: 1 / -1;">
    <div style="display:flex; justify-content:space-between; align-items:baseline; gap:12px; flex-wrap:wrap;">
      <h2 style="margin:0;">Where I Climb</h2>
      <a class="button" style="display:inline-flex; align-items:center; padding:6px 10px; border-radius:12px; border:1px solid rgba(255,255,255,0.18); background:rgba(255,255,255,0.06); color:#fff; text-decoration:none; font-size:0.85rem;"
         href="https://www.onxmaps.com/built-with-onx/my-mountain-project-ticks/201701798" target="_blank" rel="noopener">
        Open map →
      </a>
    </div>

    <p style="margin:8px 0 14px 0; color:rgba(255,255,255,0.75);">
      A visual map of my Mountain Project ticks (embedded).
    </p>

    <div style="border-radius:14px; overflow:hidden; border:1px solid rgba(255,255,255,0.10);">
      <iframe
        height="600"
        src="https://www.onxmaps.com/built-with-onx/my-mountain-project-ticks/201701798"
        title="Built with onX - Tick Map"
        style="width: 100%; border: none;"
        loading="lazy"
        allowfullscreen
        frameborder="0">
      </iframe>
    </div>
  </div>

</div>
