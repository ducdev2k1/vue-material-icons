import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RedeemRoundedIcon',
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
              d: 'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m10 15H5c-.55 0-1-.45-1-1v-1h16v1c0 .55-.45 1-1 1m1-5H4V9c0-.55.45-1 1-1h4.08L7.6 10.02c-.33.45-.23 1.08.22 1.4.44.32 1.07.22 1.39-.22L12 7.4l2.79 3.8c.32.44.95.54 1.39.22.45-.32.55-.95.22-1.4L14.92 8H19c.55 0 1 .45 1 1z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
