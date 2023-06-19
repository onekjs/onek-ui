<template>
  <div>
    <o-button-group size="small">
      <o-button>default</o-button>
      <o-button>default</o-button>
      <o-button>default</o-button>
    </o-button-group>
    <div style="height: 15px"></div>
    <o-button-group type="primary">
      <o-button>primary</o-button>
      <o-button>primary</o-button>
      <o-button>primary</o-button>
    </o-button-group>
    <div style="height: 15px"></div>
    <o-button-group size="large" type="success">
      <o-button>success</o-button>
      <o-button>success</o-button>
      <o-button>success</o-button>
    </o-button-group>
    <div style="height: 15px"></div>
    <span>vertical</span>
    <div style="height: 15px"></div>
    <o-button-group size="small" vertical>
      <o-button>default</o-button>
      <o-button>default</o-button>
      <o-button>default</o-button>
    </o-button-group>
    <div style="display: inline-block; width: 15px"></div>
    <o-button-group @click="handleClick" vertical type="primary">
      <o-button>primary</o-button>
      <o-button>primary</o-button>
      <o-button>primary</o-button>
    </o-button-group>
    <div style="display: inline-block; width: 15px"></div>
    <o-button-group vertical size="large" type="success">
      <o-button>success</o-button>
      <o-button>success</o-button>
      <o-button>success</o-button>
    </o-button-group>
    <div style="height: 15px"></div>
    <span>link</span>
    <div style="height: 15px"></div>
    <o-button-group link size="small" vertical>
      <o-button>default</o-button>
      <o-button>default</o-button>
      <o-button>default</o-button>
    </o-button-group>
    <div style="display: inline-block; width: 15px"></div>
    <o-button-group link @click="handleClick" vertical type="primary">
      <o-button>primary</o-button>
      <o-button>primary</o-button>
      <o-button>primary</o-button>
    </o-button-group>
    <div style="display: inline-block; width: 15px"></div>
    <o-button-group link vertical size="large" type="success">
      <o-button>success</o-button>
      <o-button>success</o-button>
      <o-button>success</o-button>
    </o-button-group>
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
