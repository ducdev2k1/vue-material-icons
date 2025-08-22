import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SportsGolfIcon',
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
              d: 'M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7m0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '10',
              cy: '8',
              r: '1',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '14',
              cy: '8',
              r: '1',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '12',
              cy: '6',
              r: '1',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 19h2c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h2v-2H7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
