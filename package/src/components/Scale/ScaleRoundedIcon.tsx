import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScaleRoundedIcon',
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
              d: 'M16 21c0 .55.45 1 1 1h3.43c.87 0 1.58-.75 1.5-1.62-.59-6.2-4.53-8.7-7.93-9.38V8c3.31-.42 6.03-1.86 7.27-3.73.65-.97-.12-2.27-1.29-2.27H4.02C2.85 2 2.08 3.3 2.73 4.27 3.97 6.14 6.69 7.58 10 8v3c-3.4.68-7.34 3.18-7.93 9.38-.08.87.63 1.62 1.5 1.62H7c.55 0 1-.45 1-1s-.45-1-1-1H4.13c.93-6.83 6.65-7.2 7.87-7.2s6.94.37 7.87 7.2H17c-.55 0-1 .45-1 1m-4.5.94c-.7-.17-1.27-.74-1.44-1.44-.18-.74.06-1.44.53-1.91.55-.55 2.91-1.57 4.33-2.15.41-.17.82.24.65.65-.58 1.42-1.6 3.78-2.15 4.33-.47.46-1.17.7-1.92.52',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
