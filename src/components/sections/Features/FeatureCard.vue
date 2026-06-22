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
