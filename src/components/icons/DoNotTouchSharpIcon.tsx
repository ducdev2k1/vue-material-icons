import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DoNotTouchSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm13 10.17-2.5-2.5V1H13zM20 4h-2.5v7h-1V2H14v9.17l6 6zM9.5 3H7.01v1.18L9.5 6.67zm11.69 18.19L2.81 2.81 1.39 4.22 7 9.83v4.3l-3.32-1.9L2 13.88 9.68 22h9.54l.56.61z',
        props,
        attrs
      );
  },
});