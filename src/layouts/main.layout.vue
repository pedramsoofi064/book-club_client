<template>
  <main id="main-layout">
    <the-header />
    <slot />
    <footer>2222</footer>
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
  }
</style>
