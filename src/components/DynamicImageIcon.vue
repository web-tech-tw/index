<template>
  <img
    :alt="props.name"
    :src="resource"
    v-bind="props"
  >
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: false,
    default: () => ""
  },
});

const resource = computed(() => {
    return `/src/assets/icons/${props.name}.svg`;
});
</script>