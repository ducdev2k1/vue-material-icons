import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeyboardDoubleArrowUpIcon',
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
              d: 'M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
