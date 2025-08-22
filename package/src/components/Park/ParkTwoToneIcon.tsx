import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ParkTwoToneIcon',
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
              d: 'M13.26 10h1.9l-3.15-4.5L8.88 10h1.81l-3.9 6h10.47z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21zM6.79 16l3.9-6H8.88l3.13-4.5 3.15 4.5h-1.9l4 6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
