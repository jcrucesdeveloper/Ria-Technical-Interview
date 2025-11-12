<script setup lang="ts">
import WeatherTab from './WeatherTab.vue'
import { useWeatherStore } from '@/store/weather'

const weatherStore = useWeatherStore()

const cities = ['Rio de Janeiro', 'Beijing', 'Los Angeles']

const emit = defineEmits<{
  cityChange: [city: string]
}>()

const handleCityClick = (city: string) => {
  emit('cityChange', city)
}

const isSelected = (city: string) => {
  return weatherStore.currentCity === city
}
</script>
<template>
  <div class="tabs">
    <WeatherTab
      v-for="city in cities"
      :key="city"
      :city="city"
      :selected="isSelected(city)"
      @city-click="handleCityClick"
    ></WeatherTab>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  margin: 0;
}
</style>
