import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LyricsOutlinedIcon',
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
              d: 'M6 6h7v2H6zm0 6h4v2H6z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M15 11.97V16H6l-2 2V4h11v2.03c.52-.69 1.2-1.25 2-1.6V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9c1.1 0 2-.9 2-2v-2.42c-.8-.36-1.48-.92-2-1.61',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M6 9h7v2H6zm14-2.82c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V3h2V1h-4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
