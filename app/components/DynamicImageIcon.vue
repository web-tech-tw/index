<template>
  <img
    :alt="props.name"
    :src="resource"
    v-bind="props"
  >
</template>

<script setup lang="ts">
import LINE from "~/assets/icons/LINE.svg";
import Discord from "~/assets/icons/Discord.svg";
import GitHub from "~/assets/icons/GitHub.svg";

const props = defineProps<{
  name: string;
  class?: string;
}>();

type IconName = "LINE" | "Discord" | "GitHub";

const allIcons: Record<IconName, string> = {LINE, Discord, GitHub};
const resource = allIcons[props.name as IconName];
</script>
