import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PropaneTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M17 8H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h10c2.21 0 4-1.79 4-4s-1.79-4-4-4',
        props,
        attrs
      );
  },
});