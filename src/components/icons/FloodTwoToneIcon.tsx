import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FloodTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M8.66 15.5c1.01 0 1.3-.65 2.42-.9l-.91-3.39 3.86-1.04 1.42 5.31c1.03-.07 1.3-.85 2.85-.96L16.16 6.5l-5.74-2.09L6.5 9.09l1.7 6.36c.13.03.28.05.46.05',
        props,
        attrs
      );
  },
});