import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FolderCopySharpIcon',
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
              d: 'M3 6H1v15h19v-2H3z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M23 4h-9l-2-2H5.01L5 17h18z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
