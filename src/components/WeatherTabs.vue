<script setup lang="ts">
import WeatherTab from './WeatherTab.vue'
</script>
<template>
  <div class="tabs">
    <WeatherTab city="Rio de Jainero" selected></WeatherTab>
    <WeatherTab city="Beijing"></WeatherTab>
    <WeatherTab city="Los Angeles"></WeatherTab>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  margin: 0;
}
</style>
