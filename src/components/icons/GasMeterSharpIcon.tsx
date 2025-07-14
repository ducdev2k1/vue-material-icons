import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GasMeterSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M20 4h-5V2h-2v2h-2V2H9v2H4v18h16zm-8 14c-1.38 0-2.5-1.1-2.5-2.46 0-1.09.43-1.39 2.5-3.79 2.05 2.38 2.5 2.7 2.5 3.79C14.5 16.9 13.38 18 12 18m4-8H8V8h8z',
        props,
        attrs
      );
  },
});