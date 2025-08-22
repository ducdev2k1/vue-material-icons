import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShapeLineSharpIcon',
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
              d: 'M6 11c2.76 0 5-2.24 5-5S8.76 1 6 1 1 3.24 1 6s2.24 5 5 5m17 3h-9v9h9z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M17.71 7.7c.4.19.83.3 1.29.3 1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3c0 .46.11.89.3 1.29L6.29 16.3c-.4-.19-.83-.3-1.29-.3-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.46-.11-.89-.3-1.29z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
