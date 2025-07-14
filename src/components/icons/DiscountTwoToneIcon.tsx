import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DiscountTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M19 9.79 11.21 2H5v6.21L12.79 16zM7.25 5.5C6.56 5.5 6 4.94 6 4.25S6.56 3 7.25 3s1.25.56 1.25 1.25S7.94 5.5 7.25 5.5',
        props,
        attrs
      );
  },
});