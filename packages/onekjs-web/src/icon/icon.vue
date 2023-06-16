<template>
  <svg :style="innerStyle" class="o-icon">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'o-icon'
};
</script>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue';
import './style/index.less';

type Props = {
  type?: string;
  name?: string;
  size?: number;
  rotate?: number;
};

const props = withDefaults(defineProps<Props>(), {
  name: 'loading',
  type: 'svg',
  size: 12,
  rotate: 0
});

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
