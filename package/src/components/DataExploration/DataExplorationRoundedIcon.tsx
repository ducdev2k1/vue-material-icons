import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DataExplorationRoundedIcon',
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
              d: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 1.33.26 2.61.74 3.77l4.61-4.62c.37-.37.95-.39 1.35-.06l2.6 2.19L14.58 10H14c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-.58l-3.94 3.93c-.37.37-.96.39-1.35.05l-2.59-2.19-4.4 4.4C5.52 20.26 8.56 22 12 22h8c1.1 0 2-.9 2-2zm-2.5 8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
