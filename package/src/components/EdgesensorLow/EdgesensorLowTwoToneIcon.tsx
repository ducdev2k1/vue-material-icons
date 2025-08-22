import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EdgesensorLowTwoToneIcon',
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
              d: 'M8 4h8v1H8zm0 15h8v1H8z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 10h2v7h-2zM2 7h2v7H2zm14-4.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99M16 20H8v-1h8zm0-3H8V7h8zm0-12H8V4h8z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
