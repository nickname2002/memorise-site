<script setup>
import Starfield from './Starfield.vue'
</script>

<template>
  <header class="hero" id="top">
    <Starfield :density="1" :constellation="true" />
    <div class="hero__glow"></div>
    <div class="wrap hero__inner">
      <div class="hero__badge">
        <span class="dot"></span>
        <span>Now in private beta</span>
      </div>
      <h1 class="hero__title">A second brain<br />you <span class="accent">actually own</span>.</h1>
      <p class="hero__sub">Memorise is a local-first note-taking app. Your notes live in a plain-text vault on your machine — organised into folders and tags, and nowhere else.</p>
      <div class="hero__actions">
        <a href="#testers"><button class="mui-btn btn-xl btn-glow" data-variant="primary">Download for free</button></a>
        <a href="#preview"><button class="mui-btn btn-xl btn-onnight" data-variant="secondary">See it in action</button></a>
      </div>
      <div class="hero__meta">
        <span>macOS · Windows · Linux</span>
        <span class="sep"></span>
        <span>No account needed</span>
        <span class="sep"></span>
        <span>Open beta builds</span>
      </div>
    </div>
    <div class="hero__shot-wrap" id="preview">
      <img class="hero__shot" src="/assets/app-screenshot.png"
           alt="The Memorise desktop app: a three-column layout with folders and tags, a notes list, and the editor." />
    </div>
    <div class="hero__fade"></div>
  </header>
</template>
