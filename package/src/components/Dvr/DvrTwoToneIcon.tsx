import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DvrTwoToneIcon',
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
              d: 'M3 17h18V5H3zm5-9h11v2H8zm0 4h11v2H8zM5 8h2v2H5zm0 4h2v2H5z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M8 12h11v2H8zm0-4h11v2H8zm13-5H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 14H3V5h18zM5 12h2v2H5zm0-4h2v2H5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
