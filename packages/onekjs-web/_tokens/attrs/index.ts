import { OnekSize, OnekType } from "../../_interface";
import { OnekLang } from "../../_interface/lang";
import { setStringProp } from "../../utils";

export const ONEK_SIZE = ['large', 'normal', 'small', 'mini'] as const;
/** 类型 */
export const ONEK_TYPE = [
  'default',
  'primary',
  'success',
  'danger',
  'warning',
] as const;
export const Props = {
  /**
   * 尺寸
   *
   * @values large middle small mini
   */
  size: setStringProp<OnekSize>(undefined, (val: OnekSize): boolean => {
    return ONEK_SIZE.includes(val)
  }),
  /**
   * 按钮的类型（非自定义按钮颜色时有效）
   *
   * @values default primary success danger warning info
   */
  type: setStringProp<OnekType>(undefined, (val: OnekType): boolean => {
    return ONEK_TYPE.includes(val)
  }),
  /**
   * 不同语言
   *
   * @values en-US zh-CN
   * @default zh-CN
   */
  lang: setStringProp<OnekLang>('zh-CN', (val: OnekLang): boolean => {
    return (['en-US', 'zh-CN'] as const).includes(val)
  })
} as const


