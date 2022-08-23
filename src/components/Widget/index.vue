<script lang="ts" setup>
const props = defineProps<{
  name: string
}>();
</script>

<template>
  <section
    un-block
    un-z="0"
    un-mb="4"
    un-rounded="2"
    un-bg="card-bg"
    un-w="full"
    un-overflow="hidden"
  >
    <header
      un-block
      un-text="3.5 meta"
      un-rounded="t-2"
      un-p="3.5 b-0"
      un-font="bold"
    >
      <!-- TODO: Font awesome -->
      <i class="fa-solid fa-map-signs fa-fw" aria-hidden="true" />
      <span un-ml="2">{{ props.name }}</span>
    </header>
    <div
      un-max="h-screen w-full"
      un-text="3.5 meta justify"
      un-overflow="auto"
      un-p="y-2"
    >
      <slot />
    </div>
  </section>
</template>
