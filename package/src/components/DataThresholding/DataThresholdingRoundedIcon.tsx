import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DataThresholdingRoundedIcon',
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
              d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7.62 5.88 1.29 1.29 2.96-2.96c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-3.67 3.67c-.39.39-1.02.39-1.41 0L10.67 11l-2.3 2.3c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41l3-3c.39-.41 1.02-.41 1.42-.01M5 16h1.72L5 17.72zm.84 3 3-3h1.83l-3 3zm3.96 0 3-3h1.62l-3 3zm3.73 0 3-3h1.62l-3 3zM19 19h-1.73L19 17.27z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
