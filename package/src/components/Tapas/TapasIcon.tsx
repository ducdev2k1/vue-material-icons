import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TapasIcon',
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
              d: 'M22 10V1h-8v9c0 1.86 1.28 3.41 3 3.86V21h-2v2h6v-2h-2v-7.14c1.72-.45 3-2 3-3.86m-2-7v3h-4V3zm-7.5 8.5c0 1.38-1.12 2.5-2.5 2.5H8v9H6v-9H4c-1.38 0-2.5-1.12-2.5-2.5S2.62 9 4 9h2V8H4C2.62 8 1.5 6.88 1.5 5.5S2.62 3 4 3h2V1h2v2h2c1.38 0 2.5 1.12 2.5 2.5S11.38 8 10 8H8v1h2c1.38 0 2.5 1.12 2.5 2.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
