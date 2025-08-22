import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MarginTwoToneIcon',
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
              d: 'M5 19h14V5H5zM15 7h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm0 4h2v2h-2zM7 7h2v2H7zm0 4h2v2H7z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 7h2v2H7zm0 4h2v2H7z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 3v18h18V3zm16 16H5V5h14z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M11 7h2v2h-2zm4 4h2v2h-2zm-4 0h2v2h-2zm4-4h2v2h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
