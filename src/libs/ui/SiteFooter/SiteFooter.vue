<script setup lang="ts">
import { asset } from '@/libs/asset'
</script>

<template>
  <footer class="footer">
    <div class="wrap">
      <div class="footer__top">
        <div class="footer__brand">
          <a class="nav__brand" href="./#top">
            <img class="nav__icon" :src="asset('/assets/memorise-icon.png')" alt="" />
            <span class="nav__name" style="color:var(--ink-on-night)">Memorise</span>
          </a>
          <p class="footer__tagline">A simple, focused place for your notes — folders, tags, and an editor that gets out of your way.</p>
          <p class="footer__made">Designed and built in Europe.</p>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© 2026 Memorise</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--night-950);
  color: var(--ink-on-night-dim);
  padding: 64px 0 40px;
}

.footer__top {
  display: flex;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
}

.footer__brand {
  max-width: 280px;
}

.footer__brand .nav__brand {
  margin-bottom: 14px;
}

.footer__tagline {
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--ink-on-night-faint);
  margin: 0;
}

.footer__made {
  font-size: var(--text-xs);
  color: var(--ink-on-night-faint);
  margin: 10px 0 0;
}

.footer__bottom {
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px solid rgb(255 255 255 / .07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  font-size: var(--text-xs);
  color: var(--ink-on-night-faint);
}
</style>
