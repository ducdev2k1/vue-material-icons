import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShapeLineTwoToneIcon',
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
              d: 'M16 16h5v5h-5z',
              opacity: '.3',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '6',
              cy: '6',
              r: '3',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M6 11c2.76 0 5-2.24 5-5S8.76 1 6 1 1 3.24 1 6s2.24 5 5 5m0-8c1.65 0 3 1.35 3 3S7.65 9 6 9 3 7.65 3 6s1.35-3 3-3m15 11h-5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2m0 7h-5v-5h5z',
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
