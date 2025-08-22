import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QuickreplySharpIcon',
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
              d: 'M22 2H2v20l4-4h9v-8h7z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22.5 16h-2.2l1.7-4h-5v6h2v5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
