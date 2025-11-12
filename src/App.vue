<script setup lang="ts">
import WeatherHeader from '@/components/WeatherHeader.vue'
import WeatherTabs from '@/components/WeatherTabs.vue'
import WeatherForecast from '@/components/WeatherForecast.vue'
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <WeatherHeader></WeatherHeader>
      <WeatherTabs></WeatherTabs>
      <WeatherForecast></WeatherForecast>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
}
</style>
