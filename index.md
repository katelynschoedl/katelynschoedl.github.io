---
layout: default
title: Home
---
/* index */

<section style="max-width: 720px; margin: 0 auto; padding-top: 3rem; position: relative; z-index: 1;">

  <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">
    Hi, I’m Katelyn
  </h1>

  <p style="font-size: 1.05rem; opacity: 0.85; margin-bottom: 2.5rem;">
    This is the beginning of my personal website.
  </p>

  <div style="
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 14px;
  ">
    <a href="/resume" class="home-card">Résumé →</a>
    <!--<a href="/projects" class="home-card">Projects →</a>
    <a href="/alpine" class="home-card">Alpine →</a>-->
    <a href="/gallery" class="home-card">Gallery →</a>
  </div>

</section>

<div class="wave-container" aria-hidden="true">
  <img src="/assets/wavegif.gif"
       alt=""
       class="wave-gif">
</div>


<style>
  .home-card {
    display: block;
    padding: 14px 16px;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,0.18);
    background: rgba(255,255,255,0.04);
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.15s ease, transform 0.12s ease;
  }

  .home-card:hover {
    background: rgba(255,255,255,0.1);
    transform: translateY(-1px);
  }

.wave-container{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;               /* pins to bottom of viewport */
  width: 100vw;            /* full browser width */
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  pointer-events: none;    /* wave won't block clicks */
  z-index: 0;              /* behind your content */
  padding-bottom: 10px;       /* tweak if you want it to “hug” bottom */
}

.wave-gif{
  width: 100%;
  height: auto;           /* pick a footer height */
  object-fit: cover;       /* makes it span nicely */
  opacity: 0.4;
  filter: blur(0.2px);
  animation: fadeIn 2s ease-out;
}

  @keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 0.4; }
}

  
</style>
