import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WifiChannelTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M13 21c.5-2.53 2-6 3-6s2.5 3.53 3 6zm-7.99 0c.61-5.27 2-9.82 2.99-10.87.98 1.05 2.38 5.61 2.99 10.87zM16 13c-.99 0-1.82.62-2.5 1.5.57-4.77 1.54-8.62 2.5-9.44.97.81 1.91 4.67 2.49 9.43C17.81 13.62 16.98 13 16 13',
        props,
        attrs
      );
  },
});