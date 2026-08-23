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
  padding: 7px 16px;
  border-radius: var(--radius-full);
  background: rgb(255 255 255 / .08);
  border: 1px solid rgb(255 255 255 / .14);
  color: var(--dawn-peach);
  font-size: var(--text-xs);
  font-weight: var(--fw-semibold);
  letter-spacing: 0.02em;
  margin-bottom: 26px;
  backdrop-filter: blur(4px);
}

.hero__badge .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--dawn-peach);
}
</style>
