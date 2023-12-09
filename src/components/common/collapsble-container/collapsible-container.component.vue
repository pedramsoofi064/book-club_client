<template>
  <Transition name="collapsible">
    <div ref="container" class="collapsible" v-if="collapsed">
      <slot />
    </div>
  </Transition>
</template>

<script>
  import { ref, computed } from "vue";
  export default {
    name: "collapsible-container",
    props: {
      collapsed: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const container = ref(null);

      const containerScrollHeight = computed(() => {
        const containerElement = container.value;
        const maxHeight = containerElement?.scrollHeight;
        return maxHeight;
      });

      return { container, containerScrollHeight };
    },
  };
</script>

<style lang="scss" scoped>
  .collapsible {
    overflow: hidden;
    &-enter-active {
      animation: collapse 0.15s forwards reverse;
    }

    &-leave-active {
      animation: collapse 0.15s forwards;
    }
  }
  @keyframes collapse {
    from {
      max-height: calc(v-bind("containerScrollHeight") * 1px);
    }
    to {
      max-height: 0;
    }
  }
</style>
