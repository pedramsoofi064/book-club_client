<template>
  <main id="default-layout">
    <slot />
  </main>
</template>

<script>
  export default {
    name: "default-layout",
  };
</script>

<style lang="scss">
  #default-layout {
    height: 100%;
    background: var(--color-pallette-primary);
  }
</style>
