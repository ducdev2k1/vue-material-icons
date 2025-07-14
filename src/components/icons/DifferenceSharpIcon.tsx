import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DifferenceSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M18 23H2V7h2v14h14zM15 1H6.01L6 19h15V7zm1.5 14h-6v-2h6zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2z',
        props,
        attrs
      );
  },
});