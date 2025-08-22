import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RepartitionTwoToneIcon',
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
              d: 'M15.67 17H19v2h-3.33zm-5.34 0h3.33v2h-3.33zM5 17h3.33v2H5z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 21h18v-6H3zm12.67-4H19v2h-3.33zm-5.34 0h3.33v2h-3.33zM5 17h3.33v2H5zm1-7 1.42-1.42L5.83 7H17c1.1 0 2 .9 2 2s-.9 2-2 2H3v2h14c2.21 0 4-1.79 4-4s-1.79-4-4-4H5.83l1.59-1.59L6 2 2 6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
