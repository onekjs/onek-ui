<template>
  <ClientOnly>
    <article v-bind="$attrs" class="vitepress-demo">
      <div class="demo-slot vp-raw">
        <slot></slot>
      </div>
      <div class="demo-title-desc" v-show="title || desc">
        <span class="demo-title">{{ title }}</span>
        <span class="demo-desc">{{ desc }}</span>
      </div>

      <div class="demo-actions">
        <div class="demo-platforms">
          <SfcPlayground :content="decodedCode" :importMap="importMap" />
        </div>
        <div class="demo-buttons">
          <div class="demo-actions-copy">
            <span v-show="showTip" class="demo-actions-tip">复制成功!</span>
            <copySvg v-show="!showTip" @click="copyCode" title="复制" />
          </div>
          <codeSvg
            class="demo-actions-expand"
            @click="toggleExpand()"
            title="展开"
          />
        </div>
      </div>
      <div
        v-show="expand"
        v-html="decodedHighlightedCode"
        :class="`language-${lang} extra-class`"
      ></div>

    </article>
  </ClientOnly>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from 'vue';
import { basicProps } from './props/demo';
import { useCopyCode } from './hooks/useCopyCode';
import copySvg from './Icons/copy.vue';
import codeSvg from './Icons/code.vue';
import SfcPlayground from './SfcPlayground.vue';

export default defineComponent({
  name: 'Demo',
  props: basicProps,
  components: {
    copySvg,
    codeSvg,
    SfcPlayground
  },
  setup(props) {
    const expand = ref(props.defaultExpand);

    const decodedCode = computed(() => decodeURIComponent(props.code || ''));

    const decodedHighlightedCode = computed(() =>
      decodeURIComponent(props.highlightedCode || ''),
    );

    const { showTip, copyCode } = useCopyCode(decodedCode.value);

    const toggleExpand = () => (expand.value = !expand.value);

    return {
      decodedCode,
      showTip,
      expand,
      decodedHighlightedCode,

      copyCode,
      toggleExpand
    }
  }
});
</script>

<style src="./css/demo.less"></style>