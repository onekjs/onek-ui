<template>
  <button class="o-button" :class="buttonClasses">
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  name: 'o-button'
};
</script>

<script lang="ts" setup>
import { computed } from 'vue';
import './style/index.less';

type Props = {
  type?: string;
  size?: string;
  plain?: boolean;
};

const prefix = 'o-button';

const buttonProps = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'normal',
  plain: false
});

const buttonClasses = computed(() => {
  return {
    [`${prefix}--${buttonProps.size}`]: buttonProps.size,
    [`${prefix}--${buttonProps.type}`]: buttonProps.type,
    [`${prefix}--${buttonProps.type}--plain`]: buttonProps.plain
  };
});
</script>
