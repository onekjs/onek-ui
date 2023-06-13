<template>
  <button
    @click="handleClick"
    :disabled="props.disabled || isloading"
    class="o-button"
    :class="buttonClasses"
  >
    <span v-if="isloading" class="o-button-loading">
      <svg
        t="1686634731795"
        class="o-button-loading--icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2396"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M512 170.666667v85.333333a256 256 0 1 1-223.573333 131.2L213.930667 345.6A341.333333 341.333333 0 1 0 512 170.666667z"
          fill="#fff"
          opacity=".3"
          p-id="2397"
        ></path>
      </svg>
    </span>

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

const emits = defineEmits(['click']);

type Props = {
  type?: string;
  size?: string;
  plain?: boolean;
  link?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

const prefix = 'o-button';

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'normal',
  plain: false,
  disabled: false,
  link: false,
  loading: false
});

const isloading = computed(() => {
  return props.loading;
});

const buttonClasses = computed(() => {
  return {
    [`${prefix}-${props.size}`]: props.size,
    [`${prefix}-${props.type}`]: props.type,
    [`${prefix}-${props.type}--link`]: props.link,
    [`${prefix}-${props.type}--plain`]: props.plain,
    [`${prefix}-${props.type}--disabled`]: props.disabled || props.loading
  };
});

const handleClick = (event: MouseEvent) => {
  emits('click', event);
};
</script>
