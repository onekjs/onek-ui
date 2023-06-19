<template>
  <div class="o-button-group" :class="buttonGroupClasses">
    <slot />
  </div>
</template>
<script lang="ts">
import { computed, provide, reactive, toRefs } from 'vue';
import './style/index.less';
export default {
  name: 'o-button-group'
};
</script>
<script setup lang="ts">
const buttonGroupInjectionKey = 'OnekUIButtonGroup';

type Props = {
  type?: string;
  size?: string;
  link?: boolean;
  vertical?: boolean;
};

const prefix = 'o-button-group';

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'normal',
  vertical: false,
  link: false
});

const { type, size, link } = toRefs(props);

provide(
  buttonGroupInjectionKey,
  reactive({
    type,
    size,
    link
  })
);

const buttonGroupClasses = computed(() => {
  return {
    [`${prefix}-vertical`]: props.vertical,
    [`${prefix}-horizontal`]: !props.vertical
  };
});
</script>
