<script setup lang="ts">
import HourForecast from '@/components/HourForecast.vue'
const hours = [
  { time: '12:00', temperature: 20, humidity: 50 },
  { time: '13:00', temperature: 21, humidity: 51 },
  { time: '14:00', temperature: 22, humidity: 52 },
  { time: '15:00', temperature: 23, humidity: 53 },
  { time: '16:00', temperature: 24, humidity: 54 },
]
</script>

<template>
  <div class="next-hours-forecast">
    <h1>Next hours forecast</h1>
    <div class="hours-forecast">
      <HourForecast v-for="hour in hours" :key="hour.time" :hour="hour" />
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
</style>
