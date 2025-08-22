import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DiscountSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'path',
            props: {
              d: 'M12.79 21 3 11.21v2.83l9.79 9.79 9.04-9.04-1.42-1.41z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm3 9.04 9.79 9.79 9.04-9.04L12.04 0H3zM7.25 3c.69 0 1.25.56 1.25 1.25S7.94 5.5 7.25 5.5 6 4.94 6 4.25 6.56 3 7.25 3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
