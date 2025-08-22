import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SendTwoToneIcon',
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
              d: 'm4 8.25 7.51 1-7.5-3.22zm.01 9.72 7.5-3.22-7.51 1z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M2.01 3 2 10l15 2-15 2 .01 7L23 12zM4 8.25V6.03l7.51 3.22zm.01 9.72v-2.22l7.51-1z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
