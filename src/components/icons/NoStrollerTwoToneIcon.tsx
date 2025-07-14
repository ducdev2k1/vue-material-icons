import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoStrollerTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M8.1 5.27C8.71 5.1 9.35 5 10 5c.29 0 .58.02.86.05L9.49 6.67zm6.9 6.9V8.66l-1.61 1.89zM12.17 15l-1.39-1.39L9.6 15z',
        props,
        attrs
      );
  },
});