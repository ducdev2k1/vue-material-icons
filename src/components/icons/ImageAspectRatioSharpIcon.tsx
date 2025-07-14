import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageAspectRatioSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16 10h-2v2h2zm0 4h-2v2h2zm-8-4H6v2h2zm4 0h-2v2h2zm10-6H2v16h20zm-2 14H4V6h16z',
        props,
        attrs
      );
  },
});