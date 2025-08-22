import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DiamondTwoToneIcon',
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
              d: 'M8.88 5H6.24l-1.5 3h2.64zm10.38 3-1.5-3h-2.64l1.5 3zM11 16.68V10H5.44zm2 0L18.56 10H13zM12.88 5h-1.76l-1.5 3h4.76z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M19 3H5L2 9l10 12L22 9zm-1.24 2 1.5 3h-2.65l-1.5-3zM6.24 5h2.65l-1.5 3H4.74zM11 16.68 5.44 10H11zM9.62 8l1.5-3h1.76l1.5 3zM13 16.68V10h5.56z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
