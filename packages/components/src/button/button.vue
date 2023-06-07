<template>
  <button class="o-button" :class="buttonStyle">
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
type ButtonProps = {
  type?: string;
};

const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`o-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
