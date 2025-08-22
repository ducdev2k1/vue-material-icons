import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AirlinesTwoToneIcon',
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
              d: 'M14.05 6 5.8 18h11.54l2.25-12zm.45 8c-1.38 0-2.5-1.12-2.5-2.5S13.12 9 14.5 9s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M17.34 18H5.8l8.25-12h5.54zM13 4 2 20h17l3-16zm1.5 5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S15.88 9 14.5 9',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
