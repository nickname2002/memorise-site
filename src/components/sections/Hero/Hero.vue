<script setup>
import Starfield from '../shared/Starfield.vue'
import Pill from '../../ui/Pill.vue'
</script>

<template>
  <header class="hero" id="top">
    <Starfield :density="1" :constellation="true" />
    <div class="hero__glow"></div>
    <div class="wrap hero__inner">
      <Pill>Now in private beta</Pill>
      <h1 class="hero__title">Your very own<br />universe of <span class="accent">knowledge</span>.</h1>
      <p class="hero__sub">Memorise keeps note-taking simple: folders, tags, and a quiet editor that gets out of your way — nothing more to learn, nothing more to manage.</p>
      <div class="hero__actions">
        <a href="#testers"><button class="mui-btn btn-xl btn-glow" data-variant="primary">Download for free</button></a>
      </div>
    </div>
    <div class="hero__shot-wrap" id="preview">
      <img class="hero__shot" src="/assets/app-screenshot.png"
           alt="The Memorise desktop app: a three-column layout with folders and tags, a notes list, and the editor." />
    </div>
    <div class="hero__fade"></div>
  </header>
</template>
