import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterListOffRoundedIcon',
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
              d: 'M21 7c0-.55-.45-1-1-1H8.83l2 2H20c.55 0 1-.45 1-1m-3 5c0-.55-.45-1-1-1h-3.17l2 2H17c.55 0 1-.45 1-1m-4.02 4.81c.01.06.02.13.02.19 0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.06 0 .13.01.19.02L10.17 13H7c-.55 0-1-.45-1-1s.45-1 1-1h1.17l-3-3H4c-.55 0-1-.45-1-1 0-.32.15-.6.38-.79L2.1 4.93c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l16.97 16.97c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
