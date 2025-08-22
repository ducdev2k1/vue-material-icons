import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableChartTwoToneIcon',
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
              d: 'M5 5h15v3H5zm12 5h3v9h-3zm-7 0h5v9h-5zm-5 0h3v9H5z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8 19H5v-9h3zm7 0h-5v-9h5zm5 0h-3v-9h3zm0-11H5V5h15z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
