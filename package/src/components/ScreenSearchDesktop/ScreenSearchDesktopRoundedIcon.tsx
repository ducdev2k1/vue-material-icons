import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScreenSearchDesktopRoundedIcon',
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
              d: 'M22 19H2c-.55 0-1 .45-1 1s.45 1 1 1h20c.55 0 1-.45 1-1s-.45-1-1-1M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2m4.59-9.95c1.28-1.87 3.86-2.05 5.38-.52 1.18 1.18 1.34 3 .47 4.36L16 13.44c.29.29.29.77 0 1.06s-.77.29-1.06 0l-1.55-1.55c-1.57 1-3.76.64-4.87-1.11-.73-1.14-.69-2.67.07-3.79',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
