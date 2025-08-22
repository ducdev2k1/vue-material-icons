import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SkipPreviousTwoToneIcon',
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
              d: 'M16 14.14V9.86L12.97 12z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M6 6h2v12H6zm12 12V6l-8.5 6zm-2-3.86L12.97 12 16 9.86z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
