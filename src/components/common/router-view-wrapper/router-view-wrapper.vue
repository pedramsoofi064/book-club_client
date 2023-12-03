<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <template #default>
        <component :is="Component" />
      </template>
    </transition>
  </router-view>
</template>

<script>
export default {
  setup() {},
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
