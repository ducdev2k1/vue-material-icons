import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TapasSharpIcon',
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
              d: 'M22 10V1h-8v9c0 1.86 1.28 3.41 3 3.86V21h-2v2h6v-2h-2v-7.14c1.72-.45 3-2 3-3.86m-2-7v3h-4V3zM10 9H8V8h2c1.38 0 2.5-1.12 2.5-2.5S11.38 3 10 3H8V1H6v2H4C2.62 3 1.5 4.12 1.5 5.5S2.62 8 4 8h2v1H4c-1.38 0-2.5 1.12-2.5 2.5S2.62 14 4 14h2v9h2v-9h2c1.38 0 2.5-1.12 2.5-2.5S11.38 9 10 9',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
