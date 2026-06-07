<script setup>
import SvgIcon from './SvgIcon.vue'
</script>

<template>
  <footer class="footer">
    <div class="wrap">
      <div class="footer__top">
        <div class="footer__brand">
          <a class="nav__brand" href="#top">
            <img class="nav__icon" src="/assets/memorise-icon.png" alt="" />
            <span class="nav__name" style="color:var(--ink-on-night)">Memorise</span>
          </a>
          <p class="footer__tagline">A local-first second brain. Your notes, in a vault on your machine — organised into folders and tags, and nowhere else.</p>
        </div>
        <div class="footer__cols">
          <div class="footer__col">
            <h5>Product</h5>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#preview">Preview</a></li>
              <li><a href="#updates">Updates</a></li>
              <li><a href="#testers">Download</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h5>Testers</h5>
            <ul>
              <li><a href="#testers">Get a build</a></li>
              <li><a href="#testers">Request access</a></li>
              <li><a href="#updates">Changelog</a></li>
              <li><a href="#">Report a bug</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h5>Project</h5>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Roadmap</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">License</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© 2026 Memorise</span>
        <span class="local">
          <SvgIcon name="i-shield" /> Local-first · your data never leaves your device
        </span>
      </div>
    </div>
  </footer>
</template>
