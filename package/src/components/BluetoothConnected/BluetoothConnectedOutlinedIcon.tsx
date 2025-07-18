import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BluetoothConnectedOutlinedIcon',
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
              d: 'm7 12-2-2-2 2 2 2zm10.71-4.29L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29zM13 5.83l1.88 1.88L13 9.59zm1.88 10.46L13 18.17v-3.76zM19 10l-2 2 2 2 2-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
