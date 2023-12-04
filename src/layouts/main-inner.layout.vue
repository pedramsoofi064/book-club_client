<template>
  <main id="default-layout">
    <h1>3333</h1>
    <slot />
    <footer>www</footer>
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
