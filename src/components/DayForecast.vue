<script setup lang="ts">
const props = defineProps<{
  day: {
    date: string
    description: string
    maxTemperature: number
    minTemperature: number
  }
}>()
</script>
<template>
  <div class="day-forecast">
    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" />
    <div>
      <p>{{ props.day.date }}</p>
      <p>{{ props.day.description }}</p>
    </div>
    <p>{{ props.day.maxTemperature }}°C</p>
    <p>{{ props.day.minTemperature }}°C</p>
  </div>
</template>
<style scoped>
.day-forecast {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid #e0e0e0;
}
</style>
