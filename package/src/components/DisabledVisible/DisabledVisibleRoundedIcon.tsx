import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DisabledVisibleRoundedIcon',
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
              d: 'M21.99 12.34c.01-.11.01-.23.01-.34 0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.17 3.93 9.43 8.96 9.95-.93-.73-1.72-1.64-2.32-2.68C5.9 18 4 15.22 4 12c0-1.85.63-3.55 1.69-4.9l5.66 5.66c.56-.4 1.17-.73 1.82-1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.24 0 7.7 3.29 7.98 7.45.71.22 1.39.52 2.01.89M17 13c-3.18 0-5.9 1.87-7 4.5 1.1 2.63 3.82 4.5 7 4.5s5.9-1.87 7-4.5c-1.1-2.63-3.82-4.5-7-4.5m0 7c-1.38 0-2.5-1.12-2.5-2.5S15.62 15 17 15s2.5 1.12 2.5 2.5S18.38 20 17 20m1.5-2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
