import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HowToRegTwoToneIcon',
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
              cx: '11',
              cy: '8',
              r: '2',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M5 18h4.99L9 17l.93-.94C7.55 16.33 5.2 17.37 5 18',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m-1 12H5c.2-.63 2.55-1.67 4.93-1.94h.03l.46-.45L12 14.06c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9zm10.6-5.5-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
