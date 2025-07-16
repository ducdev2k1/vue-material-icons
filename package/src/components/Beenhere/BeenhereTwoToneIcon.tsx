import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BeenhereTwoToneIcon',
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
              d: 'M19 3H5v12.93l7 4.66 7-4.67zm-9 13-4-4 1.41-1.41 2.58 2.58 6.59-6.59L18 8z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
