import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MouseOutlinedIcon',
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
              d: 'M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8zm-2 0h-5V3.16c2.81.47 4.96 2.9 5 5.84m-7-5.84V9H6c.04-2.94 2.19-5.37 5-5.84M18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
