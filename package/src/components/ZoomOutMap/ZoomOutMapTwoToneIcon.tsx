import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ZoomOutMapTwoToneIcon',
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
              d: 'm17.3 5.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM9 3H3v6l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3zm-.83 11.41L5.3 17.3 3 15v6h6l-2.3-2.3 2.89-2.87zm7.66 0-1.42 1.42 2.89 2.87L15 21h6v-6l-2.3 2.3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
