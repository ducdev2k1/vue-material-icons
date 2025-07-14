import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocalShippingTwoToneIcon',
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
              d: 'M3 15h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H15V6H3z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
