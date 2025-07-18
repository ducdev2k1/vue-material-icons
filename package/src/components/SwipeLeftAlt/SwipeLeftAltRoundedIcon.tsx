import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwipeLeftAltRoundedIcon',
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
              d: 'M10.1 13c.46 2.28 2.48 4 4.9 4 2.76 0 5-2.24 5-5s-2.24-5-5-5c-2.42 0-4.44 1.72-4.9 4H5.83l.88-.88c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L2.71 11.3c-.39.39-.39 1.02 0 1.41L5.3 15.3c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L5.83 13z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
