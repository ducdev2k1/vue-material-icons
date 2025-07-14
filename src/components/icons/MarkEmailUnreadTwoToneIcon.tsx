import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MarkEmailUnreadTwoToneIcon',
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
              d: 'M4 6h10.1c.22 1.07.79 2 1.57 2.71L12 11zm0 2v10h16V9.9c-.32.07-.66.1-1 .1-.6 0-1.16-.12-1.7-.32L12 13z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
