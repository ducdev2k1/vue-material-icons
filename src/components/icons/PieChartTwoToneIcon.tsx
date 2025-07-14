import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PieChartTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 12c0 4.07 3.06 7.44 7 7.93V4.07C7.06 4.56 4 7.93 4 12m9 7.93c3.61-.45 6.48-3.32 6.93-6.93H13zm0-15.86V11h6.93c-.45-3.61-3.32-6.48-6.93-6.93',
        props,
        attrs
      );
  },
});