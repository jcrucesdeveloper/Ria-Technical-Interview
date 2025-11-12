export interface WeatherResponse {
  list: Array<{
    dt: number
    main: {
      temp: number
      humidity: number
      temp_max: number
      temp_min: number
    }
    weather: Array<{
      description: string
      icon: string
    }>
    dt_txt?: string
  }>
  city: {
    name: string
  }
}
