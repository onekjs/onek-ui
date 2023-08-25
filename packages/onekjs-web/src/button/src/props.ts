import { setBooleanProp, setStringProp } from '../../../utils/index';
import { OnekShape, OnekType, OnekSize } from '../../../_interface/auto';
import { ExtractPropTypes } from 'vue';
import { ButtonGroupDirection } from './interface';
import { ONEK_SIZE, ONEK_TYPE } from '../../../_tokens/attrs/index';
export const Props = {
  type: setStringProp<OnekType>(undefined, (val: OnekType): boolean => {
    return ONEK_TYPE.includes(val);
  }),
  size: setStringProp<OnekSize>(undefined, (val: OnekSize): boolean => {
    return ONEK_SIZE.includes(val);
  }),
  plain: setBooleanProp(),
  disabled: setBooleanProp(),
  link: setBooleanProp(),
  loading: setBooleanProp(),
  shape: setStringProp<OnekShape>('square')
};

export const ButtonGroupProp = {
  type: setStringProp<OnekType>('default', (val: OnekType): boolean => {
    return ONEK_TYPE.includes(val);
  }),
  size: setStringProp<OnekSize>('small', (val: OnekSize): boolean => {
    return ONEK_SIZE.includes(val);
  }),
  link: setBooleanProp(),
  direction: setStringProp<ButtonGroupDirection>(
    'horizontal',
    (val: ButtonGroupDirection): boolean => {
      return (['horizontal', 'vertical'] as const).includes(val);
    }
  )
};
export type ButtonGroupProps = ExtractPropTypes<typeof ButtonGroupProp>;
export type ButtonProps = ExtractPropTypes<typeof Props>;
