import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DirectionsBusFilledOutlinedIcon',
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
              d: 'M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2.06c.62-.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4m0 2c3.71 0 5.13.46 5.67 1H6.43c.6-.52 2.05-1 5.57-1m6 11c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-3h12zm0-5H6V7h12z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
