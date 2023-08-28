import {
  ComputedRef,
  computed,
  inject,
  provide,
  reactive,
  useSlots
} from 'vue';
import {
  ClassList,
  ONEK_GLOBAL_PROPS_KEY,
  OnekGlobalProps
} from '../../_interface/auto';
import { ButtonGroupProps } from '../../src/button/src/props';

export interface UseButtonGroupReturn {
  classList: ComputedRef<ClassList>;
}
export const useButtonGroup = (props: ButtonGroupProps): UseButtonGroupReturn => {
  const slots = useSlots();
  const prefix = 'o-button-group';

  /** 获取全局配置组件注入的依赖项 */
  const OnekGlobalInject: OnekGlobalProps | null = inject(
    ONEK_GLOBAL_PROPS_KEY,
    null
  );
  const classList = computed(() => {
    return [{
      [`${prefix}-vertical`]: props.direction==="vertical",
      [`${prefix}-horizontal`]: props.direction==="horizontal"
    }];
  });
  const buttonGroupInjectionKey = 'OnekUIButtonGroup';
provide(buttonGroupInjectionKey, {
  type: props.type,
  size: props.size,
  link: props.link
});

  return { classList };
};
