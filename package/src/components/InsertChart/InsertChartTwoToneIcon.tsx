import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InsertChartTwoToneIcon',
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
              d: 'M19 5H5v14h14zM9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m2 0h14v14H5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
