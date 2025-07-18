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
        ],
        props,
        attrs,
      );
  },
});
