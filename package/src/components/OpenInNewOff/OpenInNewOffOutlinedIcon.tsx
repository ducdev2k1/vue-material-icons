import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OpenInNewOffOutlinedIcon',
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
              d: 'M16.79 5.8 14 3h7v7l-2.79-2.8-4.09 4.09-1.41-1.41zM19 12v4.17l2 2V12zm.78 10.61L18.17 21H5c-1.11 0-2-.9-2-2V5.83L1.39 4.22 2.8 2.81l18.38 18.38zM16.17 19l-4.88-4.88-1.59 1.59-1.41-1.41 1.59-1.59L5 7.83V19zM7.83 5H12V3H5.83z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
