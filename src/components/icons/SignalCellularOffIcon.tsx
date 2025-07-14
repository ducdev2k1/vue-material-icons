import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignalCellularOffIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm21 1-8.59 8.59L21 18.18zM4.77 4.5 3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73z',
        props,
        attrs
      );
  },
});