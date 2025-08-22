import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlindsTwoToneIcon',
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
              d: 'M6 9h8v2H6zm0-4h8v2H6zm10 4h2v2h-2zm0-4h2v2h-2z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 19V3H4v16H2v2h20v-2zM6 5h8v2H6zm0 4h8v2H6zm12 10H6v-6h8v1.82c-.45.32-.75.84-.75 1.43 0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75c0-.59-.3-1.12-.75-1.43V13h2zm0-8h-2V9h2zm0-4h-2V5h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
