<template>
  <svg :style="innerStyle" class="onek-icon">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'icon-font'
};
</script>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue';
import './style/index.less';
import './iconfont/iconfont.js';
type Props = {
  type?: string;
  name?: string;
  size?: number;
  rotate?: number;
};

const props = withDefaults(defineProps<Props>(), {
  name: 'gengduo',
  type: 'svg',
  size: 32,
  rotate: 0
});

console.log(props.name);

const isNumber = (val: number | string) => {
  return typeof val === 'number';
};

const innerStyle = computed(() => {
  const styles: CSSProperties = {};
  if (props.size) {
    styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
  }
  if (props.rotate) {
    styles.transform = `rotate(${props.rotate}deg)`;
  }
  return styles;
});

const iconName = computed(() => {
  let hash = props.type === 'svg' ? '#' : '';
  return `${hash}icon-${props.name}`;
});
</script>
<style scoped lang="less">
.onek-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  color: inherit;
  font-style: normal;
  vertical-align: -2px;
  outline: none;
  stroke: currentColor;
}
</style>
