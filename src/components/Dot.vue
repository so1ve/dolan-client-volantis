<template>
  <span class="dot" />
</template>

<style scoped lang="scss">
.dot {
  margin: 0 0.2rem;
  font-size: 0.9em;

  &::before {
    content: "·";
  }
}
</style>
