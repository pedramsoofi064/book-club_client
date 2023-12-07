<template>
  <main id="default-layout">
    <the-header />
    <slot />
    <footer>2222</footer>
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
    text-align: center;
    background: var(--color-pallette-primary);
  }
</style>
