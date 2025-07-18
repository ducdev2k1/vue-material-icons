import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SportsBarRoundedIcon',
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
              d: 'M19 9h-1.56c.33-.55.53-1.18.55-1.86.04-1.03-.43-1.99-1.16-2.71-1.54-1.54-2.74-1.56-3.82-1.29-.81-.69-1.85-1.12-3.01-1.12-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V19c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2M7 10.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5M19 17h-2v-6h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
