import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PivotTableChartTwoToneIcon',
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
              d: 'M21 5c0-1.1-.9-2-2-2h-9v5h11zM3 19c0 1.1.9 2 2 2h3V10H3zM3 5v3h5V3H5c-1.1 0-2 .9-2 2m15 4-4 4h3v2c0 1.1-.9 2-2 2h-2v-3l-4 4 4 4v-3h2c2.21 0 4-1.79 4-4v-2h3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
