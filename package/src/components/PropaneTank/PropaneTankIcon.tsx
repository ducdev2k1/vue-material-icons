import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PropaneTankIcon',
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
              d: 'M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3zm16-2v-3c0-1.86-1.28-3.41-3-3.86V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v3zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
