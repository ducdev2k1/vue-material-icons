import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CurtainsTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6 13.14V19h3.94c-.3-2.93-1.89-5.27-3.94-5.86M9.94 5H6v5.86C8.05 10.27 9.64 7.93 9.94 5m4.12 14H18v-5.86c-2.05.59-3.64 2.93-3.94 5.86M18 10.86V5h-3.94c.3 2.93 1.89 5.27 3.94 5.86',
        props,
        attrs
      );
  },
});