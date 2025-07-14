import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElectricRickshawTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3 13h.17c.41-1.16 1.53-2 2.83-2 .35 0 .69.06 1 .17V10H3zm16-2h-3v2h1.17c.3-.85.98-1.53 1.83-1.83z',
        props,
        attrs
      );
  },
});