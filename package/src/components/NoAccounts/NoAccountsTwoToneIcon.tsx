import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoAccountsTwoToneIcon',
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
              d: 'M12 6c-.52 0-1 .12-1.44.32l4.62 4.62c.2-.44.32-.92.32-1.44C15.5 7.57 13.93 6 12 6m0-4C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-1.85.63-3.55 1.69-4.9l2.86 2.86c.21 1.56 1.43 2.79 2.99 2.99l2.2 2.2Q12.885 15 12 15c-2.32 0-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12m8 8c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5m6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.54-1.69 4.9',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
