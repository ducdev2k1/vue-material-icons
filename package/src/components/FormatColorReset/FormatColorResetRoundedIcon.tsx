import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormatColorResetRoundedIcon',
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
              d: 'M18 14c0-3.09-3.6-7.88-5.23-9.87-.4-.49-1.15-.49-1.55 0-.46.57-1.08 1.36-1.73 2.27l8.44 8.44c.04-.28.07-.56.07-.84m1.29 5.01L6.12 5.84a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.61 2.61C6.55 11.33 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.95-1.5l1.92 1.92c.39.39 1.02.39 1.41 0 .4-.38.4-1.02.01-1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
