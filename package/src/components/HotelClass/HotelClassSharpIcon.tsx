import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HotelClassSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'path',
            props: {
              d: 'M8.58 10H1l6.17 4.41L4.83 22 11 17.31 17.18 22l-2.35-7.59L21 10h-7.58L11 2zm12.78 12-1.86-6.01L23.68 13h-3.44l-3.08 2.2 1.46 4.72zM17 8l-1.82-6-1.04 3.45.77 2.55z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
