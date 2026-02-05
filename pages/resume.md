---
layout: default
title: Resume
permalink: /resume
---

<div class="resume-header">

  <img src="{{ site.data.resume.contact.profile_photo }}"
       alt="Katelyn Schoedl headshot"
       class="profile-photo"
       id="profile-photo"
       aria-label="Profile photo"
       tabindex="0">
       
  <div class="header-text">
    <h1>{{ site.data.resume.contact.name }}</h1>

    <div class="title-line">
      <strong>{{ site.data.resume.contact.title }}</strong>
    </div>

<div class="contact-links">
  <span class="contact-primary">
    <a href="tel:{{ site.data.resume.contact.phone_link }}">{{ site.data.resume.contact.phone }}</a> ·
    <a href="mailto:{{ site.data.resume.contact.email }}">{{ site.data.resume.contact.email }}</a>
  </span>
  
  
  <span class="contact-secondary">
    <a href="{{ site.data.resume.contact.linkedin_url }}">LinkedIn</a> ·
    <a href="{{ site.data.resume.contact.github_url }}">GitHub</a> ·
    <a href="{{ site.data.resume.contact.orcid_url }}">ORCID</a>
  </span>
</div>
  </div>
</div>

<a class="resume-float"
   href="/resume/kschoedl.resume.pdf"
   target="_blank"
   rel="noopener">
  Download PDF Résumé →
</a>

<div class="resume-container">

  <div class="resume-section" markdown="1">
## {{ site.data.resume.section_titles.profile }}

<p class="highlight-text">{{ site.data.resume.profile.objective }}</p>

<p>{{ site.data.resume.profile.background }}</p>

<p><span class="highlight-text">{{ site.data.resume.profile.seeking }}</span></p>
  </div>

  <div class="resume-section" markdown="1">
## {{ site.data.resume.section_titles.education }}

{% for edu in site.data.resume.education %}
### {{ edu.institution }}
*{{ edu.degree }}*  
**{{ edu.dates }}**  

{% for detail in edu.details %}
- {{ detail }}
{% endfor %}

{% endfor %}
</div>

  <div class="resume-section" markdown="1">
## {{ site.data.resume.section_titles.experience }}

{% for exp in site.data.resume.experience %}
### {{ exp.organization }} — {{ exp.title }}  
*{{ exp.department }}*  
**{{ exp.dates }}**

{% for resp in exp.responsibilities %}
- {{ resp }}
{% endfor %}

{% endfor %}
</div>

  <div class="resume-section" markdown="1">
## {{ site.data.resume.section_titles.undergraduate_roles }}

{% for role in site.data.resume.undergraduate_roles %}
**{{ role.title }}, {{ role.organization }}**  
{{ role.dates }}
{% for detail in role.details %}
- {{ detail }}
{% endfor %}

{% endfor %}

## {{ site.data.resume.section_titles.internships }}

{% for intern in site.data.resume.internships %}
**{{ intern.title }}**  
*{{ intern.department }}*  
{{ intern.location }} | {{ intern.dates }}
{% for detail in intern.details %}
- {{ detail }}
{% endfor %}

{% endfor %}
</div>

  <div class="resume-section" markdown="1">
## {{ site.data.resume.section_titles.skills }}

{% for skill_key in site.data.resume.skills %}{% assign skill = skill_key[1] %}**{{ skill.name }}**  
{{ skill.items }}

{% endfor %}
</div>

  <div class="resume-section" markdown="1">
## {{ site.data.resume.section_titles.affiliations }}

{% for affiliation in site.data.resume.affiliations %}
- {{ affiliation }}
{% endfor %}

</div>

  <div class="resume-section" markdown="1">
## {{ site.data.resume.section_titles.activities }}

{% for activity in site.data.resume.activities %}
- {{ activity }}
{% endfor %}

</div>

  <div class="resume-section" markdown="1">
## {{ site.data.resume.section_titles.conferences }}

{% for conf in site.data.resume.conferences %}
- **{{ conf.name }}**, {{ conf.location }} ({{ conf.year }})  
  {{ conf.description }}
{% endfor %}

