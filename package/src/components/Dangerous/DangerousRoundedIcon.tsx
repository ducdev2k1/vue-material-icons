import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DangerousRoundedIcon',
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
              d: 'M14.9 3H9.1c-.53 0-1.04.21-1.42.59l-4.1 4.1C3.21 8.06 3 8.57 3 9.1v5.8c0 .53.21 1.04.59 1.41l4.1 4.1c.37.38.88.59 1.41.59h5.8c.53 0 1.04-.21 1.41-.59l4.1-4.1c.38-.37.59-.88.59-1.41V9.1c0-.53-.21-1.04-.59-1.41l-4.1-4.1c-.37-.38-.88-.59-1.41-.59m.64 12.54c-.39.39-1.02.39-1.41 0L12 13.41l-2.12 2.12c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41L10.59 12 8.46 9.88a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.12-2.12c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 12l2.12 2.12c.4.39.4 1.03.01 1.42',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
