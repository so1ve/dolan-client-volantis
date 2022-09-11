<template>
  <div>
    <!-- <VltsHeader name="" /> -->
    <Cover />
    <div id="volantis-main" class="volantis-main">
      <div class="body-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.volantis-main {
  padding: 16px 16px 0;

  .body-wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }
}
</style>
