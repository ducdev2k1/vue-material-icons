import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MobileOffSharpIcon',
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
              d: 'M17 5v8.61l2 2V1H5v.61L8.39 5zM2.9 2.35 1.49 3.76 5 7.27V23h14v-1.73l1.7 1.7 1.41-1.41zM7 19V9.27L16.73 19z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
