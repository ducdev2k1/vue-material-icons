import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CandlestickChartTwoToneIcon',
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
              d: 'M9 4H7v2H5v12h2v2h2v-2h2V6H9zm0 12H7V8h2z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 8h2v8H7zm8 2h2v3h-2z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M19 8h-2V4h-2v4h-2v7h2v5h2v-5h2zm-2 5h-2v-3h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
