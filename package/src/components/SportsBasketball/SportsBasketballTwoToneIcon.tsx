import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SportsBasketballTwoToneIcon',
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
              d: 'M8.93 11H11V4.07c-1.73.22-3.29.99-4.5 2.13C7.81 7.44 8.69 9.12 8.93 11m11 0c-.15-1.18-.56-2.28-1.16-3.25-.87.87-1.47 1.99-1.68 3.25zM5.23 7.75c-.6.97-1.01 2.07-1.16 3.25h2.84C6.7 9.74 6.1 8.62 5.23 7.75M4.07 13c.15 1.18.56 2.28 1.16 3.25.87-.87 1.47-1.99 1.68-3.25zm2.44 4.79c1.2 1.14 2.76 1.92 4.49 2.14V13H8.93c-.23 1.88-1.12 3.55-2.42 4.79M17.5 6.2c-1.21-1.14-2.77-1.92-4.5-2.13V11h2.07c.24-1.88 1.12-3.56 2.43-4.8m1.27 10.05c.61-.96 1.02-2.07 1.16-3.25h-2.84c.21 1.26.81 2.38 1.68 3.25M13 13v6.93c1.73-.22 3.29-1 4.49-2.14-1.3-1.24-2.19-2.91-2.42-4.79z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
