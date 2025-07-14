import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VerticalSplitIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3 15h8v-2H3zm0 4h8v-2H3zm0-8h8V9H3zm0-6v2h8V5zm10 0h8v14h-8z',
        props,
        attrs
      );
  },
});