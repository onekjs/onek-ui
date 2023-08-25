import { CSSProperties, ComputedRef, computed, inject, useSlots } from 'vue';
import { ClassList, OnekSize } from '../../_interface/auto';
import { ButtonGroupProp, ButtonGroupProps, ButtonProps } from '../../src/button/src/props';
import { useGlobal } from '../use-global';
/*
 * useButton 返回值类型接口
 *
 */
export interface UseButtonReturn {
  classList: ComputedRef<ClassList>;
  styleList: ComputedRef<CSSProperties>;
}
export const useButton = (props: ButtonProps): UseButtonReturn => {
  const slots = useSlots();
  const buttonGroupInjectionKey = 'OnekUIButtonGroup';
  const { getType, getSize } = useGlobal(props);
  const groupProps: any = inject(
    buttonGroupInjectionKey,
    null
  );

  const prefix = 'o-button';
  const classList = computed((): ClassList => {
    return [
      {
        [`${prefix}-${getType('default',groupProps&&groupProps.type).value}`]: true,
        [`${prefix}-${getSize('normal', groupProps&&groupProps.size).value}`]:
          true,
        [`${prefix}-${getType('default',groupProps&&groupProps.type).value}--link`]: groupProps&&groupProps.link||props.link,
        [`${prefix}-${getSize('normal', groupProps&&groupProps.size).value}-${
          props.shape
        }`]: true,
        [`${prefix}-${getType('default',groupProps&&groupProps.type).value}--plain`]: props.plain,
        [`${prefix}-${getType('default',groupProps&&groupProps.type).value}--disabled`]:
          props.disabled || props.loading
      }
    ];
  });
  const styleList = computed((): CSSProperties => {
    return {};
  });
  return {
    classList,
    styleList
  };
};
