<template>
  <o-button @click="jump('/button')" type="primary">button</o-button>
  <div></div>
  <o-button @click="jump('/icon')" type="primary">icon</o-button>
</template>
<script lang="ts" setup>
import router from '../router/';
const jump = (path) => {
  router.push(path);
};
</script>
<style scoped>
div {
  width: 5px;
  height: 5px;
}
</style>
