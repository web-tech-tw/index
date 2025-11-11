<template>
  <button
    :class="buttonClass"
    type="button"
  >
    <div v-if="props.icon">
      <dynamic-hero-icon
        v-if="isHeroIcon"
        :name="props.icon"
        class="rounded-full w-6 h-6 mr-4"
      />
      <dynamic-image-icon
        v-else
        :name="props.icon"
        class="rounded-full w-6 h-6 mr-4"
      />
    </div>
    <slot name="prepend" />
    <div class="text-left">
      <div :class="nameClass">
        {{ props.name }}
      </div>
    </div>
  </button>
</template>

<script setup>
import {computed} from "vue";
import DynamicHeroIcon from "./DynamicHeroIcon.vue";
import DynamicImageIcon from "./DynamicImageIcon.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
    default: () => "",
  },
  variant: {
    type: String,
    default: "mobile", // 'mobile' | 'normal'
    validator: (value) => ["mobile", "normal"].includes(value),
  },
});

const isHeroIcon = props.icon.endsWith("Icon");

const buttonClass = computed(() => {
  const base = "flex items-center rounded-md text-gray-900 hover:text-gray-700 cursor-pointer";
  
  if (props.variant === "mobile") {
    return `-m-3 p-3 w-full ${base}`;
  }
  
  return `h-8 text-gray-500 bg-white inline-flex text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${base}`;
});

const nameClass = computed(() => {
  return props.variant === "mobile" ? "text-base font-medium" : "text-base font-medium";
});
</script>
