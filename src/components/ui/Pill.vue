<template>
  <div class="hero__badge">
    <span class="dot"></span>
    <span><slot /></span>
  </div>
</template>

<style scoped>
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 14px;
  border-radius: var(--radius-full);
  background: rgb(255 255 255 / .06);
  border: 1px solid rgb(126 200 255 / .22);
  color: var(--ink-on-night-dim);
  font-size: var(--text-xs);
  font-weight: var(--fw-medium);
  margin-bottom: 30px;
  backdrop-filter: blur(4px);
}

.hero__badge .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #34d27b;
  box-shadow: 0 0 8px #34d27b;
}
</style>
