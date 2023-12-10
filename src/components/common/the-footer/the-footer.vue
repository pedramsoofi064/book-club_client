<template>
  <footer class="footer">
    <div class="footer__main container"></div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
   height: 300px;
   background-color: var(--color-palette-primary);

   &__main {
      width: 100%;
      height: 100%;
      border-left: 1px solid var(--color-background-main);
   }
}
</style>
