<template>
  <o-icon name="loading" />
</template>
<script lang="ts" setup>
import { loadSprites } from '@onekjs/icons';
loadSprites();
</script>
<style scoped lang="less">
.icon-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid rgb(216, 214, 214);
  border-left: 1px solid rgb(216, 214, 214);
}
.icon-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 20%;
  height: 140px;
  border-right: 1px solid rgb(216, 214, 214);
  border-bottom: 1px solid rgb(216, 214, 214);
  margin-top: 0px !important;
  cursor: pointer;
  transition: all 0.2s ease;
  &-title {
    font-size: 14px;
  }

  &-component {
    margin-top: 15px;
  }
  &:hover {
    background-color: rgb(236, 235, 235);
  }
}
</style>
