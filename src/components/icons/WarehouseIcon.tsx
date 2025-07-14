import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WarehouseIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M22 21V7L12 3 2 7v14h5v-9h10v9zm-11-2H9v2h2zm2-3h-2v2h2zm2 3h-2v2h2z',
        props,
        attrs
      );
  },
});