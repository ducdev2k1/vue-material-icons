import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommentBankTwoToneIcon',
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
              d: 'm4 18 2-2h14V4H4zm9-12h5v8l-2.5-1.5L13 14z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18 14V6h-5v8l2.5-1.5z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
