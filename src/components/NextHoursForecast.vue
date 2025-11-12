<script setup lang="ts">
import HourForecast from '@/components/HourForecast.vue'
import { useWeatherStore } from '@/store/weather'

const weatherStore = useWeatherStore()
</script>

<template>
  <div class="next-hours-forecast">
    <h1>Next hours forecast</h1>
    <div v-if="weatherStore.loading" class="loading">Loading...</div>
    <div v-else-if="weatherStore.error" class="error">{{ weatherStore.error }}</div>
    <div v-else class="hours-forecast">
      <HourForecast
        v-for="(hour, index) in weatherStore.nextHoursForecast"
        :key="`${hour.time}-${index}`"
        :hour="hour"
      />
    </div>
  </div>
</template>

<style scoped>
.next-hours-forecast {
  margin: 20px auto;
  background-color: #ffffff;
  width: 95%;
  overflow-x: scroll;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.next-hours-forecast h1 {
  font-size: 1.2rem;
  font-weight: 200;
  margin: 10px 10px;
}
.hours-forecast {
  display: flex;
  flex-direction: row;
}
.loading,
.error {
  padding: 20px;
  text-align: center;
  color: #666;
}
.error {
  color: #d32f2f;
}
</style>
