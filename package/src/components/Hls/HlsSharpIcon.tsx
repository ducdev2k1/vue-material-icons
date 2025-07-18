import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HlsSharpIcon',
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
              d: 'M6.5 9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2zm9 6h5v-3.5H17v-1h2v.5h1.5V9h-5v3.5H19v1h-2V13h-1.5zM14 15v-1.5h-2.5V9H10v6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
