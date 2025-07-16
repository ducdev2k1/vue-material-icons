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
        ],
        props,
        attrs,
      );
  },
});
