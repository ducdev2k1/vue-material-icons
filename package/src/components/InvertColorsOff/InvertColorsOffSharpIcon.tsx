import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InvertColorsOffSharpIcon',
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
              d: 'M21.19 21.19 2.81 2.81 1.39 4.22l4.2 4.2c-1 1.31-1.6 2.94-1.6 4.7C4 17.48 7.58 21 12 21c1.75 0 3.36-.56 4.67-1.5l3.1 3.1zM12 19c-3.31 0-6-2.63-6-5.87 0-1.19.36-2.32 1.02-3.28L12 14.83zM8.38 5.56 12 2l5.65 5.56C19.1 8.99 20 10.96 20 13.13c0 1.18-.27 2.29-.74 3.3L12 9.17V4.81L9.8 6.97z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
