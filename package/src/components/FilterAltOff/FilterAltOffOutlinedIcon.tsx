import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterAltOffOutlinedIcon',
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
              d: 'm16.95 6-3.57 4.55 1.43 1.43c1.03-1.31 4.98-6.37 4.98-6.37C20.3 4.95 19.83 4 19 4H6.83l2 2zM2.81 2.81 1.39 4.22 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78 1.41-1.41z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
