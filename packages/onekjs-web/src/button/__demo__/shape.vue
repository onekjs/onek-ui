<template>
  <div style="display: flex; margin-top: 15px">
    <o-button shape="circle" type="danger">
      <template #icon>
        <IconClose />
      </template>
    </o-button>
    <span />
    <o-button shape="circle" type="success">
      <template #icon>
        <IconOk />
      </template>
    </o-button>
    <span />
    <o-button type="primary">
      <template #icon>
        <IconUpload />
      </template>
    </o-button>
    <span />
    <o-button shape="round" type="warning">
      <template #icon>
        <IconDownload />
      </template>
    </o-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { IconOk, IconUpload, IconClose, IconDownload } from '@onekjs/icons';
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
