<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  refresh: []
  searchCity: [city: string]
}>()

const searchInput = ref('')

const handleSearch = () => {
  if (searchInput.value.trim()) {
    emit('searchCity', searchInput.value.trim())
    searchInput.value = ''
  }
}

const handleRefresh = () => {
  emit('refresh')
}
</script>

<template>
  <header>
    <div class="header-top">
      <h1>Simple Weather App</h1>
      <button class="refresh-btn" @click="handleRefresh" title="Refresh">↻</button>
    </div>
    <div class="search-container">
      <input
        v-model="searchInput"
        type="text"
        placeholder="Search city..."
        class="search-input"
        @keyup.enter="handleSearch"
      />
      <button class="search-btn" @click="handleSearch">Search</button>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #23ace7;
  color: #fff;
  padding: 10px 20px;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

header h1 {
  margin: 0;
  font-size: 1.5rem;
}

.refresh-btn {
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.refresh-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.search-container {
  display: flex;
  gap: 8px;
}

.search-input {
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
}

.search-input:focus {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}

.search-btn {
  background-color: #fff;
  color: #23ace7;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}

.search-btn:hover {
  background-color: #f0f0f0;
}
</style>
