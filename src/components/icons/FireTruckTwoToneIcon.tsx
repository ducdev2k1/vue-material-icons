import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FireTruckTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3 16h1.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H12v-3H3zm11 0h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H21v-3h-7z',
        props,
        attrs
      );
  },
});