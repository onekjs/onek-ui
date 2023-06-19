<template>
  <button
    @click="handleClick"
    :disabled="props.disabled || isloading"
    class="o-button"
    :class="buttonClasses"
  >
    <span v-if="isloading" class="o-button-loading">
      <icon class="o-button-loading--icon" name="loading" />
    </span>
    <span v-else-if="$slots.default && $slots.icon">
      <span class="o-button-icon"><slot name="icon"></slot> </span>
    </span>
    <slot v-else name="icon"></slot>

    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  name: 'o-button'
};
</script>

<script lang="ts" setup>
import { computed, inject } from 'vue';
import icon from '../icon/icon.vue';
import './style/index.less';

const buttonGroupInjectionKey = 'OnekUIButtonGroup';

const emits = defineEmits(['click']);

type Props = {
  type?: string;
  size?: string;
  plain?: boolean;
  link?: boolean;
  disabled?: boolean;
  loading?: boolean;
  shape?: string;
};

const prefix = 'o-button';

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'normal',
  plain: false,
  disabled: false,
  link: false,
  loading: false,
  shape: 'square'
});

const groupProps = inject(buttonGroupInjectionKey, undefined);

const isloading = computed(() => {
  return props.loading;
});

const buttonClasses = computed(() => {
  return {
    [`${prefix}-${groupProps?.type ?? props.type}`]: true,
    [`${prefix}-${groupProps?.size ?? props.size}`]: true,
    [`${prefix}-${groupProps?.type ?? props.type}--link`]:
      groupProps?.link || props.link,
    [`${prefix}-${groupProps?.size ?? props.size}-${props.shape}`]: true,
    [`${prefix}-${props.type}--plain`]: props.plain,
    [`${prefix}-${props.type}--disabled`]: props.disabled || props.loading
  };
});

const handleClick = (event: MouseEvent) => {
  emits('click', event);
};
</script>
