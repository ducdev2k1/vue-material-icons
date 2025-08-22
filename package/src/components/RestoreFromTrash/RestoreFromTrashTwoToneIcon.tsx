import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RestoreFromTrashTwoToneIcon',
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
              d: 'M16 14h-2v4h-4v-4H8v5h8zm0 0V9H8v5l4-4z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2-5V9h8v10H8zm7.5-10-1-1h-5l-1 1H5v2h14V4zM10 18h4v-4h2l-4-4-4 4h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
