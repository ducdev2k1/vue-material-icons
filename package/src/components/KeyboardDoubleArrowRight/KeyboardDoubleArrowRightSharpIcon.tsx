import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeyboardDoubleArrowRightSharpIcon',
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
              d: 'M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
