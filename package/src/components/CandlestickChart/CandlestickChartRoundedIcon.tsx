import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CandlestickChartRoundedIcon',
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
              d: 'M8 4c-.55 0-1 .45-1 1v1H6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H9V5c0-.55-.45-1-1-1m10 4h-1V5c0-.55-.45-1-1-1s-1 .45-1 1v3h-1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h1v4c0 .55.45 1 1 1s1-.45 1-1v-4h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
