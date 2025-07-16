import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextRotationDownOutlinedIcon',
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
              d: 'm6 20 3-3H7V4H5v13H3zm6.2-11.5v5l-2.2.9v2.1l11-4.75v-1.5L10 5.5v2.1zm6.82 2.5L14 12.87V9.13z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
