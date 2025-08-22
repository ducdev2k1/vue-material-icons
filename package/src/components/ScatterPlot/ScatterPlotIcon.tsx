import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScatterPlotIcon',
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
            tag: 'circle',
            props: {
              cx: '7',
              cy: '14',
              r: '3',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '11',
              cy: '6',
              r: '3',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '16.6',
              cy: '17.6',
              r: '3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
