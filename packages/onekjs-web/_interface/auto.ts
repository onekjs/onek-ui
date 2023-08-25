import { ExtractPropTypes, InjectionKey } from "vue";
import { Props } from "../_tokens/attrs";

export type ClassList = (string | Record<string, unknown>)[];
export type OnekType = 'primary' | 'default' | 'success' | 'warning' | 'danger';
export type OnekSize = 'mini' | 'small' | 'normal' | 'large';
export type OnekShape = 'circle' | 'square' | 'round';
/** onek-global 组件 props 类型 */
export type OnekGlobalProps = ExtractPropTypes<typeof Props>

/** onek-global 组件注入的依赖项 */
export const ONEK_GLOBAL_PROPS_KEY: InjectionKey<OnekGlobalProps> = Symbol(
  'onek-global-props-key'
)
