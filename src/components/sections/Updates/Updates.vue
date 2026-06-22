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

<style scoped>
.updates {
  background: var(--color-white);
}

.updates__layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 56px;
  margin-top: 8px;
  align-items: start;
}

.updates__aside {
  position: sticky;
  top: 96px;
}

.feed {
  display: flex;
  flex-direction: column;
}

.entry {
  display: grid;
  grid-template-columns: 132px 1fr;
  gap: 28px;
  padding: 30px 0;
  border-top: 1px solid var(--color-border);
}

.entry:first-child {
  border-top: none;
  padding-top: 6px;
}

.entry__rail {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.entry__date {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.entry__title {
  font-size: 1.0625rem;
  font-weight: var(--fw-semibold);
  color: var(--color-gray-900);
  margin: 0 0 12px;
}

.entry__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.entry__list li {
  display: flex;
  gap: 11px;
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.entry__tag {
  flex-shrink: 0;
  margin-top: 3px;
  font-size: 9.5px;
  font-weight: var(--fw-bold);
  letter-spacing: .04em;
  text-transform: uppercase;
  padding: 1px 7px;
  border-radius: var(--radius-full);
  height: fit-content;
  line-height: 1.5;
}

.tag-new {
  background: var(--color-accent-50);
  color: var(--color-accent-700);
}

.tag-fix {
  background: #ecfdf3;
  color: #15803d;
}

.tag-imp {
  background: #fff7ed;
  color: #c2410c;
}

@media (max-width: 900px) {
  .updates__layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .updates__aside {
    position: static;
  }
}

@media (max-width: 720px) {
  .entry {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
