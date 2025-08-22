import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FastRewindTwoToneIcon',
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
              d: 'M9 14.14V9.86L5.97 12zm9 0V9.86L14.97 12z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm11 6-8.5 6 8.5 6zm-2 8.14L5.97 12 9 9.86zM20 6l-8.5 6 8.5 6zm-2 8.14L14.97 12 18 9.86z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
