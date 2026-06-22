<script setup>
defineProps({ solid: { type: Boolean, default: false } })
</script>

<template>
  <nav class="nav" :class="solid ? 'nav--solid' : 'nav--night'">
    <div class="wrap nav__inner">
      <a class="nav__brand" href="#top">
        <img class="nav__icon" src="/assets/memorise-icon.png" alt="" />
        <span class="nav__name">Memorise</span>
      </a>
      <div class="nav__links">
        <a class="nav__link" href="#features">Features</a>
        <a class="nav__link" href="#testers">For testers</a>
      </div>
      <div class="nav__spacer"></div>
      <div class="nav__cta">
        <a href="#testers">
          <button
            class="mui-btn"
            :class="{ 'btn-onnight': !solid }"
            :data-variant="solid ? 'primary' : 'secondary'"
            data-size="md"
          >Get the app</button>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: background-color .3s ease, border-color .3s ease, box-shadow .3s ease;
  border-bottom: 1px solid transparent;
}

.nav__inner {
  height: 64px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 12px;
}

.nav__link {
  font-size: var(--text-sm);
  font-weight: var(--fw-medium);
  padding: 7px 12px;
  border-radius: var(--radius-md);
  transition: background-color .15s ease, color .15s ease;
  cursor: pointer;
}

.nav__spacer {
  flex: 1;
}

.nav__cta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav--night .nav__name {
  color: var(--ink-on-night);
}

.nav--night .nav__link {
  color: var(--ink-on-night-dim);
}

.nav--night .nav__link:hover {
  color: var(--ink-on-night);
  background: rgb(255 255 255 / .07);
}

.nav--solid {
  background: rgb(255 255 255 / .82);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom-color: var(--color-border);
}

.nav--solid .nav__name {
  color: var(--color-gray-900);
}

.nav--solid .nav__link {
  color: var(--color-gray-600);
}

.nav--solid .nav__link:hover {
  color: var(--color-gray-900);
  background: var(--color-gray-100);
}

@media (max-width: 720px) {
  .nav__links {
    display: none;
  }
}
</style>
