import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Icons from '../icon.vue';

describe('Icon', () => {
  test('render', () => {
    const wrapper = mount(Icons, {
      props: {
        size: 18
      }
    });

    expect(wrapper.element.getAttribute('style')).contain('font-size: 18px');
  });
});
