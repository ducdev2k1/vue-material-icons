import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HtmlSharpIcon',
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
              d: 'M3.5 9H5v6H3.5v-2.5h-2V15H0V9h1.5v2h2zm15 0H12v6h1.5v-4.5h1V14H16v-3.51h1V15h1.5zM11 9H6v1.5h1.75V15h1.5v-4.5H11zm13 6v-1.5h-2.5V9H20v6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
