import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoreTimeOutlinedIcon',
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
              d: 'M10 8v6l4.7 2.9.8-1.2-4-2.4V8z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M17.92 12c.05.33.08.66.08 1 0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23-5 0-9 4-9 9s4 9 9 9 9-4 9-9c0-.34-.02-.67-.06-1z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 5V2h-2v3h-3v2h3v3h2V7h3V5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
