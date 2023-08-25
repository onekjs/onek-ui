<template>
  <div class="o-button-group" :class="classList">
    <slot />
  </div>
</template>
<script lang="ts">
import './style/index.less';
import { ButtonGroupProp } from './src/props';
import { useButtonGroup } from '../../_hooks/use-button-group/index';
export default {
  name: 'o-button-group'
};
</script>
<script setup lang="ts">

const props = defineProps(ButtonGroupProp);
const { classList } = useButtonGroup(props);

</script>
