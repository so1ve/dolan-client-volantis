<script setup lang="ts">
const route = useRoute();
const slug = computed(() => route.params.slug);
</script>

<template>
  <div>
    Hello {{ slug }}!
  </div>
</template>
