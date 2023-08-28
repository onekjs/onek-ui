<template>
  <div class="o-button-group" :class="classList">
    <slot />
  </div>
</template>
<script setup lang="ts">
import './style/index.less';
import { ButtonGroupProp } from './src/props';
import { useButtonGroup } from '../../_hooks/use-button-group/index';
defineOptions({"name":"o-button-group"})
const props = defineProps(ButtonGroupProp);
const { classList } = useButtonGroup(props);

</script>
