<script setup lang="ts">
const props = defineProps<{
  name: string
}>();
</script>

<template>
  <Widget a="" :name="props.name">
    <p un-m="t-2 b-4">
      <slot />
    </p>
  </Widget>
</template>
