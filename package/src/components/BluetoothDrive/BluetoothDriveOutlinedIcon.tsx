import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BluetoothDriveOutlinedIcon',
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
              cx: '6.5',
              cy: '14.5',
              r: '1.5',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '15.5',
              cy: '14.5',
              r: '1.5',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18 17H4v-5h11v-2H4.81l1.04-3H15V5H5.5c-.66 0-1.21.42-1.42 1.01L2 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8h-2z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22 3.85 19.15 1h-.5v3.79l-2.3-2.29-.7.7L18.44 6l-2.79 2.79.7.71 2.3-2.3V11h.5L22 8.14 19.85 6zm-2.35-.94.94.94-.94.94zm.94 5.23-.94.94V7.2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
