import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PivotTableChartIcon',
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
              d: 'M10 8h11V5c0-1.1-.9-2-2-2h-9zM3 8h5V3H5c-1.1 0-2 .9-2 2zm2 13h3V10H3v9c0 1.1.9 2 2 2m8 1-4-4 4-4zm1-9 4-4 4 4zm.58 6H13v-2h1.58c1.33 0 2.42-1.08 2.42-2.42V13h2v1.58c0 2.44-1.98 4.42-4.42 4.42',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
