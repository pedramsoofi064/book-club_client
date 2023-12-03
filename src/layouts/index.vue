<template>
  <div class="layout-container" ref="layoutContainerRef">
    <component :is="layout"><slot /></component>
  </div>
</template>

<script>
  import { defineAsyncComponent, markRaw, ref, computed, watch } from "vue";
  import { useRoute } from "vue-router";
  export default {
    name: "Layout",
    setup() {
      const route = useRoute();
      const layout = ref("default");
      const layoutContainerRef = ref(null);
      const layoutName = computed(() => route.meta?.layout);
      watch(
        layoutName,
        (newLayoutName) => {
          layout.value = defineComponent(newLayoutName || "default");
        },
        { immediate: true },
      );
      watch(
        () => route.name,
        () => {
          layoutContainerRef.value.scroll({ top: 0, left: 0, behavior: "smooth" });
        },
      );
      function defineComponent(layout) {
        return markRaw(defineAsyncComponent(() => import(`./${layout}.layout.vue`)));
      }

      return {
        layout,
        layoutContainerRef,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .layout-container {
    height: 100%;
    overflow-y: auto;
    @include mq(x-small) {
      background-color: white;
    }
  }
</style>
