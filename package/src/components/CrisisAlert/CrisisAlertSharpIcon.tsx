import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CrisisAlertSharpIcon',
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
              d: 'M14.5 2.5c0 1.06-.75 3.64-1.19 5.04-.18.57-.71.96-1.31.96s-1.13-.39-1.31-.96C10.25 6.14 9.5 3.56 9.5 2.5 9.5 1.12 10.62 0 12 0s2.5 1.12 2.5 2.5M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m4.08-4.89c.18-.75.33-1.47.39-2.06C19.75 4.69 22 8.08 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-3.92 2.25-7.31 5.53-8.95.07.59.21 1.32.39 2.06C5.58 6.51 4 9.07 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.93-1.58-5.49-3.92-6.89M18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2 .98-3.77 2.48-4.86.23.81.65 2.07.65 2.07C8.43 9.93 8 10.92 8 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.08-.43-2.07-1.13-2.79 0 0 .41-1.22.65-2.07C17.02 8.23 18 10 18 12',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
