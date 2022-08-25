<template>
  <div>
    <!-- <VltsHeader name="" /> -->
    <Cover />
    <div un-m="4 b-0">
      <div
        un-flex="~ wrap"
        un-w="auto"
        un-max="w-[1080px]"
        un-m="x-auto"
        un-justify="between"
        un-items="stretch"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
