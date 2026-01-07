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

  <!-- iNaturalist (full-width row) -->
  <div class="card" style="padding:16px; border-radius:16px; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.03); grid-column: 1 / -1;">
    <h2 style="margin:0 0 8px 0;">iNaturalist</h2>
    <p style="margin:0 0 14px 0; color:rgba(255,255,255,0.75);">
      Recent observations.
    </p>

    <!-- Wrap the widget so our CSS only affects this instance -->
    <div class="inat-wrap">
      <style>
        /* 1) Force the widget to use your site font (fixes font "getting messed up") */
        .inat-wrap,
        .inat-wrap * {
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif !important;
        }

        /* 2) Kill the default table layout + extra text.
              The widget renders a table, but we only want the thumbnails. */
        .inat-wrap table,
        .inat-wrap tbody,
        .inat-wrap tr,
        .inat-wrap td {
          border: 0 !important;
        }
        .inat-wrap .inat-observation-body,
        .inat-wrap .inat-user-body,
        .inat-wrap .inat-meta,
        .inat-wrap .inat-label,
        .inat-wrap .inat-widget-header,
        .inat-wrap .inat-footer {
          display: none !important;
        }

        /* 3) Turn the thumbnail blocks into a 6-column grid.
              iNat small layout uses .inat-observation-image blocks. */
        .inat-wrap .inat-widget-small {
          display: grid !important;
          grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
          gap: 10px !important;
          align-items: stretch !important;
        }

        /* Each observation image becomes a grid item */
        .inat-wrap .inat-observation-image {
          width: auto !important;
          display: block !important;
          float: none !important;
          margin: 0 !important;
          text-align: left !important;
        }

        /* Thumbnails fill the cells */
        .inat-wrap .inat-observation-image img {
          width: 100% !important;
          max-width: 100% !important;
          height: 120px !important;
          object-fit: cover !important;
          border-radius: 12px !important;
          display: block !important;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .inat-wrap .inat-widget-small { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 520px) {
          .inat-wrap .inat-widget-small { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
      </style>

      <!-- The widget injects its HTML here -->
      <script
        type="text/javascript"
        charset="utf-8"
        src="https://www.inaturalist.org/observations/kschoedl.widget?layout=small&limit=12&order=desc&order_by=observed_on">
      </script>
    </div>

    <div style="margin-top:14px;">
      <a class="button"
         style="display:inline-flex; align-items:center; padding:8px 12px; border-radius:12px; border:1px solid rgba(255,255,255,0.18); background:rgba(255,255,255,0.06); color:#fff; text-decoration:none; font-size:0.95rem;"
         href="https://www.inaturalist.org/observations/kschoedl"
         target="_blank" rel="noopener">
        View my recent observations →
      </a>
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
