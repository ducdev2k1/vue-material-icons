import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwipeDownAltTwoToneIcon',
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
            tag: 'circle',
            props: {
              cx: '12',
              cy: '9',
              r: '3',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M13 13.9c2.28-.46 4-2.48 4-4.9 0-2.76-2.24-5-5-5S7 6.24 7 9c0 2.42 1.72 4.44 4 4.9v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17zM15 9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
