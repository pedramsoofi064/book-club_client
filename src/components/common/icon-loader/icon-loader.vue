<template>
  <component :is="icon" class="icon" />
</template>

<script>
import { computed, defineAsyncComponent } from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  setup({ name }) {
    const sanitizedName = computed(() =>
      name
        .trim()
        .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
        .toLowerCase()
    );

    const icon = computed(() =>
      defineAsyncComponent(() => import(`../icons/${sanitizedName.value}-icon.vue`))
    );

    return {
      icon,
    };
  },
};
</script>
