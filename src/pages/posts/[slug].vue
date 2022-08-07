<script setup lang="ts">
const route = useRoute();
const slug = computed(() => route.params.slug as string);
</script>

<template>
  <div>
    Hello {{ slug }}!
  </div>
</template>
