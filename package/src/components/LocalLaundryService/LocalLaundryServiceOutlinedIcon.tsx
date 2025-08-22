import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocalLaundryServiceOutlinedIcon',
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
              d: 'M18 2.01 6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99M18 20H6L5.99 4H18z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '8',
              cy: '6',
              r: '1',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '11',
              cy: '6',
              r: '1',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M12 19c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m2.36-7.36c1.3 1.3 1.3 3.42 0 4.72s-3.42 1.3-4.72 0z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
