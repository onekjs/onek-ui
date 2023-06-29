<template>
  <div style="display: flex">
    <o-button shape="circle" size="normal" type="primary">
      <template #icon>
        <IconUpload />
      </template>
    </o-button>
    <span />
    <o-button shape="circle" size="normal" type="warning">
      <template #icon>
        <IconDownload />
      </template>
    </o-button>
    <span />
    <o-button shape="circle" size="normal" type="danger">
      <template #icon>
        <!-- <o-icon name="close" /> -->
        <IconUp />
      </template>
    </o-button>
    <span />
    <o-button shape="circle" size="normal" type="success">
      <template #icon>
        <IconOk />
      </template>
    </o-button>
    <span />
    <o-button shape="circle" size="normal" type="danger">
      <template #icon>
        <IconDelete />
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
      <template #icon> <IconLoading /> </template>
      loading</o-button
    >
    <span />
    <o-button
      @click="handleClick"
      :loading="loading"
      size="normal"
      type="danger"
    >
      <template #icon> <IconDelete /></template>
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
      <template #icon> <IconDownload /></template>
      download</o-button
    >
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const loading = ref(false);
import {
  IconUp,
  IconDownload,
  IconUpload,
  IconLoading,
  IconOk,
  IconDelete
} from '@onekjs/icons';
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
