import type { HourForecast } from '@/types/hourForecast'
import type { DayForecast } from '@/types/dayForecast'
import type { WeatherResponse } from '@/types/weatherResponse'
import { formatTime, getIconUrl } from '@/utils/weatherUtils'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || ''
const BASE_URL = 'https://api.openweathermap.org/data/3.0'

export const fetchWeatherData = async (
  city: string,
): Promise<{
  hours: HourForecast[]
  days: DayForecast[]
}> => {
  const url = `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&cnt=40`
  const response = await fetch(url)

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`City "${city}" not found`)
    }
    if (response.status === 401) {
      throw new Error('Invalid API key')
    }
    throw new Error(`Failed to fetch weather data: ${response.statusText}`)
  }

  const data: WeatherResponse = await response.json()
  const hours: HourForecast[] = data.list.slice(0, 8).map((item) => ({
    time: formatTime(item.dt),
    temperature: Math.round(item.main.temp),
    humidity: item.main.humidity,
    icon: item.weather[0]?.icon ? getIconUrl(item.weather[0].icon) : undefined,
  }))

  const dailyData = new Map<
    string,
    {
      temps: number[]
      descriptions: string[]
      icons: string[]
      timestamps: number[]
    }
  >()

  data.list.forEach((item) => {
    if (item.dt_txt) {
      const dateParts = item.dt_txt.split(' ')
      const date = dateParts[0]
      if (date) {
        if (!dailyData.has(date)) {
          dailyData.set(date, { temps: [], descriptions: [], icons: [], timestamps: [] })
        }
        const dayData = dailyData.get(date)!
        dayData.temps.push(item.main.temp)
        const weatherDescription = item.weather[0]?.description ?? ''
        const weatherIcon = item.weather[0]?.icon ?? ''
        dayData.descriptions.push(weatherDescription)
        dayData.icons.push(weatherIcon)
        dayData.timestamps.push(item.dt)
      }
    }
  })

  const days: DayForecast[] = Array.from(dailyData.entries())
    .slice(0, 5)
    .map(([date, dayData]) => {
      const maxTemp = Math.round(Math.max(...dayData.temps))
      const minTemp = Math.round(Math.min(...dayData.temps))

      const description = dayData.descriptions[0] || 'Clear'
      const iconCode = dayData.icons[0]
      const icon = iconCode ? getIconUrl(iconCode) : undefined

      return {
        date,
        description: description.charAt(0).toUpperCase() + description.slice(1),
        maxTemperature: maxTemp,
        minTemperature: minTemp,
        icon,
      }
    })

  return { hours, days }
}
