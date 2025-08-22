import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SkipNextTwoToneIcon',
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
              d: 'M8 9.86v4.28L11.03 12z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M14.5 12 6 6v12zM8 9.86 11.03 12 8 14.14zM16 6h2v12h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
