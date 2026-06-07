<script setup>
import SvgIcon from './SvgIcon.vue'
import { LANDING_DATA } from '../data.js'
</script>

<template>
  <section class="section features" id="features">
    <div class="wrap">
      <div class="reveal">
        <p class="eyebrow">Why Memorise</p>
        <h2 class="section-title">Built like a desktop tool,
not a web product.</h2>
        <p class="section-lead">Dense, panelled, and keyboard-driven. It behaves like Finder or Notes — a quiet utility that gets out of the way of your thinking.</p>
      </div>
      <div class="features__grid reveal">
        <div class="feature" v-for="(f, i) in LANDING_DATA.features" :key="i">
          <div class="feature__icon"><SvgIcon :name="f.icon" /></div>
          <h3 class="feature__title">{{ f.title }}</h3>
          <p class="feature__desc">{{ f.desc }}</p>
          <div class="feature__kbd" v-if="f.kbd">
            <span class="mui-kbd" v-for="k in f.kbd" :key="k">{{ k }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
