import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DataObjectSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 10H2v4h2v6h6v-2H6v-5.5H4v-1h2V6h4V4H4zm16 0V4h-6v2h4v5.5h2v1h-2V18h-4v2h6v-6h2v-4z',
        props,
        attrs
      );
  },
});