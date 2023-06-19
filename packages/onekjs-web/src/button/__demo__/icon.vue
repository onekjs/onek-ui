<template>
  <div style="display: flex">
    <o-button shape="circle" size="normal" type="primary">
      <template #icon>
        <o-icon name="upload" />
      </template>
    </o-button>
    <span />
    <o-button shape="circle" size="normal" type="warning">
      <template #icon>
        <o-icon name="download" />
      </template>
    </o-button>
    <span />
    <o-button shape="circle" size="normal" type="danger">
      <template #icon>
        <o-icon name="close" />
      </template>
    </o-button>
    <span />
    <o-button shape="circle" size="normal" type="success">
      <template #icon>
        <o-icon name="ok" />
      </template>
    </o-button>
    <span />
    <o-button shape="circle" size="normal" type="danger">
      <template #icon>
        <o-icon name="delete" />
      </template>
    </o-button>
  </div>
  <div style="margin-top: 20px">
    <o-button
      @click="handleClick"
      :loading="loading"
      size="normal"
      type="primary"
    >
      <template #icon> <o-icon name="upload" /> </template>
      loading</o-button
    >
    <span />
    <o-button
      @click="handleClick"
      :loading="loading"
      size="normal"
      type="danger"
    >
      <template #icon> <o-icon name="delete" /></template>
      delete</o-button
    >
    <span />
    <o-button
      @click="handleClick"
      :loading="loading"
      size="normal"
      type="primary"
      plain
    >
      <template #icon> <o-icon name="download" /></template>
      download</o-button
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
