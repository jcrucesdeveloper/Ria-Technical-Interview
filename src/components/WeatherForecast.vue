<script setup lang="ts">
import NextDaysForecast from '@/components/NextDaysForecast.vue'
import NextHoursForecast from '@/components/NextHoursForecast.vue'
</script>
<template>
  <div class="forecast">
    <NextHoursForecast></NextHoursForecast>
    <NextDaysForecast></NextDaysForecast>
  </div>
</template>

<style scoped>
.forecast {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #23ace7;
}
</style>
