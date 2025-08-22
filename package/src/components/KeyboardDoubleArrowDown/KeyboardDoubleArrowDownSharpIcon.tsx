import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeyboardDoubleArrowDownSharpIcon',
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
              d: 'M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
