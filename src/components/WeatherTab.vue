<script setup lang="ts">
const props = defineProps<{
  city: string
  selected?: boolean
}>()
</script>

<template>
  <button :class="{ selected: props.selected }">{{ props.city }}</button>
</template>

<style scoped>
button {
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 20px;
  color: gray;
  border: none;
  border-bottom: 1px solid transparent;
}

button.selected {
  color: black;
  border-bottom: 5px solid orange;
}
</style>
