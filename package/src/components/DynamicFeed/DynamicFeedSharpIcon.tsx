import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DynamicFeedSharpIcon',
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
              d: 'M8 8H6v9h11v-2H8z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22 3H10v10h12zm-2 8h-8V7h8zM4 12H2v9h11v-2H4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
