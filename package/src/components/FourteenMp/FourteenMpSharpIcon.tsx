import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FourteenMpSharpIcon',
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
              d: 'M15 14h1.5v1.5H15z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 3v18h18V3zm9 2.5h1.5v3H15v-3h1.5v3h1V10h-1v1.5H15V10h-3zm-5 0h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
