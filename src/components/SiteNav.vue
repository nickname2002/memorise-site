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
        <a class="nav__link" href="#updates">Updates</a>
        <a class="nav__link" href="#testers">For testers</a>
      </div>
      <div class="nav__spacer"></div>
      <div class="nav__cta">
        <a href="#testers">
          <button class="mui-btn" :class="{ 'btn-onnight': !solid }"
                  :data-variant="solid ? 'primary' : 'secondary'" data-size="md">Get the app</button>
        </a>
      </div>
    </div>
  </nav>
</template>
