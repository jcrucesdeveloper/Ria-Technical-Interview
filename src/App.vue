<script setup lang="ts">
import { onMounted } from 'vue'
import WeatherHeader from '@/components/WeatherHeader.vue'
import WeatherTabs from '@/components/WeatherTabs.vue'
import WeatherForecast from '@/components/WeatherForecast.vue'
import { useWeatherStore } from '@/store/weather'

const weatherStore = useWeatherStore()

const handleRefresh = () => {
  weatherStore.refreshWeatherData()
}

const handleSearchCity = (city: string) => {
  weatherStore.loadWeatherData(city)
}

const handleCityChange = (city: string) => {
  weatherStore.loadWeatherData(city)
}

onMounted(() => {
  weatherStore.loadWeatherData(weatherStore.currentCity)
})
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <WeatherHeader @refresh="handleRefresh" @search-city="handleSearchCity"></WeatherHeader>
      <WeatherTabs @city-change="handleCityChange"></WeatherTabs>
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
