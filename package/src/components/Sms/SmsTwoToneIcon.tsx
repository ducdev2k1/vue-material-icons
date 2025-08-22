import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SmsTwoToneIcon',
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
              d: 'M4 17.17 5.17 16H20V4H4zM15 9h2v2h-2zm-4 0h2v2h-2zM7 9h2v2H7z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
