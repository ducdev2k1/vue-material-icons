import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditAttributesTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M17.63 9H6.37C5.09 9 4 10.37 4 12s1.09 3 2.37 3h11.26c1.28 0 2.37-1.37 2.37-3s-1.09-3-2.37-3M7.24 14.46l-2.57-2.57.7-.7 1.87 1.87 3.52-3.52.7.7z',
        props,
        attrs
      );
  },
});