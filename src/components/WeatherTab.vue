<script setup lang="ts">
const props = defineProps<{
  city: string
  selected?: boolean
}>()

const emit = defineEmits<{
  cityClick: [city: string]
}>()

const handleClick = () => {
  emit('cityClick', props.city)
}
</script>

<template>
  <button :class="{ selected: props.selected }" @click="handleClick">{{ props.city }}</button>
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

button:hover {
  color: black;
  cursor: pointer;
}

button.selected {
  color: black;
  border-bottom: 5px solid orange;
}
</style>
