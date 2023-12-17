<template>
  <div class="book-item"></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.book-item {
  width: var(--book-item-width, 300px);
  height: var(--book-item-height, 400px);
  border-radius: 40px;
  background-color: white;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
}
</style>
