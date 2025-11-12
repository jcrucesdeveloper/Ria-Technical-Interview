<script setup lang="ts">
const props = defineProps<{
  hour: {
    time: string
    temperature: number
    humidity: number
  }
}>()
</script>
<template>
  <div class="hour-forecast">
    <p>{{ props.hour.temperature }}°C</p>
    <p>{{ props.hour.humidity }}% humidity</p>
    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" />
    <h3>{{ props.hour.time }}</h3>
  </div>
</template>

<style scoped>
.hour-forecast {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #e0e0e0;
}
h3 {
  font-size: 1.2rem;
  margin-top: 0px;
  font-weight: 200;
}
p {
  font-size: 0.8rem;
  color: #666;
  margin: 0px;
}
</style>
