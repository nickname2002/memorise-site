<script setup>
import { LANDING_DATA } from '../../../data.js'
</script>

<template>
  <section class="section updates" id="updates">
    <div class="wrap">
      <div class="updates__layout">
        <div class="updates__aside reveal">
          <p class="eyebrow">Updates</p>
          <h2 class="section-title">What's shipping</h2>
          <p class="section-lead">Memorise ships small and often. Every beta build and what changed in it, newest first.</p>
        </div>
        <div class="feed reveal">
          <article class="entry" v-for="(e, i) in LANDING_DATA.changelog" :key="i">
            <div class="entry__rail">
              <span class="mui-chip" :data-variant="i === 0 ? 'primary' : 'secondary'" style="font-family:var(--font-mono)">v{{ e.version }}</span>
              <span class="entry__date">{{ e.date }}</span>
            </div>
            <div>
              <h3 class="entry__title">{{ e.title }}</h3>
              <ul class="entry__list">
                <li v-for="(it, j) in e.items" :key="j">
                  <span class="entry__tag" :class="'tag-' + it.tag">{{ it.tag }}</span>
                  <span>{{ it.text }}</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
