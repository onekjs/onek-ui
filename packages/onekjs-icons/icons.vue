<template>
  <i :class="className" :style="style"></i>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const classPrefix = 'onek-icon';
    const props = defineProps({
      size: Number,
      type: String
    });

    const className = computed(() => {
      return [classPrefix, props.type ? props.type : ''];
    });

    const style = computed(() => {
      return { fontSize: props.size ? props.size + 'px' : '16px' };
    });

    return {
      className,
      style
    }
  }
});
</script>