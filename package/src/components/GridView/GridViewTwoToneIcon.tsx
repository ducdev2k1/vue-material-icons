import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GridViewTwoToneIcon',
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
              d: 'M5 5h4v4H5zm0 10h4v4H5zm10 0h4v4h-4zm0-10h4v4h-4z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 21h8v-8H3zm2-6h4v4H5zm-2-4h8V3H3zm2-6h4v4H5zm8 16h8v-8h-8zm2-6h4v4h-4zM13 3v8h8V3zm6 6h-4V5h4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
