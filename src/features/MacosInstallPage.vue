<script setup lang="ts">
import { ref } from 'vue'
import SiteNav from '@/libs/ui/SiteNav/SiteNav.vue'
import SiteFooter from '@/libs/ui/SiteFooter/SiteFooter.vue'
import IconSprite from '@/libs/ui/icons/IconSprite.vue'
import { useLatestMacos } from '@/libs/useLatestRelease'
import { useTestPhaseGate } from '@/libs/useTestPhaseGate'

const macos = useLatestMacos()
const { unlocked, unlock } = useTestPhaseGate()

const passwordInput = ref('')
const error = ref('')

function submit() {
  if (unlock(passwordInput.value)) {
    error.value = ''
  } else {
    error.value = 'Incorrect password. Please try again.'
  }
}
</script>

<template>
  <IconSprite />

  <SiteNav :solid="true" />

  <main class="install">
    <div class="wrap install__wrap">
      <a class="install__back" href="./#testers">&larr; Back to downloads</a>

      <h1 class="install__title">Installing Memorise on macOS</h1>
      <p class="install__lede">
        Memorise is still in beta, so the macOS build isn't notarized by Apple yet.
        That means Gatekeeper will block it on first launch — here's how to get past that safely.
      </p>

      <div class="install__callout">
        <svg width="18" height="18"><use href="#i-shield"></use></svg>
        <span>
          This is expected for a beta. The app isn't malicious — it just hasn't been through
          Apple's paid notarization process yet.
        </span>
      </div>

      <ol class="install__steps">
        <li>
          <strong>Download the .dmg</strong> using the button below and open it.
        </li>
        <li>
          <strong>Drag Memorise into Applications.</strong>
        </li>
        <li>
          <strong>Open the app.</strong> macOS will show a warning saying it "cannot be opened
          because Apple cannot check it for malicious software" (or similar). Click <em>Done</em> /
          <em>Cancel</em> to dismiss it — don't move it to the Trash.
        </li>
        <li>
          Open <strong>System Settings &rarr; Privacy &amp; Security</strong>, scroll down to the
          <strong>Security</strong> section, and you'll see a message about Memorise being blocked.
          Click <strong>"Open Anyway."</strong>
        </li>
        <li>
          Confirm in the dialog that appears (you may need to enter your Mac password or use Touch ID).
        </li>
        <li>
          Open Memorise again — it will now launch normally from then on.
        </li>
      </ol>

      <p class="install__alt">
        Alternatively, you can right-click (or Control-click) the Memorise app in Finder and choose
        <strong>Open</strong>, then confirm <strong>Open</strong> in the dialog that follows.
      </p>

      <div class="install__note">
        <svg width="18" height="18"><use href="#i-check"></use></svg>
        <span>
          When Memorise goes 1.0, it'll be signed and notarized through Apple's Developer Program —
          but for the beta, I'm not paying Apple's fee just so a handful of testers can skip one extra click. 😉
        </span>
      </div>

      <a
        v-if="macos?.url && unlocked"
        class="install__download"
        :href="macos.url"
        :download="macos.file"
      >
        <svg width="16" height="16"><use href="#i-download"></use></svg>
        Download Memorise for macOS
        <span style="opacity:.6">· {{ macos.note }}</span>
      </a>

      <template v-else-if="macos?.url">
        <div class="install__divider"></div>
        <h2 class="install__gate-title">Unlock downloads</h2>
        <p class="install__gate-text">
          Memorise is currently in a closed beta. Enter the tester password you were given to
          unlock the download below.
        </p>
        <form class="install__gate" @submit.prevent="submit">
          <div class="install__gate-row">
            <input
              v-model="passwordInput"
              type="password"
              placeholder="Tester password"
              class="install__gate-input"
            />
            <button type="submit" class="install__download">Unlock</button>
          </div>
          <p v-if="error" class="install__gate-error">{{ error }}</p>
        </form>
      </template>
    </div>
  </main>

  <SiteFooter />
</template>

<style scoped>
.install {
  background: var(--night-950);
  color: var(--ink-on-night);
  padding: 140px 0 80px;
  min-height: 100vh;
}

.install__wrap {
  max-width: 680px;
}

.install__back {
  display: inline-block;
  margin-bottom: 24px;
  font-size: var(--text-sm);
  color: var(--ink-on-night-faint);
  text-decoration: none;
}

.install__back:hover {
  color: var(--ink-on-night);
}

.install__title {
  font-size: var(--text-3xl, 2rem);
  font-weight: var(--fw-semibold);
  margin: 0 0 14px;
}

.install__lede {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--ink-on-night-faint);
  margin: 0 0 24px;
}

.install__callout,
.install__note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / .05);
  border: 1px solid rgb(255 255 255 / .1);
  font-size: var(--text-sm);
  line-height: 1.55;
  color: var(--ink-on-night-faint);
  margin-bottom: 28px;
}

.install__callout svg,
.install__note svg {
  flex: none;
  margin-top: 2px;
  color: var(--star-pale);
}

.install__steps {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-left: 22px;
  margin: 0 0 24px;
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--ink-on-night-faint);
}

.install__steps strong {
  color: var(--ink-on-night);
}

.install__alt {
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--ink-on-night-faint);
  margin: 0 0 28px;
}

.install__download {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / .07);
  border: 1px solid rgb(255 255 255 / .14);
  color: var(--ink-on-night);
  font-size: var(--text-sm);
  font-weight: var(--fw-medium);
  text-decoration: none;
  transition: background-color .15s ease;
}

.install__download:hover {
  background: rgb(30 144 255 / .2);
  border-color: rgb(126 200 255 / .4);
}

.install__divider {
  height: 1px;
  background: rgb(255 255 255 / .1);
  margin: 8px 0 28px;
}

.install__gate-title {
  font-size: var(--text-xl, 1.25rem);
  font-weight: var(--fw-semibold);
  color: var(--ink-on-night);
  margin: 0 0 10px;
}

.install__gate-text {
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--ink-on-night-faint);
  margin: 0 0 20px;
}

.install__gate {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.install__gate-row {
  display: flex;
  gap: 10px;
}

.install__gate-input {
  flex: 1;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / .05);
  border: 1px solid rgb(255 255 255 / .14);
  color: var(--ink-on-night);
  font-size: var(--text-sm);
}

.install__gate-error {
  margin: 0;
  font-size: var(--text-sm);
  color: #ff8a8a;
}
</style>
