<template>
  <div style="display: flex">
    <span>加载状态</span>
    <o-button loading size="small" type="primary">loading</o-button>
    <span />
    <o-button
      @click="handleClick"
      :loading="loading"
      size="small"
      type="primary"
      >loading</o-button
    >
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const loading = ref(false);
const handleClick = () => {
  loading.value = !loading.value;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
};
</script>
<style scoped>
span {
  margin: 5px;
  font-size: 12px;
  display: inline-block;
}
</style>
