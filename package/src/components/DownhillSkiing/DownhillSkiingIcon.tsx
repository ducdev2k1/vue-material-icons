import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DownhillSkiingIcon',
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
              d: 'M18.5 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2.72 16.4.76.27c.62.21 1.27.33 1.96.33.84 0 1.65-.18 2.38-.5L22 22.13c-1.05.55-2.24.87-3.5.87-.86 0-1.68-.14-2.45-.41L2 17.47l.5-1.41 6.9 2.51 1.72-4.44-3.57-3.73c-.89-.94-.67-2.47.45-3.12l3.48-2.01c1.1-.64 2.52-.1 2.91 1.11l.33 1.08c.44 1.42 1.48 2.57 2.83 3.14l.52-1.6 1.43.46-1.12 3.45c-2.45-.4-4.48-2.07-5.38-4.32l-2.53 1.45 3.03 3.46-2.22 5.76 3.09 1.12 2.1-6.44c.46.18.94.31 1.44.41z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
