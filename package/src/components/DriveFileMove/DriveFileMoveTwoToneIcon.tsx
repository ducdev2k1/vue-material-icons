import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DriveFileMoveTwoToneIcon',
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
              d: 'M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l1.41 1.41.59.59H20z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M8 14h4v3l4-4-4-4v3H8z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M10.59 7.41 9.17 6H4v12h16V8h-8.83zM12 9l4 4-4 4v-3H8v-2h4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
