import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EdgesensorLowSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M2 7h2v7H2zm18 3h2v7h-2zM6 2v20h12V2zm10 15H8V7h8z',
        props,
        attrs
      );
  },
});