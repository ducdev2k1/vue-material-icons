import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StrollerTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M10 5c.29 0 .58.02.86.05L9.49 6.66l-1.4-1.4C8.71 5.09 9.35 5 10 5m5 3.66V15H9.6z',
        props,
        attrs
      );
  },
});