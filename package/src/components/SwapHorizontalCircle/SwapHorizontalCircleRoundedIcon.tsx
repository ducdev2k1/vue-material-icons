import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwapHorizontalCircleRoundedIcon',
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
              d: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-7-5.5 3.15 3.15c.2.2.2.51 0 .71L15 13.5V11h-4V9h4zm-6 11-3.15-3.15c-.2-.2-.2-.51 0-.71L9 10.5V13h4v2H9z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
