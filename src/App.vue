<script setup>
import { defineAsyncComponent } from "vue";
const Layout = defineAsyncComponent(() => import("@/layouts/index.vue"));
import { version } from "../package.json";
</script>

<template>
  <Layout>
    <router-view-wrapper />
  </Layout>
</template>

<style scoped>

</style>
