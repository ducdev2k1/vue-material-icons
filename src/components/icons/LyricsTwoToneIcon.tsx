import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LyricsTwoToneIcon',
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
              d: 'M4 4v14l2-2h9v-4.03c-.62-.83-1-1.85-1-2.97s.38-2.14 1-2.97V4zm6 10H6v-2h4zm3-3H6V9h7zm0-3H6V6h7z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
