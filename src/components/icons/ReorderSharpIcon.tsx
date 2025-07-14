import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReorderSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3 15h18v-2H3zm0 4h18v-2H3zm0-8h18V9H3zm0-6v2h18V5z',
        props,
        attrs
      );
  },
});