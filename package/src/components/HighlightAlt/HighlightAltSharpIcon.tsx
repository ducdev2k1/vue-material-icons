import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HighlightAltSharpIcon',
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
              d: 'M17 5h-2V3h2zm2-2v2h2V3zm0 6h2V7h-2zm0 4h2v-2h-2zm-8 8h2v-2h-2zM7 5h2V3H7zM3 5h2V3H3zm0 12h2v-2H3zm0 4h2v-2H3zm8-16h2V3h-2zM3 9h2V7H3zm4 12h2v-2H7zm-4-8h2v-2H3zm12 2v6l2.29-2.29 2.3 2.29L21 19.59l-2.29-2.29L21 15z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
