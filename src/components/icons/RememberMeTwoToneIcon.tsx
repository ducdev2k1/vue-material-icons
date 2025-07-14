import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RememberMeTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7 20h10v1H7zm0-2.48V18h10v-.48c-1.47-.99-3.22-1.52-5-1.52s-3.53.53-5 1.52',
        props,
        attrs
      );
  },
});