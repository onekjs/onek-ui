<template>
  <div style="display: flex; margin-top: 15px">
    <o-button shape="circle" type="danger">
      <template #icon>
        <o-icon size="14" name="close" />
      </template>
    </o-button>
    <span />
    <o-button shape="circle" type="success">
      <template #icon>
        <o-icon size="14" name="ok" />
      </template>
    </o-button>
    <span />
    <o-button type="primary">
      <template #icon>
        <o-icon size="14" name="upload" />
      </template>
    </o-button>
    <span />
    <o-button shape="round" type="warning">
      <template #icon>
        <o-icon size="14" name="download" />
      </template>
    </o-button>
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
