<template>
  <div class="flex justify-center mx-5 my-9">
    <ContentRenderer v-if="data" :value="data" class="max-w-[65ch] prose prose-sm md:prose-base" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '聯絡我們',
});

const { data } = await useAsyncData('contact',
  () => queryCollection('content').path('/contact').first(),
);
</script>
