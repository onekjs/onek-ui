<template>
  <div>
    <span>按钮分类</span>
    <o-button>default</o-button>
    <span />
    <o-button @click="handleClick" type="success">success</o-button>
    <span />
    <o-button type="primary">primary</o-button>
    <span />
    <o-button type="warning">warning</o-button>
    <span />
    <o-button type="danger">danger</o-button>
  </div>
  <div style="height: 10px"></div>
  <div>
    <span>朴素按钮</span>
    <o-button plain>default</o-button>
    <span />
    <o-button plain type="success">success</o-button>
    <span />
    <o-button plain type="primary">primary</o-button>
    <span />
    <o-button plain type="warning">warning</o-button>
    <span />
    <o-button plain type="danger">danger</o-button>
  </div>
  <div style="height: 10px"></div>
  <div>
    <span>链接按钮</span>
    <o-button link>default</o-button>
    <span />
    <o-button link type="success">success</o-button>
    <span />
    <o-button link type="primary">primary</o-button>
    <span />
    <o-button link type="warning">warning</o-button>
    <span />
    <o-button link type="danger">danger</o-button>
  </div>
  <div style="height: 10px"></div>
  <div>
    <span>按钮禁用</span>
    <o-button disabled>default</o-button>
    <span />
    <o-button plain disabled type="success">success</o-button>
    <span />
    <o-button link disabled type="primary">primary</o-button>
    <span />
    <o-button disabled type="warning">warning</o-button>
    <span />
    <o-button plain disabled type="warning">warning</o-button>
  </div>
  <div style="height: 10px"></div>
  <div>
    <span>按钮大小</span>
    <o-button size="mini" type="primary">mini</o-button>
    <span />
    <o-button size="small" type="primary">small</o-button>
    <span />
    <o-button size="normal" type="primary">normal</o-button>
    <span />
    <o-button size="large" type="primary">large</o-button>
  </div>
  <div style="height: 10px"></div>
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

  <icon-font name="sousuo" />
  <icon-font-gengduo size="60" />
  <icon-font-sousuo size="30" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const loading = ref(false);
const handleClick = (e: MouseEvent) => {
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
