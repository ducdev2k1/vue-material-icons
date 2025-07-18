import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Face4OutlinedIcon',
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
              d: 'M12 2c-.96 0-1.88.14-2.75.39C8.37.96 6.8 0 5 0 2.24 0 0 2.24 0 5c0 1.8.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 2c2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88.43-.07.88-.12 1.34-.12M4.42 9.47C5.05 7.58 6.37 6 8.08 5.03 7.45 6.92 6.13 8.5 4.42 9.47M2 5c0-1.65 1.35-3 3-3 .95 0 1.8.46 2.35 1.15-1.79.94-3.26 2.41-4.2 4.2C2.46 6.8 2 5.95 2 5m10 15c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55 1.83 2.26 4.62 3.7 7.75 3.7.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
