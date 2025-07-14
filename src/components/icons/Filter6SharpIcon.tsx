import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Filter6SharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zm-10-2h6V9h-4V7h4V5h-6zm2-4h2v2h-2z',
        props,
        attrs
      );
  },
});