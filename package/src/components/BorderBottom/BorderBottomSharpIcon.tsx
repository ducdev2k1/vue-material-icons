import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BorderBottomSharpIcon',
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
              d: 'M9 11H7v2h2zm4 4h-2v2h2zM9 3H7v2h2zm4 8h-2v2h2zM5 3H3v2h2zm8 4h-2v2h2zm4 4h-2v2h2zm-4-8h-2v2h2zm4 0h-2v2h2zm2 10h2v-2h-2zm0 4h2v-2h-2zM5 7H3v2h2zm14-4v2h2V3zm0 6h2V7h-2zM5 11H3v2h2zM3 21h18v-2H3zm2-6H3v2h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
