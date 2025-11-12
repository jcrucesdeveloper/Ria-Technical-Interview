import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchWeatherData } from '@/service/weatherService'
import type { HourForecast } from '@/types/hourForecast'
import type { DayForecast } from '@/types/dayForecast'

export type { HourForecast, DayForecast }

export const useWeatherStore = defineStore('weather', () => {
  const currentCity = ref<string>('Rio de Janeiro')
  const nextHoursForecast = ref<HourForecast[]>([])
  const nextDaysForecast = ref<DayForecast[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const loadWeatherData = async (city: string) => {
    loading.value = true
    error.value = null
    try {
      const data = await fetchWeatherData(city)
      currentCity.value = city
      nextHoursForecast.value = data.hours
      nextDaysForecast.value = data.days
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load weather data'
      console.error('Error loading weather data:', err)
    } finally {
      loading.value = false
    }
  }

  const refreshWeatherData = async () => {
    if (currentCity.value) {
      await loadWeatherData(currentCity.value)
    }
  }

  return {
    currentCity,
    nextHoursForecast,
    nextDaysForecast,
    loading,
    error,
    loadWeatherData,
    refreshWeatherData,
  }
})
