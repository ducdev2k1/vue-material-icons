import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HorizontalSplitTwoToneIcon',
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
              d: 'M19 15v2H5v-2zm2-10H3v2h18zm0 4H3v2h18zm0 4H3v6h18z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M5 15h14v2H5z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
