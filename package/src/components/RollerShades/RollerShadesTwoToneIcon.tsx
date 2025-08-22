import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RollerShadesTwoToneIcon',
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
              d: 'M6 5h12v6H6z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 19V3H4v16H2v2h20v-2zm-2 0H6v-6h5v1.82c-.45.32-.75.84-.75 1.43 0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75c0-.59-.3-1.12-.75-1.43V13h5zm0-8H6V5h12z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
