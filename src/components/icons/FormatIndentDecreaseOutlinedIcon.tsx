import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormatIndentDecreaseOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M11 17h10v-2H11zm-8-5 4 4V8zm0 9h18v-2H3zM3 3v2h18V3zm8 6h10V7H11zm0 4h10v-2H11z',
        props,
        attrs
      );
  },
});