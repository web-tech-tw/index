<template>
  <img
    :alt="props.name"
    :src="resource"
    v-bind="props"
  >
</template>

<script setup>
import LINE from "~/assets/icons/LINE.svg";
import Discord from "~/assets/icons/Discord.svg";
import GitHub from "~/assets/icons/GitHub.svg";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: false,
    default: () => "",
  },
});

const allIcons = {LINE, Discord, GitHub};
const resource = allIcons[props.name];
</script>
