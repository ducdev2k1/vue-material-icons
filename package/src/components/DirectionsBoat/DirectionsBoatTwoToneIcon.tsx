import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DirectionsBoatTwoToneIcon',
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
              d: 'M6.49 15.68 8 13.96l1.51 1.72c.34.4 1.28 1.32 2.49 1.32s2.15-.92 2.49-1.32L16 13.96l1.51 1.72c.2.23.6.64 1.14.94l1.12-3.97-2.39-.78L12 10.11l-5.38 1.77-2.4.79 1.13 3.96c.55-.31.94-.72 1.14-.95M11 3h2v1h-2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
