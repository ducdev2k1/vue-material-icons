import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BorderOuterTwoToneIcon',
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
              d: 'M11 11h2v2h-2zm0-4h2v2h-2zm10-4H3v18h18zm-2 16H5V5h14zm-4-8h2v2h-2zm-8 0h2v2H7zm4 4h2v2h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
