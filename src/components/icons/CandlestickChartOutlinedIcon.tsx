import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CandlestickChartOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M9 4H7v2H5v12h2v2h2v-2h2V6H9zm0 12H7V8h2zm10-8h-2V4h-2v4h-2v7h2v5h2v-5h2zm-2 5h-2v-3h2z',
        props,
        attrs
      );
  },
});