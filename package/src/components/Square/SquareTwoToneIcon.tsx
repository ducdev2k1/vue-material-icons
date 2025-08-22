import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SquareTwoToneIcon',
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
              d: 'M5 5h14v14H5z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 3v18h18V3zm16 16H5V5h14z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
