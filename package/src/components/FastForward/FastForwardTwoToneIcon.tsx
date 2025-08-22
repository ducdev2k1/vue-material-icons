import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FastForwardTwoToneIcon',
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
              d: 'M15 9.86v4.28L18.03 12zm-9 0v4.28L9.03 12z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm4 18 8.5-6L4 6zm2-8.14L9.03 12 6 14.14zM21.5 12 13 6v12zM15 9.86 18.03 12 15 14.14z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
