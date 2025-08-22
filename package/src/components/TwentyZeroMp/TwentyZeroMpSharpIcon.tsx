import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TwentyZeroMpSharpIcon',
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
              d: 'M14.5 7H16v3h-1.5z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 3v18h18V3zm3.5 5h3V7h-3V5.5H11V9H8v1h3v1.5H6.5zm6 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm.5-13h4.5v6H13zM18 17h-3v1.5h-1.5v-6H18z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M15 14h1.5v1.5H15z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
