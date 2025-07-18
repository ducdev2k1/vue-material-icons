import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Face6OutlinedIcon',
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
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 2c3.68 0 6.78 2.51 7.71 5.9-.6-.16-1.33-.37-2.26-2.24C16.94 6.64 15.91 6 14.76 6H9.24c-1.15 0-2.18.64-2.69 1.66-.93 1.86-1.58 2.06-2.26 2.24C5.22 6.51 8.32 4 12 4m0 16c-4.41 0-8-3.59-8-8v-.03c2.31-.22 3.43-1.59 4.34-3.41.17-.35.51-.56.9-.56h5.53c.38 0 .72.21.89.55.9 1.8 1.99 3.19 4.34 3.41v.03c0 4.42-3.59 8.01-8 8.01',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
