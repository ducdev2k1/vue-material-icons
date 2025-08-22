import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FolderCopyTwoToneIcon',
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
              d: 'M11.17 4H7v11h14V6h-7.83z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M21 4h-7l-2-2H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 11H7V4h4.17l2 2H21z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 6H1v13c0 1.1.9 2 2 2h17v-2H3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
