import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoFlashTwoToneIcon',
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
              d: 'm13.42 16.24 2.55 2.55-.01 1.21H4v-8.6h3.02l.59-.65.15-.16 1.5 1.5c-1.58.34-2.76 1.73-2.76 3.41 0 1.93 1.57 3.5 3.5 3.5 1.68 0 3.07-1.18 3.42-2.76M16 13.17V11.4h-1.77z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
