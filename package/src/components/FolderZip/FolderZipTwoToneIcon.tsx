import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FolderZipTwoToneIcon',
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
              d: 'M16 16h2v-2h-2v-2h2v-2h-2V8h4v10h-4zm0 0h-2v2H4V6h5.17l2 2H14v2h2v2h-2v2h2z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-4 10h2v-2h-2v-2h2v-2h-2V8h4v10h-4zm0 0h-2v2H4V6h5.17l2 2H14v2h2v2h-2v2h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