</div>

  <div class="resume-section" markdown="1">
## {{ site.data.resume.section_titles.interests }}

{{ site.data.resume.interests }}

</div>

</div>

<div style="margin: 1.2rem 0 2rem 0; display: flex; gap: 12px; flex-wrap: wrap;">
  <a href="/resume/kschoedl.resume.pdf"
     class="home-card"
     target="_blank"
     rel="noopener">
    Download PDF Résumé →
  </a>
</div>

<!-- All styles and scripts from original resume.md -->
<style>
.resume-header{
  display:flex;
  align-items:center;
  gap:36px;
  margin-bottom:1.5rem;
}

.resume-header{ position: relative; }
.profile-photo{ position: relative; z-index: 3; cursor: pointer; }

  
.profile-photo{
  width:150px;
  height:150px;
  object-fit:cover;
  border-radius:50%;
  border:2px solid rgba(255,255,255,0.25);
  box-shadow:0 0 5px rgba(255,255,255,0.08);
  flex-shrink:0;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.profile-photo:hover,
.profile-photo.photo-glow-active{
  transform: scale(1.08);
  box-shadow: 0 0 18px rgba(255,255,255,0.25);
}


.header-text h1{ 
  margin:0 0 6px 0; 
  font-size:2.1rem;
  cursor: pointer;
  transition: color 0.18s ease, text-shadow 0.18s ease, transform 0.18s ease;
}

.header-text h1:hover,
.header-text h1.name-hover-active{
  color: #ffffff;
  text-shadow:
    0 0 10px rgba(255,255,255,0.22),
    0 0 22px rgba(255,255,255,0.12);
  transform: translateY(-1px);
}

.title-line{ font-size:1.05rem; margin-bottom:6px; opacity:0.95; }

@media (max-width:640px){
  .resume-header{ flex-direction:column; text-align:center; }
  .profile-photo{ width:130px; height:130px; }
  .title-line{ font-size:0.9rem; white-space: nowrap; }
  .contact-links{ font-size:0.85rem; }
}

.home-card{
  display:block;
  padding:14px 16px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,0.18);
  background:rgba(255,255,255,0.04);
  color:#fff;
  text-decoration:none;
  font-weight:600;
  transition: background 0.15s ease, transform 0.12s ease;
}
.home-card:hover{ background:rgba(255,255,255,0.1); transform: translateY(-1px); }
.resume-float{
  position: fixed;
  top: 110px;
  right: 50px;
  z-index: 999;

  padding: 10px 14px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(10px);

  color:#fff;
  text-decoration:none;
  font-weight:600;
  font-size:0.95rem;

  transition: opacity 0.25s ease, transform 0.2s ease, background 0.2s ease;
  animation: resumeGlow 5s ease-out 1;
}

.resume-float:hover{
  background: rgba(255,255,255,0.12);
  transform: translateY(-1px);
}

@media (max-width:640px){
  .resume-float{
    top: 386px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    border-radius: 999px;
    max-width: calc(100vw - 28px);
    text-align: center;
    white-space: nowrap;
    padding: 10px 14px;
  }

  .resume-float:hover{
    transform: translateX(-50%) translateY(-1px);
  }
}

.profile-photo.is-zoomed{
  box-shadow: 0 0 18px rgba(255,255,255,0.25);
}


@keyframes resumeGlow{
  0%{ box-shadow:0 0 0 rgba(255,255,255,0); }
  10%{ box-shadow:0 0 18px rgba(255,255,255,0.18), 0 0 36px rgba(255,255,255,0.10); }
  35%{ box-shadow:0 0 22px rgba(255,255,255,0.22), 0 0 44px rgba(255,255,255,0.12); }
  100%{ box-shadow:0 0 0 rgba(255,255,255,0); }
}

