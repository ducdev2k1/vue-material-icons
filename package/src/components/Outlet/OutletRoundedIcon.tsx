import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OutletRoundedIcon',
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
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9 12c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1m4 6h-2c-.55 0-1-.45-1-1v-.89c0-1 .68-1.92 1.66-2.08 1.26-.21 2.34.76 2.34 1.97v1c0 .55-.45 1-1 1m3-7c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
