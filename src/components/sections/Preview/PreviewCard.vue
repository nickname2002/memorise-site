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
