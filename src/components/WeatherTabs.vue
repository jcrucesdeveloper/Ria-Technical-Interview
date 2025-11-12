<script setup lang="ts">
import { computed } from 'vue'
import WeatherTab from './WeatherTab.vue'
import { useWeatherStore } from '@/store/weather'

const weatherStore = useWeatherStore()

const defaultCities = ['Rio de Janeiro', 'Beijing', 'Los Angeles']

const emit = defineEmits<{
  cityChange: [city: string]
}>()

const handleCityClick = (city: string) => {
  emit('cityChange', city)
}

const isSelected = (city: string) => {
  return weatherStore.currentCity === city
}

const cities = computed(() => {
  const allCities = [...defaultCities, ...weatherStore.searchedCities]
  return Array.from(new Set(allCities))
})
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
