import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ThunderstormOutlinedIcon',
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
              d: 'M17.92 7.02C17.45 4.18 14.97 2 12 2 9.82 2 7.83 3.18 6.78 5.06 4.09 5.41 2 7.74 2 10.5 2 13.53 4.47 16 7.5 16h10c2.48 0 4.5-2.02 4.5-4.5 0-2.34-1.79-4.27-4.08-4.48M17.5 14h-10C5.57 14 4 12.43 4 10.5c0-1.74 1.31-3.23 3.04-3.46l.99-.13.49-.87C9.23 4.78 10.56 4 12 4c1.94 0 3.63 1.44 3.95 3.35l.25 1.52 1.54.14c1.27.12 2.26 1.21 2.26 2.49 0 1.38-1.12 2.5-2.5 2.5m-2.7 3-2.9 3.32 2 1L11.55 24h2.65l2.9-3.32-2-1L17.45 17zm-6 0-2.9 3.32 2 1L5.55 24H8.2l2.9-3.32-2-1L11.45 17z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
