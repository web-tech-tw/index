<template>
  <div class="flex justify-center mx-5 my-9">
    <ContentRenderer v-if="data" :value="data" class="max-w-[65ch] prose prose-sm md:prose-base" />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '關於我們',
});

const { data } = await useAsyncData('about',
  () => queryCollection('content').path('/about').first(),
);
</script>
