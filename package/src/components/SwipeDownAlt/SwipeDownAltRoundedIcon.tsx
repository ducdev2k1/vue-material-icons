import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwipeDownAltRoundedIcon',
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
              d: 'M13 13.9c2.28-.46 4-2.48 4-4.9 0-2.76-2.24-5-5-5S7 6.24 7 9c0 2.42 1.72 4.44 4 4.9v4.27l-.88-.88a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-.89.88z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
