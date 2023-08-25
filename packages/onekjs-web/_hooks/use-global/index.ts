import { ONEK_GLOBAL_PROPS_KEY, OnekSize, OnekType } from '../../_interface';
import { ONEK_SIZE, ONEK_TYPE } from '../../_tokens/attrs';
import { ComputedRef, computed, inject, reactive, toRefs } from 'vue';
import { isArray } from '../../utils/is/index';
import { OnekGlobalProps } from '../../_interface/auto';

/**
 * useGlobal 所需要的 prop 参数类型接口
 *
 * @param { string } [type] 组件的类型
 * @param { string } [size] 组件的尺寸
 */
export interface UseGlobalProp {
  type: OnekType | null;
  size: OnekSize | string | number;
}

/**
 * useGlobal 返回值类型接口
 *
 * @param { Function } getType 获取组件的类型
 * @param { Function } getSize 获取组件的尺寸
 * @param { Function } getLang 获取组件的语言
 * @param { Function } getProp 获取组件修改指定参数后的 props
 */
export interface UseGlobalReturn {
  getType: (
    def?: OnekType,
    parentType?: OnekType | null
  ) => ComputedRef<OnekType>;
  getSize: (
    def?: OnekSize,
    parentSize?: OnekSize | null
  ) => ComputedRef<OnekSize>;
  getProp: (target: ('type' | 'size')[], def?: string[]) => object;
}
/**
 * 获取组件所需要的配置项，有组件内部的 prop、全局配置和默认值三个参数
 *
 * @param { Object } prop 组件的 prop
 * @returns { Object } 根据优先级返回需要的参数
 */
export const useGlobal = (prop?: Partial<UseGlobalProp>): UseGlobalReturn => {
  // 获取全局配置注入的依赖项
  const global: OnekGlobalProps | null = inject(ONEK_GLOBAL_PROPS_KEY, null);
  /* 
  获取组件的类型
  */
  const getType = (
    def: string | OnekType = 'default',
    parentType?: OnekType | null
  ): ComputedRef<OnekType> => {
    return computed((): OnekType => {
      if (!prop) {
        return def as OnekType;
      }
      if (prop.type && !ONEK_TYPE.includes(prop.type)) {
        return def as OnekType;
      }
      return (prop.type ||
        parentType ||
        (global && global.type) ||
        def) as OnekType;
    });
  };
  /* 
 获取组件的尺寸
  */
  const getSize = (
    def: string | OnekSize = 'normal',
    parentSize?: OnekSize | null
  ): ComputedRef<OnekSize> => {
    return computed((): OnekSize => {
      if (!prop) {
        return def as OnekSize;
      }
      if (prop.size && !ONEK_SIZE.includes(prop.size as OnekSize)) {
        return def as OnekSize;
      }

      return (prop.size ||
        parentSize ||
        (global && global.size) ||
        def) as OnekSize;
    });
  };
  /** 设置 type 和 size 的默认映射调用对象 */
  const getPropMap = {
    type: getType,
    size: getSize
  } as const;
  /**
   * 有些组件的 props 需要获取全局配置的属性
   *
   * 使用此方法，第一个参数传递需要获取全局配置的 key 数组
   *
   * 第二个可选参数用于定义默认值，target 参数的第一个 key 默认值对应 def 数组的第一个元素
   *
   * @param { string[] } target 需要获取全局配置的参数数组
   * @param { string[] } [def] 默认值数组
   * @returns { Object } props 参数列表
   */
  const getProp = (target: ('type' | 'size')[], def?: string[]): object => {
    /** 结果 props 对象 */
    const prams: {
      type?: ComputedRef<OnekSize | OnekType>;
      size?: ComputedRef<OnekSize | OnekType>;
    } = {};

    /** 必须是数组才遍历，提前拦截错误 */
    if (isArray(target)) {
      target.forEach((item: 'type' | 'size', index: number): void => {
        /** 检测映射对象中是否存在该属性 */
        if (getPropMap[item]) {
          /** 获取默认值 */
          const defaultValue: string | undefined = def && def[index];

          /** 将需要更改的树形改为指定参数 */
          prams[item] = getPropMap[item](defaultValue);
        }
      });
    }

    if (prop) {
      return reactive({
        ...toRefs(prop),
        ...prams
      });
    }

    return reactive({
      ...prams
    });
  };
  return {
    getType,
    getSize,
    getProp
  };
};
