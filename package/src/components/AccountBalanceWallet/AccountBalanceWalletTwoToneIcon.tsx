import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccountBalanceWalletTwoToneIcon',
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
              d: 'M13 17c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6V5H5v14h14v-2z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72M20 9v6h-7V9zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '16',
              cy: '12',
              r: '1.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
