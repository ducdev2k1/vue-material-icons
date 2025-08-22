import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FourKTwoToneIcon',
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
              d: 'M19 5H5v14h14zm-7 8.51h-1V15H9.5v-1.5h-3V9H8v3h1.5V9H11v3h1zM18.2 15h-1.7l-2-3v3H13V9h1.5v3l2-3h1.7l-2 3z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2M5 5h14v14H5zm6 4H9.5v3H8V9H6.5v4.5h3V15H11v-1.49h1V12h-1zm5.5 0-2 3 2 3h1.7l-2-3 2-3zM13 9v6h1.5V9z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
