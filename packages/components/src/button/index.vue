<template>
  <button
    @click="handleClick"
    :disabled="props.disabled"
    class="o-button"
    :class="buttonClasses"
  >
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
};

const prefix = 'o-button';

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'normal',
  plain: false,
  disabled: false,
  link: false
});

const buttonClasses = computed(() => {
  return {
    [`${prefix}--${props.size}`]: props.size,
    [`${prefix}--${props.type}`]: props.type,
    [`${prefix}--${props.type}--link`]: props.link,
    [`${prefix}--${props.type}--plain`]: props.plain,
    [`${prefix}--${props.type}--disabled`]: props.disabled
  };
});

const handleClick = (event: MouseEvent) => {
  emits('click', event);
};
</script>
