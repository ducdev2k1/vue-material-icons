import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormatLineSpacingTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M10 5h12v2H10zm0 12h12v2H10zm-8.5 0L5 20.5 8.5 17H6V7h2.5L5 3.5 1.5 7H4v10zm8.5-6h12v2H10z',
        props,
        attrs
      );
  },
});