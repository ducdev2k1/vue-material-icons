import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CasesSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M18 5V1h-8v4H5v13h18V5zm-2 0h-4V3h4zM3 9H1v13h18v-2H3z',
        props,
        attrs
      );
  },
});