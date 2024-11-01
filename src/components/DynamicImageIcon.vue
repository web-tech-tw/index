<template>
  <img
    :alt="props.name"
    :src="resource"
    v-bind="props"
  >
</template>

<script setup>
import LINE from "/src/assets/icons/LINE.svg";
import Discord from "/src/assets/icons/Discord.svg";
import GitHub from "/src/assets/icons/GitHub.svg";

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

const allIcons = {LINE, Discord, GitHub};
const resource = allIcons[props.name];
</script>