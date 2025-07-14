import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Brightness4TwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M18 9.52V6h-3.52L12 3.52 9.52 6H6v3.52L3.52 12 6 14.48V18h3.52L12 20.48 14.48 18H18v-3.52L20.48 12zM12.29 17c-.74 0-1.45-.17-2.08-.46 1.72-.79 2.92-2.52 2.92-4.54s-1.2-3.75-2.92-4.54c.63-.29 1.34-.46 2.08-.46 2.76 0 5 2.24 5 5s-2.24 5-5 5',
        props,
        attrs
      );
  },
});