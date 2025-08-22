import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VerticalShadesTwoToneIcon',
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
              d: 'M6 5h2v14H6zm10 0h2v14h-2z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 19V3H4v16H2v2h20v-2zM8 19H6V5h2zm6 0h-4V5h4zm4 0h-2V5h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
