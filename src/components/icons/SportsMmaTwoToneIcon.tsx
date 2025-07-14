import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SportsMmaTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M15 5H7v5.6c0 .14.64 3.4.64 3.4h8.72s.64-3.26.64-3.4V10h-2zm-1 5H8V7h6z',
        props,
        attrs
      );
  },
});