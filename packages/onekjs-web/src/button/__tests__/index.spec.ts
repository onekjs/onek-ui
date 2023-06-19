import { mount } from '@vue/test-utils';
import Button from '../button.vue';
import { describe, expect, test } from 'vitest';

describe('Button.vue', () => {
  // 检查默认样式是否正确
  test('renders with the correct style for default', () => {
    const wrapper = mount(Button, {});
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['o-button-default'])
    );
  });

  // 检查不同类型样式是否正确
  test.each([
    ['success', 'o-button-success'],
    ['primary', 'o-button-primary'],
    ['warning', 'o-button-warning'],
    ['danger', 'o-button-danger']
  ])('renders with the correct style for type "%s"', (type, expectedClass) => {
    const wrapper = mount(Button, {
      props: { type }
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining([expectedClass]));
  });

  // 检查 plain 样式是否正确
  test('renders with the correct style for plain', () => {
    const wrapper = mount(Button, {
      props: {
        plain: true
      }
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['o-button-default--plain'])
    );
  });

  // 检查 link 样式是否正确
  test('renders with the correct style for link', () => {
    const wrapper = mount(Button, {
      props: {
        link: true
      }
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['o-button-default--link'])
    );
  });

  // 模拟按钮点击事件
  test('triggers a click event', async () => {
    const wrapper = mount(Button);
    await wrapper.find('button').trigger('click');
  });

  // 检查按钮点击事件回调函数是否被调用
  test('calls the click event callback', async () => {
    const wrapper = mount(Button);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  // 检查 disabled 状态是否正确
  test('disables the button when the "disabled" prop is true', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    });

    expect(wrapper.find('button').element.disabled).toBe(true);
  });

  // 检查 loading 状态是否正确
  test('loading the button when the "loading" prop is true', async () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      }
    });

    expect(wrapper.find('button').element.disabled).toBe(true);
  });

  // 检查按钮组成功
});
