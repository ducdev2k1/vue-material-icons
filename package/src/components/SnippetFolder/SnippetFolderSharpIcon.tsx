import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SnippetFolderSharpIcon',
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
              d: 'm12 6-2-2H2v16h20V6zm7 11h-6V9h3.5l2.5 2.5zm-3.12-6.5 1.62 1.62v3.38h-3v-5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
