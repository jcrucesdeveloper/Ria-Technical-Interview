<script setup lang="ts">
import DayForecast from './DayForecast.vue'
import { useWeatherStore } from '@/store/weather'

const weatherStore = useWeatherStore()
</script>

<template>
  <div class="next-days-forecast">
    <h1>Next days forecast</h1>
    <div v-if="weatherStore.loading" class="loading">Loading...</div>
    <div v-else-if="weatherStore.error" class="error">{{ weatherStore.error }}</div>
    <div v-else class="days-forecast">
      <DayForecast
        v-for="(day, index) in weatherStore.nextDaysForecast"
        :key="`${day.date}-${index}`"
        :day="day"
      />
    </div>
  </div>
</template>

<style scoped>
.next-days-forecast {
  margin: 20px auto;
  background-color: #ffffff;
  width: 95%;
  overflow-x: scroll;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.next-days-forecast h1 {
  font-size: 1.2rem;
  font-weight: 200;
  margin: 10px 10px;
}
.days-forecast {
  display: flex;
  flex-direction: column;
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
