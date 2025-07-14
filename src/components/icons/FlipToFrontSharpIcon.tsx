import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlipToFrontSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm12 12h2v-2h-2zm6-18H7v14h14zm-2 12H9V5h10zm-8 6h2v-2h-2zm-4 0h2v-2H7zm-4 0h2v-2H3z',
        props,
        attrs
      );
  },
});