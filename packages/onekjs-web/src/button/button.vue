<template>
  <button
    @click="handleClick"
    :disabled="prop.disabled || isloading"
    class="o-button"
    :class="classList"
  >
    <span v-if="isloading" class="o-button-loading">
      <svg
        class="o-icon o-button-loading--icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M510.499754 768.526913a31.934136 31.934136 0 0 1 31.934136 31.934136v191.604815a31.934136 31.934136 0 1 1-63.868272 0v-191.604815a31.934136 31.934136 0 0 1 31.934136-31.934136z m244.679349-56.204079l135.464604 135.528473a31.934136 31.934136 0 0 1-45.154868 45.154868l-135.464604-135.528473a31.934136 31.934136 0 1 1 45.154868-45.154868z m-444.139961 0a31.934136 31.934136 0 0 1 0 45.218737l-135.464604 135.464604a31.934136 31.934136 0 0 1-45.218737-45.154868l135.528473-135.464605a31.934136 31.934136 0 0 1 45.154868 0zM224.497634 480.928086a31.934136 31.934136 0 1 1 0 63.868272h-191.604815a31.934136 31.934136 0 0 1 0-63.868272h191.604815z m765.205763 0a31.934136 31.934136 0 0 1 0 63.868272h-191.604815a31.934136 31.934136 0 1 1 0-63.868272h191.604815zM175.510669 132.718269L310.975273 268.246741a31.934136 31.934136 0 1 1-45.154868 45.154868L130.355801 177.937005a31.934136 31.934136 0 0 1 45.154868-45.218736z m715.133038 0a31.934136 31.934136 0 0 1 0 45.154868l-135.464604 135.464604a31.934136 31.934136 0 0 1-45.218736-45.154868l135.528472-135.464604a31.934136 31.934136 0 0 1 45.154868 0zM510.499754 1.788312a31.934136 31.934136 0 0 1 31.934136 31.934135v191.604816a31.934136 31.934136 0 0 1-63.868272 0v-191.604816a31.934136 31.934136 0 0 1 31.934136-31.934135z"
        />
      </svg>
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
import { computed} from 'vue';
import './style/index.less';
import { Props } from './src/props';
import { useButton } from '../../_hooks/use-button/index';


const prop = defineProps(Props);
const { classList } = useButton(prop);

const emits = defineEmits(['click']);


const isloading = computed(() => {
  return prop.loading;
});

const handleClick = (event: MouseEvent) => {
  emits('click', event);
};
</script>