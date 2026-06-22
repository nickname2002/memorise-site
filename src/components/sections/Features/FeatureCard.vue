<script setup>
import SvgIcon from '../../icons/SvgIcon.vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  kbd: { type: Array, default: null },
})
</script>

<template>
  <div class="feature">
    <div class="feature__icon"><SvgIcon :name="icon" /></div>
    <h3 class="feature__title">{{ title }}</h3>
    <p class="feature__desc">{{ desc }}</p>
    <div class="feature__kbd" v-if="kbd">
      <span class="mui-kbd" v-for="k in kbd" :key="k">{{ k }}</span>
    </div>
  </div>
</template>

<style scoped>
.feature {
  background: var(--color-white);
  padding: 34px 36px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: background-color .2s ease;
}

.feature:hover {
  background: var(--color-notes-list);
}

.feature__icon {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-lg);
  background: var(--color-accent-50);
  color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-accent-100);
}

.feature__icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.feature__title {
  font-size: 1.0625rem;
  font-weight: var(--fw-semibold);
  color: var(--color-gray-900);
  margin: 0;
}

.feature__desc {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
}

.feature__kbd {
  margin-top: 2px;
  display: flex;
  gap: 6px;
  align-items: center;
}
</style>
