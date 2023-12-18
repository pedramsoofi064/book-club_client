<template>
  <div>
    <single-hero />
    <next-course />
    <read-books />
    <div class="gallery-section">
      <div class="container">
        <gallery-section />
      </div>
    </div>
    <user-comments />
    <sign-up-section />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.gallery-section {
  border-bottom: 1px solid var(--color-palette-blush-500);
  margin-bottom: 40px;
  .container {
    padding-top: 80px;
    border-left: 1px solid var(--color-palette-blush-500);
  }
}
</style>
