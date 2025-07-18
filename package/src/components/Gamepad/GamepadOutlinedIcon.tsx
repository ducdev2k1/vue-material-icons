import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GamepadOutlinedIcon',
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
              d: 'M13 4v2.67l-1 1-1-1V4zm7 7v2h-2.67l-1-1 1-1zM6.67 11l1 1-1 1H4v-2zM12 16.33l1 1V20h-2v-2.67zM15 2H9v5.5l3 3 3-3zm7 7h-5.5l-3 3 3 3H22zM7.5 9H2v6h5.5l3-3zm4.5 4.5-3 3V22h6v-5.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
