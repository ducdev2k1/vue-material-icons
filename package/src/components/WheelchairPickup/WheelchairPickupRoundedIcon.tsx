import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WheelchairPickupRoundedIcon',
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
              d: 'M4.5 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2m5.5 6.95V9c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h1v6c0 .55.45 1 1 1h2.5v-.11c-1.24-1.26-2-2.99-2-4.89 0-2.58 1.41-4.84 3.5-6.05M16.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3c0-1.11.61-2.06 1.5-2.58v-2.16c-2.02.64-3.5 2.51-3.5 4.74 0 2.76 2.24 5 5 5s5-2.24 5-5zm2.5-3h-4V9c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1h4.46l1.92 2.88c.31.46.93.58 1.39.28.46-.31.58-.93.28-1.39l-2.21-3.32c-.19-.28-.51-.45-.84-.45',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
