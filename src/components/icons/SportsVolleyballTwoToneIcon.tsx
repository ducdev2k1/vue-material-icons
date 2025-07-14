import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SportsVolleyballTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6 6.73C4.76 8.14 4 9.98 4 12c0 1.1.23 2.14.63 3.1L6 14.31zm5-2.65c-.25.06-1.98.42-3 1.01v8.07l3-1.73zm2-.01v1.58l6.54 3.79c-.97-2.85-3.47-4.99-6.54-5.37m-1 9.08-6.36 3.67c.64.85 1.46 1.55 2.38 2.09L15 14.89zm1-5.19v3.46l6.37 3.68c.4-.95.63-1.99.63-3.09zm-2.58 11.88c.51.1 1.04.16 1.58.16 2.6 0 4.9-1.25 6.36-3.17L17 16.04z',
        props,
        attrs
      );
  },
});