<template>
  <o-icon-test></o-icon-test>
  <ul class="icon-list">
    <li v-for="item in icons" :key="item.icon_id" class="icon-item">
      <span class="icon-item-title">{{ item.name.replace('o-', '') }}</span>
      <div class="icon-item-component">
        <component :is="item.name" size="32" />
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { icon_list } from '@onekjs/icons';
const icons = ref(icon_list);
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
