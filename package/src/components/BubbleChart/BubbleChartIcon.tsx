import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BubbleChartIcon',
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
              cx: '7.2',
              cy: '14.4',
              r: '3.2',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '14.8',
              cy: '18',
              r: '2',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '15.2',
              cy: '8.8',
              r: '4.8',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
