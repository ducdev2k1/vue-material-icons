import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Filter2SharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zm-4-4h-4v-2h4V5h-6v2h4v2h-4v6h6z',
        props,
        attrs
      );
  },
});