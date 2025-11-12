<script setup lang="ts">
import DayForecast from './DayForecast.vue'
const days = [
  { date: '2025-01-01', description: 'Sunny', maxTemperature: 20, minTemperature: 10 },
  { date: '2025-01-02', description: 'Cloudy', maxTemperature: 21, minTemperature: 11 },
  { date: '2025-01-03', description: 'Rainy', maxTemperature: 22, minTemperature: 12 },
  { date: '2025-01-04', description: 'Snowy', maxTemperature: 23, minTemperature: 13 },
  { date: '2025-01-05', description: 'Sunny', maxTemperature: 24, minTemperature: 14 },
]
</script>

<template>
  <div class="next-days-forecast">
    <h1>Next days forecast</h1>
    <div class="days-forecast">
      <DayForecast v-for="day in days" :key="day.date" :day="day" />
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
</style>
