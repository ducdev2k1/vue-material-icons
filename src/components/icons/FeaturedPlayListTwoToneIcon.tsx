import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FeaturedPlayListTwoToneIcon',
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
              d: 'M3 19h18V5H3zM5 7h9v2H5zm0 3h9v2H5z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
