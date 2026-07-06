<script setup>
defineProps({
  k: { type: String, required: true },
  t: { type: String, required: true },
})
</script>

<template>
  <div class="pcard">
    <p class="pcard__k">{{ k }}</p>
    <p class="pcard__t">{{ t }}</p>
  </div>
</template>

<style scoped>
.pcard {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 22px;
}

.pcard__k {
  font-size: var(--text-2xs);
  font-weight: var(--fw-semibold);
  letter-spacing: .07em;
  text-transform: uppercase;
  color: var(--color-gray-400);
  margin: 0 0 8px;
}

.pcard__t {
  font-size: var(--text-base);
  font-weight: var(--fw-medium);
  color: var(--color-gray-800);
  margin: 0;
  line-height: 1.5;
}
</style>
