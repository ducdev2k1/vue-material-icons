import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SelectAllSharpIcon',
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
              d: 'M3 13h2v-2H3zm4 8h2v-2H7zM3 9h2V7H3zm10-6h-2v2h2zM3 17h2v-2H3zM9 3H7v2h2zM5 3H3v2h2zm6 18h2v-2h-2zm8-8h2v-2h-2zm0-4h2V7h-2zm0 8h2v-2h-2zm-4 4h2v-2h-2zm0-16h2V3h-2zm4 0h2V3h-2zm0 16h2v-2h-2zM3 21h2v-2H3zm4-4h10V7H7zm2-8h6v6H9z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
