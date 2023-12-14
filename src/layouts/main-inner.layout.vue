<template>
  <main id="main-layout">
    <the-header />
    <slot />
    <the-footer />
  </main>
</template>

<script>
  export default {
    name: "main-layout",
  };
</script>

<style lang="scss">
  #main-layout {
    height: 100%;
    background: var(--color-pallette-primary);
    position: relative;
  }
</style>
