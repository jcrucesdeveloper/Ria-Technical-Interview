<script setup lang="ts">
const props = defineProps<{
  city: string
}>()
</script>

<template>
  <button>{{ props.city }}</button>
</template>

<style scoped>
button {
  background-color: #f0f0f0;
  border: none;
  padding: 10px 20px;
}
</style>
