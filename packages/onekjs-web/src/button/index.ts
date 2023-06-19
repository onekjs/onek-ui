import { withInstall } from '@onekjs/utils';
import _Button from './button.vue';
import _ButtonGroup from './buttonGroup.vue';

export const Button = withInstall(_Button);
export const ButtonGroup = withInstall(_ButtonGroup);

export { _ButtonGroup };

export default Button;
