import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AirlineSeatLegroomNormalRoundedIcon',
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
              d: 'M5 12V4c0-.55-.45-1-1-1s-1 .45-1 1v8c0 2.76 2.24 5 5 5h5c.55 0 1-.45 1-1s-.45-1-1-1H8c-1.66 0-3-1.34-3-3m15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v5c0 1.1.9 2 2 2h2.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