.contact-links{ font-size:0.95rem; display: block; opacity:0.9; }
.contact-links a{ color:#fff; text-decoration:none; font-weight:500; }
.contact-links a:hover{ color:#ddd; text-decoration:underline; }

.contact-secondary{
  display: block;
  margin-top: 6px;
  opacity: 0.9;
}

.resume-section:last-child{ border-bottom:none; }

.resume-container:hover .resume-section{ opacity:0.35; }
.resume-container .resume-section:hover{ opacity:1; }

.resume-section h2,
.resume-section h3{
  transition:
    color 0.18s ease,
    text-shadow 0.18s ease,
    transform 0.18s ease,
    opacity 0.18s ease;
}

.resume-section:hover h2{
  color: #ffffff;
  text-shadow:
    0 0 10px rgba(255,255,255,0.22),
    0 0 22px rgba(255,255,255,0.12);
  transform: translateY(-1px) scale(1.02);
  opacity: 1;
}

.resume-section h2.profile-title-active{
  color: #ffffff !important;
  text-shadow:
    0 0 10px rgba(255,255,255,0.22),
    0 0 22px rgba(255,255,255,0.12) !important;
  transform: translateY(-1px) scale(1.02) !important;
  opacity: 1 !important;
}

.resume-section:hover h3{
  color: #93c5fd;
  text-shadow:
    0 0 10px rgba(111,180,255,0.35),
    0 0 20px rgba(111,180,255,0.18);
  transform: translateY(-1px);
  opacity: 1;
}

.highlight-text{
  transition:
    color 0.18s ease,
    text-shadow 0.18s ease,
    transform 0.18s ease,
    opacity 0.18s ease;
}
  
.resume-section:hover .highlight-text{
    color: #93c5fd;
  text-shadow:
    0 0 10px rgba(111,180,255,0.35),
    0 0 20px rgba(111,180,255,0.18);
  transform: translateY(-1px);
  opacity: 1;
}

.highlight-text.photo-hover-active{
  color: #93c5fd !important;
  text-shadow:
    0 0 10px rgba(111,180,255,0.35),
    0 0 20px rgba(111,180,255,0.18) !important;
  transform: translateY(-1px) !important;
  opacity: 1 !important;
}

.bold-text{
  transition: font-weight 0.18s ease, opacity 0.18s ease;
}

.resume-section:hover .bold-text{
  font-weight: 700;
  opacity: 1;
}

.bold-text.photo-hover-active,
body .bold-text.photo-hover-active,
.resume-container .bold-text.photo-hover-active{
  font-weight: 700 !important;
  opacity: 1 !important;
}

.resume-section{
  padding: 1.2rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.18);
  transition: opacity 0.25s ease;
}


@media (max-width:640px){
  .profile-photo,
  .profile-photo:hover,
  .profile-photo.is-zoomed{
    transform: none !important;
  }
}
</style>

<script>
const profilePhoto = document.getElementById('profile-photo');
const highlightTexts = document.querySelectorAll('.highlight-text');
const userName = document.querySelector('.header-text h1');
const profileTitle = document.querySelector('.resume-section h2');

if (profilePhoto) {
  profilePhoto.addEventListener('mouseenter', () => {
    highlightTexts.forEach(el => el.classList.add('photo-hover-active'));
    if (userName) userName.classList.add('name-hover-active');
    if (profileTitle) profileTitle.classList.add('profile-title-active');
  });
  
  profilePhoto.addEventListener('mouseleave', () => {
    highlightTexts.forEach(el => el.classList.remove('photo-hover-active'));
    if (userName) userName.classList.remove('name-hover-active');
    if (profileTitle) profileTitle.classList.remove('profile-title-active');
  });
}

if (userName) {
  userName.addEventListener('mouseenter', () => {
    highlightTexts.forEach(el => el.classList.add('photo-hover-active'));
    if (profilePhoto) profilePhoto.classList.add('photo-glow-active');
    if (profileTitle) profileTitle.classList.add('profile-title-active');
  });
  
  userName.addEventListener('mouseleave', () => {
    highlightTexts.forEach(el => el.classList.remove('photo-hover-active'));
    if (profilePhoto) profilePhoto.classList.remove('photo-glow-active');
    if (profileTitle) profileTitle.classList.remove('profile-title-active');
  });
}
</script>
