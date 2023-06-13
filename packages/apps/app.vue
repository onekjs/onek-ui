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
    <o-button @click="handleClick" plain disabled type="success"
      >success</o-button
    >
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
</template>
<script lang="ts" setup>
const handleClick = (e: MouseEvent) => {
  console.log(e);
};
</script>
<style scoped>
span {
  margin: 5px;
  font-size: 12px;
  display: inline-block;
}
</style>
