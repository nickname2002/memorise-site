<script setup lang="ts">
import Starfield from '@/libs/ui/Starfield/Starfield.vue'
import Pill from '@/libs/ui/Pill/Pill.vue'
import { asset } from '@/libs/asset'
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
      <img
        class="hero__shot"
        :src="asset('/assets/app-screenshot.png')"
        alt="The Memorise desktop app: a three-column layout with folders and tags, a notes list, and the editor."
      />
    </div>
    <div class="hero__fade"></div>
  </header>
</template>

<style scoped>
.hero {
  position: relative;
  background:
    radial-gradient(120% 70% at 18% -10%, var(--night-700) 0%, var(--night-800) 38%, var(--night-950) 78%),
    radial-gradient(90% 60% at 88% 30%, rgb(242 217 184 / .16) 0%, rgb(242 217 184 / 0) 55%);
  overflow: hidden;
  isolation: isolate;
}

.hero__glow {
  position: absolute;
  left: 62%;
  top: -6%;
  width: 640px;
  height: 640px;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgb(242 217 184 / .30) 0%, rgb(242 217 184 / .08) 40%, transparent 70%);
  z-index: 0;
  pointer-events: none;
}

.hero__inner {
  position: relative;
  z-index: 2;
  padding: 168px 0 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__title {
  font-size: clamp(2.6rem, 6vw, 4.25rem);
  font-weight: var(--fw-bold);
  letter-spacing: -0.035em;
  line-height: 1.02;
  margin: 0;
  color: var(--ink-on-night);
  text-wrap: balance;
}

.hero__title .accent {
  background: linear-gradient(100deg, var(--dawn-peach) 0%, var(--dawn-blue) 90%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__sub {
  font-size: 1.1875rem;
  line-height: 1.6;
  color: var(--ink-on-night-dim);
  margin: 24px 0 0;
  max-width: 560px;
  text-wrap: pretty;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 38px;
  flex-wrap: wrap;
  justify-content: center;
}

.hero__shot-wrap {
  position: relative;
  z-index: 2;
  margin: 72px auto -120px;
  max-width: 1000px;
  padding: 0 32px;
}

.hero__shot {
  border-radius: 16px;
  border: 1px solid rgb(255 255 255 / .12);
  box-shadow: 0 40px 90px -20px rgb(0 0 0 / .65), 0 0 0 1px rgb(0 0 0 / .3);
  width: 100%;
  background: var(--night-800);
}

.hero__fade {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 240px;
  background: linear-gradient(180deg, transparent, var(--color-white) 92%);
  z-index: 1;
  pointer-events: none;
}

@media (max-width: 720px) {
  .hero__inner {
    padding-top: 130px;
  }
}
</style>
