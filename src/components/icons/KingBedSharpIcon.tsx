import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KingBedSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M20 10V5H4v5H2v7h1.33L4 19h1l.67-2h12.67l.66 2h1l.67-2H22v-7zm-9 0H6V7h5zm7 0h-5V7h5z',
        props,
        attrs
      );
  },
});