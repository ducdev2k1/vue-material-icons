import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FiveMpSharpIcon',
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
              d: 'M3 3v18h18V3zm7 7h3V9h-3V5.5h4.5V7h-3v1h3v3.5H10zm2.5 8.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
