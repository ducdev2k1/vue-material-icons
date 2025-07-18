import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MpSharpIcon',
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
              d: 'M21 3H3v18h18zM6 9h6.5v6H11v-4.5h-1v3H8.5v-3h-1V15H6zm9 6h-1.5V9H18v4.5h-3zm0-3h1.5v-1.5H15z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
