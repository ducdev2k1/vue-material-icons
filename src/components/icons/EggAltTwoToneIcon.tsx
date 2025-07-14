import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EggAltTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M17.59 10.42c-.69-.68-1.21-1.51-1.76-2.39C14.48 5.86 13.31 4 9.97 4c-1.62 0-2.96.52-3.98 1.55C4.68 6.88 3.97 8.99 4 11.5c.05 4.51 4.33 5.5 5.97 5.5 1.69 0 2.68 1.05 3.34 1.74.72.76 1.19 1.26 2.68 1.26 1.89 0 4.01-2.13 4.01-4.98 0-2.2-.51-2.71-2.41-4.6M12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5',
        props,
        attrs
      );
  },
});